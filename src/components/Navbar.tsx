import React, { useState } from 'react';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    cartItemsCount: number;
    onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);

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
        <nav className="fixed w-full top-0 z-50 bg-[#1f1f1f] shadow-lg border-b border-[#3b0a02]">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Left Side */}
                <div className="flex items-center space-x-6">
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#fcd34d] rounded"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6 text-[#fcd34d]" /> : <Menu className="h-6 w-6 text-[#fcd34d]" />}
                    </button>

                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight text-[#fcd34d] hover:text-white flex items-center gap-2"
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

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-10 font-semibold text-md text-[#f1e8e6]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors hover:text-[#fcd34d] ${
                                isActive(link.path)
                                    ? 'text-[#fcd34d] border-b-2 border-[#fcd34d] pb-1'
                                    : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-5">
                    <Link
                        to="/profile"
                        className="p-2 hover:bg-[#fcd34d] hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                        aria-label="User Profile"
                    >
                        <User className="h-6 w-6 text-[#f1e8e6]" />
                    </Link>
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-[#fcd34d] hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#fcd34d]"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-[#f1e8e6]" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#b91c1c] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#2b2b2b] shadow-md rounded-b-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-3 px-6 font-semibold text-[#f1e8e6] hover:bg-[#fcd34d] hover:text-black transition-colors ${
                                isActive(link.path) ? 'bg-[#fcd34d] text-black' : ''
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
