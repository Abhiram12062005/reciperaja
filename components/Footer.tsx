import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a2524" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="font-display font-black text-2xl text-brand-cream mb-1">
              Recipe<span className="text-brand-sage">Raja</span>
            </div>
            <div className="font-accent text-brand-stone text-xs tracking-widest uppercase mb-5">
              Raja of Flavours
            </div>
            <p className="text-brand-fog text-sm leading-relaxed mb-6">
              Handmade Indian pickles. Every jar made by hand following the original recipe — no factories, no preservatives, no shortcuts.
            </p>
            <div className="flex gap-3">
              {[
                { href: "#", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { href: "#", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              ].map(({ href, label, path }) => (
                <a key={label} href={href}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-brand-stone hover:text-brand-cream hover:border-brand-sage/50 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display font-bold text-brand-cream mb-5 text-base">Quick Links</div>
            <ul className="space-y-3">
              {[["Home","/"],["Pickles","/pickles"],["Recipes & Batters","/recipes"],["About Us","/about"],["Contact","/contact"]].map(([l,h]) => (
                <li key={h}>
                  <Link href={h} className="text-brand-fog text-sm hover:text-brand-cream transition hover-line">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-bold text-brand-cream mb-5 text-base">Contact</div>
            <div className="space-y-4">
              {[
                { label: "+91 95609 77219", sub: "WhatsApp & Calls", href: "https://wa.me/919560977219" },
                { label: "contact@reciperaja.com", sub: "Email orders", href: "mailto:contact@reciperaja.com" },
                { label: "office@reciperaja.com", sub: "Office Email address", href: "mailto:office@reciperaja.com" },
                { label: "Gurugram, Haryana", sub: "Pickup by appointment", href: "#" },
              ].map(({ label, sub, href }) => (
                <a key={label} href={href} className="block group">
                  <div className="text-brand-cream text-sm font-medium group-hover:text-brand-sageLight transition">{label}</div>
                  <div className="text-brand-stone text-xs">{sub}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-stone">
          <span>© 2024 RecipeRaja. All rights reserved.</span>
          <span>Made with tradition in Gurugram, India</span>
        </div>
      </div>
    </footer>
  );
}
