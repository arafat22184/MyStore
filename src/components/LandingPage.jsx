"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to MyStore
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover amazing products at unbeatable prices. Your one-stop shop for
          everything you need.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Only the best items curated with care, ensuring top quality for
              every purchase.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Get the most value for your money with competitive pricing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy quick and reliable shipping straight to your doorstep.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
