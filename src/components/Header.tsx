"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Home, ShoppingBag, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-ink text-cream">
        {/* Top row: centered logo + brand name */}
        <div className="flex items-center justify-center py-3 border-b border-cream/10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Arcade Gadgets logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="font-display font-semibold text-xl tracking-tight">
              Arcade Gadgets
            </span>
          </Link>
        </div>

        {/* Bottom row: hamburger + icon nav */}
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="hover:text-amber transition-colors"
          >
            <Menu size={26} strokeWidth={2} />
          </button>

          <nav className="flex items-center gap-6 text-sm font-body">
            <Link
              href="/"
              className="flex flex-col items-center gap-0.5 hover:text-amber transition-colors"
            >
              <Home size={20} />
              <span className="text-xs">Home</span>
            </Link>
            <Link
              href="/shop"
              className="flex flex-col items-center gap-0.5 hover:text-amber transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="text-xs">Shop</span>
            </Link>
            <Link
              href="/contact"
              className="flex flex-col items-center gap-0.5 hover:text-amber transition-colors"
            >
              <Phone size={20} />
              <span className="text-xs">Contact</span>
            </Link>
            <Link
              href="/cart"
              className="relative flex flex-col items-center gap-0.5 hover:text-amber transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber text-ink text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="text-xs">Cart</span>
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}