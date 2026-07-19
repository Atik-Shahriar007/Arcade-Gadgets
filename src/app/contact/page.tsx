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
            <div className="bg-white border border-slate/15 rounded-lg p-6">
              <h3 className="font-display font-semibold mb-2">Phone</h3>
              <a
                href="tel:01761629615"
                className="text-slate font-body hover:text-amber transition-colors"
              >
                01761629615
              </a>
            </div>

            <div className="bg-white border border-slate/15 rounded-lg p-6">
              <h3 className="font-display font-semibold mb-2">Email</h3>
              <a
                href="mailto:arcadebd.shop@gmail.com"
                className="text-slate font-body hover:text-amber transition-colors"
              >
                arcadebd.shop@gmail.com
              </a>
            </div>

            <div className="bg-white border border-slate/15 rounded-lg p-6">
              <h3 className="font-display font-semibold mb-2">Facebook</h3>
              <a
                href="https://www.facebook.com/profile.php?id=61573210846976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate font-body hover:text-amber transition-colors"
              >
                Arcade Gadgets
              </a>
            </div>

            <div className="bg-white border border-slate/15 rounded-lg p-6">
              <h3 className="font-display font-semibold mb-2">Instagram</h3>
              <a
                href="https://www.instagram.com/arcade_gadgets/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate font-body hover:text-amber transition-colors"
              >
                @arcade_gadgets
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}