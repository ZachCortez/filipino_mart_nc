import React from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import AOS from "aos";
import "aos/dist/aos.css";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemoveItem: (id: number) => void;
}

export const Cart: React.FC<CartProps> = ({
                                              isOpen,
                                              onClose,
                                              items,
                                              onUpdateQuantity,
                                              onRemoveItem,
                                          }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    React.useEffect(() => {
        AOS.init();
    }, []);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" data-aos="zoom-out-left">
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
                <div className="p-4 flex justify-between items-center border-b" >
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ShoppingCart className="h-6 w-6" />
                        Your Cart
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-4 flex-1 overflow-y-auto">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-green-600">₹ {item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="p-2 hover:bg-gray-100 rounded"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border-t p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-bold">₹ {total.toFixed(2)}</span>
                    </div>
                    <Link
                        to="/checkout"
                        onClick={onClose}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors inline-block text-center disabled:bg-gray-400"
                        style={{ pointerEvents: items.length === 0 ? 'none' : 'auto' }}
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};