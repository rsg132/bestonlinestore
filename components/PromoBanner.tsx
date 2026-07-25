"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

interface PromoBannerProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  vendor: string;
  discount?: number;
}

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  discount?: string;
  featuredText?: string;
  freeShipping?: boolean;
  products: PromoBannerProduct[];
  backgroundColor?: string;
}

export default function PromoBanner({
  title = "MEGA END OF MONTH SALE",
  subtitle = "25 - 29 JULY",
  discount = "UPTO 80% OFF",
  featuredText = "FREE DELIVERY",
  freeShipping = true,
  products,
  backgroundColor = "bg-orange-500",
}: PromoBannerProps) {
  const { addItem } = useCart();
  const [message, setMessage] = useState("");

  function imageUrl(image: string) {
    // Use local images from public/images/ folder
    if (image.startsWith("http")) return image;
    return `/images/${image}`;
  }

  function handleAddToCart(product: PromoBannerProduct) {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      vendor: product.vendor,
      image: product.image,
    });
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <section className={`relative ${backgroundColor} py-8 sm:py-12 md:py-16 overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-4xl">🎉</div>
        <div className="absolute bottom-4 right-4 text-4xl">🎁</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main content area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center mb-8 sm:mb-12">
          {/* Left side - Promotional text */}
          <div className="md:col-span-1 text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-white/40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-2 sm:mb-3">
                {title}
              </h2>
              <p className="text-sm sm:text-base font-bold mb-3 sm:mb-4 opacity-90">
                {subtitle}
              </p>

              {/* Discount badge */}
              <div className="mb-3 sm:mb-4">
                <div className="inline-block bg-yellow-300 text-black px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-black text-lg sm:text-2xl">
                  {discount}
                </div>
              </div>

              {/* Free shipping badge */}
              {freeShipping && (
                <div className="inline-block bg-emerald-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-sm sm:text-base ml-2">
                  {featuredText}
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/products"
                  className="inline-block bg-white text-orange-600 font-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Featured products */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
                >
                  {/* Product image */}
                  <div className="relative h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={imageUrl(product.image)}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 sm:p-3"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/400x400?text=Product";
                      }}
                    />

                    {/* Discount badge */}
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-lg font-bold text-xs sm:text-sm">
                        -{product.discount}%
                      </div>
                    )}

                    {/* Sale badge for featured products */}
                    {index < 2 && (
                      <div className="absolute top-2 left-2 bg-yellow-300 text-black px-2 sm:px-3 py-1 rounded-lg font-black text-xs animate-bounce">
                        SALE
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="p-2 sm:p-3">
                    <h3 className="font-bold text-xs sm:text-sm md:text-base text-slate-900 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">{product.vendor}</p>

                    {/* Price */}
                    <div className="mt-2 sm:mt-3 flex items-center justify-between">
                      <span className="text-sm sm:text-base md:text-lg font-black text-orange-600">
                        Rs. {product.price}
                      </span>
                    </div>

                    {/* Add to cart button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full mt-2 sm:mt-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success message */}
        {message && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base z-50 animate-bounce">
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
