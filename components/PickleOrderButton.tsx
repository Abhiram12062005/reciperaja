"use client";
import { useState } from "react";
import OrderModal from "@/components/OrderModal";

interface Props { label?: string; small?: boolean; nonVeg?: boolean; }

export default function PickleOrderButton({ label="Order", small=false, nonVeg=false }: Props) {
  const [open, setOpen] = useState(false);
  const bg     = nonVeg ? "#a83535" : "#577047";
  const bgHov  = nonVeg ? "#8c2020" : "#5d814c";
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-shimmer text-white font-bold font-accent tracking-wide transition-colors rounded-xl"
        style={{ background: bg, padding: small ? "6px 14px" : "10px 20px", fontSize: small ? "11px" : "14px" }}
        onMouseEnter={e => (e.currentTarget.style.background = bgHov)}
        onMouseLeave={e => (e.currentTarget.style.background = bg)}
      >
        {label}
      </button>
      <OrderModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
