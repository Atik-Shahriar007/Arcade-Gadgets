import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, items, subtotal, deliveryZone, deliveryCharge, totalPrice } = body;

    if (!name || !phone || !address || !items || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("orders")
      .insert({
        name,
        phone,
        address,
        items,
        subtotal,
        delivery_zone: deliveryZone,
        delivery_charge: deliveryCharge,
        total_price: totalPrice,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    // Send email notification (don't block the response if this fails)
    try {
      const itemsList = items
        .map((item: { name: string; quantity: number; price: number }) =>
          `${item.name} × ${item.quantity} — ৳${item.price * item.quantity}`
        )
        .join("\n");

      await resend.emails.send({
        from: "Arcade Gadgets <onboarding@resend.dev>",
        to: "atikshahriar16@iut-dhaka.edu",
        subject: `New Order from ${name}`,
        text: `New order received!

Customer: ${name}
Phone: ${phone}
Address: ${address}
Delivery Area: ${deliveryZone} (৳${deliveryCharge})

Items:
${itemsList}

Subtotal: ৳${subtotal}
Delivery: ৳${deliveryCharge}
Total: ৳${totalPrice}`,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Order is already saved, so we don't fail the whole request
    }

    return NextResponse.json({ success: true, order: data });
  } catch (err) {
    console.error("Order API error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}