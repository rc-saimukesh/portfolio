"use client";

import { useState, useEffect } from "react";

export type NavLink = "home" | "about" | "experience" | "projects" | "skills" | "certifications" | "contact";

interface NavProps {
  active: NavLink;
  onNav: (link: NavLink) => void;
}

const LINKS: { id: NavLink; label: string; icon: React.ReactNode }[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-6h5v6"/>
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <path d="m12 3 8.5 4.7L12 12.3 3.5 7.7 12 3Z"/><path d="m3.5 12 8.5 4.7 8.5-4.7"/><path d="m3.5 16.3 8.5 4.7 8.5-4.7"/>
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <path d="M4 6h10"/><circle cx="18" cy="6" r="2.4"/><path d="M20 12H10"/><circle cx="6" cy="12" r="2.4"/><path d="M4 18h10"/><circle cx="18" cy="18" r="2.4"/>
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 7L12 18l5 2.5-1.5-7"/>
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
        <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>
      </svg>
    ),
  },
];

export default function Nav({ active, onNav }: NavProps) {
  const [hovered, setHovered] = useState<NavLink | null>(null);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-[22px] left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-[2px] p-[6px] rounded-full border border-white/10"
      style={{
        background: "color-mix(in srgb, #16161a 72%, transparent)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.45), inset 0 0.5px 0 rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px) saturate(150%)",
        WebkitBackdropFilter: "blur(18px) saturate(150%)",
      }}
    >
      {LINKS.map((link) => {
        const isActive = active === link.id;
        return (
          <div key={link.id} className="relative">
            <button
              onClick={() => onNav(link.id)}
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={link.label}
              className="grid place-items-center w-10 h-10 rounded-full transition-colors duration-200 cursor-pointer"
              style={{
                color: isActive ? "#0b0b0c" : "#a7a399",
                background: isActive ? "#f3a886" : hovered === link.id ? "rgba(255,255,255,0.055)" : "transparent",
              }}
            >
              {link.icon}
            </button>
            {hovered === link.id && (
              <div
                className="absolute top-[calc(100%+9px)] left-1/2 -translate-x-1/2 text-[10px] tracking-[0.1em] uppercase whitespace-nowrap text-[#a7a399] bg-[#1c1c21] border border-white/10 px-2 py-1 rounded-[7px] pointer-events-none"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                {link.label}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
