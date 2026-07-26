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


    </div>
  );
}
