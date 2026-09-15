import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        {/* Products section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-semibold text-2xl">Our Products</h2>
            <Link
              href="/shop"
              className="text-amber font-body text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-lg overflow-hidden border border-slate/15 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-square bg-cream">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-slate font-body text-sm mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="text-ink font-body font-bold">
                    ৳{product.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
