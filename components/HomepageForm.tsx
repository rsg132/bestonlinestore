"use client";

import { useMemo, useState } from "react";

type Order = {
  id: number;
  product: string;
  amount: number;
  paymentMethod: string;
  note: string;
};

const products = [
  { name: "Smart Watch", price: 75 },
  { name: "Wireless Speaker", price: 48 },
  { name: "Gaming Chair", price: 129 },
  { name: "Fashion Sneakers", price: 62 },
];

const notificationEmail = "orders@bestonlinestore.com";

export default function HomepageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("03211721798");
  const [product, setProduct] = useState(products[0].name);
  const [amount, setAmount] = useState(String(products[0].price));
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [note, setNote] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const total = useMemo(
    () => orders.reduce((sum, order) => sum + order.amount, 0),
    [orders]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !product || !amount) {
      setSuccessMessage("Please fill in your name, email, product, and amount.");
      return;
    }

    if (paymentMethod === "Card" && (!cardNumber || !expiry || !cvv)) {
      setSuccessMessage("Please add your card details to complete the checkout.");
      return;
    }

    const newOrder: Order = {
      id: Date.now(),
      product,
      amount: Number(amount),
      paymentMethod,
      note: note || "No special instructions.",
    };

    setOrders((current) => [newOrder, ...current]);
    setSuccessMessage(
      `Order for ${newOrder.product} has been added. Notification sent to ${notificationEmail}.`
    );
    setNote("");
    if (paymentMethod === "Cash") {
      setCardNumber("");
      setExpiry("");
      setCvv("");
    }
  }

  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_45%),_linear-gradient(to_bottom,_#f8fafc,_#e2e8f0)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-green-700 font-semibold">
            Instant order details
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Place your order and see it update immediately.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Use this checkout form to create a quick order, review the summary, and get a notification ready for the store team.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="mb-8 rounded-[28px] border border-green-100 bg-green-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">Order checkout</p>
              <p className="mt-3 text-slate-700">
                Fill in your order details and payment method, then submit to add the order summary instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  placeholder="03211721798"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Product</label>
                  <select
                    value={product}
                    onChange={(event) => {
                      setProduct(event.target.value);
                      const selected = products.find((item) => item.name === event.target.value);
                      if (selected) setAmount(String(selected.price));
                    }}
                    className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  >
                    {products.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Amount (USD)</label>
                  <input
                    type="number"
                    value={amount}
                    min={1}
                    onChange={(event) => setAmount(event.target.value)}
                    className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Payment Method</label>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { value: "Card", label: "Card" },
                    { value: "Cash", label: "Cash" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPaymentMethod(option.value)}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                        paymentMethod === option.value
                          ? "bg-green-700 text-white shadow-lg"
                          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {paymentMethod === "Card" ? (
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(event) => setCardNumber(event.target.value)}
                      className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Expiry</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(event) => setExpiry(event.target.value)}
                      className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">CVV</label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(event) => setCvv(event.target.value)}
                      className="mt-2 w-full rounded-[24px] border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                      placeholder="123"
                    />
                  </div>
                </div>
              ) : null}

              <div>
                <label className="text-sm font-medium text-slate-700">Order Note</label>
                <textarea
                  rows={4}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  className="mt-2 w-full rounded-[28px] border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  placeholder="Add any special instructions for your order"
                />
              </div>

              <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Notification email</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{notificationEmail}</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-800 shadow-lg">
                  Add to Order
                </button>
              </div>

              {successMessage ? (
                <div className="rounded-3xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-900 shadow-sm">
                  {successMessage}
                </div>
              ) : null}
            </form>
          </div>

          <aside className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-38px_rgba(15,23,42,0.3)]">
            <div className="mb-6 rounded-[28px] bg-slate-950/95 px-5 py-5 text-white shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-300">Your Order Summary</p>
                  <p className="mt-2 text-2xl font-semibold">{orders.length} orders captured</p>
                </div>
                <div className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  Total ${total.toFixed(2)}
                </div>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center">
                <p className="text-sm leading-7 text-slate-600">
                  Add an order above and this box will display each product, payment method, and total instantly.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{order.product}</p>
                        <p className="mt-2 text-sm text-slate-500">{order.paymentMethod} payment</p>
                      </div>
                      <p className="text-lg font-semibold text-slate-900">${order.amount.toFixed(2)}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{order.note}</p>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
