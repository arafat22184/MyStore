"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://i.ibb.co.com/6JbRBnzJ/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-lg">MyStore</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>

            {session ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="hover:text-blue-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn("google")} // you can also use credentials
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>

            {session ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    signOut();
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  signIn("google");
                }}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
