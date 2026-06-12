"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import MeshBlobs from "@/components/MeshBlobs";
import { PROJECTS, REPOS, Project } from "@/lib/projects";

interface ProjectsSectionProps {
  onOpenCase: (project: Project) => void;
}

const ease = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

export default function ProjectsSection({ onOpenCase }: ProjectsSectionProps) {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]" style={{ paddingTop: "clamp(96px,14vh,150px)", paddingBottom: "clamp(60px,10vh,120px)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.65, ease }}
        className="mb-[clamp(40px,6vw,72px)]"
        style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "clamp(20px,5vw,60px)", alignItems: "start" }}
      >
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="leading-[1.06] tracking-[-0.02em] max-w-[17ch]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(30px,4.4vw,52px)" }}>
          A few things I built, and what they had to solve.
        </h2>
      </motion.div>

      {/* Featured projects grid */}
      <div className="grid grid-cols-2 gap-[clamp(18px,2.5vw,30px)] max-sm:grid-cols-1">
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.08, ease }}
            onClick={() => onOpenCase(p)}
            className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-[#16161a] text-left cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-[color-mix(in_srgb,#f3a886_40%,rgba(255,255,255,0.1))]"
          >
            {/* Cover */}
            <div className="relative overflow-hidden bg-[#1c1c21]" style={{ aspectRatio: "16/10" }}>
              <MeshBlobs colors={p.mesh} className="transition-transform duration-[800ms] group-hover:scale-[1.08]" />
            </div>
            {/* Body */}
            <div className="flex flex-col gap-[10px] p-[22px_24px_26px]">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="tracking-[-0.02em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(26px,3vw,36px)" }}>{p.title}</h3>
                <span className="text-[12px] text-[#6f6c64] shrink-0" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{p.year}</span>
              </div>
              <p className="m-0 text-[#a7a399] max-w-[44ch]">{p.tagline}</p>
              <div className="mt-1.5 flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[#f3a886]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>
                  View case study
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
                  </svg>
                </span>
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.04em] text-[#6f6c64] hover:text-[#ece8e1] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
                      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* More work — compact repo grid */}
      <motion.div
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mt-[clamp(56px,9vw,96px)]"
      >
        <div className="flex items-center gap-4 mb-[clamp(24px,3vw,36px)]">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>More work</span>
          <div className="flex-1 h-px bg-white/[0.055]" />
        </div>

        <div className="grid grid-cols-3 gap-[clamp(12px,2vw,20px)] max-sm:grid-cols-1 max-md:grid-cols-2">
          {REPOS.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="group flex flex-col gap-3 p-[20px_22px] rounded-[16px] border border-white/[0.07] bg-[#16161a] transition-all duration-300 hover:border-white/20 hover:bg-[#1c1c21] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[#ece8e1] leading-snug tracking-[-0.01em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "17px" }}>{repo.name}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0 text-[#6f6c64] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f3a886] mt-0.5">
                  <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
                </svg>
              </div>
              <p className="text-[#6f6c64] text-[13px] leading-[1.55] flex-1">{repo.desc}</p>
              <div className="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-white/[0.055]">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] tracking-[0.06em] px-2 py-0.5 rounded-full text-[#a7a399] bg-white/[0.055]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{tag}</span>
                  ))}
                </div>
                <span className="text-[11px] text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{repo.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
