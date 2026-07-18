import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        {/* Products section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display font-semibold text-2xl mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <p className="text-slate font-body">Product grid placeholder</p>
          </div>
        </section>
      </main>
    </>
  );
}