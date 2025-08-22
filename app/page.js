/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <section className="h-64 flex flex-col items-center justify-center bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Store</h1>
        <p className="text-lg mb-6">Browse and manage Products easily</p>
        <Link
          href="/products"
          className="px-4 py-2 bg-white text-blue-600 rounded"
        >
          View Products
        </Link>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Highlighted Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                    {product.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">
                      ${product.price}
                    </span>
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      <FaEye size={14} />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link
            href={"/products"}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-lg"
          >
            Explore All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
