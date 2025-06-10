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
        AOS.init();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
