import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const TIMELINE = [
  {
    year: "Ancient India",
    title: "Born from Necessity",
    desc: "Long before refrigeration, Indian households discovered that salt, oil, and sun could preserve a mango through an entire winter. What began as survival became a ritual passed between grandmothers and daughters."
  },
  {
    year: "The Bharani Era",
    title: "The Clay Pot Revolution",
    desc: "Terracotta bharanis became the vessel of choice across South India. The porous clay breathed just enough — regulating temperature, absorbing excess moisture, allowing fermentation to happen slowly and exactly right."
  },
  {
    year: "Regional Identity",
    title: "Every Region, Its Own Pickle",
    desc: "Andhra developed the ferociously spiced avakaya. Kerala leaned into coconut oil and green chillies. Tamil Nadu slow-cooked gongura and tamarind into paste. Each region's pickle was a fingerprint of its geography and produce."
  },
  {
    year: "The Spice Routes",
    title: "When Trade Changed Everything",
    desc: "Arab and Portuguese traders brought red chillies to South India in the 16th century. Within a generation, chilli had replaced long pepper in virtually every pickle recipe. The flavour profile we call 'traditional' today was itself a revolution."
  },
  {
    year: "The Monsoon Economy",
    title: "Seasonal Wisdom",
    desc: "South Indian pickling was always tied to seasons — raw mangoes only in March and April, tamarind in winter, chillies after the post-monsoon harvest. The calendar dictated the kitchen. Families planned an entire year of eating around one season's produce."
  },
  {
    year: "The Oil Question",
    title: "Gingelly, Mustard, Coconut",
    desc: "Cold-pressed gingelly (sesame) oil became the dominant pickling medium in South India for a precise reason: its natural antioxidants made it a preservative in its own right. The choice of oil was never arbitrary — it was science, arrived at over centuries of observation."
  },
  {
    year: "Today",
    title: "The Jar Carries the Knowledge",
    desc: "A good pickle is still the same thing it always was — the result of correct produce, correct salt, correct oil, correct time, and hands that know what they're doing. No machine has improved on that formula. None will."
  },
];

const TEAM = [
  {
    name: "Amma",
    role: "Founder & Chief Pickle Maker",
    yrs: "40+ years",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
    desc: "Every recipe in production was written by Amma's hand. She personally tastes and approves every single batch. If it doesn't pass her standard, it doesn't ship."
  },
  {
    name: "Operations Head",
    role: "Quality & Logistics",
    yrs: "10 years",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    desc: "Manages sourcing, production scheduling, and all dispatch logistics. His personal rule: never ship anything he wouldn't eat himself at dinner."
  },
  {
    name: "Production Head",
    role: "South Indian Products",
    yrs: "6 years",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    desc: "Leads all fresh batter and powder production. Brings years of home-cooking tradition to every batch of idli batter and sambar powder."
  },
];

