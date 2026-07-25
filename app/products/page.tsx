"use client";

import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Products
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
            Manage your products
          </p>
        </div>

        <Link
          href="/admin/products/add"
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-center text-sm sm:text-base"
        >
          + Add Product
        </Link>

      </div>

      <div className="bg-white rounded-xl shadow p-4 sm:p-5">

        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6 text-sm sm:text-base"
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold">Image</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold">Name</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold hidden sm:table-cell">Category</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold hidden md:table-cell">Vendor</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold">Price</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold hidden lg:table-cell">Stock</th>

                <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold hidden lg:table-cell">Status</th>

                <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold">Action</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td
                  colSpan={8}
                  className="text-center py-16 sm:py-20 text-sm sm:text-base text-gray-400"
                >
                  No products found
                </td>

              </tr>

            </tbody>

          </table>
        </div>
      </div>

      </div>
    </div>
  );
}