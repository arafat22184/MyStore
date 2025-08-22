"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <Link
          href="/dashboard/add-product"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition mb-2"
        >
          <PlusCircle className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600 font-medium">Add Product</span>
        </Link>

        {/* You can add more sidebar items here */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Welcome, {session?.user?.name || session?.user?.email}
          </h1>
          <p className="text-gray-700 text-lg">This is your dashboard.</p>
        </div>
      </main>
    </div>
  );
}
