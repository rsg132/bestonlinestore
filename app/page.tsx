import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomepageForm from "@/components/HomepageForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Live market showcase</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Watch the marketplace in action
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                A short looped market video gives shoppers a quick feel for the store, the products, and the energy behind Best Online Store.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-street-food-vendor-645-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <FeaturedProducts />
      <HomepageForm />
      <Footer />
    </>
  );
}
