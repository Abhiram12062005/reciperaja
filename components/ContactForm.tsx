"use client";
import { useState } from "react";

const WHATSAPP = "919560977219";
const EMAIL    = "orders@reciperaja.in";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [subject, setSubject] = useState("Order Enquiry");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);

  const canSend = name.trim() && message.trim();
  const buildMsg = () => `*RecipeRaja Enquiry*\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`;

  const sendWA    = () => { window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMsg())}`, "_blank"); setSent(true); };
  const sendEmail = () => { window.open(`mailto:${EMAIL}?subject=${encodeURIComponent(`${subject} — ${name}`)}&body=${encodeURIComponent(buildMsg())}`, "_blank"); setSent(true); };

  const inputStyle: React.CSSProperties = {
    width:"100%", border:"1px solid #d8d0c0", borderRadius:"12px",
    padding:"10px 16px", fontSize:"14px", outline:"none",
    background:"#f5f2ec", color:"#273635",
  };
  const labelStyle: React.CSSProperties = {
    display:"block", fontSize:"10px", fontWeight:700, letterSpacing:"0.1em",
    textTransform:"uppercase", color:"#4e5650", marginBottom:"6px",
  };

  if (sent) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background:"rgba(93,129,76,0.08)", border:"1px solid rgba(93,129,76,0.25)" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background:"#5d814c" }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-display font-black text-2xl mb-2" style={{ color:"#273635" }}>Thank you, {name}!</h3>
        <p className="text-sm mb-6" style={{ color:"#4e5650" }}>Your message has been sent. We reply within 2 hours during business hours (9am–8pm IST, Mon–Sat).</p>
        <button onClick={() => { setSent(false); setName(""); setPhone(""); setMessage(""); setSubject("Order Enquiry"); }}
          className="text-sm font-semibold font-accent hover:underline" style={{ color:"#5d814c" }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-7" style={{ border:"1px solid rgba(216,208,192,0.5)" }}>
      <h3 className="font-display font-bold text-2xl mb-6" style={{ color:"#273635" }}>Send a Message</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Name *</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 …" style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Subject</label>
          <select value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle}>
            {["Order Enquiry","Bulk Order","International Shipping","Custom Gift Order","Product Question","Feedback","Other"].map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Message *</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} placeholder="How can we help you?" style={{ ...inputStyle, resize:"none" }} />
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button onClick={sendWA} disabled={!canSend}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold font-accent text-white transition"
            style={{ background: canSend ? "#25D366" : "#c8c4bc", cursor: canSend ? "pointer" : "not-allowed" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </button>
          <button onClick={sendEmail} disabled={!canSend}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold font-accent text-white transition"
            style={{ background: canSend ? "#ea580c" : "#c8c4bc", cursor: canSend ? "pointer" : "not-allowed" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </button>
        </div>
        <p className="text-center text-xs" style={{ color:"#9a9590" }}>Name and message are required to send</p>
      </div>
    </div>
  );
}
