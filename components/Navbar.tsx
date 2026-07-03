"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-green-700">
          Best Online Store
        </h1>

        <ul className="flex gap-8 font-medium items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <Link href="/cart" className="inline-flex items-center gap-2">
              Cart
              {itemCount > 0 ? (
                <span className="rounded-full bg-green-700 px-2 py-1 text-xs font-semibold text-white">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          </li>
        </ul>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
          Login
        </button>

      </div>
    </nav>
  );
}