"use client";
import { useState } from "react";
import OrderModal from "@/components/OrderModal";

interface Props { label?: string; small?: boolean; }

export default function RecipeOrderButton({ label="Order", small=false }: Props) {
  const [open, setOpen] = useState(false);
  const bg = "#577047";
  const bgHov = "#5d814c";
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-shimmer text-white font-bold font-accent tracking-wide transition-colors rounded-xl"
        style={{ background:bg, padding: small ? "6px 14px" : "12px 28px", fontSize: small ? "11px" : "14px" }}
        onMouseEnter={e => (e.currentTarget.style.background = bgHov)}
        onMouseLeave={e => (e.currentTarget.style.background = bg)}
      >
        {label}
      </button>
      <OrderModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
