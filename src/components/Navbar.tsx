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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/categories', label: 'Categories' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-6">
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6 text-blue-700" /> : <Menu className="h-6 w-6 text-blue-700" />}
                    </button>
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight text-red-700 hover:text-red-800"
                        aria-label="Filipino Mart Home"
                    >
                        Filipino Mart
                    </Link>
                </div>

                <div className="hidden md:flex space-x-10 font-semibold text-lg text-blue-900">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-yellow-500 transition-colors ${
                                isActive(link.path) ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        to="/profile"
                        className="p-2 hover:bg-yellow-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="User Profile"
                    >
                        <User className="h-6 w-6 text-blue-900" />
                    </Link>
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-yellow-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-blue-900" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-50 shadow-lg rounded-b-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-3 px-6 font-semibold text-blue-900 hover:bg-yellow-400 hover:text-white transition-colors ${
                                isActive(link.path) ? 'bg-yellow-400 text-white' : ''
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
