"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";
import { useCart } from "@/context/CartContext";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  return <>
    <header className="sticky top-0 z-40 border-b border-slate/15 bg-cream/95 backdrop-blur">
      <div className="max-w-7xl mx-auto h-18 px-5 lg:px-8 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Arcade Gadgets home">
          <Image src="/images/logo.jpg" alt="Arcade Gadgets" width={38} height={38} className="rounded-full object-cover" />
          <span className="font-display font-bold tracking-tight text-lg">ARCADE <span className="text-amber">GADGETS</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate">
          <Link href="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <Link href="/#categories" className="hover:text-ink transition-colors">Categories</Link>
          <Link href="/#about" className="hover:text-ink transition-colors">Why us</Link>
          <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/shop" aria-label="Search products" className="hidden sm:flex p-2 text-slate hover:text-amber"><Search size={19}/></Link>
          <Link href="/cart" className="relative p-2 text-slate hover:text-amber" aria-label={`Cart, ${totalItems} items`}><ShoppingBag size={21}/>{totalItems > 0 && <span className="absolute -right-1 -top-1 min-w-5 h-5 px-1 rounded-full bg-amber text-[11px] font-bold text-ink flex items-center justify-center">{totalItems}</span>}</Link>
          <button onClick={() => setOpen(true)} className="md:hidden p-2 text-slate hover:text-ink" aria-label="Open menu"><Menu size={23}/></button>
        </div>
      </div>
    </header>
    <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
  </>;
}
