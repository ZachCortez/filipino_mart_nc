import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { About } from './pages/About';
import type {CartItem, Product} from './types';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) {
            handleRemoveItem(id);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-gray-700">
                <Navbar
                    cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    onCartClick={() => setIsCartOpen(true)}
                />

                {/* Main content should grow to fill space */}
                <main className="flex-grow pt-16">
                    <Routes>
                        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>

                <Footer />

                <Cart
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    items={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                />
            </div>
        </Router>

    );
}

export default App;