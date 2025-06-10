import React from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type {CartItem} from '../types';
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
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg flex flex-col">
                {/* Header */}
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-red-600">
                        <ShoppingCart className="h-6 w-6" />
                        Your Cart
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                        aria-label="Close cart"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="p-4 flex-1 overflow-y-auto">
                    {items.length === 0 ? (
                        <p className="text-center text-gray-500 mt-12">Your cart is empty</p>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-red-600 font-semibold mt-1">
                                            ₱ {item.price.toFixed(2)}
                                        </p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                                                className="p-1 hover:bg-gray-100 rounded border border-gray-300"
                                                aria-label={`Decrease quantity of ${item.name}`}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="font-medium text-gray-800">{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 rounded border border-gray-300"
                                                aria-label={`Increase quantity of ${item.name}`}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="p-2 hover:bg-gray-100 rounded"
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        <X className="h-5 w-5 text-gray-600 hover:text-red-600" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Total & Checkout */}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-lg">Total:</span>
                        <span className="text-2xl font-bold text-red-600">₱ {total.toFixed(2)}</span>
                    </div>
                    <Link
                        to="/checkout"
                        onClick={onClose}
                        className={`w-full py-3 rounded-lg font-bold text-white text-center 
                            ${items.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}
                        `}
                        tabIndex={items.length === 0 ? -1 : 0}
                        aria-disabled={items.length === 0}
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};
