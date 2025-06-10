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
        <nav className="fixed w-full top-0 z-50 bg-gray-900 shadow-lg border-b border-red-900">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-yellow-400" />
                        ) : (
                            <Menu className="h-6 w-6 text-yellow-400" />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight text-yellow-400 hover:text-white flex items-center gap-2"
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
                <div className="hidden md:flex space-x-10 font-semibold text-md text-gray-200">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`transition-colors hover:text-yellow-400 ${
                                isActive(path)
                                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
                                    : ''
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-5">
                    {/* Profile Icon */}
                    <Link
                        to="/profile"
                        className="p-2 hover:bg-yellow-400 hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="User Profile"
                    >
                        <User className="h-6 w-6 text-gray-200" />
                    </Link>

                    {/* Shopping Cart */}
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-yellow-400 hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-gray-200" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 shadow-md rounded-b-md">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 px-6 font-semibold text-gray-100 hover:bg-yellow-400 hover:text-black transition-colors ${
                                isActive(path) ? 'bg-yellow-400 text-black' : ''
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
