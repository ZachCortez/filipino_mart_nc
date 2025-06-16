import React, { useState } from 'react';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    cartItemsCount: number;
    onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/categories', label: 'Categories' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-yellow-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-yellow-600" />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight text-[#c42021] hover:text-yellow-600 flex items-center gap-2"
                        aria-label="Filipino Mart Home"
                    >
                        <img
                            src="/assets/philippines-flag.png"
                            alt="Philippines Flag"
                            className="w-7 h-5 object-cover rounded-sm"
                        />
                        Filipino Mart
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-800">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`transition-colors hover:text-yellow-600 ${
                                isActive(path)
                                    ? 'text-yellow-600 border-b-2 border-yellow-500 pb-1'
                                    : ''
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Profile */}
                    <Link
                        to="/profile"
                        className="p-2 hover:bg-yellow-100 hover:text-yellow-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        aria-label="User Profile"
                    >
                        <User className="h-6 w-6 text-gray-700" />
                    </Link>

                    {/* Cart */}
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-yellow-100 hover:text-yellow-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-gray-700" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 px-6 font-medium text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 transition-colors ${
                                isActive(path) ? 'bg-yellow-100 text-yellow-700' : ''
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
