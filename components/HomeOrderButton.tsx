"use client";
import { useState } from "react";
import OrderModal from "@/components/OrderModal";

interface Props { label?: string; variant?: "primary" | "outline"; }

export default function HomeOrderButton({ label="Order Now", variant="primary" }: Props) {
  const [open, setOpen] = useState(false);

  const isPrimary = variant === "primary";
  const base: React.CSSProperties = isPrimary
    ? { background:"#5d814c", color:"white", border:"none" }
    : { background:"transparent", color:"white", border:"2px solid rgba(255,255,255,0.35)" };
  const hov: React.CSSProperties = isPrimary
    ? { background:"#577047" }
    : { background:"rgba(255,255,255,0.1)" };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-shimmer font-bold font-accent tracking-wide rounded-xl transition-colors"
        style={{ ...base, padding:"14px 32px", fontSize:"16px" }}
        onMouseEnter={e => Object.assign(e.currentTarget.style, hov)}
        onMouseLeave={e => Object.assign(e.currentTarget.style, base)}
      >
        {label}
      </button>
      <OrderModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
