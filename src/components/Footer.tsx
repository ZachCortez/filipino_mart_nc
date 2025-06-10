import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-green-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm text-justify">
                        Filipino Mart is your trusted neighborhood store bringing the best of Filipino flavors and essentials right to your doorstep. Proudly serving the Filipino community and beyond with warmth and quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
                        <li><Link to="/products" className="text-sm hover:underline">Products</Link></li>
                        <li><Link to="/categories" className="text-sm hover:underline">Categories</Link></li>
                        <li><Link to="/about" className="text-sm hover:underline">About</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
                        <li><Link to="/contact" className="text-sm hover:underline">Contact Us</Link></li>
                        <li><Link to="/shipping" className="text-sm hover:underline">Shipping Info</Link></li>
                        <li><Link to="/returns" className="text-sm hover:underline">Returns Policy</Link></li>
                    </ul>
                </div>

                {/* Social / Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                            <Twitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                            <Instagram size={24} />
                        </a>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm">Subscribe to our newsletter:</p>
                        <form className="mt-2 flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-green-900 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    © {new Date().getFullYear()} Filipino Mart. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
