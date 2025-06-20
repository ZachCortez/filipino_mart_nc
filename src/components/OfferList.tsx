import React from 'react';
import { Offer } from './Offer';

const offers = [
    {
        id: 1,
        title: 'Fresh Organic Vegetables',
        description: 'Get a basket of fresh, organic vegetables at a discounted price.',
        discount: '20%',
        expiryDate: '2025-06-30',
        imageUrl:
            'https://www.wholefoodshouse.com.au/wp-content/uploads/2021/09/organic-Veg-box-1024x683.jpg',
        productLink: '/products/organic-vegetables',
    },
    {
        id: 2,
        title: 'Premium Coffee Beans',
        description: 'Enjoy our premium coffee beans with a special discount.',
        discount: '15%',
        expiryDate: '2025-07-15',
        imageUrl:
            'https://media.istockphoto.com/id/1467739359/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=tE80r7iDn7S9YwIJVuKAm5KmpJPVz5HbRDc975IlKVo=',
        productLink: '/products/premium-coffee',
    },
    {
        id: 3,
        title: 'Healthy Snack Pack',
        description: 'Try our curated healthy snack pack at a promotional price.',
        discount: '25%',
        expiryDate: '2025-07-31',
        imageUrl:
            'https://images.squarespace-cdn.com/content/v1/582175db197aea631e3e4812/1567632538547-NH211DGAH2KDUH1O586X/IMG_1188.jpg',
        productLink: '/products/healthy-snacks',
    },
];

export const OfferList: React.FC = () => {
    return (
        <section
            className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-white rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <h2
                id="special-offers"
                className="text-4xl font-extrabold text-red-600 mb-10 tracking-wide text-center"
            >
                Special Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {offers.map((offer) => (
                    <Offer key={offer.id} {...offer} />
                ))}
            </div>
        </section>
    );
};
