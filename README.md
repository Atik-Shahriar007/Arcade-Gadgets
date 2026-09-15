# Arcade Gadgets

Arcade Gadgets is a Bangladesh-focused e-commerce storefront for practical personal-safety, utility, survival, and everyday-carry products. The interface is designed to feel calm, premium, and trustworthy rather than aggressive or game-like.

## Features

- Responsive storefront homepage with category discovery and featured products
- Static TypeScript product catalog with image galleries and optional color variants
- Persistent guest cart using browser local storage
- Cash-on-delivery checkout with Inside Dhaka / Outside Dhaka delivery zones
- Supabase order storage and Resend email notification support
- Password-protected admin order view
- Accessible responsive navigation, purchase controls, empty states, and order confirmation

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, Supabase, Resend, and Lucide React icons. The project remains Vercel-compatible and does not require a separate backend service.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` with the values used by your deployment. Never commit this file.

```text
SUPABASE_URL=
SUPABASE_SECRET_KEY=
RESEND_API_KEY=
ADMIN_PASSWORD=
ADMIN_EMAIL=
```

Supabase must contain an `orders` table matching the order fields used by `src/app/api/orders/route.ts`. Checkout intentionally uses cash on delivery; no online payment provider is configured.

## Project structure

- `src/app/` — App Router pages and API routes
- `src/components/` — shared navigation, gallery, purchase, and menu components
- `src/context/` — cart and toast state providers
- `src/data/products.ts` — current catalog and product descriptions
- `src/lib/supabase.ts` — server-side Supabase client helper
- `public/images/` — product and hero photography

## Commands

```bash
npm run lint
npm run build
```

## Deployment

Push the repository to GitHub and connect it to Vercel. Add the environment variables in the Vercel project settings before deploying. Product additions currently require an update to `src/data/products.ts` and a new deployment.

## Roadmap

Useful future improvements include inventory visibility, a database-backed product editor, order status updates, and a more explicit delivery/returns information page once those business rules are finalized.
