"use client";

import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import SubcategoryGrid from "@/components/SubcategoryGrid";

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("electronics");

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Browse All Categories
          </h1>
          <p className="text-gray-600 mt-2">Discover our wide selection of products and services</p>
        </div>

        {/* Main Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar - Responsive */}
          <div className="lg:w-80">
            <CategorySidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Content Grid */}
          <div className="flex-1">
            <SubcategoryGrid selectedCategoryId={selectedCategory} />
          </div>
        </div>
      </div>
    </main>
  );
}
