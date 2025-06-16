import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-yellow-600">About Us</h3>
                    <p className="text-sm text-justify text-gray-700 leading-relaxed">
                        Filipino Mart is your trusted neighborhood store bringing the best of Filipino flavors and essentials right to your doorstep. Proudly serving the Filipino community and beyond with warmth and quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-yellow-600">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-sm hover:text-yellow-600 transition">Home</Link></li>
                        <li><Link to="/products" className="text-sm hover:text-yellow-600 transition">Products</Link></li>
                        <li><Link to="/categories" className="text-sm hover:text-yellow-600 transition">Categories</Link></li>
                        <li><Link to="/about" className="text-sm hover:text-yellow-600 transition">About</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-yellow-600">Customer Service</h3>
                    <ul className="space-y-2">
                        <li><Link to="/faq" className="text-sm hover:text-yellow-600 transition">FAQ</Link></li>
                        <li><Link to="/contact" className="text-sm hover:text-yellow-600 transition">Contact Us</Link></li>
                        <li><Link to="/shipping" className="text-sm hover:text-yellow-600 transition">Shipping Info</Link></li>
                        <li><Link to="/returns" className="text-sm hover:text-yellow-600 transition">Returns Policy</Link></li>
                    </ul>
                </div>

                {/* Social / Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-yellow-600">Connect With Us</h3>
                    <div className="flex space-x-4 text-gray-700">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
                            <Twitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                            <Instagram size={24} />
                        </a>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm mb-1">Subscribe to our newsletter:</p>
                        <form className="mt-2 flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 text-gray-900 border border-gray-300 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} Filipino Mart. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
