"use client";

import { useCart } from "@/components/CartProvider";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { products as fallbackProducts } from "@/components/store-data";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  vendor: string;
  listing_type: "product" | "service";
  vendorOwner?: {
    name: string;
    email: string;
    phone: string | null;
  };
}

export default function FeaturedProducts() {
  const { addItem } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState<Product | null>(null);

  function imageUrl(image: string) {
    // Use local images from public/images/ folder
    if (image.startsWith("http")) return image;
    return `/images/${image}`;
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setError(null);
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error: unknown) {
      // Silently handle error - don't log to console to avoid dev tools overlay
      setError("Unable to connect to the server. Showing sample products.");
      // Use fallback products from local data
      const fallback: Product[] = fallbackProducts.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        vendor: product.vendor,
        category: product.category,
        description: `High quality ${product.category.toLowerCase()} item from ${product.vendor}`,
        image: "https://placehold.co/400x400?text=Product",
        listing_type: "product" as const,
      }));
      setProducts(fallback);
    } finally {
      setLoading(false);
    }
  }

  function handleAdd(product: Product) {
    addItem({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      vendor: product.vendor,
      image: product.image,
    });

    setMessage(`${product.name} added to cart`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function listingCard(product: Product) {
    return (
      <div key={product.id} className="overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <img src={imageUrl(product.image)} alt={product.name} className="h-48 sm:h-56 md:h-64 w-full object-cover" onError={(event) => { event.currentTarget.src = "https://placehold.co/600x400?text=Listing"; }} />
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold line-clamp-2">{product.name}</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-green-700">{product.listing_type === "service" ? "Service" : "Product"} by {product.vendor}</p>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">Rs. {Number(product.price).toFixed(2)}</p>
            {product.listing_type === "service" ? (
              <button onClick={() => setSelectedService(product)} className="w-full sm:w-auto rounded-full border border-green-700 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-green-700 transition hover:bg-green-50">Contact vendor</button>
            ) : (
              <button onClick={() => handleAdd(product)} className="w-full sm:w-auto rounded-full bg-green-700 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-green-800">Add To Cart</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Loading Products...
        </h2>
      </section>
    );
  }

  return (
    <section id="listings" className="bg-slate-50 py-12 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-8 sm:mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Marketplace listings
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
            Products and services from independent vendors.
          </p>

          {error && (
            <div className="mt-4 sm:mt-5 rounded-xl bg-blue-100 p-3 sm:p-4 text-sm sm:text-base text-blue-700 inline-block">
              ℹ️ {error}
            </div>
          )}

          {message && (

            <div className="mt-4 sm:mt-5 rounded-xl bg-green-100 p-3 sm:p-4 text-sm sm:text-base text-green-700 inline-block">

              {message}

            </div>

          )}

        </div>

        <div>
          <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"><span className="h-6 sm:h-8 w-1 rounded-full bg-green-700" /><h3 className="text-2xl sm:text-3xl font-bold">Products</h3></div>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{products.filter((product) => product.listing_type !== "service").map(listingCard)}</div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"><span className="h-6 sm:h-8 w-1 rounded-full bg-amber-500" /><h3 className="text-2xl sm:text-3xl font-bold">Services</h3></div>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{products.filter((product) => product.listing_type === "service").map(listingCard)}</div>
        </div>

      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-3 sm:p-4" onClick={() => setSelectedService(null)}>
          <div className="w-full max-w-md rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Vendor contact</p>
                <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold text-slate-900">{selectedService.vendorOwner?.name ?? selectedService.vendor}</h3>
              </div>
              <button onClick={() => setSelectedService(null)} aria-label="Close contact details" className="text-xl sm:text-2xl text-slate-500 shrink-0">×</button>
            </div>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-slate-600">Ask about <span className="font-semibold text-slate-900">{selectedService.name}</span> directly with this vendor.</p>
            <dl className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 rounded-2xl bg-slate-50 p-4 sm:p-5 text-xs sm:text-sm">
              <div><dt className="text-slate-500">Phone</dt><dd className="mt-1 font-semibold text-slate-900 break-all">{selectedService.vendorOwner?.phone ?? "+92 300 555 0100"}</dd></div>
              <div><dt className="text-slate-500">Email</dt><dd className="mt-1 font-semibold text-slate-900 break-all">{selectedService.vendorOwner?.email ?? "vendor@example.com"}</dd></div>
              <div><dt className="text-slate-500">Availability</dt><dd className="mt-1 font-semibold text-slate-900">Mon–Sat, 9:00 AM–6:00 PM</dd></div>
            </dl>
          </div>
        </div>
      )}

    </section>
  );
}
