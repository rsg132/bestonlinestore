const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
  "Books",
  "Groceries",
  "Automotive",
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="border rounded-xl p-8 text-center shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}