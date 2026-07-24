"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";

const DELIVERY_OPTIONS = {
  inside: { label: "Inside Dhaka", charge: 60 },
  outside: { label: "Outside Dhaka", charge: 120 },
} as const;

type DeliveryZone = keyof typeof DELIVERY_OPTIONS;

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone | "">("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const deliveryCharge = deliveryZone ? DELIVERY_OPTIONS[deliveryZone].charge : 0;
  const grandTotal = totalPrice + deliveryCharge;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!deliveryZone) {
      setError("Please select a delivery area.");
      return;
    }

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address,
          items,
          subtotal: totalPrice,
          deliveryZone: DELIVERY_OPTIONS[deliveryZone].label,
          deliveryCharge,
          totalPrice: grandTotal,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit order");

      clearCart();
      router.push("/order-success");
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="font-display font-semibold text-3xl mb-8">Checkout</h1>

          {items.length === 0 ? (
            <p className="text-slate font-body">
              Your cart is empty. Add a product before checking out.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Order summary */}
              <div className="order-2 md:order-1">
                <h2 className="font-display font-semibold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div
                      key={`${item.slug}-${item.color || "default"}`}
                      className="flex justify-between text-sm font-body"
                    >
                      <span>
                        {item.name}
                        {item.color && <span className="text-slate"> ({item.color})</span>} × {item.quantity}
                      </span>
                      <span>৳{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t border-slate/20 pt-3 font-body text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span>{deliveryZone ? `৳${deliveryCharge}` : "—"}</span>
                  </div>
                </div>

                <div className="flex justify-between font-body font-bold border-t border-slate/20 pt-3 mt-3 text-lg">
                  <span>Total</span>
                  <span>৳{grandTotal}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="order-1 md:order-2 space-y-4">
                <div>
                  <label className="block font-body text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-slate/30 rounded-md px-4 py-2 font-body focus:outline-none focus:border-amber"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate/30 rounded-md px-4 py-2 font-body focus:outline-none focus:border-amber"
                    placeholder="01XXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm mb-1">Delivery Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="w-full border border-slate/30 rounded-md px-4 py-2 font-body focus:outline-none focus:border-amber"
                    placeholder="House, road, area, city"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm mb-2">Delivery Area</label>
                  <div className="space-y-2">
                    {(Object.keys(DELIVERY_OPTIONS) as DeliveryZone[]).map((zone) => (
                      <label
                        key={zone}
                        className={`flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer transition-colors ${
                          deliveryZone === zone
                            ? "border-amber bg-amber/10"
                            : "border-slate/30"
                        }`}
                      >
                        <span className="flex items-center gap-2 font-body text-sm">
                          <input
                            type="radio"
                            name="deliveryZone"
                            value={zone}
                            checked={deliveryZone === zone}
                            onChange={() => setDeliveryZone(zone)}
                          />
                          {DELIVERY_OPTIONS[zone].label}
                        </span>
                        <span className="font-body text-sm text-slate">
                          ৳{DELIVERY_OPTIONS[zone].charge}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm font-body">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {submitting ? "Placing Order..." : "Confirm Order (Cash on Delivery)"}
                </button>
              </form>
            </div>
          )}
        </section>
      </main>
    </>
  );
}