import { Phone, Mail } from "lucide-react";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h1 className="font-display font-semibold text-3xl mb-4">Contact Us</h1>
          <p className="text-slate font-body mb-10">
            Have a question about a product or an order? Reach out to us
            directly — we&apos;re happy to help.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <a
              href="tel:01761629615"
              className="block bg-white border border-slate/15 rounded-lg p-6 hover:border-amber hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-amber/15 rounded-full flex items-center justify-center mb-3">
                <Phone size={20} className="text-amber" />
              </div>
              <h3 className="font-display font-semibold mb-2">Phone / WhatsApp</h3>
              <span className="text-slate font-body">01761629615</span>
            </a>

            <a
              href="mailto:arcadebd.shop@gmail.com"
              className="block bg-white border border-slate/15 rounded-lg p-6 hover:border-amber hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-amber/15 rounded-full flex items-center justify-center mb-3">
                <Mail size={20} className="text-amber" />
              </div>
              <h3 className="font-display font-semibold mb-2">Email</h3>
              <span className="text-slate font-body">arcadebd.shop@gmail.com</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573210846976"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate/15 rounded-lg p-6 hover:border-amber hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-amber/15 rounded-full flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">Facebook</h3>
              <span className="text-slate font-body">Arcade Gadgets</span>
            </a>

            <a
              href="https://www.instagram.com/arcade_gadgets/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate/15 rounded-lg p-6 hover:border-amber hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-amber/15 rounded-full flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber" aria-hidden="true">
                  <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 18.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.059.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.055.059 1.372.059 4.042s-.01 2.987-.059 4.042c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748c-.353.137-.882.3-1.858.344-1.054.048-1.372.059-4.042.059s-2.987-.01-4.042-.059c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.055-.059-1.372-.059-4.042s.01-2.987.059-4.042c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15a3.1 3.1 0 0 1 1.15-.748c.353-.137.882-.3 1.858-.344C9.013 3.812 9.33 3.802 12 3.802zm0 3.064a5.134 5.134 0 1 0 0 10.268 5.134 5.134 0 0 0 0-10.268zm0 8.466a3.332 3.332 0 1 1 0-6.664 3.332 3.332 0 0 1 0 6.664zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">Instagram</h3>
              <span className="text-slate font-body">@arcade_gadgets</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}