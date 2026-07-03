export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">About Best Online Store</p>
          <h1 className="mt-4 text-4xl font-bold">About Us</h1>
          <p className="mt-3 text-slate-600">
            Best Online Store is your local marketplace for trusted products, fast checkout, and easy delivery.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-5 text-slate-600 leading-8">
              We make shopping simple by offering a curated store experience, transparent pricing, and responsive support for every order.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold">Why choose us</h2>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Fast checkout and easy order tracking.</li>
              <li>• Clear product categories and trusted brands.</li>
              <li>• Local support and quick response for customers.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
