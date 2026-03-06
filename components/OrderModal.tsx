"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const WHATSAPP_NUMBER = "919560977219";
const EMAIL_ADDRESS   = "orders@reciperaja.in";

const ALL_PRODUCTS = [
  "Avakaya Raw Mango Pickle","Gongura Sorrel Pickle","Lemon Pickle","Garlic Pickle",
  "Red Chilli Pickle","Tamarind Pickle","Tomato Pickle","Amla Gooseberry Pickle",
  "Karela Bitter Gourd Pickle","Cauliflower Pickle","Mixed Vegetable Pickle","Ginger Pickle",
  "Andhra Chicken Pickle","Mutton Pickle","Prawn Pickle","Fish Pickle","Egg Pickle",
  "Kerala Prawn Dry Pickle","Boneless Chicken Dry Pickle","Mixed Non-Veg Pickle",
  "Idli Batter","Dosa Batter","Vada Batter","Sambar Powder","Rasam Powder",
  "Gunpowder Podi","Coconut Chutney","Tomato Chutney","Instant Dosa Mix","Instant Upma Mix",
];

interface OrderItem { product: string; qty: number; }
interface Props { isOpen: boolean; onClose: () => void; }

// ─── inline style tokens ─────────────────────────────────────────────────────
const C = {
  deep:       "#273635",
  deepLight:  "#344948",
  sage:       "#5d814c",
  sageLight:  "#7da060",
  forest:     "#577047",
  charcoal:   "#4e5650",
  cream:      "#f5f2ec",
  parchment:  "#ede8df",
  sand:       "#d8d0c0",
  stone:      "#9a9590",
  fog:        "#c8c4bc",
};

