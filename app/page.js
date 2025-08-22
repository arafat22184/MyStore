/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEye, FaShoppingCart } from "react-icons/fa";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 8)));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-96 flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to My Store
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Browse and manage products with ease
        </p>
        <Link
          href="/products"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transform transition"
        >
          Explore Products
        </Link>
        {/* Optional decorative circle */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
      </section>

      {/* Highlighted Products */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all overflow-hidden group"
              >
                {/* Image */}
                <div className="relative w-full h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {product.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow font-semibold">
                    ${product.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                    >
                      <FaEye size={14} /> View
                    </Link>
                    <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
                      <FaShoppingCart size={14} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link
            href={"/products"}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-lg shadow transition"
          >
            Explore All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
