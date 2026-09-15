import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import { products } from "@/data/products";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product ? `${product.name} | Arcade Gadgets` : "Product | Arcade Gadgets", description: product?.shortDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return <><Header /><main className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
    <Link href="/shop" className="text-slate text-sm hover:text-amber">← Back to shop</Link>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-8">
      <ProductGallery images={product.images} productName={product.name} />
      <div className="lg:py-4"><p className="eyebrow mb-4">Personal safety · everyday utility</p><h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{product.name}</h1><p className="text-amber text-2xl font-bold mt-5">৳{product.price}</p><p className="text-slate leading-relaxed mt-5">{product.shortDescription}</p><div className="my-8 section-rule" /><ProductActions slug={product.slug} name={product.name} price={product.price} image={product.images[0]} colors={product.colors} /><div className="mt-8 grid grid-cols-2 gap-3 text-sm"><div className="surface rounded-md p-4"><p className="font-semibold">Cash on delivery</p><p className="text-slate mt-1">Available at checkout</p></div><div className="surface rounded-md p-4"><p className="font-semibold">Practical design</p><p className="text-slate mt-1">Compact and easy to carry</p></div></div></div>
    </div>
    <section className="max-w-3xl mt-20 section-rule pt-10"><p className="eyebrow mb-3">Product details</p><h2 className="font-display text-2xl font-bold mb-5">Overview & features</h2><div className="whitespace-pre-line text-slate leading-relaxed">{product.fullDescription}</div></section>
    <section className="mt-20"><div className="flex justify-between items-end mb-6"><div><p className="eyebrow mb-2">You may also like</p><h2 className="font-display text-2xl font-bold">More useful gear</h2></div><Link href="/shop" className="text-amber text-sm">View all →</Link></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{products.filter((item) => item.slug !== product.slug).slice(0, 4).map((item) => <Link href={`/product/${item.slug}`} key={item.slug}><div className="relative aspect-square rounded-lg overflow-hidden"><Image src={item.images[0]} alt={item.name} fill className="object-cover" /></div><p className="font-semibold mt-3">{item.name}</p><p className="text-amber mt-1">৳{item.price}</p></Link>)}</div></section>
  </main></>;
}
