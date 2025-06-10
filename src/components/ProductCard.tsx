import React from "react";
import type { Product } from "../types";

interface Props {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.03]">
            <img
                src={product.image}
                alt={product.name || "Product image"}
                loading="lazy"
                className="w-full h-48 object-cover border-b-4 border-red-600"
            />
            <div className="p-5">
                <h3 className="text-xl font-extrabold text-red-700 mb-1">{product.name}</h3>
                <p className="text-sm font-semibold text-blue-700">{product.category}</p>
                <p className="text-gray-700 mt-3 text-sm line-clamp-3">{product.description}</p>
                <div className="mt-5 flex justify-between items-center">
                    <span className="font-bold text-yellow-600 text-lg">
                        ${Number(product.price).toFixed(2)}
                    </span>
                    <button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="bg-red-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-800 transition-shadow shadow-md hover:shadow-lg"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
