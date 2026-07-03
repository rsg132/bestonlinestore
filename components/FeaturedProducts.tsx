"use client";

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

const featuredProducts = [
  {
    id: 1,
    name: 'Smart Headphones',
    price: 89,
    description: 'Noise-canceling sound for music lovers.',
  },
  {
    id: 2,
    name: 'Minimal Backpack',
    price: 59,
    description: 'Durable design with multiple storage pockets.',
  },
  {
    id: 3,
    name: 'Cozy Hoodie',
    price: 45,
    description: 'Soft fabric for everyday comfort.',
  },
  {
    id: 4,
    name: 'Wireless Speaker',
    price: 48,
    description: 'Portable audio for home and travel.',
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 75,
    description: 'Track fitness and stay connected on the go.',
  },
  {
    id: 6,
    name: 'Sunglasses Set',
    price: 34,
    description: 'Stylish protection with multiple lens colors.',
  },
];

export default function FeaturedProducts() {
  const { addItem } = useCart();

  function handleAdd(product: { id: number; name: string; price: number }) {
    addItem({ id: product.id, name: product.name, price: product.price });
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Browse our top picks with live visuals, pricing, and an add-to-cart button under every product.
            </p>
          </div>
          <Link href="/cart" className="inline-flex rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800">
            View Cart
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
              <img
                src={`https://picsum.photos/seed/product${product.id}/640/480`}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-slate-600">{product.description}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                  <button
                    onClick={() => handleAdd(product)}
                    className="rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
