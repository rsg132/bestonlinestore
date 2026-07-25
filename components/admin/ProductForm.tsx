"use client";

import { useEffect, useState } from "react";
import { adminApi } from "@/lib/admin-api";

interface Category {
  id: number;
  name: string;
}

export default function ProductForm() {

  const [categories, setCategories] = useState<Category[]>([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    vendor: "",
    category_id: "",
    image: null as File | null,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const data = await adminApi.getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return;

    setForm({
      ...form,
      image: e.target.files[0],
    });

  }

  async function submit(e: React.FormEvent) {

    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("stock", form.stock);
    data.append("vendor", form.vendor);
    data.append("category_id", form.category_id);

    if (form.image) {
      data.append("image", form.image);
    }

    try {

      await adminApi.createProduct(data);

      alert("Product Added Successfully");

    } catch (err) {

      console.error(err);

      alert("Failed");

    }

  }

  return (

    <form
      onSubmit={submit}
      className="space-y-5 bg-white p-8 rounded-xl shadow"
    >

      <input
        className="border p-3 w-full"
        placeholder="Product Name"
        name="name"
        onChange={handleChange}
      />

      <textarea
        className="border p-3 w-full"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />

      <input
        className="border p-3 w-full"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />

      <input
        className="border p-3 w-full"
        placeholder="Stock"
        name="stock"
        onChange={handleChange}
      />

      <input
        className="border p-3 w-full"
        placeholder="Vendor"
        name="vendor"
        onChange={handleChange}
      />

      <select
        className="border p-3 w-full"
        name="category_id"
        onChange={handleChange}
      >

        <option value="">
          Select Category
        </option>

        {categories.map(category => (

          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>

        ))}

      </select>

      <input
        type="file"
        onChange={handleImage}
      />

      <button
        className="bg-green-600 text-white px-8 py-3 rounded-lg"
      >
        Save Product
      </button>

    </form>

  );

}