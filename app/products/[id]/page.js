/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  console.log(product);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center text-blue-500 hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          {/* Category Badge */}
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
            {product.category}
          </span>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-gray-600">(4.9/5)</span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

          {/* Short Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Key Features */}
          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
          <ul className="list-none text-gray-700 space-y-2 mb-6">
            {product?.features?.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>

          {/* Price */}
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ${product.price}
          </div>
          <p className="text-gray-500 mb-6">
            Free shipping on orders over $100
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="w-full border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="flex justify-around items-center mt-8 text-gray-700">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-blue-600 text-2xl mb-2" />
              <p className="text-sm">2 Year Warranty</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTruck className="text-green-600 text-2xl mb-2" />
              <p className="text-sm">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHeadphones className="text-purple-600 text-2xl mb-2" />
              <p className="text-sm">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
