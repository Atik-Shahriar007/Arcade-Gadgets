"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-1.jpg",
    eyebrow: "Stay Safe, Be Prepared",
    heading: "Everyday Protection You Can Carry Anywhere",
    sub: "Compact, effective self-defense tools for real-world confidence.",
    cta: { label: "Shop Now", href: "/shop" },
  },
  {
    image: "/images/hero-2.jpg",
    eyebrow: "Bangladesh's No.1 Self-Defence Brand",
    heading: "Trusted by Thousands for Personal Safety",
    sub: "Quality-tested pepper sprays, batons, and safety gear.",
    cta: { label: "Explore Products", href: "/shop" },
  },
  {
    image: "/images/hero-3.jpg",
    eyebrow: "Cash on Delivery",
    heading: "Order Now, Pay When It Arrives",
    sub: "Simple ordering, fast delivery, no online payment needed.",
    cta: { label: "Order Today", href: "/shop" },
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive(index);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <section className="relative h-[420px] bg-ink overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-amber font-body text-sm tracking-wide uppercase mb-3">
              {slide.eyebrow}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-cream max-w-2xl mb-4">
              {slide.heading}
            </h1>
            <p className="text-cream/80 font-body max-w-md mb-6">{slide.sub}</p>
            <a
              href={slide.cta.href}
              className="bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              {slide.cta.label}
            </a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl z-10"
      >
        &lsaquo;
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl z-10"
      >
        &rsaquo;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-amber" : "w-2 bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}