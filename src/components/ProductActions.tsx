"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const COLOR_SWATCHES: Record<string, string> = {
  Black: "#1B2430",
  Green: "#2F6B3A",
  Yellow: "#F0D002",
};

export default function ProductActions({
  slug,
  name,
  price,
  image,
  colors,
}: {
  slug: string;
  name: string;
  price: number;
  image: string;
  colors?: string[];
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [colorError, setColorError] = useState(false);

  const handleAddToCart = () => {
    if (colors && colors.length > 0 && !selectedColor) {
      setColorError(true);
      return;
    }
    setColorError(false);
    addItem({ slug, name, price, image, color: selectedColor || undefined });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {colors && colors.length > 0 && (
        <div className="mb-5">
          <p className="font-body text-sm mb-2">
            Color: {selectedColor ? <span className="font-semibold">{selectedColor}</span> : null}
          </p>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => {
                  setSelectedColor(color);
                  setColorError(false);
                }}
                aria-label={color}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-amber scale-110"
                    : "border-slate/30"
                }`}
                style={{ backgroundColor: COLOR_SWATCHES[color] || "#ccc" }}
              />
            ))}
          </div>
          {colorError && (
            <p className="text-red-500 text-sm font-body mt-2">
              Please select a color before adding to cart.
            </p>
          )}
        </div>
      )}

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
    </div>
  );
}