import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";

export const metadata: Metadata = {
  title: "RecipeRaja — Raja of Flavours, Queen of Tradition",
  description: "Homemade Indian pickles & South Indian foods since 1982. Zero preservatives. Ships pan India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SplashCursor/>
      <body>{children}</body>
    </html>
  );
}
