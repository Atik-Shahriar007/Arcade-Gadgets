"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, ShoppingBag, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/shop", label: "Shop", icon: ShoppingBag },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/cart", label: "Cart", icon: ShoppingCart },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
  {navItems.map(({ href, label, icon: Icon }) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        className={`relative flex flex-col items-center gap-1 pb-1 transition-colors duration-200 ${
          active ? "text-amber" : "text-cream hover:text-amber"
        }`}
      >
        <Icon size={20} />
        {href === "/cart" && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-amber text-ink text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        <span className="text-xs">{label}</span>
        <span
          className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-amber transition-all duration-200 ${
            active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </Link>
    );
  })}
</nav>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}