"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: "🏠",
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: "📦",
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: "🗂",
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: "📋",
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: "👥",
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-xl">

      <div className="p-8 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-green-400">
          Best Online Store
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Admin Panel
        </p>
      </div>

      <nav className="mt-8">

        {menuItems.map((item) => {

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-8 py-4 transition-all duration-200
              ${
                active
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <span className="text-2xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

      <div className="absolute bottom-8 w-72 px-8">
        <button className="w-full rounded-lg bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
          🚪 Logout
        </button>
      </div>

    </aside>
  );
}