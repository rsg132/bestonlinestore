import Link from "next/link";

const products = [
  { id: 1, name: "Smart Watch", price: 75, stock: 24 },
  { id: 2, name: "Wireless Speaker", price: 48, stock: 17 },
  { id: 3, name: "Gaming Chair", price: 129, stock: 8 },
  { id: 4, name: "Fashion Sneakers", price: 62, stock: 13 },
  { id: 5, name: "Plumber toolkit", price: 35, stock: 9 },
  { id: 6, name: "Electrician starter kit", price: 42, stock: 11 },
];

const orders = [
  { id: 14891, customer: "Ayesha Khan", total: 184.5, status: "Delivered", vendor: "Main Store" },
  { id: 14892, customer: "Bilal Ahmed", total: 98.99, status: "Processing", vendor: "Electro Hub" },
  { id: 14893, customer: "Sana Malik", total: 42.0, status: "Out for delivery", vendor: "Quick Meals" },
  { id: 14894, customer: "Omar Shah", total: 229.0, status: "Processing", vendor: "Home Services" },
  { id: 14895, customer: "Maya Ali", total: 58.75, status: "Delivered", vendor: "Style Shop" },
];

const panels: Record<string, { title: string; description: string; actions: string[] }> = {
  admin: {
    title: "Admin panel",
    description: "See every order placed on the site and monitor order statuses in one place.",
    actions: ["Review all orders", "Manage vendors", "Update store settings"],
  },
  vendor: {
    title: "Vendor panel",
    description: "Manage your products, track sales, and keep your storefront up to date.",
    actions: ["View your products", "Track vendor orders", "Update shop profile"],
  },
  rider: {
    title: "Rider panel",
    description: "See the orders currently in progress and update delivery status as you move between stops.",
    actions: ["View active deliveries", "Mark delivery complete", "Check rider earnings"],
  },
  customer: {
    title: "Customer dashboard",
    description: "Browse products, track your orders, and manage your account.",
    actions: ["Continue shopping", "View order history", "Track current deliveries"],
  },
};

export default function DashboardPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = (searchParams?.role || "").toLowerCase();
  const panel = panels[role] ?? null;
  const vendorProducts = products.filter((product) => product.id <= 4);
  const riderOrders = orders.filter((order) => order.status === "Processing" || order.status === "Out for delivery");

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          {panel ? (
            <>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-green-700">{panel.title}</p>
                  <h1 className="mt-3 text-4xl font-bold text-slate-900 capitalize">Welcome, {role}.</h1>
                </div>
                <div className="rounded-full border border-green-700 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700">
                  Signed in as {role}
                </div>
              </div>

              <p className="mt-6 text-slate-600">{panel.description}</p>

              {role === "admin" ? (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-slate-900">All site orders</h2>
                  <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                    <table className="w-full min-w-[720px] border-collapse bg-white text-left text-sm text-slate-700">
                      <thead className="bg-slate-50 text-slate-500">
                        <tr>
                          <th className="px-5 py-4">Order</th>
                          <th className="px-5 py-4">Customer</th>
                          <th className="px-5 py-4">Vendor</th>
                          <th className="px-5 py-4">Total</th>
                          <th className="px-5 py-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className="border-t border-slate-200">
                            <td className="px-5 py-4 font-semibold text-slate-900">#{order.id}</td>
                            <td className="px-5 py-4">{order.customer}</td>
                            <td className="px-5 py-4">{order.vendor}</td>
                            <td className="px-5 py-4">${order.total.toFixed(2)}</td>
                            <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                              <span className={`inline-flex rounded-full px-3 py-1 ${order.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : order.status === "Processing" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : role === "vendor" ? (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-slate-900">Your products</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {vendorProducts.map((product) => (
                      <div key={product.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                            <p className="mt-2 text-sm text-slate-600">Price: ${product.price.toFixed(2)}</p>
                            <p className="mt-1 text-sm text-slate-600">Stock: {product.stock}</p>
                          </div>
                          <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">Live</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : role === "rider" ? (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-slate-900">Orders in process</h2>
                  <div className="mt-5 space-y-4">
                    {riderOrders.map((order) => (
                      <div key={order.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Order #{order.id}</p>
                            <h3 className="mt-1 text-lg font-semibold text-slate-900">{order.customer}</h3>
                            <p className="mt-1 text-sm text-slate-600">Vendor: {order.vendor}</p>
                          </div>
                          <div className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                            {order.status}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                          <span>Total: ${order.total.toFixed(2)}</span>
                          <span className="font-semibold text-slate-900">Update status when delivered</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {panel.actions.map((action) => (
                    <div key={action} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                      {action}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <p className="text-sm uppercase tracking-[0.3em] text-green-700">Dashboard</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">Choose your role first</h1>
              <p className="mt-4 text-slate-600">
                Please login or register as an admin, vendor, rider, or customer to access the correct panel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="rounded-full bg-green-700 px-5 py-3 text-white transition hover:bg-green-800">
                  Login
                </Link>
                <Link href="/register" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-100">
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
