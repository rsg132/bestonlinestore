"use client";

import Link from "next/link";
import { useState } from "react";

const topNavLinks = [
  "Dropshipping",
  "Tax exemption",
  "Help Center",
  "Sell on BestOnlineStore",
];

const verifiedServiceMenu = [
  {
    category: "Home Services",
    services: ["AC Technician", "Plumber", "Electrician", "Carpenter"],
  },
  {
    category: "Cleaning Services",
    services: ["Deep Home Cleaning", "Sofa Cleaning", "Water Tank Cleaning", "Office Cleaning"],
  },
  {
    category: "Repair Services",
    services: ["Mobile Repair", "Laptop Repair", "Inverter Repair", "UPS Repair"],
  },
  {
    category: "Beauty At Home",
    services: ["Bridal Makeup", "Hair Styling", "Manicure Pedicure", "Skin Treatment"],
  },
  {
    category: "Transport & Movers",
    services: ["Home Shifting", "Bike Rider Delivery", "Mini Truck Booking", "Office Relocation"],
  },
  {
    category: "Education & Tutors",
    services: ["Quran Tutor", "Math Tutor", "IELTS Coach", "Computer Classes"],
  },
  {
    category: "Event Services",
    services: ["Catering Service", "Photography", "DJ Sound", "Decoration Service"],
  },
];

const suggestionImageMap: Record<string, string> = {
  "Pizza Combo": "/images/pizza.jpg",
  "Burger Meal": "/images/burger.jpg",
  "Chicken Wrap": "/images/zinger.jpg",
};

const fallbackImages = ["/images/hero-banner.jpg", "/images/pizza.jpg", "/images/burger.jpg", "/images/zinger.jpg"];

function getRotatingImage(item: string, index: number, offset = 0) {
  const mappedImage = suggestionImageMap[item];

  if (mappedImage) {
    return mappedImage;
  }

  return fallbackImages[(index + offset) % fallbackImages.length];
}

