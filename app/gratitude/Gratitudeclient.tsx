"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GratitudeClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const petals = mounted ? Array.from({ length: 22 }, (_, i) => ({
    x:        5 + (i * 4.2) % 90,
    size:     6 + (i * 3.7) % 9,
    opacity:  0.12 + (i * 0.013) % 0.22,
    duration: 7 + (i * 0.9) % 6,
    delay:    i * 0.35,
    rotate:   (i * 47) % 360,
  })) : [];

  const hearts = mounted ? Array.from({ length: 9 }, (_, i) => ({
    x:        8 + i * 10,
    delay:    i * 0.55,
    duration: 2.8 + (i * 0.3) % 2,
    size:     10 + (i * 3) % 10,
  })) : [];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ background: "#1a2524", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@400;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nameIn {
          from { opacity: 0; transform: scale(0.82) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatPetal {
          0%   { transform: translateY(-40px) rotate(0deg);   opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.5; }
          100% { transform: translateY(108vh) rotate(540deg); opacity: 0; }
        }
        @keyframes floatHeart {
          0%   { transform: translateY(0)     scale(0.7); opacity: 0; }
          18%  { opacity: 1; }
          80%  { opacity: 0.6; }
          100% { transform: translateY(-90px) scale(1.3); opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 36px rgba(125,160,96,0.18), 0 0 0 1px rgba(125,160,96,0.25); }
          50%     { box-shadow: 0 0 80px rgba(125,160,96,0.40), 0 0 0 1px rgba(125,160,96,0.40); }
        }
        @keyframes twinkle {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.3); }
        }
        .petal {
          position: absolute; top: -40px;
          border-radius: 50% 10% 50% 10%;
          background: linear-gradient(135deg, #7da060, #b5d4a0);
          animation: floatPetal linear infinite;
          pointer-events: none;
        }
        .heart-float {
          position: absolute;
          animation: floatHeart ease-out infinite;
          pointer-events: none; line-height: 1;
        }
        .name-card { animation: glowPulse 3.5s ease-in-out infinite; }
        .twinkle   { animation: twinkle ease-in-out infinite; }
        .go-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          box-shadow: 0 8px 28px rgba(93,129,76,0.38);
        }
        .go-btn:hover {
          transform: translateY(-3px) scale(1.04);
          filter: brightness(1.1);
          box-shadow: 0 16px 50px rgba(93,129,76,0.55) !important;
        }
        .f1 { animation: fadeUp 0.7s 0.15s ease both; }
        .f2 { animation: fadeUp 0.7s 0.30s ease both; }
        .f3 { animation: nameIn  1.0s 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .f4 { animation: fadeUp 0.7s 0.80s ease both; }
        .f5 { animation: fadeUp 0.7s 1.00s ease both; }
        .f6 { animation: fadeUp 0.7s 1.20s ease both; }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(125,160,96,0.065) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      {/* Glow orb */}
      <div className="absolute pointer-events-none"
        style={{ width: "1000px", height: "1000px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(93,129,76,0.13) 0%, transparent 65%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      {/* Petals */}
      {petals.map((p, i) => (
        <div key={i} className="petal"
          style={{ left: `${p.x}%`, width: p.size, height: p.size * 0.65,
            opacity: p.opacity, animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`, transform: `rotate(${p.rotate}deg)` }} />
      ))}

      {/* Hearts */}
      {hearts.map((h, i) => (
        <div key={i} className="heart-float"
          style={{ bottom: "12%", left: `${h.x}%`, fontSize: h.size,
            color: "rgba(125,160,96,0.45)", animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s` }}>♥</div>
      ))}

      <div className="relative z-10 w-full max-w-xl mx-auto px-6 text-center py-20">

        {/* Brand pill */}
        <div className="f1 mb-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(125,160,96,0.3)", background: "rgba(93,129,76,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5d814c" }} />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#9a9590" }}>
              RecipeRaja · With Love
            </span>
          </div>
        </div>

        {/* Ornament */}
        <div className="f2 flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-14" style={{ background: "linear-gradient(to right, transparent, rgba(125,160,96,0.4))" }} />
          {[{ s: "1.2rem", d: "2s", dd: "0s" }, { s: "0.8rem", d: "2.4s", dd: "0.4s" }, { s: "1.2rem", d: "2s", dd: "0.8s" }].map((t, i) => (
            <span key={i} className="twinkle" style={{ color: "#7da060", fontSize: t.s, animationDuration: t.d, animationDelay: t.dd }}>✦</span>
          ))}
          <div className="h-px w-14" style={{ background: "linear-gradient(to left, transparent, rgba(125,160,96,0.4))" }} />
        </div>

        {/* Intro */}
        <p className="f2 mb-6" style={{ fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "#9a9590", fontStyle: "italic", letterSpacing: "0.03em" }}>
          This would not have been possible without
        </p>

        {/* VANSHIKA */}
        <div className="f3 mb-8">
          <div className="name-card inline-block rounded-3xl px-10 py-8"
            style={{ background: "linear-gradient(145deg, rgba(93,129,76,0.16) 0%, rgba(125,160,96,0.07) 100%)",
              border: "1px solid rgba(125,160,96,0.32)", backdropFilter: "blur(16px)" }}>
            <div style={{ fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 700, color: "#c8c4bc", lineHeight: 1.1 }}>
              Little
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 9vw, 6rem)", fontWeight: 900, fontStyle: "italic",
              color: "#7da060", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              Vanshika
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="f4 mb-8 space-y-4">
          <p style={{ fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#c8c4bc", lineHeight: 1.8, fontStyle: "italic" }}>
            "Without your warmth, your belief, and your heart —<br />
            RecipeRaja would have remained just a dream.<br />
            You made it real."
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#9a9590" }}>
            This launch carries your name in every dish we serve — from our Chennai kitchen to every table across India and beyond.
          </p>
        </div>

        {/* Strip */}
        <div className="f5 rounded-2xl px-6 py-5 mb-10"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(125,160,96,0.18)" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.98rem",
            color: "#c8c4bc", fontStyle: "italic", lineHeight: 1.75 }}>
            We hope your love and support continues to be with us — just as it has been from the very beginning.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#7da060" }}>
              - Ajith Reddy
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="f6">
          <button onClick={() => router.push("/")}
            className="go-btn inline-flex items-center gap-3 px-9 py-4 rounded-xl font-bold text-white border-0 outline-none cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", letterSpacing: "0.03em",
              background: "linear-gradient(135deg, #5d814c 0%, #7da060 100%)" }}>
            <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Enter RecipeRaja
          </button>
          <p className="mt-3 text-xs" style={{ color: "#4e5650" }}>
            Explore 200+ authentic South Indian dishes →
          </p>
        </div>

        <p className="mt-10 text-xs" style={{ color: "#3a4540" }}>
          reciperaja.com · Gurugram · Made with care, zero shortcuts
        </p>
      </div>
    </div>
  );
}