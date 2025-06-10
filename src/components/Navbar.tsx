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
        <nav className="bg-green-800 text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button onClick={toggleMobileMenu} className="md:hidden">
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <Link to="/" className="text-2xl font-bold">Fresh Mart</Link>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-green-200 ${isActive(link.path) ? 'text-green-200' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <Link
                        to="/profile"
                        className="p-2 hover:bg-green-700 rounded-full transition-colors"
                    >
                        <User className="h-6 w-6" />
                    </Link>
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-green-700 rounded-full transition-colors"
                    >
                        <ShoppingCart className="h-6 w-6" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-2 px-4 hover:bg-green-700 ${isActive(link.path) ? 'bg-green-700' : ''}`}
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
