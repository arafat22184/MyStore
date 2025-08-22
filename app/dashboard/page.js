"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { PlusCircle, Box, ShoppingCart, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();

  // Dummy stats for now
  const stats = [
    {
      name: "Products",
      value: 12,
      icon: <Box className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Orders",
      value: 34,
      icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
    },
    {
      name: "Revenue",
      value: "$5,230",
      icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>

        <Link
          href="/dashboard/add-product"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition mb-2"
        >
          <PlusCircle className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600 font-medium">Add Product</span>
        </Link>

        <Link
          href="/products"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition mb-2"
        >
          <Box className="h-5 w-5 text-gray-600" />
          <span className="text-gray-700 font-medium">View Products</span>
        </Link>

        <Link
          href="/dashboard/orders"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition mb-2"
        >
          <ShoppingCart className="h-5 w-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Orders</span>
        </Link>

        <Link
          href="/dashboard/revenue"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition mb-2"
        >
          <DollarSign className="h-5 w-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Revenue</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome, {session?.user?.name || session?.user?.email}
          </h1>
          <p className="text-gray-600 text-lg">
            Here’s a quick overview of your store.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="p-3 bg-gray-100 rounded-full mr-4">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500">{stat.name}</p>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard/add-product"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-medium transition"
            >
              Add New Product
            </Link>
            <Link
              href="/products"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg text-center font-medium transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
