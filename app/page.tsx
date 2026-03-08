"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HomeOrderButton from "@/components/HomeOrderButton";
import Link from "next/link";

// ── IMAGES ───────────────────────────────────────────────────────────────────
const HERO_BG   = "https://images.unsplash.com/photo-1630383249896-424e482df921?w=1600&q=85";
const STORY_IMG = "https://images.stockcake.com/public/d/0/2/d022f4e9-302f-4e09-869d-9f98fd8b163d_large/chef-seasoning-food-stockcake.jpg";

// ── HOW WE COOK ───────────────────────────────────────────────────────────────
const PROCESS = [
  { n:"01", title:"Source Real Ingredients",
    desc:"Every vegetable, lentil, spice and protein comes from farms and suppliers our family has trusted for decades. Nothing generic, nothing unnamed.",
    img:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80" },
  { n:"02", title:"Prepare Everything by Hand",
    desc:"Grinding, chopping, soaking, fermenting — every step done by hand in our Chennai kitchen. The same way it has been done here since 1982.",
    img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { n:"03", title:"Roast & Grind Spices Fresh",
    desc:"Our masala blends are dry-roasted on an open flame and stone-ground fresh for every batch. No pre-mixed powders. No shortcuts in the spice work.",
    img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80" },
  { n:"04", title:"Cook the Traditional Way",
    desc:"Slow-cooked gravies on a wood flame. Sun-cured pickles in clay bharanis. Stone-ground batters fermented overnight. The method is always chosen for the food — never for speed.",
    img:"https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg" },
  { n:"05", title:"Taste, Adjust & Approve",
    desc:"Every dish and every batch is personally tasted before it leaves the kitchen. If the spice balance, salt or texture is even slightly off, it doesn't go out.",
    img:"https://www.shutterstock.com/image-photo/a-joyful-indian-man-his-600nw-2635940877.jpg" },
  { n:"06", title:"Pack & Dispatch Within 24hrs",
    desc:"Food-grade glass jars, honest FSSAI labelling, careful packing. Dispatched within 24 hours of final approval — so what arrives is as fresh as possible.",
    img:"https://image.made-in-china.com/318f0j00BavGcYHsbqke/631-mp4.webp" },
];

// ── FEATURED PICKLES ─────────────────────────────────────────────────────────
const FEATURED_PICKLES = [
  { name:"Tomato Pickle", spice:3, type:"Veg", tag:"Classic",
    origin:"Andhra Pradesh", price:"₹85 / 250g", shelf:"6 months",
    img:"https://aahari.com/cdn/shop/products/Tomatopickle.jpg?v=1671688354&width=480",
    desc:"Ripe tomatoes cooked slowly with chilli powder, mustard seeds and sesame oil creating a tangy Andhra-style pickle." },

  { name:"Mango Avakaya Pickle", spice:5, type:"Veg", tag:"Bestseller",
    origin:"Andhra Pradesh", price:"₹90 / 250g", shelf:"12 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDBFSwZ08p_t3NV8bujAvpdR-_AQmErFJ6w&s",
    desc:"Raw mango chunks preserved in mustard powder, red chilli and gingelly oil. The most iconic Andhra pickle." },

  { name:"Gongura Pickle", spice:4, type:"Veg", tag:"Andhra Pride",
    origin:"Guntur, Andhra Pradesh", price:"₹85 / 250g", shelf:"8 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1J7LDcZdrLlLN19jWKvEX66ddDeqE4nIxA&s",
    desc:"Tangy gongura sorrel leaves cooked with spices and sesame oil for a sharp and rich flavour." },
  { name:"Andhra Spicy Prawns Pickle", spice:5, type:"Non-Veg", tag:"Bhimavaram Special",
    origin:"Bhimavaram, Andhra Pradesh", price:"₹425 / 250g", shelf:"3 months",
    img:"https://assets.tendercuts.in/product/P/K/ce27d721-a547-47d5-a6bc-03eb422bf5b5.webp",
    desc:"Fresh prawns marinated with fiery Guntur chilli and garlic, slow-cooked in sesame oil." },

];

// ── FEATURED RECIPES ─────────────────────────────────────────────────────────
const FEATURED_RECIPES = [
  { tag:"Bestseller",  cat:"Breakfast", name:"Masala Dosa",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH7H-KRy-dnN9To-d5TJu7dKpY3f_nr0w3Q&s",
    tagline:"Crispy · potato masala · coconut chutney" },
  { tag:"Temple Style", cat:"Breakfast", name:"Ven Pongal",
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",
    tagline:"Ghee · pepper · cumin · cashew" },
  { tag:"Aromatic",    cat:"Chicken",   name:"Chicken Chettinad",
    img:"https://www.whiskaffair.com/wp-content/uploads/2020/09/Chicken-Chettinad-Curry-2-3.jpg",
    tagline:"Kalpasi · stone flower · coconut spice" },
  { tag:"Coastal",     cat:"Seafood",   name:"Prawn Ghee Roast",
    img:"https://theyummydelights.com/wp-content/uploads/2020/10/prawns-ghee-roast.jpg",
    tagline:"Mangalorean style · ghee · dry masala" },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
];

const TESTIMONIALS = [
  { name:"Priya Nair",    loc:"London, UK",      stars:5, avatar:AVATARS[0],
    text:"This is the first time in three years abroad that South Indian food has actually tasted like home. Not close — exactly like home. RecipeRaja is the real thing." },
  { name:"Ramesh Babu",   loc:"Hyderabad, India", stars:5, avatar:AVATARS[1],
    text:"The Chettinad chicken and gongura pickle together — this is what a proper South Indian meal is supposed to feel like. Absolutely no compromise on flavour." },
  { name:"Sunita Sharma", loc:"Mumbai, India",    stars:5, avatar:AVATARS[2],
    text:"Ordered the idli batter, sambar, and chicken pickle together. Everything was consistent, bold, and made with care. Every order since has been just as good." },
  { name:"Kavitha Rajan", loc:"Singapore",        stars:5, avatar:AVATARS[3],
    text:"My daughter opened the parcel, took one smell, and said it was exactly like Chennai. That smell — the spices, the oil, the realness — cannot be faked. RecipeRaja doesn't fake it." },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background:"#1a2524" }}>
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Authentic South Indian food spread"
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
              Authentic South Indian Food
            </div>
            <h1 className="font-display font-black text-white leading-[1.06] mb-6"
              style={{ fontSize:"clamp(3rem,6.5vw,5rem)", animation:"fadeUp .6s .08s ease both" }}>
              South Indian Food<br />
              <span className="italic" style={{ color:"#7da060" }}>the Way It Was</span><br />
              <span style={{ color:"#5d814c" }}>Always Made.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color:"#c8c4bc", animation:"fadeUp .6s .16s ease both" }}>
              Handmade breakfasts, slow-cooked curries, stone-ground batters, sun-cured pickles — four decades of South Indian cooking from a Chennai kitchen, shipped to your door. Zero preservatives. Zero shortcuts.
            </p>
            <div className="flex flex-wrap gap-2 mb-10" style={{ animation:"fadeUp .6s .22s ease both" }}>
              {["Zero Preservatives","100% Homemade","Breakfast to Dinner","Ships Pan world"].map(f => (
                <span key={f} className="inline-flex items-center gap-1.5 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-accent font-semibold tracking-wide" style={{ color:"#c8c4bc" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:"#5d814c" }} />
                  {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4" style={{ animation:"fadeUp .6s .3s ease both" }}>
              <HomeOrderButton label="Order Now" />
              <Link href="/recipes"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-accent text-base tracking-wide transition-colors duration-200">
                Explore Our Menu
              </Link>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6" style={{ animation:"fadeUp .6s .38s ease both" }}>
              {[["76+","Dishes & Recipes"],["10,000+","Happy Customers"],["40+","Years of Cooking"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-display font-black text-white" style={{ fontSize:"clamp(1.8rem,3.2vw,2.4rem)" }}>{n}</div>
                  <div className="text-xs font-accent tracking-widest uppercase mt-0.5" style={{ color:"#9a9590" }}>{l}</div>
                </div>
              ))}
            </div>
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
            ["Masala Dosa","Ven Pongal","Sambar Rice","Chicken Chettinad","Avakaya Pickle",
             "Gongura Pickle","Prawn Ghee Roast","Idli & Sambar","Mutton Biryani","Coconut Chutney",
             "Andhra Chicken Fry","Bisibele Bath","Curd Rice","Fish Curry","Medu Vada","Lemon Pickle"].map((p,i) => (
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
                <img src={STORY_IMG} alt="Authentic South Indian food being prepared" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(39,54,53,0.55) 0%,transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-5 shadow-2xl" style={{ background:"#5d814c" }}>
                <div className="font-display font-black text-3xl text-white leading-none">100%</div>
                <div className="font-accent text-xs mt-1 tracking-wide" style={{ color:"rgba(255,255,255,0.75)" }}>Homemade. Always.</div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="section-label">Why RecipeRaja</div>
              <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
                South Indian Food<br />
                <span className="italic" style={{ color:"#5d814c" }}>the Way It Was Always Eaten</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color:"#4e5650" }}>
                <p>South Indian food is one of the most layered, complex cuisines in the world. A proper sambar takes hours. A real dosa batter needs overnight fermentation. A Chettinad curry needs spices that most kitchens no longer stock. Done right, it is extraordinary. Done fast, it is nothing.</p>
                <p>Most people today have never tasted it done right. What they get from restaurants and packaged brands is a shortcut version — chemically leavened, pressure-cooked, pre-spiced and preserved. It fills the stomach but carries none of the depth that South Indian food is actually capable of.</p>
                <p>RecipeRaja exists to change that. Every dish we make is prepared by hand, the traditional way, with real spices and real time. We bring authentic South Indian food — from morning idlis to slow-cooked Andhra curries — directly to your table, wherever you are.</p>
              </div>
              <div className="mt-8 pl-5" style={{ borderLeft:"3px solid #5d814c" }}>
                <p className="font-display italic text-xl leading-snug" style={{ color:"#273635" }}>
                  "South Indian food is not fast food. It never was. The depth you taste in every bite comes from time, patience and ingredients that are never compromised."
                </p>
                <div className="font-accent text-sm font-bold mt-3" style={{ color:"#5d814c" }}>— RecipeRaja Kitchen</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-10">
                {[["76+","Dishes"],["12","Countries"],["0%","Preservatives"]].map(([n,l]) => (
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
                Real South Indian Food<br /><span className="italic" style={{ color:"#7da060" }}>vs Packaged Imitation</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color:"#c8c4bc" }}>
                Most "South Indian" food available today is optimised for shelf life and low production cost. Spices are pre-ground months in advance. Batters are chemically leavened. Curries are pressure-cooked in minutes. The result looks South Indian — but it doesn't taste like it. We make food the way it was always supposed to be made.
              </p>
              <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="grid grid-cols-3 px-4 py-2.5" style={{ background:"rgba(255,255,255,0.05)" }}>
                  {["What","RecipeRaja","Others"].map((h,i) => (
                    <span key={h} className="text-[10px] font-accent font-bold tracking-widest uppercase" style={{ color: i===1 ? "#7da060" : "#9a9590" }}>{h}</span>
                  ))}
                </div>
                {[
                  ["Spices",        "Stone-ground fresh daily",  "Pre-mixed powder"],
                  ["Batter",        "Overnight fermentation",    "Chemical leavening"],
                  ["Cooking",       "Slow fire, real time",      "Pressure-cooked fast"],
                  ["Preservatives", "None — ever",               "Sodium benzoate, acids"],
                  ["Taste",         "Layered & authentic",       "Flat & standardised"],
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
                { title:"Breakfast to Dinner",  desc:"Morning idlis and dosas, afternoon rice and curries, evening biryanis and pickles — the full South Indian table, all homemade.",  img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
                { title:"Fresh-Ground Masalas", desc:"Every spice blend roasted on open flame and stone-ground fresh for the batch. No pre-made powders sitting on a shelf for months.", img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" },
                { title:"Handwritten Recipes",  desc:"40+ year old recipes, inherited and unchanged. Proved not in a lab but by memory, taste and three generations of South Indian cooking.", img:"https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80" },
                { title:"Small Batches Always", desc:"Every dish made in small quantities so each batch can be personally supervised, tasted and approved before it leaves the kitchen.",    img:"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&q=80" },
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
              <div className="section-label">How We Cook</div>
              <h2 className="font-display font-black leading-tight" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
                From Our Kitchen<br /><span className="italic" style={{ color:"#577047" }}>to Your Table</span>
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed md:text-right" style={{ color:"#4e5650" }}>
              Six steps. Every dish. Every batch. The same since 1982.
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

      {/* ═══════════════════ FEATURED PICKLES ═══════════════════ */}
      <section className="py-24 lg:py-32" style={{ background:"#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12 reveal">
            <div>
              <div className="section-label">Our Pickles</div>
              <h2 className="font-display font-black" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#273635" }}>
                Most Loved<br /><span className="italic" style={{ color:"#5d814c" }}>Pickle Selection</span>
              </h2>
              <p className="mt-2 text-sm" style={{ color:"#9a9590" }}>
                20 varieties · Veg &amp; Non-Veg · Zero preservatives
              </p>
            </div>
            <Link href="/pickles"
              className="btn-shimmer hidden lg:inline-flex text-white px-7 py-3.5 rounded-xl font-bold font-accent tracking-wide flex-shrink-0"
              style={{ background:"#577047" }}
              onMouseEnter={e => (e.currentTarget.style.background="#5d814c")}
              onMouseLeave={e => (e.currentTarget.style.background="#577047")}>
              View All Pickles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {FEATURED_PICKLES.map(({ tag,name,price,img,tagline },i) => (
              <Link key={i} href="/pickles"
                className={`reveal-scale d${i+1} card-lift group block rounded-2xl overflow-hidden bg-white`}
                style={{ border:"1px solid rgba(216,208,192,0.5)" }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(39,54,53,0.6) 0%,transparent 55%)" }} />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background:"rgba(255,255,255,0.92)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:"#5d814c" }} />
                    <span className="text-[10px] font-accent font-bold" style={{ color:"#273635" }}>Pickle</span>
                  </div>
                  <span className="absolute top-3 right-3 tag-pill text-[10px] text-white" style={{ background:"rgba(39,54,53,0.8)" }}>{tag}</span>
                </div>
                <div className="p-4">
                  <div className="text-xs font-accent mb-1" style={{ color:"#9a9590" }}>{tagline}</div>
                  <h3 className="font-display font-bold text-base leading-snug mb-3" style={{ color:"#273635" }}>{name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-accent font-bold text-sm" style={{ color:"#5d814c" }}>{price}</span>
                    <span className="text-xs font-medium group-hover:translate-x-1 transition-transform inline-block" style={{ color:"#577047" }}>Order →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center lg:hidden">
            <Link href="/pickles"
              className="btn-shimmer text-white px-8 py-3.5 rounded-xl font-bold font-accent tracking-wide"
              style={{ background:"#577047" }}
              onMouseEnter={e => (e.currentTarget.style.background="#5d814c")}
              onMouseLeave={e => (e.currentTarget.style.background="#577047")}>
              View All Pickles →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED RECIPES ═══════════════════ */}
      <section className="py-24 lg:py-32" style={{ background:"#273635" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12 reveal">
            <div>
              <div className="section-label section-label-light">Our Recipes</div>
              <h2 className="font-display font-black text-white" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>
                Popular<br /><span className="italic" style={{ color:"#7da060" }}>Dishes &amp; Recipes</span>
              </h2>
              <p className="mt-2 text-sm" style={{ color:"#9a9590" }}>
                Breakfast · Lunch · Chicken · Seafood &amp; Mutton
              </p>
            </div>
            <Link href="/recipes"
              className="btn-shimmer hidden lg:inline-flex text-white px-7 py-3.5 rounded-xl font-bold font-accent tracking-wide flex-shrink-0"
              style={{ background:"#5d814c" }}
              onMouseEnter={e => (e.currentTarget.style.background="#577047")}
              onMouseLeave={e => (e.currentTarget.style.background="#5d814c")}>
              View All Recipes →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {FEATURED_RECIPES.map(({ tag,name,cat,img,tagline },i) => (
              <Link key={i} href="/recipes"
                className={`reveal-scale d${i+1} card-lift group block rounded-2xl overflow-hidden`}
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(26,37,36,0.75) 0%,transparent 55%)" }} />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background:"rgba(0,0,0,0.45)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:"#7da060" }} />
                    <span className="text-[10px] font-accent font-bold text-white">{cat}</span>
                  </div>
                  <span className="absolute top-3 right-3 tag-pill text-[10px] text-white" style={{ background:"rgba(93,129,76,0.85)" }}>{tag}</span>
                </div>
                <div className="p-4">
                  <div className="text-xs font-accent mb-1" style={{ color:"#9a9590" }}>{tagline}</div>
                  <h3 className="font-display font-bold text-base leading-snug mb-3" style={{ color:"#f5f2ec" }}>{name}</h3>
                  <div className="flex items-center justify-end">
                    <span className="text-xs font-medium group-hover:translate-x-1 transition-transform inline-block" style={{ color:"#7da060" }}>View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center lg:hidden">
            <Link href="/recipes"
              className="btn-shimmer text-white px-8 py-3.5 rounded-xl font-bold font-accent tracking-wide"
              style={{ background:"#5d814c" }}
              onMouseEnter={e => (e.currentTarget.style.background="#577047")}
              onMouseLeave={e => (e.currentTarget.style.background="#5d814c")}>
              View All Recipes →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FACTS STRIP ═══════════════════ */}
      <section className="py-16" style={{ background:"#577047" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { n:"76+",  l:"Dishes on Our Menu",  d:"Breakfast, lunch, curries, pickles & more" },
              { n:"0%",   l:"Artificial Additives", d:"No preservatives, no colour, no shortcuts" },
              { n:"100%", l:"Made by Hand",         d:"Every dish prepared in our Chennai kitchen" },
              { n:"12",   l:"Countries We Reach",   d:"From Chennai to tables worldwide" },
            ].map(({ n,l,d }) => (
              <div key={l} className="reveal">
                <div className="font-display font-black text-white mb-1" style={{ fontSize:"clamp(2rem,4vw,3rem)" }}>{n}</div>
                <div className="font-accent font-bold text-white/90 text-xs uppercase tracking-widest mb-1">{l}</div>
                <div className="text-xs" style={{ color:"rgba(255,255,255,0.55)" }}>{d}</div>
              </div>
            ))}
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
          <img src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=1400&q=70"
            alt="Authentic South Indian food" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse at center,rgba(78,86,80,0.4) 0%,rgba(78,86,80,0.88) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage:"radial-gradient(circle, #7da060 1px, transparent 1px)", backgroundSize:"40px 40px" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center reveal">
          <div className="section-label section-label-light justify-center mb-6">Ready to Order?</div>
          <h2 className="font-display font-black text-white mb-4 leading-tight" style={{ fontSize:"clamp(2.2rem,5vw,3.8rem)" }}>
            Real South Indian Food,<br />
            <span className="italic" style={{ color:"#7da060" }}>Made with 40 Years of Care</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color:"#c8c4bc" }}>
            76+ authentic dishes — breakfast, curries, pickles, biryanis — prepared by hand in Chennai and delivered anywhere in India within 3 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HomeOrderButton label="Order Now" />
            <Link href="/recipes"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-accent tracking-wide transition-all">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}