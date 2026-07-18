export default function Header() {
  return (
    <header className="w-full bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-semibold text-xl tracking-tight">
          Arcade Gadgets
        </span>
        <nav className="flex items-center gap-6 text-sm font-body">
          <a href="/" className="hover:text-amber transition-colors">
            Home
          </a>
          <a href="/shop" className="hover:text-amber transition-colors">
            Shop
          </a>
          <a href="/contact" className="hover:text-amber transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}