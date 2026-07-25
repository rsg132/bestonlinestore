const categoryPages = {
  electronics: {
    title: "Electronics",
    description: "Explore phones, accessories, audio gear, and smart devices from trusted sellers.",
  },
  fashion: {
    title: "Fashion",
    description: "Find modern apparel, footwear, and accessories designed for everyday style.",
  },
  "home-living": {
    title: "Home & Living",
    description: "Shop for furniture, decor, and practical home essentials.",
  },
  beauty: {
    title: "Beauty",
    description: "Browse skincare, cosmetics, and self-care products in one place.",
  },
  sports: {
    title: "Sports",
    description: "Discover fitness gear, activewear, and outdoor equipment.",
  },
  "fast-food": {
    title: "Fast Food",
    description: "Order popular meals, quick bites, and customer favorites.",
  },
  services: {
    title: "Services",
    description: "Book local professionals for delivery, repairs, cleaning, and more.",
  },
  books: {
    title: "Books",
    description: "Find fiction, non-fiction, educational, and inspirational reads.",
  },
  groceries: {
    title: "Groceries",
    description: "Shop everyday essentials, pantry staples, and fresh household items.",
  },
  automotive: {
    title: "Automotive",
    description: "Browse parts, accessories, and maintenance products for vehicles.",
  },
  plumber: {
    title: "Plumber",
    description: "Connect with plumbing services for installations, repairs, and emergencies.",
  },
  electrician: {
    title: "Electrician",
    description: "Find electricians for repairs, wiring, and home or office work.",
  },
  health: {
    title: "Health",
    description: "Explore wellness products, supplements, and health essentials.",
  },
  kids: {
    title: "Kids",
    description: "Browse toys, clothing, and accessories for children.",
  },
} as const;

type CategorySlug = keyof typeof categoryPages;

const categoryThemes = {
  electronics: "from-cyan-500/25 via-slate-950 to-indigo-500/20",
  fashion: "from-pink-500/25 via-slate-950 to-violet-500/20",
  "home-living": "from-amber-500/25 via-slate-950 to-orange-500/20",
  beauty: "from-fuchsia-500/25 via-slate-950 to-rose-500/20",
  sports: "from-emerald-500/25 via-slate-950 to-lime-500/20",
  "fast-food": "from-amber-500/25 via-slate-950 to-red-500/20",
  services: "from-teal-500/25 via-slate-950 to-cyan-500/20",
  books: "from-sky-500/25 via-slate-950 to-blue-500/20",
  groceries: "from-green-500/25 via-slate-950 to-emerald-500/20",
  automotive: "from-slate-500/25 via-slate-950 to-zinc-500/20",
  plumber: "from-blue-500/25 via-slate-950 to-cyan-500/20",
  electrician: "from-yellow-500/25 via-slate-950 to-orange-500/20",
  health: "from-emerald-500/25 via-slate-950 to-teal-500/20",
  kids: "from-rose-500/25 via-slate-950 to-pink-500/20",
} as const;

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: PageProps) {
  const category = categoryPages[params.slug as CategorySlug];
  const theme = categoryThemes[params.slug as keyof typeof categoryThemes] ?? "from-emerald-500/20 via-slate-950 to-cyan-500/20";

  if (!category) {
    return (
      <main className="min-h-screen bg-slate-950 pt-28 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold">Category not found</h1>
          <p className="mt-4 text-slate-300">This category page does not exist yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 text-white">
      <div className={`absolute inset-x-0 top-0 h-[42rem] bg-gradient-to-br ${theme} opacity-100`} />
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Category page
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{category.description}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold">Curated products</h2>
            <p className="mt-3 text-slate-300">
              Highlight featured listings and best sellers for this category.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold">Trusted sellers</h2>
            <p className="mt-3 text-slate-300">
              Add verified vendors and service providers to build confidence.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold">Fast browsing</h2>
            <p className="mt-3 text-slate-300">
              Keep the layout clean so shoppers can move quickly through the catalog.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}