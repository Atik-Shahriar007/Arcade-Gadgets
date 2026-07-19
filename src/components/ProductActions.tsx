"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductActions({
  slug,
  name,
  price,
  image,
}: {
  slug: string;
  name: string;
  price: number;
  image: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ slug, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleAddToCart}
        className="bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
      <Link
        href={`/checkout?product=${slug}`}
        className="bg-ink text-cream font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-center"
      >
        Order Now
      </Link>
    </div>
  );
}