import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Product info */}
            <div>
              <h1 className="font-display font-bold text-3xl mb-3">
                {product.name}
              </h1>
              <p className="text-2xl font-body font-bold text-ink mb-6">
                ৳{product.price}
              </p>

              <div className="font-body text-ink/90 whitespace-pre-line leading-relaxed mb-8">
                {product.fullDescription}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
                <Link
                  href={`/checkout?product=${product.slug}`}
                  className="bg-ink text-cream font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-center"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}