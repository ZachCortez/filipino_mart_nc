import React from 'react';
import { Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OfferProps {
    title: string;
    description: string;
    discount: string;
    expiryDate: string;
    imageUrl: string;
    productLink: string;
}

export const Offer: React.FC<OfferProps> = ({
                                                title,
                                                description,
                                                discount,
                                                expiryDate,
                                                imageUrl,
                                                productLink,
                                            }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 border border-gray-200">
            {/* Image Section with Discount Badge */}
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white font-semibold px-3 py-1 rounded-md flex items-center space-x-1 shadow-md">
                    <Tag className="w-5 h-5" />
                    <span>{discount} OFF</span>
                </div>
            </div>

            {/* Text & Link Section */}
            <div className="p-5 bg-gray-50">
                <h3 className="text-xl font-bold text-red-600 mb-2 tracking-wide">
                    {title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    {/* Expiry Date */}
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span>Expires: {expiryDate}</span>
                    </div>

                    {/* Shop Now Button */}
                    <Link
                        to={productLink}
                        className="bg-yellow-400 text-red-900 font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-300 transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};
