"use client";

import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import SubcategoryGrid from "@/components/SubcategoryGrid";

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("electronics");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Browse All Categories
              </h1>
              <p className="text-gray-600 mt-2">Discover our wide selection of products and services</p>
            </div>
            
            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lg:hidden p-3 hover:bg-white rounded-lg border border-gray-200"
              aria-label="Toggle sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Main Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
          {/* Sidebar - Responsive */}
          <CategorySidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            isMobileOpen={isMobileSidebarOpen}
            onMobileClose={() => setIsMobileSidebarOpen(false)}
          />

          {/* Content Grid */}
          <div className="flex-1 pt-4 lg:pt-0">
            <SubcategoryGrid selectedCategoryId={selectedCategory} />
          </div>
        </div>
      </div>
    </main>
  );
}
