import Link from "next/link";

const subcategories = [
  "Fresh Food", "Mobiles", "Fashion", "Home Decor", "Beauty", "Repairs", "Cleaning", "Design Services",
];

export default function SubcategoryNav() {
  return (
    <div className="fixed inset-x-0 top-[58px] z-30 bg-slate-950/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-2.5 scrollbar-none">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory}
            href="#listings"
            className="shrink-0 rounded-full border border-white/15 bg-white/85 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-emerald-100 hover:text-emerald-800"
          >
            {subcategory}
          </Link>
        ))}
      </div>
    </div>
  );
}
