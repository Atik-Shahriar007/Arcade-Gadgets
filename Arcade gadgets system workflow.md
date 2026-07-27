# Arcade Gadgets — System Workflow Documentation

## Overview

Arcade Gadgets is a small e-commerce website selling self-defense products in Bangladesh, built with Next.js (App Router), Tailwind CSS, Supabase (database), and Resend (email notifications). There is **no online payment gateway** — all orders are **Cash on Delivery (COD)**. The customer submits their name, phone, address, and delivery zone; the order is saved to a database and the store owner is notified by email.

**Tech stack:**
- Framework: Next.js 16 (App Router, TypeScript)
- Styling: Tailwind CSS v4
- Database: Supabase (PostgreSQL)
- Email notifications: Resend
- Hosting: Vercel
- Cart persistence: Browser localStorage via React Context

---

## Current Product Catalog (7 products)

1. Police Pepper Spray — ৳690
2. Nato Pepper Spray — ৳690 (has color variants: Black, Green, Yellow)
3. 801 Type Taser — ৳620
4. 928 Type Taser — ৳850
5. Army Stick — ৳620
6. Premium Telescopic Stick — ৳1050
7. 7-in-1 LED Keychain — ৳550

Each product has: name, price, short description (for grid cards), full description (for product page, written in Bengali), and 2-3 images. Nato Pepper Spray additionally has a `colors` array; other products do not have variants.

---

## Full User-Facing Workflow

### 1. Homepage (`/`)
- Header with logo, brand name, hamburger menu (mobile sliding drawer), and icon-based nav (Home, Shop, Contact, Cart)
- Hero image carousel (3 slides, auto-rotating every 3 seconds, with manual arrows + dot indicators, real background photos with dark overlay for text readability)
- "Our Products" section showing all 7 products in a responsive grid (same card design as the Shop page)
- Footer with brand blurb, quick links, contact info (phone, email), and social links (Facebook, Instagram)

### 2. Shop Page (`/shop`)
- Displays all 7 products in a grid (1 column mobile, 2 tablet, 3 desktop)
- Each card shows: first product image, name, short description, price
- Clicking a card navigates to that product's detail page

### 3. Product Detail Page (`/product/[slug]`)
- Dynamic route — one page template handles all 7 products based on URL slug
- Image gallery: main large image + clickable thumbnails (clicking a thumbnail swaps the main image), interactive via a client component
- Product name, price, full description (Bengali, preserves line breaks)
- **If the product has color variants** (currently only Nato Pepper Spray): color swatch selector (clickable colored circles) appears above the action buttons. Customer must select a color before adding to cart, or a validation message appears.
- Two action buttons:
  - **"Add to Cart"** — adds the item (with selected color, if applicable) to the cart via Cart Context, shows a brief "Added ✓" state on the button, and triggers a toast notification (see below)
  - **"Order Now"** — links to `/checkout?product=slug` (currently just navigates to checkout; does not pre-fill/isolate a single item — checkout always operates on the full current cart)

### 4. Add-to-Cart Toast Notification
- On clicking "Add to Cart," a toast notification slides up from the bottom-right corner (amber background, glowing shadow effect, fade+slide animation)
- Shows: "Item added to cart" message + a "View Cart →" link
- Auto-dismisses after 4 seconds; multiple toasts can stack if added in quick succession

### 5. Cart Page (`/cart`)
- Lists all items currently in the cart (persisted in localStorage, so it survives page reloads/navigation)
- Each cart line shows: product image, name, selected color (if applicable), unit price, quantity stepper (+/-), line total, and a "Remove" link
- **Important:** the same product in two different colors is treated as two separate cart lines (uniquely identified by `slug + color` combination)
- Running total price at the bottom
- "Proceed to Checkout" button → `/checkout`
- Empty state: "Your cart is empty" message + "Browse Products" button if no items

### 6. Checkout Page (`/checkout`)
- Two-column layout: order summary (left/below on mobile) + form (right/above on mobile)
- Order summary shows: each item with quantity and line total, Subtotal, Delivery Charge (updates live once a zone is picked), and Grand Total
- Form fields (all required):
  - Full Name (text)
  - Phone Number (tel)
  - Delivery Address (textarea)
  - **Delivery Zone** — radio button selection between two options:
    - Inside Dhaka — ৳60 delivery charge
    - Outside Dhaka — ৳120 delivery charge
- Submit button: "Confirm Order (Cash on Delivery)"
- On submit: validates all fields are filled and a delivery zone is selected, then POSTs the full order (customer info + cart items + subtotal + delivery charge + total) to `/api/orders`

### 7. Order Submission Flow (backend)
When checkout form is submitted, it hits the API route `POST /api/orders`, which:
1. Validates required fields are present
2. Inserts a new row into the Supabase `orders` table with: name, phone, address, items (JSON), subtotal, delivery_zone, delivery_charge, total_price, and an auto-generated timestamp
3. Sends an email via Resend to the store owner's inbox, containing: customer name, phone, address, delivery zone, itemized list (with color noted per item where applicable), subtotal, delivery charge, and total
4. If email sending fails, the order is still saved (email failure doesn't block order success)
5. Returns success to the frontend, which clears the cart and redirects to `/order-success`

### 8. Order Success Page (`/order-success`)
- Simple confirmation page: checkmark icon, "Order Placed Successfully!" message, note that the customer will be contacted to confirm delivery and should pay cash on arrival
- "Continue Shopping" button → `/shop`

### 9. Contact Page (`/contact`)
- Four clickable cards, each linking out: Phone (tel: link), Email (mailto: link), Facebook page, Instagram page
- Each card has an icon, title, and value, and the entire card is clickable (not just the text)

### 10. Admin Order Management (`/admin/orders`)
- Password-protected (not tied to customer accounts — single shared admin password stored as an environment variable)
- Protected via Next.js proxy (formerly "middleware") that checks for a valid session cookie before allowing access; redirects to `/admin/login` if not authenticated
- Login page (`/admin/login`) — simple password form; on success, sets an httpOnly session cookie valid for 7 days
- Orders page fetches all orders from Supabase (newest first) via a protected API route (`/api/admin/orders`, which double-checks the session server-side)
- Each order displayed as a card showing: customer name, phone, timestamp, address, itemized products (with quantity, color if applicable, and line price), delivery zone + charge, and total price

---

## Data Model Summary

**Product** (static data, stored in `src/data/products.ts`, not in the database):
```
slug, name, price, shortDescription, fullDescription, images[], colors[] (optional)
```

**Cart Item** (client-side only, in React Context + localStorage):
```
slug, name, price, image, quantity, color (optional)
```

**Order** (Supabase `orders` table):
```
id (uuid), name, phone, address, items (jsonb), subtotal, delivery_zone, delivery_charge, total_price, created_at
```

---

## Known Design Decisions / Constraints

- No user accounts or login for customers — guest checkout only, cart identified purely by browser localStorage (not synced across devices)
- No online payment integration — Cash on Delivery only, by deliberate choice
- No inventory/stock tracking system currently in place
- Delivery is Bangladesh-only, with a simple two-zone flat rate model (Inside Dhaka / Outside Dhaka)
- Product catalog is static/hardcoded in a TypeScript file rather than database-driven — adding new products currently requires a code change and redeploy, not an admin UI
- Site is deployed on Vercel, connected to a GitHub repository for continuous deployment (push to GitHub → auto-deploys)
- Environment variables (Supabase URL/key, Resend API key, admin password) are stored in `.env.local` for local development and duplicated into Vercel's dashboard for production

---

#
