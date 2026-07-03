export default function Hero() {
  return (
    <section
      className="relative h-[650px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-banner.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="text-white max-w-2xl">

          <h1 className="text-6xl font-bold leading-tight">
            Everything You Need,
            <br />
            All in One Marketplace
          </h1>

          <p className="mt-6 text-xl">
            Shop from trusted vendors across Pakistan with fast delivery and great prices.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold">
              Become a Vendor
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}