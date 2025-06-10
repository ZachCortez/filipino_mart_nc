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
                                                productLink
                                            }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md">
                    <Tag className="w-4 h-4 inline-block mr-1" />
                    {discount} OFF
                </div>
            </div>
            <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        Expires: {expiryDate}
                    </div>
                    <Link
                        to={productLink}
                        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};
