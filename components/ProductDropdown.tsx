"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

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

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-6">Shop by Category</h3>

            {/* Categories with collapsible products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((section) => {
                const isExpanded = expandedCategories.includes(section.category);
                return (
                  <div
                    key={section.category}
                    className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 hover:border-emerald-400/30 transition"
                  >
                    {/* Category Header - Clickable */}
                    <button
                      onClick={() => toggleCategory(section.category)}
                      className="w-full flex items-center justify-between px-4 py-3 font-bold text-emerald-400 text-base uppercase tracking-wide hover:bg-slate-700/50 transition"
                    >
                      <span>{section.category}</span>
                      <span
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Product Links - Hidden by default, shown when expanded */}
                    {isExpanded && (
                      <div className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-3">
                        <ul className="space-y-2.5">
                          {section.products.map((product) => (
                            <li key={product}>
                              <Link
                                href={`/products?search=${encodeURIComponent(
                                  product
                                )}`}
                                className="text-sm text-slate-300 transition hover:text-emerald-300 hover:translate-x-1 inline-block"
                              >
                                {product}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition"
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
