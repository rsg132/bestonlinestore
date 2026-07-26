"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      />

      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-start px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-36 lg:px-8">
      </div>
    </section>
  );
}
