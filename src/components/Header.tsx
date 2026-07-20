"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="w-full bg-ink text-cream">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Arcade Gadgets logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display font-semibold text-xl tracking-tight">
            Arcade Gadgets
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-body">
          <Link href="/" className="hover:text-amber transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-amber transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-amber transition-colors">
            Contact
          </Link>
          <Link
            href="/cart"
            className="relative flex flex-col items-center gap-0.5 hover:text-amber transition-colors"
          >
            <ShoppingCart size={22} strokeWidth={2} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber text-ink text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="text-xs font-body leading-none">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}