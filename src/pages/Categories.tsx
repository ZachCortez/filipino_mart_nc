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
        <div className="max-w-7xl mx-auto px-4 py-8" data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => {
                    const product = products.find(p => p.category === category);
                    return (
                        <Link to={product?.link || '#'} key={category} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                            <div>
                                <img
                                    src={product?.image}
                                    alt={category}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h2 className="text-white text-2xl font-bold">{category}</h2>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};