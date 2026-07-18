import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero carousel will go here */}
        <section className="h-[420px] bg-slate/10 flex items-center justify-center">
          <p className="text-slate font-body">Carousel placeholder</p>
        </section>

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