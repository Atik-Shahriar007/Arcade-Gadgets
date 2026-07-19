"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="w-full bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-xl tracking-tight">
          Arcade Gadgets
        </Link>
        <nav className="flex items-center gap-6 text-sm font-body">
          <Link href="/" className="hover:text-amber transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-amber transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-amber transition-colors">
            Contact
          </Link>
          <Link href="/cart" className="relative hover:text-amber transition-colors">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-amber text-ink text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}