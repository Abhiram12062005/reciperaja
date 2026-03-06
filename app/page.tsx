"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HomeOrderButton from "@/components/HomeOrderButton";
import Link from "next/link";

// ── IMAGES: Every URL is a real Indian pickle / food photo ──────────────────
// Hero background: Indian masala spice spread on dark surface
const HERO_BG   = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&q=85";
// Story: Woman in traditional kitchen stirring achaar
const STORY_IMG = "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=80";

const PROCESS = [
  {
    n: "01",
    title: "Hand-Pick Produce",
    desc: "Only the finest raw mangoes and vegetables make the cut. Around 30% of sourced produce is rejected at selection.",
    // Green raw mangoes in a basket / market crate — classic market produce shot
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
  },
  {
    n: "02",
    title: "Wash & Sun-Dry",
    desc: "Produce is spread under direct sunlight to exact moisture levels — too wet causes spoilage, too dry kills flavour.",
    // Vegetables / chillies laid out drying in bright sunlight on a flat surface
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2pr9d82Sg0VcaiMioug0yKjhe-2kALnFSA&s",
  },
  {
    n: "03",
    title: "Roast the Masala",
    desc: "Our 40-year spice blend — red chilli, mustard, fenugreek, turmeric — is hand-roasted and stone-pounded for every batch.",
    // Colourful Indian spices in small bowls overhead shot
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDf3J5VBuDZdmabhgIlYuaPygzGuPuKt91g&s",
  },
  {
    n: "04",
    title: "Pack into Bharanis",
    desc: "Traditional clay pots filled with produce, cold-pressed gingelly oil and rock salt. No plastic. No steel.",
    // Clay / terracotta pots stacked or in use — earthy pottery
    img: "https://www.shutterstock.com/image-photo/spicy-garlic-pickle-white-bowl-600nw-685488082.jpg",
  },
  {
    n: "05",
    title: "Jar, Label & Ship",
    desc: "Sealed in food-grade glass jars with FSSAI labelling, padded carefully, dispatched within 24 hours of final approval.",
    // Glass jars with preserved food / pickles neatly arranged
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihTItIgm24clo0MmYvaaduOm76RdL7NVbdw&s",
  },
];

const FEATURED = [
  { tag:"Bestseller", cat:"Pickle", name:"Mango Avakaya Pickle", price:"₹90 / 250g", href:"/pickles",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDBFSwZ08p_t3NV8bujAvpdR-_AQmErFJ6w&s",
    tagline:"Raw mango · mustard spice" },

  { tag:"Andhra Pride", cat:"Pickle", name:"Gongura Pickle", price:"₹85 / 250g", href:"/pickles",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1J7LDcZdrLlLN19jWKvEX66ddDeqE4nIxA&s",
    tagline:"Tangy sorrel · sesame oil" },

  { tag:"Classic", cat:"Pickle", name:"Tomato Pickle", price:"₹85 / 250g", href:"/pickles",
    img:"https://aahari.com/cdn/shop/products/Tomatopickle.jpg?v=1671688354&width=480",
    tagline:"Slow-cooked tomatoes · Andhra style" },

  { tag:"Signature", cat:"Pickle", name:"Boneless Chicken Pickle (Godavari Style)", price:"₹375 / 250g", href:"/pickles",
    img:"https://i0.wp.com/swathihomefoods.in/wp-content/uploads/2025/02/chicken-boneless-pickle.webp?fit=800%2C800&ssl=1",
    tagline:"Godavari spices · slow cooked" },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
];

