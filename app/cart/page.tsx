"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, total, removeItem, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("03211721798");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const orderLines = useMemo(
    () =>
      items
        .map(
          (item) => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        )
        .join("%0D%0A"),
    [items]
  );

  async function handleCheckout() {
    if (items.length === 0) {
      setStatus("Add at least one product before checkout.");
      return;
    }

    if (!name || !email) {
      setStatus("Please enter your name and email before checkout.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          items,
          total,
        }),
      });

      let result: { message?: string; status?: string } = { message: "Unexpected response from checkout." };
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch {
        result = { message: text || "Unable to parse backend response." };
      }

      if (!response.ok) {
        setStatus(result.message || "Unable to send checkout order.");
      } else {
        setStatus(result.message || "Checkout order sent successfully.");
        clearCart();
      }
    } catch (error) {
      setStatus("Network error: could not reach the checkout backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">Cart & checkout</p>
          <h1 className="mt-4 text-4xl font-bold">Your cart</h1>
          <p className="mt-3 text-slate-600">
            Review the products in your cart and submit checkout to send the order to admin.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_0.4fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            {items.length === 0 ? (
              <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
                Your cart is empty. Add products from the store to continue.
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{item.name}</h2>
                      <p className="mt-2 text-sm text-slate-600">Quantity: {item.quantity}</p>
                      <p className="mt-1 text-sm text-slate-600">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <aside className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-6">
              <div className="rounded-[28px] bg-slate-950 px-5 py-6 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.26em] text-slate-300">Order summary</p>
                <p className="mt-4 text-4xl font-semibold">${total.toFixed(2)}</p>
                <p className="mt-2 text-sm text-slate-300">{items.length} item{items.length === 1 ? "" : "s"} in cart</p>
              </div>

              <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="03211721798"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading ? "Sending order..." : "Checkout and send order"}
              </button>

              <button
                onClick={clearCart}
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Clear cart
              </button>

              {status ? (
                <div className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                  {status}
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
