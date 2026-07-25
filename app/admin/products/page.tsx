"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adminApi, Product } from "@/lib/admin-api";
import ProductTable from "@/components/admin/ProductTable";

export default function ProductsPage() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      const data = await adminApi.getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="text-gray-500">
            Manage all products
          </p>

        </div>

        <Link
          href="/admin/products/add"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          + Add Product
        </Link>

      </div>

      {loading ? (

        <div className="text-center py-20">

          Loading Products...

        </div>

      ) : (

        <ProductTable
          products={products}
        />

      )}

    </div>
  );
}