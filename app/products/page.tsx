"use client";

import { useMemo } from "react";
import { useCart } from "@/components/CartProvider";

const productList = [
  { id: 1, name: "Smart Headphones", price: 89 },
  { id: 2, name: "Minimal Backpack", price: 59 },
  { id: 3, name: "Cozy Hoodie", price: 45 },
  { id: 4, name: "Wireless Speaker", price: 48 },
  { id: 5, name: "Smart Watch", price: 75 },
  { id: 6, name: "Sunglasses Set", price: 34 },
  { id: 7, name: "Pizza Combo", price: 29 },
  { id: 8, name: "Burger Meal", price: 24 },
  { id: 9, name: "Express Delivery", price: 12 },
  { id: 10, name: "Home Cleaning", price: 65 },
  { id: 11, name: "Coffee Pack", price: 18 },
  { id: 12, name: "Movie Ticket", price: 14 },
  { id: 13, name: "Gaming Chair", price: 129 },
  { id: 14, name: "Fashion Sneakers", price: 62 },
  { id: 15, name: "Juice Bundle", price: 22 },
  { id: 16, name: "Snack Box", price: 16 },
  { id: 17, name: "Laptop Stand", price: 39 },
  { id: 18, name: "Pet Care Kit", price: 28 },
];

export default function ProductsPage() {
  const { items, total, addItem } = useCart();
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  function addToCart(productId: number) {
    const product = productList.find((item) => item.id === productId);
    if (product) {
      addItem(product);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">Our product collection</p>
          <h1 className="mt-4 text-4xl font-bold">Products</h1>
          <p className="mt-3 text-slate-600">
            Select items to add to your cart and watch the total update as you shop.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {productList.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/product-${product.id}/640/480`}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="mt-3 text-slate-600">Price: ${product.price}</p>
                <button
                  onClick={() => addToCart(product.id)}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Cart summary</h2>
          <p className="mt-3 text-slate-600">You have {itemCount} item{itemCount === 1 ? "" : "s"} in your cart.</p>
          <p className="mt-2 text-xl font-bold">Total: ${total.toFixed(2)}</p>
          {items.length > 0 ? (
            <ul className="mt-6 space-y-3 text-slate-700">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-slate-500">Add products from above to see them appear in your cart.</p>
          )}
        </aside>
      </div>
    </main>
  );
}
