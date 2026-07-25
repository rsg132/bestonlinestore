"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const {
    items,
    total,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-screen w-[min(19rem,calc(100vw-1rem))] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-slate-200 px-5 pb-3 pt-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700">Subtotal</p>
              <p className="mt-0.5 text-base font-extrabold text-red-600">
                PKR {total.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="-mr-2 -mt-1 rounded-full px-2 py-1 text-xl text-slate-500 hover:bg-slate-100"
            >
              ×
            </button>
          </div>

          <Link
            href="/cart"
            onClick={onClose}
            className="mt-3 flex h-7 items-center justify-center rounded-full border border-slate-500 text-xs font-medium text-slate-800 hover:bg-slate-100"
          >
            Go to Cart
          </Link>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-500">
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <article key={item.id} className="border-b border-slate-200 px-4 py-3">
                <img
                  src={`http://127.0.0.1:8000/images/${item.image}`}
                  alt={item.name}
                  className="mx-auto h-44 w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.src = "https://placehold.co/220x220?text=Product";
                  }}
                />

                <p className="mt-2 text-center text-base font-extrabold text-slate-900">
                  PKR {(item.price * item.quantity).toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                </p>

                <div className="mx-auto mt-3 flex w-28 items-center justify-between rounded-full border-[3px] border-yellow-400 px-2 py-1 text-lg font-bold text-slate-900">
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="text-base leading-none hover:text-red-600"
                  >
                    🗑
                  </button>
                  <span className="text-base">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Add another ${item.name}`}
                    className="text-xl leading-none hover:text-green-700"
                  >
                    +
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </aside>
  );
}
