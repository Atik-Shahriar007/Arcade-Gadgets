"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="font-display font-semibold text-3xl mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate font-body mb-6">Your cart is empty.</p>
              <Link
                href="/shop"
                className="bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity inline-block"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-slate/15 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 bg-cream rounded-md overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0 sm:hidden">
                        <h3 className="font-display font-semibold">{item.name}</h3>
                        <p className="text-slate font-body text-sm">৳{item.price}</p>
                      </div>
                    </div>

                    <div className="hidden sm:block flex-1 min-w-0">
                      <h3 className="font-display font-semibold">{item.name}</h3>
                      <p className="text-slate font-body text-sm">৳{item.price}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-slate/30 rounded-md hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-body">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-slate/30 rounded-md hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-body font-semibold w-16 text-right">
                        ৳{item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeItem(item.slug)}
                        className="text-slate hover:text-red-500 transition-colors text-sm font-body"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate/20 pt-6">
                <span className="font-display font-semibold text-xl">Total</span>
                <span className="font-display font-bold text-xl">৳{totalPrice}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full text-center bg-amber text-ink font-body font-semibold px-6 py-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </section>
      </main>
    </>
  );
}