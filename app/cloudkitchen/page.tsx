import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CloudKitchenPage() {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#1a2524" }}
      >
        {/* ── Background texture dots ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #7da060 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* ── Steam animation blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { left: "12%",  width: 180, delay: "0s",    dur: "7s"  },
            { left: "35%",  width: 240, delay: "1.8s",  dur: "9s"  },
            { left: "58%",  width: 160, delay: "0.6s",  dur: "6s"  },
            { left: "78%",  width: 200, delay: "2.5s",  dur: "8s"  },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-full"
              style={{
                left: b.left,
                width: b.width,
                height: b.width,
                background: "radial-gradient(circle, rgba(93,129,76,0.12) 0%, transparent 70%)",
                animation: `steamRise ${b.dur} ${b.delay} ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* ── Diagonal accent line ── */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 420,
            height: 420,
            background: "linear-gradient(135deg, rgba(93,129,76,0.06) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(93,129,76,0.1)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 320,
            height: 320,
            background: "linear-gradient(315deg, rgba(39,54,53,0.8) 0%, transparent 70%)",
          }}
        />

        {/* ── Main content ── */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

          {/* Flame / kitchen icon */}
          <div
            className="mx-auto mb-8 flex items-center justify-center"
            style={{
              width: 88,
              height: 88,
              borderRadius: "28px",
              background: "rgba(93,129,76,0.12)",
              border: "1px solid rgba(93,129,76,0.25)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          >
            <svg
              width="44" height="44" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flame shape */}
              <path
                d="M12 2C12 2 8 6.5 8 10.5C8 12.5 9 14 10 15C9.5 13 10.5 11.5 12 11C11 13 12.5 14.5 13 16C14.5 14.5 14 12 14 12C15.5 13 16 15 15.5 17C16.5 15.5 17 13.5 17 11.5C17 7 13 3.5 12 2Z"
                fill="#5d814c"
                opacity="0.9"
              />
              <path
                d="M10 19C10 20.6569 10.8954 22 12 22C13.1046 22 14 20.6569 14 19C14 17.5 13 16 13 16C12.5 17 11.5 17.5 11 18.5C10.5 17.5 10.5 16.5 11 15.5C10 16.5 10 18 10 19Z"
                fill="#7da060"
              />
              {/* Pot base */}
              <rect x="7" y="20" width="10" height="2" rx="1" fill="rgba(93,129,76,0.4)" />
            </svg>
          </div>

          {/* Label pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-7"
            style={{
              background: "rgba(93,129,76,0.12)",
              border: "1px solid rgba(93,129,76,0.3)",
              color: "#7da060",
              fontFamily: "'DM Mono', monospace",
              animation: "fadeUp 0.5s ease both",
              letterSpacing: "0.12em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#5d814c", animation: "blink 1.4s ease-in-out infinite" }}
            />
            Cloud Kitchen
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#f5f2ec",
              animation: "fadeUp 0.6s 0.1s ease both",
              opacity: 0,
            }}
          >
            Something is<br />
            <span style={{ color: "#5d814c", fontStyle: "italic" }}>
              Cooking.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.8,
              color: "#8fa89a",
              marginTop: "1.5rem",
              animation: "fadeUp 0.6s 0.2s ease both",
              opacity: 0,
            }}
          >
            Our cloud kitchen is currently under development.<br />
            Good food takes time — and so does building the kitchen that makes it.
          </p>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "rgba(93,129,76,0.5)",
              margin: "2rem auto",
              borderRadius: 2,
              animation: "fadeUp 0.6s 0.3s ease both",
              opacity: 0,
            }}
          />
          {/* Notify CTA */}
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.2)",
              marginTop: "2.5rem",
              animation: "fadeUp 0.6s 0.45s ease both",
              opacity: 0,
            }}
          >
            We'll be ready soon. Watch this space.
          </p>
        </div>

        {/* ── Inline keyframes ── */}
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes steamRise {
            0%   { transform: translateY(0) scale(1);    opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 0.4; }
            100% { transform: translateY(-80vh) scale(2); opacity: 0; }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(93,129,76,0); }
            50%       { box-shadow: 0 0 24px 6px rgba(93,129,76,0.2); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.2; }
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
}