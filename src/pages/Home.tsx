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
        AOS.init({ once: true });
    }, []);

    return (
        <main className="space-y-16">
            {/* Hero Section */}
            <section className="relative h-[450px] md:h-[550px] text-gray-800 overflow-hidden bg-gradient-to-br from-white via-[#fdf6ee] to-[#fff9f3]">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
                    style={{ backgroundImage: "url('/assets/filipino-mart-logo-lg.png')" }}
                ></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#c42021] mb-4">
                            Welcome to Filipino Mart
                        </h1>
                        <p className="text-base md:text-lg font-medium mb-6 text-gray-700">
                            Your one-stop shop for Filipino favorites – from snacks and breads to pantry essentials.
                        </p>
                        <Link
                            to="/products"
                            className="inline-block bg-[#c42021] text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-[#a9191a] transition"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                className="max-w-7xl mx-auto px-4 bg-[#fff9f3] rounded-xl py-10 shadow-md"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <ShoppingBag className="h-10 w-10 text-[#c42021] mb-4" />,
                            title: "Authentic Filipino Goods",
                            desc: "Hand-picked favorites from the Philippines"
                        },
                        {
                            icon: <Truck className="h-10 w-10 text-[#c42021] mb-4" />,
                            title: "Fast Delivery",
                            desc: "Local delivery or pickup options"
                        },
                        {
                            icon: <Clock className="h-10 w-10 text-[#c42021] mb-4" />,
                            title: "Convenient Shopping",
                            desc: "Shop anytime, anywhere"
                        },
                        {
                            icon: <Shield className="h-10 w-10 text-[#c42021] mb-4" />,
                            title: "Trusted & Secure",
                            desc: "Safe checkout with quality assurance"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-yellow-300 rounded-xl p-6 text-center shadow hover:shadow-md transition"
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold text-[#c42021]">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offers Section */}
            <section
                className="max-w-7xl mx-auto text-center px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-3xl font-bold text-[#c42021] mb-8">
                    Special Offers & New Arrivals
                </h2>
                <OfferList />
            </section>

            {/* Featured Products Section */}
            <section
                className="max-w-7xl mx-auto px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-3xl text-center font-bold text-[#c42021] mb-8">
                    Featured Products
                </h2>
                <Products onAddToCart={onAddToCart} />
            </section>
        </main>
    );
};
