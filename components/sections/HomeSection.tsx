"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import { NavLink } from "@/components/Nav";

interface HomeSectionProps {
  onNav: (link: NavLink) => void;
}

const ease = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.65, ease },
  };
}

export default function HomeSection({ onNav }: HomeSectionProps) {
  return (
    <div className="block">
      {/* Hero */}
      <div
        className="relative w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]"
        style={{ minHeight: "100svh", display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: "clamp(28px,5vw,64px)", alignItems: "center", paddingTop: 120, paddingBottom: 60 }}
      >
        {/* Aurora */}
        <div className="absolute inset-[-10%_-10%_auto_-10%] h-[90vh] -z-10 pointer-events-none overflow-hidden" style={{ filter: "blur(70px) saturate(135%)", opacity: 0.35 }}>
          <span className="aurora-a1 absolute rounded-full w-[46vw] h-[46vw] left-[8%] top-[2%] bg-[#f3a886]" style={{ mixBlendMode: "screen" }} />
          <span className="aurora-a2 absolute rounded-full w-[40vw] h-[40vw] right-[6%] top-[14%] bg-[#86b894]" style={{ mixBlendMode: "screen" }} />
          <span className="aurora-a3 absolute rounded-full w-[30vw] h-[30vw] left-[38%] top-[30%] bg-[#f3a886] opacity-70" style={{ mixBlendMode: "screen" }} />
        </div>

        {/* Left */}
        <div className="flex flex-col" style={{ gridColumn: 1 }}>
          <motion.div {...fadeUp(0)} className="mb-[26px]">
            <p
              className="inline-flex items-center gap-[0.7em] text-[12px] tracking-[0.22em] uppercase text-[#ece8e1]"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              <span className="inline-block w-[22px] h-px bg-[#f3a886]" />
              Technical Trainer &amp; Solutions Engineer · Zoho Corp
            </p>
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="leading-[0.92] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: 400, fontSize: "clamp(52px,8vw,110px)" }}
          >
            R C Sai<br />Mukesh<em className="not-italic italic text-[#f3a886]">.</em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-4 text-[#a7a399] max-w-[24ch] leading-[1.25]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontStyle: "italic", fontSize: "clamp(20px,2.8vw,32px)" }}
          >
            AI engineer, full-stack developer, and the person who makes it make sense.
          </motion.p>
          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 text-[#a7a399] max-w-[38ch] leading-[1.6]"
            style={{ fontSize: "clamp(16px,1.8vw,19px)" }}
          >
            Based in Chennai. I build with Python, React, and LLMs — and train developers on Zoho at Zoho Corp. I&rsquo;ve published at IEEE, shipped production AI systems, and I write code that doesn&rsquo;t need me to babysit it.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-x-9 gap-y-3.5 mt-[34px]">
            {[
              { k: "Role", v: "Trainer · Solutions Eng" },
              { k: "Focus", v: "AI · Full-Stack" },
              { k: "Based in", v: "Chennai, IN" },
            ].map(({ k, v }) => (
              <div key={k} className="flex flex-col gap-1">
                <span className="text-[11px] tracking-[0.14em] uppercase text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{k}</span>
                <span className="text-[15px] text-[#ece8e1]">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Currently card */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative rounded-[22px] overflow-hidden flex flex-col justify-end border border-white/10"
          style={{ aspectRatio: "4/5", maxHeight: "70vh", padding: "clamp(22px,2.6vw,34px)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
        >
          {/* Gradient tile — swap for a real photo later */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ filter: "blur(48px) saturate(140%)" }}>
            <span className="absolute rounded-full w-[70%] h-[70%] left-[-10%] top-[-5%] bg-[#f3a886] opacity-80" style={{ mixBlendMode: "screen" }} />
            <span className="absolute rounded-full w-[65%] h-[65%] right-[-8%] top-[20%] bg-[#86b894] opacity-75" style={{ mixBlendMode: "screen" }} />
            <span className="absolute rounded-full w-[50%] h-[55%] left-[25%] top-[45%] bg-[#e7b66a] opacity-65" style={{ mixBlendMode: "screen" }} />
            <span className="absolute rounded-full w-[40%] h-[40%] right-[15%] bottom-[-10%] bg-[#9fb0f0] opacity-60" style={{ mixBlendMode: "screen" }} />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(transparent 38%, rgba(0,0,0,0.62))" }} />
          <div className="absolute top-[clamp(20px,2.4vw,30px)] left-[clamp(22px,2.6vw,34px)] inline-flex items-center gap-2 text-white text-[11px] tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>
            <span className="pulse-live w-2 h-2 rounded-full bg-[#86b894]" style={{ boxShadow: "0 0 0 4px color-mix(in srgb, #86b894 30%, transparent)" }} />
            Currently
          </div>
          <div className="relative z-10">
            <h3 className="text-white tracking-[-0.02em] leading-tight" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: 400, fontSize: "clamp(28px,3.4vw,40px)" }}>
              Training devs on Zoho at Zoho Corp
            </h3>
            <p className="mt-2 text-[14px] leading-[1.5] max-w-[30ch]" style={{ color: "rgba(255,255,255,0.82)" }}>
              Building proof-of-concept solutions, running developer training, and studying for AWS CCP on the side.
            </p>
          </div>
        </motion.div>

        {/* Responsive: single column override */}
        <style>{`
          @media (max-width: 860px) {
            .home-hero-grid { grid-template-columns: 1fr !important; }
            .currently-card { aspect-ratio: 16/11 !important; max-height: none !important; }
          }
        `}</style>
      </div>

      {/* About section */}
      <div
        id="about-anchor"
        className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]"
        style={{ paddingTop: "clamp(64px,10vh,110px)", paddingBottom: "clamp(80px,14vh,150px)", borderTop: "1px solid rgba(255,255,255,0.055)", scrollMarginTop: 92 }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="mb-[clamp(24px,3vw,36px)]"
        >
          <Eyebrow>About</Eyebrow>
        </motion.div>

        {/* Big headline — full width */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
          className="leading-[1.04] tracking-[-0.03em] mb-[clamp(40px,6vw,72px)]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(36px,5.5vw,72px)", maxWidth: "18ch" }}
        >
          I build things that work — then make sure{" "}
          <em className="italic text-[#f3a886]">the people around them</em> do too.
        </motion.h2>

        {/* Two-column prose */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
          className="grid gap-x-[clamp(32px,6vw,80px)] gap-y-6"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left — big serif voice */}
          <div className="flex flex-col gap-[1.1em]">
            <p className="leading-[1.5] tracking-[-0.01em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(18px,2vw,23px)", color: "#ece8e1" }}>
              I&rsquo;m a CS grad from MIT Anna University and currently a Technical Trainer &amp; Solutions Engineer at Zoho Corp in Chennai — building proof-of-concept apps and running developer training on the Zoho platform.
            </p>
            <p className="leading-[1.5] tracking-[-0.01em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(18px,2vw,23px)", color: "#ece8e1" }}>
              Before that, I shipped AI automations and a full-stack platform for a startup as their sole engineer.{" "}
              <span className="text-[#6f6c64]">60% less manual work. 100+ customers in week one. That kind of thing.</span>
            </p>
          </div>

          {/* Right — body detail */}
          <div className="text-[#a7a399] leading-[1.75] space-y-[1em]" style={{ fontSize: "16px" }}>
            <p>My work sits at the intersection of AI, full-stack engineering, and making things easy to understand. I&rsquo;ve built LLM-powered incident response systems with LangGraph and RAG pipelines, trained CNNs on medical imaging data (with a published IEEE paper to show for it), and done security work with Burp Suite and OWASP ZAP.</p>
            <p>The training side of my current role is where a lot of the real craft is. Getting a developer to go from confused to confident is genuinely hard — and I find it more satisfying than most of the code I write.</p>
            <p>Studying for my AWS Cloud Practitioner cert. Decent at filter coffee. Annoyingly good at explaining things.</p>
          </div>
        </motion.div>

        {/* Facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="mt-[clamp(40px,6vw,64px)] pt-[clamp(24px,3vw,36px)] grid grid-cols-3 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
        >
          {[
            { k: "Education", v: "MIT Anna Univ" },
            { k: "Published", v: "IEEE ICSCAN" },
            { k: "Next cert", v: "AWS CCP" },
          ].map(({ k, v }) => (
            <div key={k} className="flex flex-col gap-[6px]">
              <span className="text-[11px] tracking-[0.16em] uppercase text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{k}</span>
              <span className="text-[#ece8e1]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(20px,2.4vw,28px)", letterSpacing: "-0.01em" }}>{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
