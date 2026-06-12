"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MeshBlobs from "@/components/MeshBlobs";
import Tag from "@/components/Tag";
import { Project } from "@/lib/projects";

interface CaseStudyOverlayProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyOverlay({ project, onClose }: CaseStudyOverlayProps) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
          className="fixed inset-0 z-[1200] bg-[#0b0b0c] overflow-y-auto"
        >
          <div className="max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)] pb-[120px]">
            {/* Back button */}
            <div className="sticky top-0 z-10 pt-[26px] pb-[18px] w-full" style={{ background: "linear-gradient(#0b0b0c 70%, transparent)" }}>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-[#a7a399] hover:text-[#ece8e1] transition-colors duration-200 cursor-pointer border-0 bg-transparent"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back
              </button>
            </div>

            {/* Hero */}
            <div
              className="relative rounded-[22px] overflow-hidden flex items-end mb-[clamp(48px,8vw,90px)]"
              style={{ aspectRatio: "16/8", padding: "clamp(28px,5vw,56px)" }}
            >
              <MeshBlobs colors={project.mesh} className="[filter:blur(50px)_saturate(140%)]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(transparent 35%, rgba(0,0,0,0.55))" }} />
              <div className="relative z-10">
                <h1 className="text-white leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(48px,9vw,110px)" }}>
                  {project.title}
                </h1>
                <p className="mt-[10px] text-[rgba(255,255,255,0.82)]" style={{ fontSize: "clamp(16px,2vw,21px)" }}>
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Rows */}
            {[
              { k: "Challenge", content: <div className="text-[#ece8e1] leading-[1.18] tracking-[-0.02em] max-w-[22ch]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(26px,3.6vw,40px)" }}>{project.challenge}</div> },
              { k: "Context", content: <p className="text-[#a7a399] max-w-[60ch] leading-[1.7]">{project.body}</p> },
              { k: "Approach", content: <p className="text-[#a7a399] max-w-[60ch] leading-[1.7]">{project.approach}</p> },
              {
                k: "Outcome",
                content: (
                  <div className="flex flex-wrap gap-x-14 gap-y-6">
                    {project.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-[#f3a886] tracking-[-0.02em] leading-none" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(34px,5vw,58px)" }}>{m.n}</div>
                        <div className="mt-1 text-[12px] tracking-[0.06em] text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                k: "Stack",
                content: (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                ),
              },
            ].map(({ k, content }, i) => (
              <div
                key={k}
                className="grid gap-[clamp(20px,5vw,60px)]"
                style={{
                  gridTemplateColumns: "200px 1fr",
                  padding: "clamp(30px,5vw,52px) 0",
                  borderTop: i > 0 ? "1px solid rgba(255,255,255,0.055)" : undefined,
                }}
              >
                <span className="text-[12px] tracking-[0.14em] uppercase text-[#6f6c64] pt-1" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{k}</span>
                {content}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