const heroCategories = [
  {
    name: "Electronics",
    href: "/categories/electronics",
    products: ["Smart Watch", "Wireless Speaker", "Laptop Stand"],
    subcategories: [
      {
        name: "Mobiles",
        items: ["Electro Hub", "Smart World", "Mobile Point"],
      },
      {
        name: "Audio",
        items: ["Sound City", "Bass House", "Electro Hub"],
      },
    ],
  },
  {
    name: "Fashion",
    href: "/categories/fashion",
    products: ["Minimal Backpack", "Cozy Hoodie", "Fashion Sneakers"],
    subcategories: [
      {
        name: "Clothing",
        items: ["Style Shop", "Urban Threads", "Wardrobe Lane"],
      },
      {
        name: "Shoes",
        items: ["Sneaker Studio", "Step Point", "Style Shop"],
      },
    ],
  },
  {
    name: "Home & Living",
    href: "/categories/home-living",
    products: ["Sofa Set", "Wall Art Frame", "Kitchen Organizer"],
    subcategories: [
      {
        name: "Furniture",
        items: ["Comfort House", "Oak & Home", "Urban Living"],
      },
      {
        name: "Decor",
        items: ["Decor Nest", "Home Glow", "Crafted Corners"],
      },
    ],
  },
  {
    name: "Beauty",
    href: "/categories/beauty",
    products: ["Vitamin C Serum", "Matte Lipstick", "Hair Repair Mask"],
    subcategories: [
      {
        name: "Skincare",
        items: ["Glow Lab", "Pure Skin", "Beauty Basket"],
      },
      {
        name: "Makeup",
        items: ["Color Studio", "Beauty Basket", "Luxe Face"],
      },
    ],
  },
  {
    name: "Sports",
    href: "/categories/sports",
    products: ["Yoga Mat", "Dumbbell Set", "Running Shoes"],
    subcategories: [
      {
        name: "Fitness",
        items: ["Active Core", "Gym Mart", "Power Fit"],
      },
      {
        name: "Outdoor",
        items: ["Trail Spot", "Camp Base", "Outdoor Grid"],
      },
    ],
  },
  {
    name: "Books",
    href: "/categories/books",
    products: ["Atomic Habits", "Science Workbook", "Mystery Novel"],
    subcategories: [
      {
        name: "Academic",
        items: ["Campus Shelf", "Study Corner", "Book Harbor"],
      },
      {
        name: "Fiction",
        items: ["Novel Nest", "Book Harbor", "Readers Point"],
      },
    ],
  },
  {
    name: "Groceries",
    href: "/categories/groceries",
    products: ["Coffee Pack", "Juice Bundle", "Snack Box"],
    subcategories: [
      {
        name: "Beverages",
        items: ["Fresh Mart", "Cafe Corner", "Juice Bar"],
      },
      {
        name: "Pantry",
        items: ["Daily Basket", "Fresh Mart", "Family Store"],
      },
    ],
  },
  {
    name: "Automotive",
    href: "/categories/automotive",
    products: ["Car Phone Holder", "Engine Oil", "Cleaning Kit"],
    subcategories: [
      {
        name: "Accessories",
        items: ["Auto Gear", "Drive Point", "Car Care Hub"],
      },
      {
        name: "Maintenance",
        items: ["Service Lane", "Auto Gear", "Fix Garage"],
      },
    ],
  },
  {
    name: "Fast Food",
    href: "/categories/fast-food",
    products: ["Pizza Combo", "Burger Meal", "Chicken Wrap"],
    subcategories: [
      {
        name: "Pizza",
        items: ["Pizza Combo", "Cheese Slice", "Quick Oven"],
      },
      {
        name: "Burgers",
        items: ["Burger Meal", "Street Burger", "Quick Meals"],
      },
      {
        name: "Drinks",
        items: ["Cold Fizz", "Shake Spot", "Quick Sips"],
      },
    ],
  },
  {
    name: "Services",
    href: "/categories/services",
    products: ["Home Cleaning", "Express Delivery", "Appliance Repair"],
    subcategories: [
      {
        name: "Plumbers",
        items: ["Ali Plumbing Services", "City Pipe Experts", "Rapid Fix Plumbers"],
      },
      {
        name: "Electricians",
        items: ["Bright Wire Solutions", "Power House Electric", "Safe Line Electricians"],
      },
      {
        name: "Cleaning",
        items: ["Spark Clean Team", "Home Services", "Fresh Space Cleaners"],
      },
    ],
  },
  {
    name: "Plumber",
    href: "/categories/plumber",
    products: ["Leak Repair Visit", "Bathroom Fitting", "Pipe Installation"],
    subcategories: [
      {
        name: "Home Repair",
        items: ["Ali Plumbing Services", "Rapid Fix Plumbers", "WaterWorks Team"],
      },
      {
        name: "Installations",
        items: ["Pipe Craft Co.", "City Pipe Experts", "Metro Plumb Care"],
      },
    ],
  },
  {
    name: "Electrician",
    href: "/categories/electrician",
    products: ["Wiring Service", "Ceiling Fan Install", "Switchboard Repair"],
    subcategories: [
      {
        name: "Wiring",
        items: ["Bright Wire Solutions", "Safe Line Electricians", "Volt Masters"],
      },
      {
        name: "Appliance Repair",
        items: ["Power House Electric", "Quick Volt Repairs", "City Current Pros"],
      },
    ],
  },
  {
    name: "Health",
    href: "/categories/health",
    products: ["Pet Care Kit", "Protein Powder", "Vitamin Tablets"],
    subcategories: [
      {
        name: "Supplements",
        items: ["Health First", "Nutri Hub", "Wellness Basket"],
      },
      {
        name: "Personal Care",
        items: ["Care Spot", "Healthy Living", "Pure Choice"],
      },
    ],
  },
  {
    name: "Kids",
    href: "/categories/kids",
    products: ["Building Blocks", "School Bag", "Color Pencil Set"],
    subcategories: [
      {
        name: "Toys",
        items: ["Toy Planet", "Kids Corner", "Play Box"],
      },
      {
        name: "School Items",
        items: ["School Smart", "Kids Corner", "Study Steps"],
      },
    ],
  },
];

export default function Hero() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedServiceGroupIndex, setSelectedServiceGroupIndex] = useState(0);

  const selectedCategory = heroCategories[selectedCategoryIndex] ?? heroCategories[0];
  const selectedCategoryItems = [
    ...selectedCategory.subcategories.map((subcategory) => subcategory.name),
    ...selectedCategory.products,
  ];

  const selectedServiceGroup = verifiedServiceMenu[selectedServiceGroupIndex] ?? verifiedServiceMenu[0];
  const selectedServiceItems = selectedServiceGroup.services;

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      />

      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-start px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-36 lg:px-8">
        <div className="w-full">
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {heroCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group rounded-2xl sm:rounded-3xl border border-white/20 bg-white/90 p-4 sm:p-6 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.75)] backdrop-blur-md transition hover:border-emerald-400 hover:bg-white"
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 transition group-hover:text-emerald-700 line-clamp-2">
                    {category.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1 shrink-0">
                    View
                  </span>
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                  Open from the top bar to view subcategory names.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full bg-slate-100 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-slate-700"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
