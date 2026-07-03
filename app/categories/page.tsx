"use client";

import { useState } from "react";

const categories = [
  { name: "Electronics", description: "Shop phones, headphones, and smart devices." },
  { name: "Fashion", description: "Discover trending clothing, shoes, and accessories." },
  { name: "Home & Living", description: "Find home decor, kitchen gear, and furniture." },
  { name: "Beauty", description: "Browse skincare, makeup, and personal care essentials." },
  { name: "Sports", description: "Choose activewear, fitness gear, and outdoor equipment." },
  { name: "Books", description: "Enjoy bestselling books, journals, and gift reads." },
];

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">Browse by category</p>
          <h1 className="mt-4 text-4xl font-bold">Categories</h1>
          <p className="mt-3 text-slate-600">
            Choose a category to explore popular products and curated collections.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-3xl border p-8 text-left transition hover:border-green-700 hover:bg-white ${
                activeCategory === category.name ? "border-green-700 bg-white shadow-lg" : "border-slate-200 bg-slate-100"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Category</p>
              <h2 className="mt-3 text-2xl font-semibold">{category.name}</h2>
              <p className="mt-4 text-slate-600">{category.description}</p>
            </button>
          ))}
        </div>

        <section className="mt-14 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-semibold">Selected Category</h2>
          <p className="mt-4 text-slate-700">
            You are currently viewing <span className="font-bold text-slate-900">{activeCategory}</span>. Explore the latest products and collections designed for this category.
          </p>
        </section>
      </div>
    </main>
  );
}
