"use client";

import Link from "next/link";
import { categoriesData } from "./categories-data";

type SubcategoryGridProps = {
  selectedCategoryId?: string;
};

export default function SubcategoryGrid({ selectedCategoryId }: SubcategoryGridProps) {
  const selectedCategory = categoriesData.find((cat) => cat.id === selectedCategoryId) || categoriesData[0];

  return (
    <div className="flex-1">
      {/* Category Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="text-3xl sm:text-4xl mr-2">{selectedCategory.icon}</span>
          {selectedCategory.name}
        </h1>
        <p className="text-gray-600">Browse our collection of {selectedCategory.name.toLowerCase()}</p>
      </div>

      {/* Subcategories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
        {selectedCategory.subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            href={`/categories?subcategory=${subcategory.slug}`}
            className="group"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition-all duration-300 border border-orange-200 hover:border-orange-400">
              <div className="text-3xl sm:text-4xl mb-2 inline-block">{subcategory.icon}</div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-sm group-hover:text-orange-600 transition-colors line-clamp-2">
                {subcategory.name}
              </h3>
              <p className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Shop →</p>
            </div>
          </Link>
        ))}
      </div>

      {/* All Subcategories Overview */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">All Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              href={`/categories?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-orange-600 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-orange-600">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
