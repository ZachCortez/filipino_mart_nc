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
            className="max-w-7xl mx-auto px-6 py-12 bg-gray-900 rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center tracking-wide text-gray-100">
                All Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};
