"use client";
import { useEffect, useState } from "react";

interface Props {
  launchDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function ComingSoonClient({ launchDate }: Props) {
  const target = launchDate ? new Date(launchDate) : null;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    target ? calcTimeLeft(target) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );
  const [launched, setLaunched] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!target) return;

    const tick = () => {
      const tl = calcTimeLeft(target);
      setTimeLeft(tl);
      if (tl.days === 0 && tl.hours === 0 && tl.minutes === 0 && tl.seconds === 0) {
        setLaunched(true);
        setTimeout(() => window.location.replace("/"), 2000);
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ background: "#1a2524", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(125,160,96,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Soft glow ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px", height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(93,129,76,0.12) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ── Spice illustration dots ── */}
      {[
        { top: "8%",  left: "6%",  size: 6,  opacity: 0.25 },
        { top: "15%", left: "92%", size: 4,  opacity: 0.2  },
        { top: "78%", left: "4%",  size: 5,  opacity: 0.2  },
        { top: "85%", left: "88%", size: 7,  opacity: 0.18 },
        { top: "45%", left: "2%",  size: 3,  opacity: 0.15 },
        { top: "55%", left: "97%", size: 3,  opacity: 0.15 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: d.top, left: d.left,
            width: d.size, height: d.size,
            background: "#7da060",
            opacity: d.opacity,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">

        {/* ── Logo / Brand ── */}
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ border: "1px solid rgba(125,160,96,0.3)", background: "rgba(93,129,76,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5d814c" }} />
            <span
              className="text-xs tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#9a9590" }}
            >
              Authentic South Indian Food
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 900,
              color: "#f5f2ec",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Recipe
            <span style={{ color: "#7da060", fontStyle: "italic" }}>Raja</span>
          </h1>
          <p
            className="mt-3 text-sm tracking-widest uppercase"
            style={{ color: "#9a9590", letterSpacing: "0.18em" }}
          >
            Raja of Flavours · Queen of Tradition
          </p>
        </div>

        {/* ── Message ── */}
        {launched ? (
          <div
            className="mb-10 py-5 px-6 rounded-2xl"
            style={{ background: "rgba(93,129,76,0.15)", border: "1px solid rgba(93,129,76,0.3)" }}
          >
            <div
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#7da060" }}
            >
              We're Live! 🎉
            </div>
            <p className="text-sm mt-1" style={{ color: "#c8c4bc" }}>Taking you there now…</p>
          </div>
        ) : (
          <div className="mb-10">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                color: "#c8c4bc",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Something real is coming.<br />
              <span style={{ color: "#9a9590", fontSize: "0.95em" }}>
                Handmade food. Zero shortcuts. Shipping pan India.
              </span>
            </p>
          </div>
        )}

        {/* ── Countdown ── */}
        {!launched && target && (
          <div className="mb-12">
            <div className="flex items-stretch justify-center gap-3 sm:gap-5">
              {[
                { val: mounted ? pad(timeLeft.days)    : "00", label: "Days"    },
                { val: mounted ? pad(timeLeft.hours)   : "00", label: "Hours"   },
                { val: mounted ? pad(timeLeft.minutes) : "00", label: "Minutes" },
                { val: mounted ? pad(timeLeft.seconds) : "00", label: "Seconds" },
              ].map(({ val, label }, i) => (
                <div key={label} className="flex items-center gap-3 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center rounded-2xl"
                      style={{
                        width: "clamp(64px, 16vw, 88px)",
                        height: "clamp(64px, 16vw, 88px)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
                          fontWeight: 900,
                          color: "#f5f2ec",
                          lineHeight: 1,
                          letterSpacing: "-0.02em",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {val}
                      </span>
                    </div>
                    <span
                      className="mt-2 text-[10px] uppercase tracking-widest"
                      style={{ color: "#9a9590" }}
                    >
                      {label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.4rem, 4vw, 2rem)",
                        color: "rgba(255,255,255,0.15)",
                        lineHeight: 1,
                        marginBottom: "18px",
                      }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* thin progress bar */}
            {target && (() => {
              const totalMs = target.getTime() - (target.getTime() - timeLeft.days * 86400000 - timeLeft.hours * 3600000 - timeLeft.minutes * 60000 - timeLeft.seconds * 1000);
              const remaining = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
              const totalSec = Math.ceil((target.getTime() - Date.now() + remaining * 1000) / 1000);
              const pct = totalSec > 0 ? Math.max(0, Math.min(100, (1 - remaining / totalSec) * 100)) : 100;
              return (
                <div
                  className="mt-6 mx-auto rounded-full overflow-hidden"
                  style={{ height: 2, width: "240px", background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${pct}%`, background: "linear-gradient(to right, #5d814c, #7da060)" }}
                  />
                </div>
              );
            })()}
          </div>
        )}

        {/* ── Footer ── */}
        <p className="text-xs" style={{ color: "#4e5650" }}>
          reciperaja.in · Chennai · Made with care, zero shortcuts
        </p>
      </div>
    </div>
  );
}