const VALUES = [
  {
    title: "Honesty in Every Ingredient",
    desc: "Every ingredient listed on every label. If we cannot explain what it is, it does not go in the jar.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&q=75"
  },
  {
    title: "No Shortcuts. Ever.",
    desc: "21 days means 21 days. Hand-roasted means hand-roasted. We have never compressed our process to meet demand.",
    img: "https://images.unsplash.com/photo-1589811534998-8a40af1ac3c9?w=300&q=75"
  },
  {
    title: "Customer First, Always",
    desc: "Every complaint reviewed within 24 hours. Every jar that doesn't meet our standard is replaced, no questions asked.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=75"
  },
  {
    title: "Support Local Farmers",
    desc: "We source directly from farmers in Ratnagiri, Guntur, Vizag, and Tamil Nadu. Fair price, long-term relationships.",
    img: "https://images.unsplash.com/photo-1592997573655-2636f3f22c5d?w=300&q=75"
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-24 overflow-hidden" style={{ background: "#273635" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=1400&q=65"
            alt="Traditional pickle making"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(39,54,53,0.97) 0%,rgba(39,54,53,0.65) 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center pt-16">
          <div className="section-label section-label-light justify-center mb-6" style={{ animation: "fadeUp .5s ease both" }}>
            About Us
          </div>
          <h1
            className="font-display font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)", animation: "fadeUp .6s .08s ease both" }}
          >
            A Pickle Is Not a Product.<br />
            <span className="italic" style={{ color: "#7da060" }}>It Is an Argument Against Forgetting.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c8c4bc", animation: "fadeUp .6s .16s ease both" }}>
            Pickling is one of the oldest conversations between a cook and time. What we make today stands in that same tradition — unhurried, honest, and made entirely by hand.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 lg:py-32" style={{ background: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative">
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{ clipPath: "polygon(8% 0%,100% 0%,100% 88%,92% 100%,0% 100%,0% 12%)", aspectRatio: "4/5" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=800&q=80"
                  alt="Pickle making process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <div className="section-label">Why We Exist</div>
              <h2
                className="font-display font-black leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#273635" }}
              >
                Because a Pickle Made<br />
                <span className="italic" style={{ color: "#5d814c" }}>Correctly Cannot Be Rushed</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#4e5650" }}>
                <p>
                  Somewhere along the way, the word "pickle" started meaning a bottle of vinegar brine from a factory shelf. Bright colours, sharp acidity, uniform chunks. Shelf life of three years.
                </p>
                <p>
                  That is not a pickle. A pickle is raw mango that has spent three weeks under open sky, slowly giving itself to oil and spice. A pickle knows what season it came from. It remembers the hands that made it.
                </p>
                <p>
                  We make pickles the way they were always meant to be made. Slowly. By hand. With produce that comes from specific farmers in specific places. Nothing synthetic has ever entered our kitchen.
                </p>
              </div>
              <div className="mt-8 pl-5" style={{ borderLeft: "3px solid #5d814c" }}>
                <p className="font-display italic text-xl leading-snug" style={{ color: "#273635" }}>
                  "There is no machine that can tell when a pickle is ready. My hands have been doing this for 40 years. They just know."
                </p>
                <div className="font-accent font-bold text-sm mt-2" style={{ color: "#5d814c" }}>— Amma, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PICKLE EVOLUTION TIMELINE ── */}
      <section className="py-24 lg:py-32" style={{ background: "#ede8df" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <div className="section-label justify-center">A Short History</div>
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#273635" }}
            >
              How the Indian Pickle Became What It Is
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "#9a9590" }}>
              A few thousand years of wisdom that fits in a jar.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom,#5d814c,#d8d0c0)" }}
            />
            <div className="space-y-8">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <div key={i} className={`reveal d${Math.min(i + 1, 6)} flex gap-8 pl-16 relative`}>
                  {/* Dot */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      left: "18px", top: "20px",
                      width: "20px", height: "20px",
                      borderRadius: "50%",
                      background: "#f5f2ec",
                      border: "2px solid #5d814c"
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#5d814c" }} />
                  </div>
                  <div
                    className="flex-1 bg-white rounded-2xl p-5 card-lift"
                    style={{ border: "1px solid rgba(216,208,192,0.6)" }}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="font-accent font-bold text-white text-xs px-3 py-0.5 rounded-full"
                        style={{ background: "#577047" }}
                      >
                        {year}
                      </span>
                      <h3 className="font-display font-bold" style={{ color: "#273635" }}>{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4e5650" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 lg:py-32" style={{ background: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="section-label justify-center">The Team</div>
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#273635" }}
            >
              The People Behind Every Jar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, yrs, img, desc }, i) => (
              <div
                key={i}
                className={`reveal-scale d${i + 1} card-lift rounded-2xl overflow-hidden bg-white`}
                style={{ border: "1px solid rgba(216,208,192,0.5)" }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl mb-0.5" style={{ color: "#273635" }}>{name}</div>
                  <div className="font-accent font-bold text-sm mb-0.5" style={{ color: "#5d814c" }}>{role}</div>
                  <div className="text-xs mb-4" style={{ color: "#9a9590" }}>{yrs} experience</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4e5650" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 lg:py-32" style={{ background: "#273635" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="section-label section-label-light justify-center">What We Believe</div>
            <h2 className="font-display font-black text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map(({ title, desc, img }, i) => (
              <div
                key={i}
                className={`reveal-scale d${i + 1} card-lift group rounded-2xl overflow-hidden flex`}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={img} alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#c8c4bc" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20" style={{ background: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 reveal">
            <h2
              className="font-display font-black"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#273635" }}
            >
              Certifications & Standards
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "FSSAI Licensed",     d: "License No. 12345678901234", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { t: "GST Registered",     d: "No. 33XXXXX0000X1Z5",        path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { t: "Zero Preservatives", d: "100% natural, always",       path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { t: "Hygienic Packaging", d: "Food-grade glass jars",      path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
            ].map(({ t, d, path }, i) => (
              <div
                key={i}
                className={`reveal-scale d${i + 1} card-lift bg-white rounded-2xl p-5 text-center`}
                style={{ border: "1px solid rgba(216,208,192,0.5)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(93,129,76,0.1)", border: "1px solid rgba(93,129,76,0.2)" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#5d814c" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-sm mb-1" style={{ color: "#273635" }}>{t}</h3>
                <p className="text-xs" style={{ color: "#9a9590" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}