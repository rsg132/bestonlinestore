"use client";

import ProductForm from "@/components/admin/ProductForm";

export default function AddProductPage() {
  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Add New Product
      </h1>

      <ProductForm />

    </div>
  );
}