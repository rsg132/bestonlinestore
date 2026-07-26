"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Electronics");

  const productCategories = [
    {
      category: "Electronics",
      products: ["Headphones", "Speakers", "Smart Watch", "Chargers", "Cables"],
    },
    {
      category: "Fashion",
      products: ["T-Shirts", "Jeans", "Shoes", "Hoodies", "Accessories"],
    },
    {
      category: "Home & Living",
      products: ["Pillows", "Blankets", "Lamps", "Rugs", "Wall Decor"],
    },
    {
      category: "Beauty",
      products: ["Face Cream", "Shampoo", "Lipstick", "Makeup Brush", "Serum"],
    },
    {
      category: "Sports",
      products: ["Yoga Mat", "Dumbbells", "Running Shoes", "Water Bottle", "Gym Bag"],
    },
    {
      category: "Books",
      products: ["Self Help", "Fiction", "Science", "History", "Comics"],
    },
  ];

  const selectedCategoryData = productCategories.find(
    (cat) => cat.category === selectedCategory
  );

  return (
    <div className="relative">
      {/* Shop Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:text-emerald-300 hidden lg:inline-flex"
      >
        SHOP
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-0 w-screen bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-2xl z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="mx-auto max-w-7xl pr-3 sm:pr-4 pl-0 py-3">
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3">Shop by Category</h3>

            {/* Two Column Layout: Categories on Left, Products on Right */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Column - Categories List */}
              <div className="space-y-1 border-r border-slate-700/50 pr-3">
                {productCategories.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(category.category)}
                    className={`w-full text-left px-3 py-1.5 rounded text-sm transition font-medium ${
                      selectedCategory === category.category
                        ? "bg-emerald-600 text-white"
                        : "text-slate-300 hover:text-emerald-300 hover:bg-slate-700/50"
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Right Column - Products for Selected Category */}
              <div className="md:col-span-2">
                {selectedCategoryData && (
                  <div>
                    <h4 className="text-emerald-400 font-bold text-xs uppercase mb-2">
                      {selectedCategoryData.category}
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedCategoryData.products.map((product) => (
                        <li key={product}>
                          <Link
                            href={`/products?search=${encodeURIComponent(
                              product
                            )}`}
                            className="text-xs text-slate-300 transition hover:text-emerald-300 hover:translate-x-1 inline-block"
                          >
                            {product}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded transition"
              >
                View All Products
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
