"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X, User, ShoppingBasket } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white flex gap-2 items-center justify-center"
            >
              <ShoppingBasket className="h-8 w-8 text-blue-400" />
              My Store
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:gap-6 items-center">
            <Link
              href="/"
              className="hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-blue-400 transition font-medium"
            >
              Products
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4 relative">
            {status === "loading" ? (
              <span>Loading...</span>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-700 transition"
                >
                  {session.user?.image ? (
                    <Image
                      width={32}
                      height={32}
                      src={session.user.image}
                      alt="user"
                      className="rounded-full border-2 border-blue-500 object-cover"
                    />
                  ) : (
                    <User size={24} />
                  )}
                  <span className="hidden sm:inline font-medium">
                    {session.user?.name || session.user?.email}
                  </span>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
                    isDropdownOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 transition font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition font-medium"
              >
                Login
              </Link>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded hover:bg-gray-700 transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-700 transition-transform duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <Link
          href="/"
          className="block px-4 py-2 hover:bg-gray-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="block px-4 py-2 hover:bg-gray-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Products
        </Link>

        {session && (
          <>
            <Link
              href="/dashboard"
              className="block px-4 py-2 hover:bg-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left px-4 py-2 hover:bg-gray-600 transition"
            >
              Logout
            </button>
          </>
        )}

        {!session && (
          <Link
            href="/login"
            className="block px-4 py-2 hover:bg-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
