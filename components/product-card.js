"use client";
import Link from "next/link";
import Image from "next/image";
import { Eye, Check } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <ul className="mb-3 space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-gray-600 text-sm"
              >
                <Check className="h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-gray-400 text-sm">
                +{product.features.length - 3} more
              </li>
            )}
          </ul>
        )}

        {/* Price & Button */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <Link
            href={`/products/${product._id}`}
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span className="text-sm">View</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
