"use client";

import { useState } from "react";
import Link from "next/link";
import { categoriesData } from "./categories-data";

type CategorySidebarProps = {
  selectedCategory?: string;
  onCategorySelect?: (slug: string) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
};

export default function CategorySidebar({ selectedCategory, onCategorySelect, isMobileOpen, onMobileClose }: CategorySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (slug: string) => {
    onCategorySelect?.(slug);
    onMobileClose?.();
  };

  return (
    <aside className={`fixed lg:static inset-0 z-40 lg:z-0 bg-white overflow-y-auto transition-opacity duration-300 ${
      isMobileOpen ? 'opacity-100 visible' : 'lg:opacity-100 lg:visible opacity-0 invisible'
    } lg:border-r border-gray-200 lg:w-72`}>
      <div className="p-4 lg:p-6">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg font-bold text-gray-900">Categories</h2>
          <button
            onClick={onMobileClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-1">
          {categoriesData.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);

            return (
              <div key={category.id}>
                {/* Main Category */}
                <button
                  onClick={() => {
                    toggleCategory(category.id);
                    handleCategoryClick(category.slug);
                  }}
                  className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between font-medium transition-all ${
                    selectedCategory === category.slug
                      ? "bg-orange-100 text-orange-700 border-l-4 border-orange-600"
                      : "text-gray-700 hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Subcategories - Dropdown */}
                {isExpanded && (
                  <div className="pl-6 mt-1 space-y-1 border-l-2 border-gray-200">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        href={`/categories?subcategory=${subcategory.slug}`}
                        onClick={() => handleCategoryClick(subcategory.slug)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                          selectedCategory === subcategory.slug
                            ? "bg-orange-50 text-orange-600 font-medium border-r-2 border-orange-600"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-r-2 border-transparent"
                        }`}
                      >
                        <span className="inline-block mr-2">{subcategory.icon}</span>
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Categories Link */}
        <Link
          href="/categories"
          className="block mt-6 px-3 py-2 text-center bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
        >
          View All Categories
        </Link>
      </div>
    </aside>
  );
}
