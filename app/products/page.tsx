"use client";

import { useMemo, useState } from "react";

const productList = [
  { id: 1, name: "Smart Headphones", price: 89 },
  { id: 2, name: "Minimal Backpack", price: 59 },
  { id: 3, name: "Cozy Hoodie", price: 45 },
  { id: 4, name: "Wireless Speaker", price: 48 },
  { id: 5, name: "Smart Watch", price: 75 },
  { id: 6, name: "Sunglasses Set", price: 34 },
];

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const total = useMemo(
    () => cartItems.reduce((sum, id) => sum + (productList.find((item) => item.id === id)?.price ?? 0), 0),
    [cartItems]
  );

  function addToCart(productId: number) {
    setCartItems((current) => [...current, productId]);
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
          <p className="mt-3 text-slate-600">You have {cartItems.length} item(s) in your cart.</p>
          <p className="mt-2 text-xl font-bold">Total: ${total.toFixed(2)}</p>
          {cartItems.length > 0 ? (
            <ul className="mt-6 space-y-3 text-slate-700">
              {cartItems.map((itemId, index) => {
                const product = productList.find((item) => item.id === itemId);
                return (
                  <li key={`${itemId}-${index}`}>
                    {product?.name} — ${product?.price}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-6 text-slate-500">Add products from above to see them appear in your cart.</p>
          )}
        </aside>
      </div>
    </main>
  );
}
