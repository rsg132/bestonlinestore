"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function FloatingCartPreview() {
  const { items, total, removeItem, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  useEffect(() => {
    if (items.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-xs font-semibold text-white shadow-xl transition hover:bg-green-800"
      >
        Cart ({itemCount})
      </button>
    );
  }

  return (
    <aside className="fixed bottom-6 right-6 z-50 w-[22rem] max-w-full rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">Live cart</p>
          <h2 className="text-lg font-semibold text-slate-900">Cart summary</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-700 px-2 py-0.5 text-[0.65rem] font-bold text-white">{itemCount}</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Close
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1 text-sm">
        {items.map((item) => (
          <div key={`${item.id}-${item.quantity}`} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
            <div>
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-[0.8rem] text-slate-600">Qty: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="mt-1 text-[0.7rem] font-semibold text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[24px] bg-slate-950 px-3 py-3 text-white">
        <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.24em] text-slate-300">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <Link
          href="/cart"
          className="flex-1 rounded-full bg-green-700 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-green-800"
        >
          View cart
        </Link>
        <button
          type="button"
          onClick={clearCart}
          className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
    </aside>
  );
}
