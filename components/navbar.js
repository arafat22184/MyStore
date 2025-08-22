"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className=" p-4 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left links */}
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>

        {/* Right links */}
        <div className="flex gap-4 items-center">
          {status === "loading" ? (
            <span>Loading...</span>
          ) : session ? (
            <>
              {/* Dashboard link */}
              <Link
                href="/dashboard"
                className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition"
              >
                Dashboard
              </Link>

              {/* User name */}
              <span className="hidden sm:inline">
                {session.user?.name || session.user?.email}
              </span>

              {/* Logout button */}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
