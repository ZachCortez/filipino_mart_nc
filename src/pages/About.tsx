import React from 'react';
import { Users, Leaf, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About: React.FC = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 bg-[#1f1f1f] text-[#f1e8e6]">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-3xl font-extrabold text-[#fcd34d] mb-4">About Filipino Mart</h1>
                <p className="text-lg text-gray-300">
                    Welcome to Filipino Mart, your local gateway to the heart and flavors of the Philippines — right here in Charlotte, NC.
                </p>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="text-center bg-[#2b2b2b] p-6 rounded-lg shadow-md">
                    <Users className="h-12 w-12 text-[#fcd34d] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#fcd34d] mb-2">Our Team</h2>
                    <p className="text-gray-400">
                        Dedicated professionals working to provide you with the best shopping experience. We believe in supporting not just our culture — but our community and the planet, too.
                    </p>
                </div>
                <div className="text-center bg-[#2b2b2b] p-6 rounded-lg shadow-md">
                    <Leaf className="h-12 w-12 text-[#fcd34d] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#fcd34d] mb-2">Sustainability</h2>
                    <p className="text-gray-400">
                        From reusable shopping bags with Filipino designs to sourcing select goods from local and
                        ethical suppliers, Filipino Mart is committed to reducing waste and giving back.
                    </p>
                </div>
                <div className="text-center bg-[#2b2b2b] p-6 rounded-lg shadow-md">
                    <Heart className="h-12 w-12 text-[#fcd34d] mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#fcd34d] mb-2">Community</h2>
                    <p className="text-gray-400">
                        Building stronger communities through fresh, healthy food, blending local pride, authenticity,
                        and cultural heritage. We’re proud to serve not just our kababayan, but anyone who wants to
                        discover the rich flavors and vibrant spirit of the Philippines.
                    </p>
                </div>
            </div>

            <div className="bg-[#3b0a02] rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-center text-[#fcd34d] mb-6">Our Story</h2>
                <div className="text-gray-200 max-w-3xl text-center mx-auto space-y-5 leading-relaxed">
                    <p>
                        Filipino Mart started with a simple mission:
                        To bring a taste of home to every Filipino family in Charlotte.
                    </p>
                    <p>
                        As immigrants ourselves, we know what it’s like to miss the flavors and comforts of the Philippines —
                        the smell of pandesal in the morning, the joy of sharing lumpia with friends, or the feeling of walking
                        into a neighborhood store where everyone knows your name.
                    </p>
                    <p>
                        That’s why we built Filipino Mart to feel more than just a grocery store — it’s a piece of home.
                    </p>
                    <p>
                        We work hard to source authentic Filipino brands, from Mang Tomas, Mama Sita's, and Boy Bawang,
                        to beloved snacks like Pillows, Chippy, and Pochi. Whether you’re prepping for a family fiesta,
                        a casual merienda, or simply restocking your pantry, we’re here to serve with heart and hospitality.
                    </p>
                    <p>
                        Thank you for supporting small, local, and Filipino-owned businesses. Tara na! Let's shop and
                        celebrate our culture together.
                    </p>
                    <div className="mt-6 font-semibold text-[#fcd34d]">
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