const TESTIMONIALS = [
  { name:"Priya Nair",    loc:"London, UK",       stars:5, avatar:AVATARS[0], text:"Searched three years for mango pickle that tastes like home. RecipeRaja nailed it. The spice balance is exactly what my mother made in Kerala." },
  { name:"Ramesh Babu",   loc:"Hyderabad, India",  stars:5, avatar:AVATARS[1], text:"Gongura pickle that actually tastes Andhra. Sharp tanginess, generous oil, proper heat. Every other brand is a pale imitation." },
  { name:"Sunita Sharma", loc:"Mumbai, India",     stars:5, avatar:AVATARS[2], text:"Four orders of chicken pickle, every batch identical. Rare for homemade. Consistently bold, perfectly cured, never greasy." },
  { name:"Kavitha Rajan", loc:"Singapore",         stars:5, avatar:AVATARS[3], text:"My daughter cried when she opened the parcel. Said it smelled exactly like our Chennai home. Memory in a jar." },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background:"#1a2524" }}>
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Rows of handmade Indian pickle jars"
            className="w-full h-full object-cover" style={{ objectPosition:"center center", opacity:0.45 }} />
          <div className="absolute inset-0"
            style={{ background:"linear-gradient(100deg, rgba(26,37,36,0.98) 0%, rgba(26,37,36,0.82) 45%, rgba(26,37,36,0.25) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background:"linear-gradient(to top, #1a2524, transparent)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage:"radial-gradient(circle, #7da060 1px, transparent 1px)", backgroundSize:"38px 38px" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-28 pt-40 w-full">
          <div className="max-w-xl">
            <div className="section-label section-label-light mb-5" style={{ animation:"fadeUp .5s ease both" }}>
             · 100% Homemade
            </div>
            <h1 className="font-display font-black text-white leading-[1.06] mb-6"
              style={{ fontSize:"clamp(3rem,6.5vw,5rem)", animation:"fadeUp .6s .08s ease both" }}>
              Pickles Made<br />
              <span className="italic" style={{ color:"#7da060" }}>the Old Way.</span><br />
              Tasted the
              <span style={{ color:"#5d814c" }}> Right Way.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color:"#c8c4bc", animation:"fadeUp .6s .16s ease both" }}>
              Four decades of ancestral recipes. 21-day sun-curing in clay bharanis. Hand-roasted spices ground in stone mortars. Zero preservatives — zero shortcuts.
            </p>
            <div className="flex flex-wrap gap-2 mb-10" style={{ animation:"fadeUp .6s .22s ease both" }}>
              {["Zero Preservatives","Authentic Style","Ships Pan India"].map(f => (
                <span key={f} className="inline-flex items-center gap-1.5 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-accent font-semibold tracking-wide" style={{ color:"#c8c4bc" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:"#5d814c" }} />
                  {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4" style={{ animation:"fadeUp .6s .3s ease both" }}>
              <HomeOrderButton label="Order Now" />
              <Link href="/pickles"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-accent text-base tracking-wide transition-colors duration-200">
                Browse Pickles
              </Link>
            </div>
            {/* <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6" style={{ animation:"fadeUp .6s .38s ease both" }}>
              {[["50+","Products"],["10,000+","Jars Sold"],["40+","Years of Craft"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-display font-black text-white" style={{ fontSize:"clamp(1.8rem,3.2vw,2.4rem)" }}>{n}</div>
                  <div className="text-xs font-accent tracking-widest uppercase mt-0.5" style={{ color:"#9a9590" }}>{l}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2">
          <span className="font-accent tracking-[0.25em] rotate-90 mb-2" style={{ fontSize:"10px", color:"#9a9590" }}>scroll</span>
          <div className="w-px h-14 bg-gradient-to-b from-stone-500/60 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════ TICKER ═══════════════════ */}
      <div className="py-3.5 overflow-hidden" style={{ background:"#273635", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div className="marquee-track font-accent text-xs tracking-widest uppercase" style={{ color:"#c8c4bc" }}>
          {[...Array(2)].flatMap(() =>
            ["Avakaya Mango","Gongura Sorrel","Lemon Pickle","Garlic Pickle","Red Chilli","Tamarind Pickle",
             "Chicken Pickle","Mutton Pickle","Prawn Pickle","Fish Pickle","Idli Batter","Sambar Powder",
             "Gunpowder Podi","Coconut Chutney","Amla Pickle","Karela Pickle"].map((p,i) => (
              <span key={`${p}-${i}`} className="mx-8 flex items-center gap-3">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:"#5d814c" }} />{p}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══════════════════ STORY ═══════════════════ */}
      <section className="py-24 lg:py-36" style={{ background:"#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div className="reveal-left relative">
              <div className="rounded-3xl overflow-hidden relative" style={{ clipPath:"polygon(8% 0%,100% 0%,100% 88%,92% 100%,0% 100%,0% 12%)", aspectRatio:"4/5" }}>
                <img src={STORY_IMG} alt="Traditional Indian kitchen pickle making" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(39,54,53,0.55) 0%,transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-5 shadow-2xl" style={{ background:"#5d814c" }}>
                <div className="font-display font-black text-4xl text-white leading-none">40+</div>
                <div className="font-accent text-xs mt-1 tracking-wide" style={{ color:"rgba(255,255,255,0.75)" }}>Days of patience</div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="section-label">The Soul of a Pickle</div>
              <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
                Some Things Are Worth<br />
                <span className="italic" style={{ color:"#5d814c" }}>Waiting For</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color:"#4e5650" }}>
                <p>A pickle cannot be rushed. The raw mango must sit in salt for three days before it softens enough to accept the spices. The mustard needs time to bloom. The gingelly oil needs to seep through every fibre before the jar is sealed.</p>
                <p>We live in a world that delivers everything in minutes. A good pickle quietly refuses to participate. It asks you to wait — and in return, it gives you something no fast process ever could: depth, memory, and a flavour that lingers long after the meal is over.</p>
                <p>Every jar we make holds that waiting inside it. Open one months later and you will taste not just spice, but time itself.</p>
              </div>
              <div className="mt-8 pl-5" style={{ borderLeft:"3px solid #5d814c" }}>
                <p className="font-display italic text-xl leading-snug" style={{ color:"#273635" }}>
                  "There is no machine that can tell when a pickle is ready. My hands have been doing this since a long time. They just know."
                </p>
                <div className="font-accent text-sm font-bold mt-3" style={{ color:"#5d814c" }}>— Reciperaja, Founder</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-10">
                {[["3","Day Salt Cure"],["21","Day Ferment"],["40+","Days to Perfection"]].map(([n,l]) => (
                  <div key={l} className="text-center py-4 rounded-xl" style={{ background:"#ede8df" }}>
                    <div className="font-display font-black text-2xl" style={{ color:"#577047" }}>{n}</div>
                    <div className="text-xs font-accent mt-0.5 tracking-wide" style={{ color:"#9a9590" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY SECTION ═══════════════════ */}
      <section className="py-24 lg:py-36" style={{ background:"#273635" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="section-label section-label-light">Why It Matters</div>
              <h2 className="font-display font-black text-white leading-tight mb-5" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>
                Homemade vs<br /><span className="italic" style={{ color:"#7da060" }}>Factory-Made</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color:"#c8c4bc" }}>
                Check the label on any commercial pickle. You will find sodium benzoate, citric acid, artificial colour. We use salt, oil, and sun — the way it has always been done.
              </p>
              <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="grid grid-cols-3 px-4 py-2.5" style={{ background:"rgba(255,255,255,0.05)" }}>
                  {["Feature","RecipeRaja","Factory Brand"].map((h,i) => (
                    <span key={h} className="text-[10px] font-accent font-bold tracking-widest uppercase" style={{ color: i===1 ? "#7da060" : "#9a9590" }}>{h}</span>
                  ))}
                </div>
                {[
                  ["Preservatives","None — zero","Sodium benzoate"],
                  ["Curing Time","21-day sun cure","Chemical fast-cure"],
                  ["Batch Size","50–100 jars/week","100,000/day"],
                  ["Spices","Hand-roasted","Pre-ground powder"],
                  ["Taste","Complex & deep","Flat & uniform"],
                ].map(([f,rr,fb],i) => (
                  <div key={i} className="grid grid-cols-3 px-4 py-3"
                    style={{ background: i%2===0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)" }}>
                    <span className="text-xs font-semibold" style={{ color:"#9a9590" }}>{f}</span>
                    <span className="text-xs flex items-center gap-1.5" style={{ color:"#7da060" }}>
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color:"#5d814c" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>{rr}
                    </span>
                    <span className="text-xs" style={{ color:"rgba(255,255,255,0.3)" }}>{fb}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal-right">
              {[
                { title:"Farm to Jar",       desc:"Direct from Ratnagiri and Guntur farms. No middlemen.",        img:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80" },
                { title:"Stone-Ground Spice",desc:"Handwritten recipe. Spices pounded in stone mortars every batch.", img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" },
                { title:"Sun-Cured 21 Days", desc:"Clay bharani pots, gingelly oil, rock salt, open sunlight.",    img:"https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80" },
                { title:"Small Batch Only",  desc:"50–100 jars per week. Personally supervised. Never factory-made.", img:"https://images.unsplash.com/photo-1589244159943-460088ed5c83?w=400&q=80" },
              ].map(({ title,desc,img },i) => (
                <div key={i} className={`reveal-scale d${i+1} card-lift group rounded-2xl overflow-hidden`} style={{ background:"#344948" }}>
                  <div className="h-32 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-sm mb-1" style={{ color:"#f5f2ec" }}>{title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color:"#c8c4bc" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section className="py-24 lg:py-36" style={{ background:"#ede8df" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 reveal">
            <div>
              <div className="section-label">The Process</div>
              <h2 className="font-display font-black leading-tight" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
                How Every Jar<br /><span className="italic" style={{ color:"#577047" }}>is Made</span>
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed md:text-right" style={{ color:"#4e5650" }}>
              Six steps. Zero shortcuts. The exact same process since 1982.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map(({ n,title,desc,img },i) => (
              <div key={i} className={`reveal-scale d${(i%6)+1} card-lift group rounded-2xl overflow-hidden bg-white`}>
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(39,54,53,0.55) 0%,transparent 55%)" }} />
                  <div className="absolute top-3 left-3 font-display font-black text-xs px-2.5 py-1 rounded-full leading-none" style={{ background:"#f5f2ec", color:"#273635" }}>
                    {n}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base mb-2" style={{ color:"#273635" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#4e5650" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED ═══════════════════ */}
      <section className="py-24 lg:py-36" style={{ background:"#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <div className="section-label justify-center">Fan Favourites</div>
            <h2 className="font-display font-black" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
              Most Loved Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {FEATURED.map(({ tag,cat,name,price,href,img,tagline },i) => (
              <Link key={i} href={href}
                className={`reveal-scale d${i+1} card-lift group block rounded-2xl overflow-hidden bg-white`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(39,54,53,0.6) 0%,transparent 55%)" }} />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background:"rgba(255,255,255,0.92)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat==="Pickle" ? "#5d814c" : "#d97b20" }} />
                    <span className="text-[10px] font-accent font-bold" style={{ color:"#273635" }}>{cat}</span>
                  </div>
                  <span className="absolute top-3 right-3 tag-pill text-[10px] text-white" style={{ background:"rgba(39,54,53,0.8)" }}>{tag}</span>
                </div>
                <div className="p-4">
                  <div className="text-xs font-accent mb-1" style={{ color:"#9a9590" }}>{tagline}</div>
                  <h3 className="font-display font-bold text-base leading-snug mb-3" style={{ color:"#273635" }}>{name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-accent font-bold text-sm" style={{ color:"#5d814c" }}>{price}</span>
                    <span className="text-xs font-medium group-hover:translate-x-1 transition-transform inline-block" style={{ color:"#577047" }}>View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/pickles" className="btn-shimmer text-white px-8 py-3.5 rounded-xl font-bold font-accent tracking-wide transition-colors" style={{ background:"#577047" }}
              onMouseEnter={e => (e.currentTarget.style.background="#5d814c")}
              onMouseLeave={e => (e.currentTarget.style.background="#577047")}>
              All Pickles
            </Link>
            <Link href="/recipes" className="border-2 px-8 py-3.5 rounded-xl font-bold font-accent tracking-wide transition-all hover:text-white" style={{ borderColor:"#4e5650", color:"#4e5650" }}
              onMouseEnter={e => { e.currentTarget.style.background="#4e5650"; e.currentTarget.style.color="white"; }}
              onMouseLeave={e => { e.currentTarget.style.background=""; e.currentTarget.style.color="#4e5650"; }}>
              Recipes &amp; Batters
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 lg:py-36" style={{ background:"#273635" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 reveal">
            <div className="section-label section-label-light">Testimonials</div>
            <h2 className="font-display font-black text-white" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>
              What Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.map(({ name,loc,stars,avatar,text },i) => (
              <div key={i} className={`${i%2===0 ? "reveal-left" : "reveal-right"} d${i+1}`}>
                <div className="h-full rounded-2xl p-7 card-lift" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex gap-0.5 mb-5">
                    {Array(stars).fill(0).map((_,s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-display italic text-white text-lg leading-relaxed mb-6">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" style={{ border:"2px solid rgba(93,129,76,0.4)" }} />
                    <div>
                      <div className="font-semibold text-white text-sm">{name}</div>
                      <div className="text-xs font-accent" style={{ color:"#9a9590" }}>{loc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background:"#4e5650" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1589244159943-460088ed5c83?w=1400&q=70"
            alt="Pickle jars ready to ship" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse at center,rgba(78,86,80,0.4) 0%,rgba(78,86,80,0.88) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage:"radial-gradient(circle, #7da060 1px, transparent 1px)", backgroundSize:"40px 40px" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center reveal">
          <div className="section-label section-label-light justify-center mb-6">Ready to Order?</div>
          <h2 className="font-display font-black text-white mb-4 leading-tight" style={{ fontSize:"clamp(2.2rem,5vw,3.8rem)" }}>
            Taste our<br />
            <span className="italic" style={{ color:"#7da060" }}>Homemade Mastery</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color:"#c8c4bc" }}>
            Authentic, preservative-free pickles and South Indian foods — delivered anywhere in the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HomeOrderButton label="Order Now" />
            <Link href="/pickles"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-accent tracking-wide transition-all">
              Browse All Pickles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
