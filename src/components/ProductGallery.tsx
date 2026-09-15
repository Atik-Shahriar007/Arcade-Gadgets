"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square bg-cream rounded-lg overflow-hidden border border-slate/15">
        <Image
          src={images[selected]}
          alt={productName}
          fill
          priority
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative aspect-square bg-cream rounded-md overflow-hidden border-2 transition-colors ${
                i === selected ? "border-amber" : "border-slate/15"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}