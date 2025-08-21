"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Footer = () => {
  const session = useSession();
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/products" className="hover:text-white">
          Products
        </Link>
        {session ? (
          <Link href={"/addProduct"}>Add Product</Link>
        ) : (
          <Link href="/login" className="hover:text-white">
            Login
          </Link>
        )}
      </div>
    </footer>
  );
};
export default Footer;
