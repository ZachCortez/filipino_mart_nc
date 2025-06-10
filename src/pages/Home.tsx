import React from "react";
import { ShoppingBag, Truck, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Products } from "./Products";
import { OfferList } from "../components/OfferList";
import type { Product } from "../types";
import AOS from "aos";
import "aos/dist/aos.css";

interface HomeProps {
    onAddToCart: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative h-[450px] bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-md">
                <div className="absolute inset-0">
                    <img
                        src="/assets/filipino-mart-logo-lg.png"
                        alt="Filipino groceries"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-extrabold drop-shadow-md mb-4">
                            Welcome to Filipino Mart
                        </h1>
                        <p className="text-lg font-medium mb-6 drop-shadow-sm">
                            Your one-stop shop for Filipino favorites – from snacks and breads to pantry essentials.
                        </p>
                        <Link
                            to="/products"
                            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold shadow hover:bg-red-50 transition"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                className="max-w-7xl mx-auto px-4"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <ShoppingBag className="h-10 w-10 text-red-600 mb-4" />,
                            title: "Authentic Filipino Goods",
                            desc: "Hand-picked favorites from the Philippines"
                        },
                        {
                            icon: <Truck className="h-10 w-10 text-red-600 mb-4" />,
                            title: "Fast Delivery",
                            desc: "Local delivery or pickup options"
                        },
                        {
                            icon: <Clock className="h-10 w-10 text-red-600 mb-4" />,
                            title: "Convenient Shopping",
                            desc: "Shop anytime, anywhere"
                        },
                        {
                            icon: <Shield className="h-10 w-10 text-red-600 mb-4" />,
                            title: "Trusted & Secure",
                            desc: "Safe checkout with quality assurance"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition"
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offers */}
            <section
                className="max-w-7xl mx-auto text-center px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Special Offers & New Arrivals
                </h2>
                <OfferList />
            </section>

            {/* Featured Products */}
            <section
                className="max-w-7xl mx-auto px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
                    Featured Products
                </h2>
                <Products onAddToCart={onAddToCart} />
            </section>
        </div>
    );
};
