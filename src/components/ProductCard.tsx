import type {Product} from "../data/products";
import React from "react";

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-red-600">{product.category}</p>
                <p className="text-sm text-gray-700 mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
