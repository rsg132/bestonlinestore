"use client";

import { useEffect, useState } from "react";
import DashboardCard from "@/components/admin/DashboardCard";
import { adminApi } from "@/lib/admin-api";

export default function AdminDashboard() {
  const [products, setProducts] = useState(0);
  const [categories, setCategories] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const productsRes = await adminApi.getProducts();
        setProducts(productsRes.data.length);

        const categoriesRes = await adminApi.getCategories();
        setCategories(categoriesRes.data.length);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard
          title="Products"
          value={products.toString()}
          icon="📦"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Categories"
          value={categories.toString()}
          icon="🗂"
          color="bg-green-600"
        />

        <DashboardCard
          title="Orders"
          value={orders.toString()}
          icon="📋"
          color="bg-orange-600"
        />

        <DashboardCard
          title="Users"
          value="0"
          icon="👥"
          color="bg-purple-600"
        />
      </div>
    </div>
  );
}