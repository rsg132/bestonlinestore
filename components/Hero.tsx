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

      <div className="absolute inset-x-0 top-[58px] z-20 bg-slate-800/95 text-white backdrop-blur-sm overflow-x-auto scrollbar-none">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 sm:gap-8 px-4 sm:px-6 py-2 sm:py-2.5 overflow-x-auto">
          <details className="group shrink-0">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 border-b-2 border-white/70 pb-1 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
              <span aria-hidden="true" className="text-xs">☰</span>
              <span>All categories</span>
            </summary>

            <div className="absolute left-4 sm:left-1/2 top-[calc(100%+1px)] z-30 grid w-[calc(100vw-2rem)] sm:w-full max-w-7xl sm:-translate-x-1/2 grid-cols-1 border-t border-slate-200 bg-white text-slate-900 shadow-2xl md:grid-cols-[320px_minmax(0,1fr)] max-h-[70vh] overflow-hidden">
              <aside className="max-h-[25rem] overflow-y-auto border-r border-slate-200">
                {heroCategories.map((category, index) => {
                  const isActive = index === selectedCategoryIndex;

                  return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setSelectedCategoryIndex(index)}
                    className={`flex w-full items-center justify-between border-l-4 px-3 sm:px-5 py-3 sm:py-4 text-left text-sm sm:text-base transition focus:border-l-emerald-600 focus:bg-emerald-50 focus:text-emerald-800 focus:outline-none ${
                      isActive
                        ? "border-l-emerald-600 bg-emerald-50 text-emerald-800"
                        : "border-l-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="line-clamp-1">{category.name}</span>
                    <span className={isActive ? "text-emerald-700" : "text-slate-400"}>›</span>
                  </button>
                );})}
              </aside>

              <section className="max-h-[25rem] overflow-y-auto px-3 sm:px-6 py-4 sm:py-5">
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-3xl font-semibold text-slate-900">{selectedCategory.name}</h3>
                  <Link
                    href={selectedCategory.href}
                    className="rounded-full bg-emerald-700 px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-800 shrink-0"
                  >
                    View category
                  </Link>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">Products and subcategories for {selectedCategory.name}</p>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5">
                  {selectedCategoryItems.map((item, itemIndex) => (
                    <button
                      key={item}
                      type="button"
                      className="group text-left"
                    >
                      <div
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-slate-100 bg-cover bg-center transition group-hover:scale-105"
                        style={{ backgroundImage: `url('${getRotatingImage(item, itemIndex, selectedCategoryIndex)}')` }}
                      />
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-emerald-700 line-clamp-2">{item}</p>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </details>

          <details className="group shrink-0">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 border-b-2 border-transparent pb-1 text-xs sm:text-sm font-semibold text-white/95 transition hover:border-white/70 hover:text-emerald-300 whitespace-nowrap">
              <span>Verified manufacturers</span>
            </summary>

            <div className="absolute left-4 sm:left-1/2 top-[calc(100%+1px)] z-30 grid w-[calc(100vw-2rem)] sm:w-full max-w-7xl sm:-translate-x-1/2 grid-cols-1 border-t border-slate-200 bg-white text-slate-900 shadow-2xl md:grid-cols-[320px_minmax(0,1fr)] max-h-[70vh] overflow-hidden">
              <aside className="max-h-[25rem] overflow-y-auto border-r border-slate-200">
                {verifiedServiceMenu.map((serviceGroup, index) => {
                  const isActive = index === selectedServiceGroupIndex;

                  return (
                  <button
                    key={serviceGroup.category}
                    type="button"
                    onClick={() => setSelectedServiceGroupIndex(index)}
                    className={`flex w-full items-center justify-between border-l-4 px-3 sm:px-5 py-3 sm:py-4 text-left text-sm sm:text-base transition focus:border-l-emerald-600 focus:bg-emerald-50 focus:text-emerald-800 focus:outline-none ${
                      isActive
                        ? "border-l-emerald-600 bg-emerald-50 text-emerald-800"
                        : "border-l-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="line-clamp-1">{serviceGroup.category}</span>
                    <span className={isActive ? "text-emerald-700" : "text-slate-400"}>›</span>
                  </button>
                );})}
              </aside>

              <section className="max-h-[25rem] overflow-y-auto px-3 sm:px-6 py-4 sm:py-5">
                <h3 className="text-xl sm:text-3xl font-semibold text-slate-900">{selectedServiceGroup.category}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">Verified services in Pakistan for {selectedServiceGroup.category}</p>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5">
                  {selectedServiceItems.map((service, serviceIndex) => (
                    <button key={service} type="button" className="group text-left">
                      <div
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-slate-100 bg-cover bg-center transition group-hover:scale-105"
                        style={{ backgroundImage: `url('${getRotatingImage(service, serviceIndex, selectedServiceGroupIndex + 1)}')` }}
                      />
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-slate-700 group-hover:text-emerald-700 line-clamp-2">{service}</p>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </details>

          {topNavLinks.map((link) => (
            <span
              key={link}
              className="shrink-0 text-xs sm:text-sm font-medium text-white/95 transition hover:text-emerald-300 whitespace-nowrap"
            >
              {link}
            </span>
          ))}
        </div>
      </div>

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
