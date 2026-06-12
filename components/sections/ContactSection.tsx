"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";

export default function ContactSection() {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]" style={{ paddingTop: "clamp(96px,14vh,150px)", paddingBottom: "clamp(60px,10vh,120px)" }}>
      <motion.div
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
        className="text-center flex flex-col items-center"
        style={{ paddingBlock: "clamp(20px,6vh,60px) 0", minHeight: "60vh", justifyContent: "center" }}
      >
        <Eyebrow center>Contact</Eyebrow>
        <h2
          className="mt-[22px] mb-[14px] leading-[1.0] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(40px,8vw,96px)" }}
        >
          Let&rsquo;s build{" "}
          <a href="mailto:smnjr2002@gmail.com" className="transition-colors duration-300 hover:text-[#f3a886]">
            something good.
          </a>
        </h2>
        <p className="text-[#a7a399] max-w-[44ch] mx-auto mb-10">
          Open to interesting problems — AI, full-stack, Zoho, or something I haven&rsquo;t tried yet. If you&rsquo;re in Chennai, I&rsquo;ll bring the filter coffee.
        </p>
        <div className="flex justify-center flex-wrap gap-[14px]">
          {[
            {
              href: "mailto:smnjr2002@gmail.com",
              label: "smnjr2002@gmail.com",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>
                </svg>
              ),
            },
            {
              href: "https://github.com/rc-saimukesh",
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
                </svg>
              ),
            },
            {
              href: "https://linkedin.com/in/sai-mukesh-rc/",
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V9.99H5.67v8.35h2.67ZM7 8.82a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.52v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.96 0 1.35.73 1.35 1.81v4.48h2.64Z"/>
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-[9px] px-5 py-[11px] rounded-full border border-white/10 text-[#a7a399] text-[13px] tracking-[0.04em] transition-all duration-300 hover:text-[#ece8e1] hover:border-[#f3a886] hover:bg-white/[0.055]"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
        <div className="mt-[clamp(48px,9vh,90px)] text-[12px] text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>
          © 2025 R C Sai Mukesh · smnjr2002@gmail.com
        </div>
      </motion.div>
    </div>
  );
}
