import React from 'react';
import { Users, Leaf, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About: React.FC = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-[#fef6ed] text-[#2c1c13]">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold text-[#d92e34] mb-4">About Filipino Mart</h1>
                <p className="text-lg text-gray-700">
                    Your local gateway to the heart and flavors of the Philippines — right here in Charlotte, NC.
                </p>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="text-center bg-[#fff8f0] border border-[#f9dcc4] p-6 rounded-xl shadow-md">
                    <Users className="h-12 w-12 text-[#d92e34] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#d92e34] mb-2">Our Team</h2>
                    <p className="text-gray-600">
                        We're passionate professionals providing the best shopping experience. Supporting our culture, community, and the planet is our mission.
                    </p>
                </div>
                <div className="text-center bg-[#fff8f0] border border-[#f9dcc4] p-6 rounded-xl shadow-md">
                    <Leaf className="h-12 w-12 text-[#d92e34] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#d92e34] mb-2">Sustainability</h2>
                    <p className="text-gray-600">
                        From reusable shopping bags to ethical sourcing, we're reducing waste while celebrating culture through conscious commerce.
                    </p>
                </div>
                <div className="text-center bg-[#fff8f0] border border-[#f9dcc4] p-6 rounded-xl shadow-md">
                    <Heart className="h-12 w-12 text-[#d92e34] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#d92e34] mb-2">Community</h2>
                    <p className="text-gray-600">
                        We uplift communities with fresh, healthy food and cultural pride. Whether you’re Filipino or a friend of the culture, we welcome you with open arms.
                    </p>
                </div>
            </div>

            <div className="bg-[#fff1e6] border border-[#fcd9c1] rounded-2xl p-10 shadow-xl">
                <h2 className="text-2xl font-bold text-center text-[#d92e34] mb-8">Our Story</h2>
                <div className="text-gray-700 max-w-3xl text-center mx-auto space-y-6 leading-relaxed">
                    <p>
                        Filipino Mart began with a heartfelt mission: to bring a taste of home to Filipino families in Charlotte.
                    </p>
                    <p>
                        As immigrants, we remember longing for the comfort of pandesal mornings and sharing lumpia with friends. We created Filipino Mart to feel more than just a store — it's a hug from home.
                    </p>
                    <p>
                        From authentic brands like Mama Sita's to beloved snacks like Chippy and Pochi, we curate every product to spark joy and nostalgia.
                    </p>
                    <p>
                        Whether preparing for a fiesta or a simple merienda, we’re here to serve with warmth and hospitality.
                    </p>
                    <p>
                        Thank you for supporting small, local, and Filipino-owned. Tara na — let’s shop and celebrate our heritage together!
                    </p>

                    <div className="mt-8 font-semibold text-[#d92e34]">
                        📍 Visit Us: <br />
                        11855 N Tryon Street, Suite A <br />
                        Charlotte, NC 28262 <br /><br />
                        📞 (980) 238-6460
                    </div>
                </div>
            </div>
        </div>
    );
};
