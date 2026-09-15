"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Home, ShoppingBag, Phone, ShoppingCart } from "lucide-react";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay - click outside to close */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-ink text-cream z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream/10">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Arcade Gadgets logo"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <span className="font-display font-semibold text-lg tracking-tight">
              Arcade Gadgets
            </span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="hover:text-amber transition-colors"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-2 font-body">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-cream/10 hover:text-amber transition-colors"
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            href="/shop"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-cream/10 hover:text-amber transition-colors"
          >
            <ShoppingBag size={20} />
            Shop
          </Link>
          <Link
            href="/cart"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-cream/10 hover:text-amber transition-colors"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-cream/10 hover:text-amber transition-colors"
          >
            <Phone size={20} />
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}