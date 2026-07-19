import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="font-display font-semibold text-3xl mb-2">
            Shop All Products
          </h1>
          <p className="text-slate font-body mb-10">
            Personal safety tools for everyday confidence.
          </p>

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