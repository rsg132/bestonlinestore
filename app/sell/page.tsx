"use client";

import { FormEvent, useEffect, useState } from "react";
import api from "@/lib/api";

type Category = { id: number; name: string };

export default function SellPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "", description: "", price: "", stock: "1", image: "burger.jpg", category_id: "", listing_type: "product",
  });

  useEffect(() => {
    api.get("/categories").then((response) => setCategories(response.data)).catch(console.error);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (localStorage.getItem("user_role") !== "vendor") {
      setMessage("Please register or log in as a vendor before publishing a listing.");
      return;
    }

    try {
      await api.post("/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        category_id: form.category_id ? Number(form.category_id) : null,
      });
      setMessage("Your listing is now live in the marketplace.");
      setForm({ name: "", description: "", price: "", stock: "1", image: "burger.jpg", category_id: "", listing_type: "product" });
    } catch (error) {
      setMessage("Unable to publish the listing. Please check the fields and try again.");
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Vendor portal</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">List a product or service</h1>
        <p className="mt-3 text-slate-600">Your vendor name is taken from your account and shown on every listing.</p>

        <form onSubmit={submit} className="mt-8 space-y-5 rounded-3xl bg-white p-8 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Listing type<select value={form.listing_type} onChange={(event) => setForm({ ...form, listing_type: event.target.value })} className="mt-2 w-full rounded-xl border p-3"><option value="product">Product</option><option value="service">Service</option></select></label>
            <label className="text-sm font-medium">Category<select value={form.category_id} onChange={(event) => setForm({ ...form, category_id: event.target.value })} className="mt-2 w-full rounded-xl border p-3"><option value="">No category</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
          </div>
          <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border p-3" placeholder="Listing name" />
          <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-28 w-full rounded-xl border p-3" placeholder="Describe what you offer" />
          <div className="grid gap-5 sm:grid-cols-2"><input required min="0" type="number" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} className="rounded-xl border p-3" placeholder="Price (PKR)" /><input required min="0" type="number" value={form.stock} onChange={(event) => setForm({ ...form, stock: event.target.value })} className="rounded-xl border p-3" placeholder="Available quantity" /></div>
          <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className="w-full rounded-xl border p-3" placeholder="Image filename (for example burger.jpg)" />
          <button className="rounded-full bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800">Publish listing</button>
          {message && <p className="text-sm font-medium text-green-700">{message}</p>}
        </form>
      </div>
    </main>
  );
}
