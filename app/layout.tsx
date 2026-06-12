import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "R C Sai Mukesh — AI Engineer & Technical Trainer",
  description: "Technical Trainer & Solutions Engineer at Zoho Corp, Chennai. I build with Python, React, and LLMs — and I've published at IEEE. Open to interesting problems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body
        className="min-h-screen text-[#ece8e1]"
        style={{ fontFamily: "var(--font-hanken), ui-sans-serif, system-ui, sans-serif", fontSize: "17px", lineHeight: "1.6" }}
      >
        {children}
      </body>
    </html>
  );
}
