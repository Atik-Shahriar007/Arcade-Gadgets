import Link from "next/link";
import Header from "@/components/Header";

export default function OrderSuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-xl mx-auto px-6 py-24 text-center">
          <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="font-display font-bold text-3xl mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-slate font-body mb-8">
            Thank you for your order. We&apos;ll contact you shortly on your phone
            number to confirm delivery. Pay in cash when your order arrives at
            your doorstep.
          </p>
          <Link
            href="/shop"
            className="bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    </>
  );
}