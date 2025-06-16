import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from "../types";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProductsProps {
    onAddToCart: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
    React.useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div
            className="relative bg-gradient-to-br from-yellow-50 via-red-50 to-yellow-100 py-16 px-6 min-h-screen"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {/* Optional decorative background */}
            <div className="absolute inset-0 bg-[url('/assets/pattern-banana-leaf.png')] opacity-10 bg-cover bg-center pointer-events-none" />

            <div className="relative max-w-7xl mx-auto z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-700 tracking-tight mb-12 drop-shadow-md">
                    Explore Our Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                        >
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
