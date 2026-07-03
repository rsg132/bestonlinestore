"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">Get in touch</p>
          <h1 className="mt-4 text-4xl font-bold">Contact</h1>
          <p className="mt-3 text-slate-600">
            Send us a message and our team will respond soon. For urgent orders, we use {"orders@bestonlinestore.com"}.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="Tell us what you need help with"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
              Send message
            </button>
          </form>

          {submitted ? (
            <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 px-5 py-4 text-slate-900">
              Thank you, {name || "customer"}! Your request has been noted. We will reply to {email || "your email"} shortly.
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