export default function OrderModal({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [step,    setStep]    = useState(1);
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [address, setAddress] = useState("");
  const [note,    setNote]    = useState("");
  const [items,   setItems]   = useState<OrderItem[]>([{ product: ALL_PRODUCTS[0], qty: 1 }]);

  // Wait until client-side so createPortal has access to document.body
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const reset = () => {
    setStep(1); setName(""); setPhone(""); setAddress(""); setNote("");
    setItems([{ product: ALL_PRODUCTS[0], qty: 1 }]);
  };
  const handleClose = () => { reset(); onClose(); };

  const canContinue = name.trim() && phone.trim() && address.trim();
  const addItem     = () => setItems([...items, { product: ALL_PRODUCTS[0], qty: 1 }]);
  const removeItem  = (i: number) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem  = (i: number, field: keyof OrderItem, val: string | number) =>
    setItems(items.map((it, idx) => idx === i ? { ...it, [field]: val } : it));

  const buildMessage = () => {
    const list = items.map(it => `  • ${it.product} ×${it.qty}`).join("\n");
    return `*RecipeRaja Order*\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n${list}${note ? `\n\nNote: ${note}` : ""}`;
  };

  const sendWhatsApp = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`, "_blank");
  const sendEmail    = () => window.open(`mailto:${EMAIL_ADDRESS}?subject=Order from ${name}&body=${encodeURIComponent(buildMessage())}`, "_blank");

  if (!mounted || !isOpen) return null;

  // ── shared input style ──────────────────────────────────────────────────────
  const inp: React.CSSProperties = {
    width: "100%", border: `1px solid ${C.sand}`, borderRadius: "12px",
    padding: "10px 14px", fontSize: "13px", outline: "none",
    background: C.cream, color: C.deep,
  };
  const lbl: React.CSSProperties = {
    display: "block", fontSize: "10px", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    color: C.charcoal, marginBottom: "6px",
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // The entire modal is portalled into document.body — completely outside
  // whatever card/section it was triggered from.
  // ─────────────────────────────────────────────────────────────────────────────
  return createPortal(
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(39,54,53,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      {/* Modal card — stop click propagation so backdrop click only closes */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "540px", borderRadius: "20px",
          overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
          maxHeight: "92vh", display: "flex", flexDirection: "column",
          background: "white",
          animation: "modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* ── Header ── */}
        <div style={{ flexShrink: 0, padding: "22px 24px 18px", background: `linear-gradient(135deg, ${C.deep} 0%, ${C.deepLight} 100%)` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 900, color: C.cream }}>
                Recipe<span style={{ color: C.sageLight }}>Raja</span>
              </div>
              <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "11px", color: C.fog, marginTop: "2px", letterSpacing: "0.04em" }}>
                {step === 1 ? "Step 1 — Your Details" : "Step 2 — Review & Send"}
              </div>
            </div>
            <button
              onClick={handleClose}
              style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)",
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          {/* Progress bar */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2].map(s => (
              <div key={s} style={{
                height: "5px", borderRadius: "99px",
                transition: "width 0.4s ease, background 0.4s ease",
                width: step === s ? "56px" : "16px",
                background: step === s ? C.sageLight : "rgba(255,255,255,0.22)",
              }} />
            ))}
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div style={{ overflowY: "auto", flex: 1, padding: "20px 24px", background: C.cream }}>
          {step === 1 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Name + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={lbl}>Full Name *</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inp} />
                </div>
                <div>
                  <label style={lbl}>Phone *</label>
                  <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 …" style={inp} />
                </div>
              </div>

              {/* Address */}
              <div>
                <label style={lbl}>Delivery Address *</label>
                <textarea value={address} onChange={e => setAddress(e.target.value)} rows={3}
                  placeholder="Full delivery address with pin code…"
                  style={{ ...inp, resize: "none" }} />
              </div>

              {/* Items */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ ...lbl, marginBottom: 0 }}>Order Items</label>
                  <button onClick={addItem}
                    style={{ fontFamily: "'Baloo 2', cursive", fontSize: "12px", fontWeight: 700,
                      color: C.sage, background: "none", border: "none", cursor: "pointer" }}>
                    + Add Item
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", alignItems: "center",
                      background: "white", borderRadius: "12px", padding: "8px",
                      border: `1px solid ${C.sand}` }}>
                      <select value={item.product} onChange={e => updateItem(i, "product", e.target.value)}
                        style={{ flex: 1, border: `1px solid ${C.sand}`, borderRadius: "8px",
                          padding: "7px 10px", fontSize: "12px", background: C.cream, color: C.deep, outline: "none" }}>
                        {ALL_PRODUCTS.map(p => <option key={p}>{p}</option>)}
                      </select>
                      {/* Qty stepper */}
                      <div style={{ display: "flex", alignItems: "center", border: `1px solid ${C.sand}`,
                        borderRadius: "8px", overflow: "hidden", background: "white" }}>
                        <button onClick={() => updateItem(i, "qty", Math.max(1, item.qty - 1))}
                          style={{ width: "30px", height: "30px", border: "none", background: "none",
                            cursor: "pointer", fontSize: "16px", fontWeight: 700, color: C.charcoal }}>−</button>
                        <span style={{ width: "26px", textAlign: "center", fontSize: "12px",
                          fontWeight: 700, color: C.deep }}>{item.qty}</span>
                        <button onClick={() => updateItem(i, "qty", item.qty + 1)}
                          style={{ width: "30px", height: "30px", border: "none", background: "none",
                            cursor: "pointer", fontSize: "16px", fontWeight: 700, color: C.charcoal }}>+</button>
                      </div>
                      {items.length > 1 && (
                        <button onClick={() => removeItem(i)}
                          style={{ width: "28px", height: "28px", border: "none", background: "none",
                            cursor: "pointer", color: C.stone, borderRadius: "6px", display: "flex",
                            alignItems: "center", justifyContent: "center" }}>
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Special note */}
              <div>
                <label style={lbl}>Special Note</label>
                <input value={note} onChange={e => setNote(e.target.value)}
                  placeholder="Any special requests… (optional)" style={inp} />
              </div>
            </div>

          ) : (
            /* ── Step 2: Summary ── */
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "white", border: `1px solid ${C.sand}`, borderRadius: "16px", padding: "18px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "17px",
                  color: C.deep, marginBottom: "14px" }}>Order Summary</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: C.charcoal }}>
                  {[["Name", name], ["Phone", phone], ["Address", address], ...(note ? [["Note", note]] : [])].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: "8px" }}>
                      <span style={{ fontWeight: 600, color: C.deep, minWidth: "64px" }}>{k}</span>
                      <span style={{ flex: 1 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: `1px solid ${C.parchment}` }}>
                  <div style={{ fontWeight: 600, fontSize: "12px", color: C.deep, marginBottom: "8px" }}>Items</div>
                  {items.map((it, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px",
                      padding: "6px 0", borderBottom: i < items.length - 1 ? `1px solid ${C.parchment}` : "none" }}>
                      <span style={{ color: C.charcoal }}>{it.product}</span>
                      <span style={{ fontWeight: 700, color: C.sage }}>×{it.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Send buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <button onClick={sendWhatsApp}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    padding: "14px", borderRadius: "14px", border: "none", cursor: "pointer",
                    background: "#25D366", color: "white", fontFamily: "'Baloo 2', cursive",
                    fontWeight: 700, fontSize: "14px", gap: "4px", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
                <button onClick={sendEmail}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    padding: "14px", borderRadius: "14px", border: "none", cursor: "pointer",
                    background: "#ea580c", color: "white", fontFamily: "'Baloo 2', cursive",
                    fontWeight: 700, fontSize: "14px", gap: "4px", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </button>
              </div>

              <p style={{ textAlign: "center", fontSize: "11px", color: C.stone }}>
                Confirmation within 2 hours · Mon–Sat 9am–8pm IST
              </p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div style={{ borderTop: `1px solid ${C.sand}`, padding: "14px 24px", background: "white",
          flexShrink: 0, display: "flex", gap: "10px" }}>
          {step === 1 ? (
            <button
              onClick={() => canContinue && setStep(2)}
              disabled={!canContinue}
              style={{
                flex: 1, padding: "12px", borderRadius: "12px", border: "none",
                fontFamily: "'Baloo 2', cursive", fontWeight: 700, fontSize: "14px",
                cursor: canContinue ? "pointer" : "not-allowed",
                background: canContinue ? C.forest : C.parchment,
                color: canContinue ? "white" : C.stone,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { if (canContinue) e.currentTarget.style.background = C.sage; }}
              onMouseLeave={e => { if (canContinue) e.currentTarget.style.background = C.forest; }}
            >
              Review Order
            </button>
          ) : (
            <button
              onClick={() => setStep(1)}
              style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 18px",
                borderRadius: "12px", border: `1px solid ${C.sand}`, background: "none",
                cursor: "pointer", fontSize: "13px", fontWeight: 500, color: C.charcoal,
                transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.parchment)}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              Edit Order
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body   // ← portal target: renders at root, outside any card
  );
}
