import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export const Categories: React.FC = () => {
    const categories = Array.from(new Set(products.map(product => product.category)));
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10" data-aos="fade-down" data-aos-duration="1000" style={{backgroundColor: '#ffffff'}}>
            <h1 className="text-4xl font-extrabold text-red-700 mb-10 text-center tracking-wide">
                Product Categories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map(category => {
                    const product = products.find(p => p.category === category);
                    return (
                        <Link
                            to={product?.link || '#'}
                            key={category}
                            className="relative h-72 rounded-lg overflow-hidden shadow-lg border-4 border-yellow-500 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            aria-label={`View products in ${category}`}
                        >
                            <img
                                src={product?.image}
                                alt={category}
                                className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                                <h2 className="text-yellow-400 text-3xl font-bold drop-shadow-lg">
                                    {category}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
