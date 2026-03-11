"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props { launchDate: string; }
interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

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
  const router = useRouter();
  const target = launchDate ? new Date(launchDate) : null;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    target ? calcTimeLeft(target) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );
  const [launched, setLaunched] = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!target) return;
    const tick = () => {
      const tl = calcTimeLeft(target);
      setTimeLeft(tl);
      if (tl.days === 0 && tl.hours === 0 && tl.minutes === 0 && tl.seconds === 0) {
        setLaunched(true);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleGoLive = () => {
    setPressing(true);
    setTimeout(() => router.push("/gratitude"), 700);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ background: "#1a2524", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@400;600;700&display=swap');
        @keyframes fadeUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes liveIn  { from { opacity:0; transform:scale(0.9) translateY(16px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes pulse   { 0%{ box-shadow:0 0 0 0 rgba(125,160,96,.6); } 70%{ box-shadow:0 0 0 20px rgba(125,160,96,0); } 100%{ box-shadow:0 0 0 0 rgba(125,160,96,0); } }
        @keyframes blink   { 0%,100%{ opacity:1; } 50%{ opacity:.3; } }
        @keyframes ripple  { 0%{ transform:scale(1);opacity:1; } 100%{ transform:scale(2.4);opacity:0; } }
        .live-cta          { animation:pulse 2s ease-in-out infinite; transition:transform .18s ease,filter .18s ease; }
        .live-cta:hover    { transform:scale(1.05) translateY(-2px);filter:brightness(1.12);animation:none;box-shadow:0 14px 44px rgba(93,129,76,.55)!important; }
        .live-cta.pressing { animation:ripple .7s ease-out forwards!important; }
        .live-block        { animation:liveIn .8s cubic-bezier(.22,1,.36,1) both; }
        .dot-blink         { animation:blink 1.2s ease-in-out infinite; }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(circle,rgba(125,160,96,.07) 1px,transparent 1px)", backgroundSize:"36px 36px" }} />
      {/* Glow */}
      <div className="absolute pointer-events-none transition-all duration-1000"
        style={{ width:launched?"900px":"700px", height:launched?"900px":"700px", borderRadius:"50%",
          background:launched?"radial-gradient(circle,rgba(93,129,76,.22) 0%,transparent 65%)":"radial-gradient(circle,rgba(93,129,76,.10) 0%,transparent 70%)",
          top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
      {/* Accent dots */}
      {[{top:"8%",left:"6%",s:6,o:.25},{top:"15%",left:"92%",s:4,o:.2},{top:"78%",left:"4%",s:5,o:.2},
        {top:"85%",left:"88%",s:7,o:.18},{top:"45%",left:"2%",s:3,o:.15},{top:"55%",left:"97%",s:3,o:.15}].map((d,i)=>(
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{top:d.top,left:d.left,width:d.s,height:d.s,background:"#7da060",opacity:d.o}} />
      ))}

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Brand */}
        <div className="mb-10" style={{animation:"fadeUp .5s ease both"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{border:"1px solid rgba(125,160,96,.3)",background:"rgba(93,129,76,.08)"}}>
            <span className="w-1.5 h-1.5 rounded-full" style={{background:"#5d814c"}} />
            <span className="text-xs tracking-[.2em] uppercase font-semibold" style={{color:"#9a9590"}}>Authentic South Indian Food</span>
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.8rem,7vw,5rem)",
            fontWeight:900,color:"#f5f2ec",lineHeight:1.05,letterSpacing:"-.01em"}}>
            Recipe<span style={{color:"#7da060",fontStyle:"italic"}}>Raja</span>
          </h1>
          <p className="mt-3 text-sm tracking-widest uppercase" style={{color:"#9a9590",letterSpacing:".18em"}}>
            Raja of Flavours · Queen of Tradition
          </p>
        </div>

        {/* ── LIVE: CTA block ── */}
        {launched ? (
          <div className="live-block mb-10">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{background:"rgba(93,129,76,.18)",border:"1px solid rgba(125,160,96,.4)",color:"#7da060"}}>
                <span className="dot-blink w-2 h-2 rounded-full inline-block" style={{background:"#7da060"}} />
                We're Live
              </span>
            </div>
            <p className="mb-2" style={{fontFamily:"'Playfair Display',serif",
              fontSize:"clamp(1.2rem,3vw,1.7rem)",color:"#c8c4bc",fontStyle:"italic",lineHeight:1.6}}>
              The wait is over.
            </p>
            <p className="mb-8 text-sm" style={{color:"#9a9590"}}>
              Four decades of South Indian cooking — ready for your table.
            </p>
            <button onClick={handleGoLive}
              className={`live-cta inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white border-0 outline-none cursor-pointer${pressing?" pressing":""}`}
              style={{fontFamily:"'DM Sans',sans-serif",fontSize:"1.15rem",letterSpacing:".04em",
                background:"linear-gradient(135deg,#5d814c 0%,#7da060 100%)",boxShadow:"0 8px 32px rgba(93,129,76,.45)"}}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:22,height:22}}><path d="M8 5v14l11-7z"/></svg>
              Make It Live
            </button>
            <p className="mt-4 text-xs" style={{color:"#4e5650"}}>Tap to enter RecipeRaja →</p>
          </div>
        ) : (
          <div className="mb-10" style={{animation:"fadeUp .6s .1s ease both"}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.1rem,2.5vw,1.4rem)",
              color:"#c8c4bc",fontStyle:"italic",lineHeight:1.6}}>
              Something real is coming.<br/>
              <span style={{color:"#9a9590",fontSize:".95em"}}>Handmade food. Zero shortcuts. Shipping pan India.</span>
            </p>
          </div>
        )}

        {/* ── COUNTDOWN ── */}
        {!launched && target && (
          <div className="mb-12" style={{animation:"fadeUp .6s .2s ease both"}}>
            <div className="flex items-stretch justify-center gap-3 sm:gap-5">
              {[
                {val:mounted?pad(timeLeft.days):"00",   label:"Days"},
                {val:mounted?pad(timeLeft.hours):"00",  label:"Hours"},
                {val:mounted?pad(timeLeft.minutes):"00",label:"Minutes"},
                {val:mounted?pad(timeLeft.seconds):"00",label:"Seconds"},
              ].map(({val,label},i) => (
                <div key={label} className="flex items-center gap-3 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-2xl"
                      style={{width:"clamp(64px,16vw,88px)",height:"clamp(64px,16vw,88px)",
                        background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",backdropFilter:"blur(8px)"}}>
                      <span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.6rem,5vw,2.6rem)",
                        fontWeight:900,color:"#f5f2ec",lineHeight:1,letterSpacing:"-.02em",fontVariantNumeric:"tabular-nums"}}>
                        {val}
                      </span>
                    </div>
                    <span className="mt-2 text-[10px] uppercase tracking-widest" style={{color:"#9a9590"}}>{label}</span>
                  </div>
                  {i < 3 && <span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.4rem,4vw,2rem)",
                    color:"rgba(255,255,255,.15)",lineHeight:1,marginBottom:"18px"}}>:</span>}
                </div>
              ))}
            </div>
            {(() => {
              const remaining = timeLeft.days*86400+timeLeft.hours*3600+timeLeft.minutes*60+timeLeft.seconds;
              const totalSec  = Math.ceil((target.getTime()-Date.now()+remaining*1000)/1000);
              const pct       = totalSec>0?Math.max(0,Math.min(100,(1-remaining/totalSec)*100)):100;
              return (
                <div className="mt-6 mx-auto rounded-full overflow-hidden"
                  style={{height:2,width:"240px",background:"rgba(255,255,255,.08)"}}>
                  <div className="h-full rounded-full transition-all duration-1000"
                    style={{width:`${pct}%`,background:"linear-gradient(to right,#5d814c,#7da060)"}} />
                </div>
              );
            })()}
          </div>
        )}

        <p className="text-xs" style={{color:"#4e5650",animation:"fadeUp .6s .4s ease both"}}>
          reciperaja.com · Gurugram · Made with care, zero shortcuts
        </p>
      </div>
    </div>
  );
}