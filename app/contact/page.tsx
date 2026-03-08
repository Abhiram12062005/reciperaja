import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const FAQS = [
  { q:"How do I place an order?",              a:"Click 'Order Now' anywhere on the site. Fill your name, phone, address, and products — then send via WhatsApp or Email. We confirm within 2 hours." },
  { q:"Do you ship internationally?",          a:"Yes — Singapore, UK, USA, UAE, Australia, and more. Minimum 3 jars. Shipping calculated based on weight and destination." },
  { q:"Can I pick up in person?",              a:"Yes. We are based in Chennai, Tamil Nadu. Pickup available by appointment — WhatsApp us to schedule before visiting." },
  { q:"Do you accept bulk or corporate orders?",a:"Absolutely. We handle bulk orders for gifting, weddings, events, and offices. Minimum 20 jars for bulk pricing." },
];

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ background:"#273635" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1400&q=65" alt="Contact"
            className="w-full h-full object-cover" style={{ opacity:0.15 }} />
          <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(39,54,53,0.97) 0%,rgba(39,54,53,0.7) 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center pt-14">
          <div className="section-label section-label-light justify-center mb-5" style={{ animation:"fadeUp .5s ease both" }}>Get in Touch</div>
          <h1 className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize:"clamp(2.2rem,5.5vw,3.8rem)", animation:"fadeUp .6s .08s ease both" }}>
            We'd Love to Hear<br /><span className="italic" style={{ color:"#7da060" }}>from You</span>
          </h1>
          <p className="text-lg" style={{ color:"#c8c4bc", animation:"fadeUp .6s .16s ease both" }}>
            A question, a bulk order, or just saying hello — we respond personally within 2 hours.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 lg:py-28" style={{ background:"#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* LEFT — info */}
            <div className="reveal-left space-y-5">
              {[
                { label:"WhatsApp", detail:"+91 95609 77219",   sub:"Fastest response · 9am–8pm IST", href:"https://wa.me/919560977219",        bg:"#ecf7ed", border:"#a8d5ab", tc:"#2d6a30" },
                { label:"Email",    detail:"contact@reciperaja.com", sub:"We reply within 2 hours",    href:"mailto:orders@reciperaja.in",         bg:"#fff4ec", border:"#f5c99c", tc:"#9a4a00" },
                { label:"Location", detail:"Gurugram, Haryana",  sub:"Pickup by appointment",       href:"#",                                  bg:"#ecf2ff", border:"#b3c6f5", tc:"#2d4a9a" },
                { label:"Office email",    detail:"office@reciperaja.com",        sub:"Monday to Saturday",          href:"#",                                  bg:"#f7ecf7", border:"#d5a8d5", tc:"#6a2d6a" },
              ].map(({ label, detail, sub, href, bg, border, tc }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border transition hover:shadow-md block"
                  style={{ background:bg, borderColor:border }}>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-accent font-bold uppercase tracking-widest mb-0.5" style={{ color:tc }}>{label}</div>
                    <div className="font-display font-bold truncate" style={{ color:"#273635" }}>{detail}</div>
                    <div className="text-xs" style={{ color:"#9a9590" }}>{sub}</div>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color:"#9a9590" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}

              <a href="https://wa.me/919560977219?text=Hello%20RecipeRaja!%20I%20would%20like%20to%20enquire."
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold font-accent text-base tracking-wide transition btn-shimmer hover:opacity-90"
                style={{ background:"#25D366" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <div>
                <h3 className="font-display font-bold text-xl mb-4" style={{ color:"#273635" }}>Common Questions</h3>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }) => (
                    <div key={q} className="bg-white rounded-2xl p-4" style={{ border:"1px solid rgba(216,208,192,0.5)" }}>
                      <div className="font-semibold text-sm mb-1.5" style={{ color:"#273635" }}>{q}</div>
                      <div className="text-xs leading-relaxed" style={{ color:"#4e5650" }}>{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
