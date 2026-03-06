"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PickleOrderButton from "@/components/PickleOrderButton";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PICKLES = [

  // ── VEG ─────────────────────────────────────────────────────────────
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

  { name:"Red Chilli Pickle", spice:5, type:"Veg", tag:"Fiery",
    origin:"Guntur, Andhra Pradesh", price:"₹85 / 250g", shelf:"8 months",
    img:"https://sumadhurafoods.com/cdn/shop/files/pandu-mirchi-pickle.png?v=1732191564",
    desc:"Whole red chillies stuffed with mustard and spice mix and preserved in oil." },

  { name:"Garlic Pickle", spice:4, type:"Veg", tag:"Rich",
    origin:"India", price:"₹85 / 250g", shelf:"9 months",
    img:"https://www.murarisweets.com/cdn/shop/files/GarlicPickle.png?v=1710330864&width=1946",
    desc:"Whole garlic cloves cooked in spicy chilli masala creating a bold and savoury pickle." },

  { name:"Ginger Pickle", spice:4, type:"Veg", tag:"Digestive",
    origin:"Kerala", price:"₹85 / 250g", shelf:"8 months",
    img:"https://vellankifoods.com/cdn/shop/products/ginger_pickles_with_tamarind.jpg?v=1680180240",
    desc:"Fresh ginger slices preserved with tamarind and spices offering sweet, tangy and spicy flavours." },

  { name:"Cut Mango Pickle", spice:4, type:"Veg", tag:"Traditional",
    origin:"South India", price:"₹90 / 250g", shelf:"12 months",
    img:"https://rakskitchen.net/wp-content/uploads/2013/02/mango-pickle-recipe.jpg",
    desc:"Sliced raw mango pieces matured in chilli powder and mustard oil." },

  { name:"Mango Thokku Pickle", spice:4, type:"Veg", tag:"Tangy",
    origin:"Tamil Nadu", price:"₹85 / 250g", shelf:"9 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzmZV8wFkvelE6QvFP089Kf-lpT_lHPYdmw&s",
    desc:"Grated raw mango sautéed with spices and sesame oil forming a thick and spicy pickle." },

  { name:"Amla Pickle", spice:3, type:"Veg", tag:"Immunity",
    origin:"Uttar Pradesh", price:"₹90 / 250g", shelf:"12 months",
    img:"https://tulasipickles.com/wp-content/uploads/2024/11/Amla.jpg",
    desc:"Indian gooseberries preserved in mustard oil with spices delivering a sour and nutritious pickle." },

  { name:"Lime Pickle", spice:3, type:"Veg", tag:"Classic",
    origin:"India", price:"₹85 / 250g", shelf:"12 months",
    img:"https://i0.wp.com/veenapatwardhan.com/pat-a-cake/wp-content/uploads/2024/05/Sweet-and-Spicy-Lime-Pickle.png?resize=500%2C400&ssl=1",
    desc:"Sun-cured lime pieces mixed with chilli and mustard spices." },

  { name:"Mixed Vegetable Pickle", spice:3, type:"Veg", tag:"Everyday",
    origin:"India", price:"₹85 / 250g", shelf:"8 months",
    img:"https://tiimg.tistatic.com/fp/1/008/400/mix-vegetable-pickles-served-with-dinner-lunch-933.jpg",
    desc:"Carrot, cauliflower, chilli and ginger preserved in mustard oil masala." },

  { name:"Sweet Ginger Pickle", spice:2, type:"Veg", tag:"Sweet",
    origin:"India", price:"₹90 / 250g", shelf:"6 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_pPWSVnrlrskS2M62ZOiiHnmp8LojeBYlg&s",
    desc:"Ginger cooked with jaggery and spices giving a sweet and mildly spicy pickle." },

  // ── NON-VEG ─────────────────────────────────────────────────────────
  { name:"Andhra Spicy Prawns Pickle", spice:5, type:"Non-Veg", tag:"Bhimavaram Special",
    origin:"Bhimavaram, Andhra Pradesh", price:"₹425 / 250g", shelf:"3 months",
    img:"https://assets.tendercuts.in/product/P/K/ce27d721-a547-47d5-a6bc-03eb422bf5b5.webp",
    desc:"Fresh prawns marinated with fiery Guntur chilli and garlic, slow-cooked in sesame oil." },

  { name:"Boneless Chicken Pickle (Godavari Style)", spice:4, type:"Non-Veg", tag:"Bestseller",
    origin:"Godavari, Andhra Pradesh", price:"₹375 / 250g", shelf:"3 months",
    img:"hhttps://i0.wp.com/swathihomefoods.in/wp-content/uploads/2025/02/chicken-boneless-pickle.webp?fit=800%2C800&ssl=1",
    desc:"Tender boneless chicken cooked with traditional Godavari spices." },

  { name:"Chicken Pickle With Bone", spice:4, type:"Non-Veg", tag:"Traditional",
    origin:"Andhra Pradesh", price:"₹325 / 250g", shelf:"3 months",
    img:"https://m.media-amazon.com/images/I/71kWTYU3dwL._AC_UF894,1000_QL80_.jpg",
    desc:"Bone-in chicken pieces marinated in bold Andhra pickle masala." },

  { name:"Gongura Prawns Pickle", spice:5, type:"Non-Veg", tag:"Tangy",
    origin:"Andhra Pradesh", price:"₹425 / 250g", shelf:"3 months",
    img:"https://chittipickles.in/cdn/shop/files/ALEKHYAACHIIT_3.png?v=1749289182",
    desc:"Juicy prawns cooked with tangy gongura leaves and fiery spices." },

  { name:"Boneless Mutton Pickle", spice:4, type:"Non-Veg", tag:"Rich",
    origin:"Andhra Pradesh", price:"₹500 / 250g", shelf:"3 months",
    img:"https://www.rajupickles.in/cdn/shop/products/mutton_pickle_raju_pickle_grande.png?v=1581402454",
    desc:"Tender mutton pieces cooked with aromatic spices and preserved in oil." },

  { name:"Andhra Fish Pickle", spice:4, type:"Non-Veg", tag:"Coastal",
    origin:"Coastal Andhra", price:"₹350 / 250g", shelf:"2 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jWXzeJLHaWQTxvlRwBcw8kFh860hv9POww&s",
    desc:"Fresh fish chunks fried and mixed with tangy tamarind and chilli masala." },

  { name:"Gongura Boneless Chicken Pickle", spice:4, type:"Non-Veg", tag:"Andhra Special",
    origin:"Andhra Pradesh", price:"₹400 / 250g", shelf:"3 months",
    img:"https://m.media-amazon.com/images/I/61B3fSf6G3L._AC_UF894,1000_QL80_.jpg",
    desc:"Boneless chicken cooked with tangy gongura leaves and Andhra spices." },

  { name:"Mutton Keema Pickle", spice:4, type:"Non-Veg", tag:"Rich & Spicy",
    origin:"Andhra Pradesh", price:"₹625 / 250g", shelf:"3 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaEL6xKvW5C4Zf73B6nRgmiTfZZAwVRfXBw&s",
    desc:"Minced mutton cooked with bold spices creating a rich and intensely flavoured pickle." },

  { name:"Natu Kodi Pickle (Country Chicken)", spice:5, type:"Non-Veg", tag:"Country Style",
    origin:"Andhra Pradesh", price:"₹400 / 250g", shelf:"3 months",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCl8VTZ40HZzdcE7R6yfNTJBdsmToJHn4rrA&s",
    desc:"Country chicken cooked in fiery Andhra spice mix and preserved in oil." }
];

