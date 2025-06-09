import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const HomePage = () => {
    return (
        <main className="min-h-screen bg-[#fefcfb] px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-red-700 mb-10">Filipino Mart</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </main>
    );
};

export default HomePage;
