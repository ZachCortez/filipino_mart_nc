import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Categories: React.FC = () => {
    const categories = Array.from(new Set(products.map(product => product.category)));

    React.useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section
            className="max-w-7xl mx-auto px-6 py-16 rounded-xl shadow-inner"
            data-aos="fade-down"
            data-aos-duration="1000"
            style={{
                background: 'linear-gradient(to bottom right, #fef9f4, #fdf6ee)',
            }}
        >
            <h1 className="text-4xl font-extrabold text-[#c42021] mb-12 text-center tracking-wide">
                Product Categories
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {categories.map(category => {
                    const product = products.find(p => p.category === category);
                    return (
                        <Link
                            to={product?.link || '#'}
                            key={category}
                            className="relative h-72 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-yellow-300"
                            aria-label={`View products in ${category}`}
                        >
                            <img
                                src={product?.image}
                                alt={category}
                                className="w-full h-full object-cover group-hover:brightness-105 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-white text-2xl sm:text-3xl font-semibold bg-yellow-400 text-[#c42021] px-4 py-1 rounded shadow">
                                    {category}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
