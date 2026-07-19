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