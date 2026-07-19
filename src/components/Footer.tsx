import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-cream mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display font-semibold text-lg mb-3">Arcade Gadgets</h3>
          <p className="text-cream/70 font-body text-sm">
            Bangladesh&apos;s No.1 Self-Defence Products Brand. Stay safe, be
            prepared.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-cream/70 font-body text-sm">
            <li>
              <Link href="/" className="hover:text-amber transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-2 text-cream/70 font-body text-sm mb-4">
            <li>Phone: 01761629615</li>
            <li>Email: arcadebd.shop@gmail.com</li>
            <li>Cash on Delivery available nationwide</li>
          </ul>

          <div className="flex flex-col gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61573210846976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-amber transition-colors font-body text-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Follow us on Facebook
            </a>
            <a
              href="https://www.instagram.com/arcade_gadgets/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-amber transition-colors font-body text-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 18.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.059.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.055.059 1.372.059 4.042s-.01 2.987-.059 4.042c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748c-.353.137-.882.3-1.858.344-1.054.048-1.372.059-4.042.059s-2.987-.01-4.042-.059c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.055-.059-1.372-.059-4.042s.01-2.987.059-4.042c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15a3.1 3.1 0 0 1 1.15-.748c.353-.137.882-.3 1.858-.344C9.013 3.812 9.33 3.802 12 3.802zm0 3.064a5.134 5.134 0 1 0 0 10.268 5.134 5.134 0 0 0 0-10.268zm0 8.466a3.332 3.332 0 1 1 0-6.664 3.332 3.332 0 0 1 0 6.664zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4">
        <p className="text-center text-cream/50 font-body text-xs">
          © {new Date().getFullYear()} Arcade Gadgets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}