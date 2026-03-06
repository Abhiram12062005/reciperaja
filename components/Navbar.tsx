"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OrderModal from "./OrderModal";

const NAV_LINKS = [
  { href: "/",        label: "Home" },
  { href: "/pickles", label: "Pickles" },
  { href: "/recipes", label: "Recipes" },
  { href: "/cloudkitchen", label: "Cloud Kitchen" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [modalOpen,  setModalOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-deep/95 backdrop-blur-md shadow-lg shadow-brand-deep/20"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-display font-black text-xl tracking-tight text-brand-cream group-hover:text-brand-sageLight transition-colors">
                Recipe<span className="text-brand-sage">Raja</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link key={l.href} href={l.href}
                    className={`relative px-4 py-2 text-sm font-medium font-body tracking-wide transition-colors duration-200 rounded-lg
                      ${active
                        ? "text-brand-cream bg-white/10"
                        : "text-brand-fog hover:text-brand-cream hover:bg-white/8"
                      }`}>
                    {l.label}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-sage rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://wa.me/919560977219" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-brand-fog hover:text-brand-cream hover:border-white/40 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <button onClick={() => setModalOpen(true)}
                className="btn-shimmer bg-brand-sage hover:bg-brand-forest text-white px-5 py-2.5 rounded-xl text-sm font-bold font-accent tracking-wide transition-colors duration-200">
                Order Now
              </button>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden flex flex-col gap-1.5 p-2 text-brand-cream"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-deep border-t border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 py-6 space-y-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "bg-brand-sage/20 text-brand-cream"
                    : "text-brand-fog hover:text-brand-cream hover:bg-white/5"
                }`}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                className="w-full bg-brand-sage text-white py-3 rounded-xl font-bold font-accent">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
