"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";
import { useState } from "react";

export default function Navbar() {
  const { items, isCartOpen, openCart, closeCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sell", label: "Sell" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 md:gap-5 md:px-6">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-lg font-bold tracking-wide text-emerald-300 transition hover:text-emerald-200 md:text-xl"
          >
            Best Online Store
          </Link>

          {/* Search - Hidden on mobile, visible on lg */}
          <form action="/products" className="hidden min-w-0 flex-1 lg:block">
            <label className="sr-only" htmlFor="marketplace-search">Search the marketplace</label>
            <div className="relative mx-auto max-w-md">
              <input id="marketplace-search" name="search" type="search" placeholder="Search products and services" className="w-full rounded-full border border-white/15 bg-white/90 py-2 pl-4 pr-10 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
              <button aria-label="Search" className="absolute right-1 top-1 rounded-full bg-emerald-600 px-3 py-1 text-sm text-white">⌕</button>
            </div>
          </form>

          {/* Desktop Navigation - Hidden on medium screens and below */}
          <nav className="hidden gap-4 text-sm font-medium text-slate-100 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-emerald-300">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3 ml-auto">
            {/* Profile - Hidden on small mobile */}
            <Link href="/login" aria-label="Login or view profile" className="hidden sm:block overflow-hidden rounded-full border-2 border-white shrink-0">
              <img src="https://i.pravatar.cc/80?img=12" alt="Profile" className="h-8 w-8 md:h-9 md:w-9 object-cover" />
            </Link>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative rounded-full border border-white/15 bg-white/85 p-2 transition hover:bg-white shrink-0"
            >
              <span className="text-lg md:text-xl leading-none" aria-hidden="true">🛒</span>
              <span className="sr-only">Open cart</span>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button - Visible on lg and below */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full border border-white/15 bg-white/85 p-2 transition hover:bg-white shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="text-lg md:text-xl" aria-hidden="true">
                {isMenuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-sm lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
              {/* Mobile Search */}
              <form action="/products" className="mb-4">
                <label className="sr-only" htmlFor="mobile-search">Search the marketplace</label>
                <div className="relative">
                  <input
                    id="mobile-search"
                    name="search"
                    type="search"
                    placeholder="Search products..."
                    className="w-full rounded-full border border-white/15 bg-white/90 py-2 pl-4 pr-10 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  <button aria-label="Search" className="absolute right-1 top-1 rounded-full bg-emerald-600 px-3 py-1 text-sm text-white">⌕</button>
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:text-emerald-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Login Link */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <Link
                  href="/login"
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:text-emerald-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login / Profile
                </Link>
              </div>
            </div>
          </div>
        )}

      </header>

      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
      />
    </>
  );
}
