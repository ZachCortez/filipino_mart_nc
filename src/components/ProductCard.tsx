import React from "react";
import type { Product } from "../types";

interface Props {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-[1.02]">
            <img
                src={product.image}
                alt={product.name || "Product image"}
                loading="lazy"
                className="w-full h-48 object-cover border-b"
            />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm font-medium text-gray-500">{product.category}</p>
                <p className="text-gray-700 mt-3 text-sm line-clamp-3">{product.description}</p>
                <div className="mt-5 flex justify-between items-center">
                    <span className="font-bold text-red-600 text-lg">
                        ${Number(product.price).toFixed(2)}
                    </span>
                    <button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-shadow shadow hover:shadow-lg"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
