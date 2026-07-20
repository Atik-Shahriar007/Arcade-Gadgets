"use client";

import { useEffect, useState } from "react";

interface OrderItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  color?: string;
}

interface Order {
  id: string;
  name: string;
  phone: string;
  address: string;
  items: OrderItem[];
  subtotal: number;
  delivery_zone: string;
  delivery_charge: number;
  total_price: number;
  created_at: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-cream px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-semibold text-3xl mb-8">Orders</h1>

        {loading ? (
          <p className="text-slate font-body">Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-slate font-body">No orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-slate/15 rounded-lg p-5"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-display font-semibold">{order.name}</h3>
                    <p className="text-slate font-body text-sm">{order.phone}</p>
                  </div>
                  <p className="text-slate font-body text-xs">
                    {new Date(order.created_at).toLocaleString("en-BD", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                <p className="text-ink/80 font-body text-sm mb-3">{order.address}</p>

                <div className="border-t border-slate/10 pt-3 space-y-1 mb-3">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm font-body">
                      <span>
                        {item.name}
                        {item.color && <span className="text-slate"> ({item.color})</span>} × {item.quantity}
                      </span>
                      <span>৳{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate/10 pt-3 flex justify-between items-center text-sm font-body">
                  <span className="text-slate">
                    Delivery: {order.delivery_zone} (৳{order.delivery_charge})
                  </span>
                  <span className="font-bold text-lg">৳{order.total_price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}