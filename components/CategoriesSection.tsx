"use client";

import { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import SubcategoryGrid from "./SubcategoryGrid";

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("electronics");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Mobile Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
            <p className="text-gray-600 mt-1">Explore our featured categories</p>
          </div>
          
          {/* Mobile Categories Toggle Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="lg:hidden p-3 hover:bg-white rounded-lg border border-gray-200 transition-colors"
            aria-label="Toggle categories menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Main Layout: Sidebar + Grid - Responsive */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
          {/* Sidebar - Hidden on mobile, visible from lg */}
          <div className="hidden lg:block">
            <CategorySidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Mobile Sidebar Overlay - Visible on mobile */}
          <CategorySidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            isMobileOpen={isMobileSidebarOpen}
            onMobileClose={() => setIsMobileSidebarOpen(false)}
          />

          {/* Grid Content */}
          <div className="flex-1 pt-4 lg:pt-0">
            <SubcategoryGrid selectedCategoryId={selectedCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}
