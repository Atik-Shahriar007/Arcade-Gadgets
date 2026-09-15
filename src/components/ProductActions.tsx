"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
const COLOR_SWATCHES: Record<string, string> = { Black: "#1b1d1e", Green: "#2f6b3a", Yellow: "#f0d002" };
export default function ProductActions({ slug, name, price, image, colors }: { slug: string; name: string; price: number; image: string; colors?: string[] }) {
  const { addItem } = useCart(); const { showToast } = useToast(); const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<string | null>(null); const [quantity, setQuantity] = useState(1); const [added, setAdded] = useState(false); const [error, setError] = useState(false);
  const validate = () => { if (colors?.length && !selectedColor) { setError(true); return false; } setError(false); return true; };
  const add = () => { if (!validate()) return; addItem({ slug, name, price, image, color: selectedColor || undefined }, quantity); setAdded(true); showToast("Item added to cart"); setTimeout(() => setAdded(false), 1800); };
  const buyNow = () => { if (!validate()) return; const params = new URLSearchParams({ product: slug, quantity: String(quantity) }); if (selectedColor) params.set("color", selectedColor); router.push(`/checkout?${params.toString()}`); };
  return <div className="space-y-6">
    {colors?.length ? <div><p className="text-sm font-semibold mb-3">Color {selectedColor && <span className="text-slate font-normal">· {selectedColor}</span>}</p><div className="flex gap-3">{colors.map((color) => <button key={color} type="button" aria-label={`Select ${color}`} aria-pressed={selectedColor === color} onClick={() => { setSelectedColor(color); setError(false); }} className={`w-10 h-10 rounded-full border-2 transition ${selectedColor === color ? "border-amber scale-110" : "border-slate/30"}`} style={{ backgroundColor: COLOR_SWATCHES[color] || "#ccc" }} />)}</div>{error && <p className="text-red-400 text-sm mt-2" role="alert">Select a color to continue.</p>}</div> : null}
    <div><p className="text-sm font-semibold mb-3">Quantity</p><div className="inline-flex items-center border border-slate/30 rounded-md"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-11 h-11 text-lg hover:bg-cream" aria-label="Decrease quantity">−</button><span className="w-10 text-center" aria-live="polite">{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} className="w-11 h-11 text-lg hover:bg-cream" aria-label="Increase quantity">+</button></div></div>
    <div className="grid sm:grid-cols-2 gap-3"><button type="button" onClick={add} className="bg-amber text-ink font-semibold px-5 py-3.5 rounded-md hover:bg-amber/90">{added ? "Added to cart ✓" : "Add to cart"}</button><button type="button" onClick={buyNow} className="border border-cream/25 text-ink font-semibold px-5 py-3.5 rounded-md hover:bg-cream/10">Buy now</button></div>
  </div>;
}
