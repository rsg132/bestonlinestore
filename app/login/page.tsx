"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const roles = [
  { label: "Customer", value: "customer" },
  { label: "Admin", value: "admin" },
  { label: "Vendor", value: "vendor" },
  { label: "Rider", value: "rider" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/dashboard?role=${encodeURIComponent(role)}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">Welcome back</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Login to your account</h1>
          <p className="mt-3 text-slate-600">
            Choose the role that matches your account and access the correct dashboard.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Select role</label>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                {roles.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
              Continue to dashboard
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New here? <Link href="/register" className="font-semibold text-green-700 hover:text-green-800">Register instead</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