// ─── TYPES ───────────────────────────────────────────────────────────────────

type Pickle = typeof PICKLES[number];

interface SampleForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  note: string;
}

// ─── SPICE METER ─────────────────────────────────────────────────────────────

function SpiceMeter({ level, dark=false }: { level:number; dark?:boolean }) {
  const label = level <= 2 ? "Mild" : level <= 3 ? "Medium" : level === 4 ? "Hot" : "Fiery";
  return (
    <div className="flex gap-1.5 items-center">
      {[1,2,3,4,5].map(i => (
        <span key={i} className="w-2.5 h-2 rounded-sm transition-colors" style={{
          background: i <= level ? "#c45050" : dark ? "rgba(255,255,255,0.12)" : "#d8d0c0"
        }} />
      ))}
      <span className="text-xs font-accent ml-1" style={{ color: dark ? "rgba(255,255,255,0.45)" : "#9a9590" }}>
        {label}
      </span>
    </div>
  );
}

// ─── SAMPLE BOOKING MODAL ────────────────────────────────────────────────────

function SampleModal({ pickle, onClose }: { pickle: Pickle; onClose: () => void }) {
  const [form, setForm] = useState<SampleForm>({
    name:"", phone:"", email:"", address:"", city:"", state:"", pincode:"", note:""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isNonVeg = pickle.type === "Non-Veg";
  const accent = isNonVeg ? "#c45050" : "#5d814c";
  const accentSoft = isNonVeg ? "rgba(196,80,80,0.12)" : "rgba(93,129,76,0.12)";
  const bg = isNonVeg ? "#1a2524" : "#f5f2ec";
  const cardBg = isNonVeg ? "rgba(255,255,255,0.05)" : "#ffffff";
  const textMain = isNonVeg ? "#ffffff" : "#273635";
  const textSub = isNonVeg ? "#c8c4bc" : "#4e5650";
  const borderCol = isNonVeg ? "rgba(255,255,255,0.1)" : "#e8e2d8";
  const inputBg = isNonVeg ? "rgba(255,255,255,0.07)" : "#faf8f4";

  const set = (k: keyof SampleForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    background: inputBg,
    border: `1px solid ${borderCol}`,
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    color: textMain,
    width: "100%",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: textSub,
    marginBottom: 5,
    display: "block",
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{ background: bg, border: `1px solid ${borderCol}` }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: borderCol, color: textSub }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Pickle preview strip */}
        <div className="relative h-36 overflow-hidden rounded-t-3xl">
          <img src={pickle.img} alt={pickle.name} className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${bg} 0%, transparent 60%)` }} />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-accent mb-1"
              style={{ background: accentSoft, color: accent }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              Free Sample · 50g
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <h3 className="font-display font-black text-xl leading-tight mb-1" style={{ color: textMain }}>
            Book a Sample
          </h3>
          <p className="text-sm mb-5" style={{ color: textSub }}>
            <span className="font-semibold" style={{ color: accent }}>{pickle.name}</span>
            &nbsp;— a 50g tasting jar, delivered free to your door.
          </p>

          {!submitted ? (
            <div className="space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input value={form.name} onChange={set("name")} placeholder="Priya Sharma" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" style={inputStyle} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input value={form.email} onChange={set("email")} placeholder="priya@example.com" style={inputStyle} />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px" style={{ background: borderCol }} />
                <span className="text-[11px] font-accent font-bold" style={{ color: textSub }}>Delivery Address</span>
                <div className="flex-1 h-px" style={{ background: borderCol }} />
              </div>

              {/* Address */}
              <div>
                <label style={labelStyle}>Street / Flat / Building *</label>
                <input value={form.address} onChange={set("address")} placeholder="12A, 2nd Cross, Koramangala" style={inputStyle} />
              </div>

              {/* City + State */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={labelStyle}>City</label>
                  <input value={form.city} onChange={set("city")} placeholder="Bengaluru" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input value={form.state} onChange={set("state")} placeholder="Karnataka" style={inputStyle} />
                </div>
              </div>

              {/* Pincode */}
              <div>
                <label style={labelStyle}>PIN Code *</label>
                <input value={form.pincode} onChange={set("pincode")} placeholder="560034" maxLength={6} style={inputStyle} />
              </div>

              {/* Note */}
              <div>
                <label style={labelStyle}>Any note (optional)</label>
                <textarea
                  value={form.note} onChange={set("note")}
                  placeholder="Eg: Please leave with security if I'm away"
                  rows={2}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-accent font-bold text-sm tracking-wide transition-opacity hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
                style={{ background: accent, color: "#fff", marginTop: 4 }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Booking…
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="white" strokeWidth="2"/>
                      <path d="M16 3l-4 4-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Confirm Sample Booking
                  </>
                )}
              </button>
            </div>
          ) : (
            /* ── SUCCESS STATE ── */
            <div className="text-center py-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: accentSoft }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-display font-black text-xl mb-2" style={{ color: textMain }}>Sample Booked!</h4>
              <p className="text-sm leading-relaxed" style={{ color: textSub }}>
                Your 50g tasting jar of&nbsp;
                <span className="font-semibold" style={{ color: accent }}>{pickle.name}</span>
                &nbsp;is on its way to&nbsp;
                <span className="font-semibold" style={{ color: textMain }}>{form.city || "your address"}</span>.
                We'll WhatsApp you the tracking link.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl font-accent font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: accentSoft, color: accent }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PICKLE CARD ─────────────────────────────────────────────────────────────

function PickleCard({ p, i, dark }: { p: Pickle; i: number; dark?: boolean }) {
  const [modalOpen, setModalOpen] = useState(false);
  const accent = dark ? "#d97070" : "#5d814c";
  const accentSoft = dark ? "rgba(196,80,80,0.15)" : "rgba(93,129,76,0.1)";
  const textMain = dark ? "#ffffff" : "#273635";
  const textSub = dark ? "#c8c4bc" : "#4e5650";
  const borderCol = dark ? "rgba(255,255,255,0.1)" : "rgba(216,208,192,0.5)";
  const cardBg = dark ? "rgba(255,255,255,0.05)" : "#ffffff";

  return (
    <>
      <div
        className={`reveal-scale d${(i%6)+1} card-lift group rounded-2xl overflow-hidden`}
        style={{ background: cardBg, border: `1px solid ${borderCol}` }}
      >
        <div className="relative h-48 overflow-hidden">
          <img src={p.img} alt={p.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={dark ? { opacity: 0.8 } : {}}
          />
          <div className="absolute inset-0" style={{
            background: dark
              ? "linear-gradient(to top,rgba(26,37,36,0.7) 0%,transparent 55%)"
              : "linear-gradient(to top,rgba(39,54,53,0.5) 0%,transparent 55%)"
          }} />
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: dark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.92)" }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dark ? "#c45050" : "#5d814c" }} />
            <span className="text-[10px] font-accent font-bold" style={{ color: dark ? "#fff" : "#273635" }}>
              {dark ? "NON-VEG" : "VEG"}
            </span>
          </div>
          <span
            className="absolute top-3 right-3 tag-pill text-white text-[10px]"
            style={{ background: dark ? "rgba(168,53,53,0.8)" : "#5d814c" }}
          >
            {p.tag}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-base leading-snug mb-2" style={{ color: textMain }}>
            {p.name}
          </h3>
          <SpiceMeter level={p.spice} dark={dark} />
          <p className="text-xs leading-relaxed mt-3 mb-3 line-clamp-3" style={{ color: textSub }}>
            {p.desc}
          </p>
          <div className="text-[11px] italic mb-4" style={{ color: "#9a9590" }}>
            {dark ? (
              <>Shelf life: {p.shelf} refrigerated</>
            ) : (
              <>
                <span className="font-semibold not-italic" style={{ color: textSub }}>From</span> {p.origin}&nbsp;·&nbsp;
                <span className="font-semibold not-italic" style={{ color: textSub }}>Shelf life</span> {p.shelf}
              </>
            )}
          </div>

          {/* ── ACTION ROW ── */}
          <div className="flex items-center justify-between gap-2 pt-3" style={{ borderTop: `1px solid ${borderCol}` }}>
            <span className="font-accent font-bold text-sm" style={{ color: accent }}>{p.price}</span>
            <div className="flex items-center gap-2">
              {/* Book a Sample */}
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-accent font-bold transition-all hover:opacity-80 active:scale-95"
                style={{ background: accentSoft, color: accent, border: `1px solid ${dark ? "rgba(196,80,80,0.25)" : "rgba(93,129,76,0.25)"}` }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Sample
              </button>
              {/* Order */}
              <PickleOrderButton label="Order" small nonVeg={dark} />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <SampleModal pickle={p} onClose={() => setModalOpen(false)} />}
    </>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PicklesPage() {
  const veg    = PICKLES.filter(p => p.type === "Veg");
  const nonVeg = PICKLES.filter(p => p.type === "Non-Veg");

  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ background:"#1a2524" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&q=80"
            alt="Indian pickle jars" className="w-full h-full object-cover" style={{ opacity:0.35 }} />
          <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(26,37,36,0.97) 0%,rgba(26,37,36,0.7) 100%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage:"radial-gradient(circle,#7da060 1px,transparent 1px)", backgroundSize:"34px 34px" }} />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center pt-14">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-accent font-bold tracking-widest uppercase mb-6"
            style={{ borderColor:"rgba(93,129,76,0.4)", color:"#7da060", animation:"fadeUp .5s ease both" }}>
            <span className="w-2 h-2 rounded-full" style={{ background:"#5d814c" }} />
            20 Varieties · Veg &amp; Non-Veg
          </div>
          <h1 className="font-display font-black text-white leading-tight mb-5"
            style={{ fontSize:"clamp(2.4rem,6vw,4.2rem)", animation:"fadeUp .6s .08s ease both" }}>
            Our Pickle Collection
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color:"#c8c4bc", animation:"fadeUp .6s .16s ease both" }}>
            12 vegetarian and 8 non-vegetarian pickles — each made by hand, cured the old way, sealed with zero preservatives.
          </p>
          <div style={{ animation:"fadeUp .6s .24s ease both" }}>
            <PickleOrderButton label="Order Any Pickle" />
          </div>
        </div>
      </section>

      {/* ── VEG PICKLES ── */}
      <section className="py-20 lg:py-28" style={{ background:"#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12 reveal">
            <div className="w-3 h-3 rounded-full ring-4 flex-shrink-0" style={{ background:"#5d814c", boxShadow:"0 0 0 4px rgba(93,129,76,0.2)" }} />
            <div>
              <div className="font-display font-black text-2xl" style={{ color:"#273635" }}>Vegetarian Pickles</div>
              <div className="text-sm font-accent mt-0.5" style={{ color:"#9a9590" }}>12 varieties · Zero preservatives · Ships across India</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {veg.map((p, i) => <PickleCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── NON-VEG PICKLES ── */}
      <section className="py-20 lg:py-28" style={{ background:"#1a2524" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12 reveal">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background:"#c45050", boxShadow:"0 0 0 4px rgba(196,80,80,0.2)" }} />
            <div>
              <div className="font-display font-black text-2xl text-white">Non-Veg Pickles</div>
              <div className="text-sm font-accent mt-0.5" style={{ color:"#9a9590" }}>8 varieties · Oil-preserved · Authentic slow-cooked</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonVeg.map((p, i) => <PickleCard key={i} p={p} i={i} dark />)}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-12" style={{ background:"#577047" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { t:"Zero Preservatives", d:"Salt, oil and sun — nothing synthetic" },
              { t:"21-Day Cure",        d:"No fast-tracking, no cold rooms" },
              { t:"FSSAI Certified",    d:"Every batch tested before dispatch" },
              { t:"Pan World Delivery", d:"All over the world" },
            ].map(({ t,d }) => (
              <div key={t} className="reveal">
                <div className="font-display font-bold text-white text-base mb-1">{t}</div>
                <div className="text-xs" style={{ color:"rgba(255,255,255,0.6)" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}