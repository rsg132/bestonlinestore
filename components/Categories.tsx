import Link from "next/link";

const categories = [
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Fashion", href: "/categories/fashion" },
  { name: "Home & Living", href: "/categories/home-living" },
  { name: "Beauty", href: "/categories/beauty" },
  { name: "Sports", href: "/categories/sports" },
  { name: "Books", href: "/categories/books" },
  { name: "Groceries", href: "/categories/groceries" },
  { name: "Automotive", href: "/categories/automotive" },
  { name: "Fast Food", href: "/categories/fast-food" },
  { name: "Services", href: "/categories/services" },
  { name: "Plumber", href: "/categories/plumber" },
  { name: "Electrician", href: "/categories/electrician" },
  { name: "Health", href: "/categories/health" },
  { name: "Kids", href: "/categories/kids" },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Shop by category
          </p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-950">
            Browse curated sections built for shopping clarity.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            Each category opens a dedicated page so visitors can move from browsing to buying with less friction.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group rounded-lg sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{category.name}</h3>
                <span className="text-xs sm:text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1 shrink-0">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
