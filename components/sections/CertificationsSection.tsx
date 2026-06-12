"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";

const ease = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

type Status = "done" | "wip" | "future";

interface CertItem {
  title: string;
  issuer: string;
  year?: string;
  status: Status;
}

const ITEMS: CertItem[] = [
  // ── Completed ──────────────────────────────────────────────────────────────
  {
    title: "B.Tech — Computer Technology",
    issuer: "Madras Institute of Technology, Anna University · CGPA 8.17",
    year: "2024",
    status: "done",
  },
  {
    title: "Published — IEEE ICSCAN 2024",
    issuer: "\"LVEF Estimation for Pediatric Patients using CNN\"",
    year: "2024",
    status: "done",
  },
  {
    title: "Bug Bounty — Security Assessment",
    issuer: "Campalin EduTech · Burp Suite, OWASP ZAP, Nmap",
    year: "2022",
    status: "done",
  },
  {
    title: "Zoho CRM Certified Administrator",
    issuer: "Zoho Corporation",
    year: "2025",
    status: "done",
  },
  {
    title: "Zoho CRM Certified Developer",
    issuer: "Zoho Corporation",
    year: "2025",
    status: "done",
  },
  // ── In Progress ────────────────────────────────────────────────────────────
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services · CLF-C02",
    status: "wip",
  },
  // ── Future ─────────────────────────────────────────────────────────────────
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services · Associate",
    status: "future",
  },
  {
    title: "AWS Certified Security — Specialty",
    issuer: "Amazon Web Services",
    status: "future",
  },
];

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; border: string; dot?: boolean }> = {
  done: {
    label: "Completed",
    color: "#f3a886",
    bg: "color-mix(in srgb, #f3a886 10%, transparent)",
    border: "color-mix(in srgb, #f3a886 30%, transparent)",
  },
  wip: {
    label: "In progress",
    color: "#86b894",
    bg: "color-mix(in srgb, #86b894 10%, transparent)",
    border: "color-mix(in srgb, #86b894 30%, transparent)",
    dot: true,
  },
  future: {
    label: "Planned",
    color: "#9fb0f0",
    bg: "color-mix(in srgb, #9fb0f0 7%, transparent)",
    border: "color-mix(in srgb, #9fb0f0 22%, transparent)",
  },
};

const SECTIONS: { status: Status; heading: string }[] = [
  { status: "wip", heading: "In Progress" },
  { status: "future", heading: "Planned" },
  { status: "done", heading: "Completed" },
];

export default function CertificationsSection() {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]" style={{ paddingTop: "clamp(96px,14vh,150px)", paddingBottom: "clamp(60px,10vh,120px)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.65, ease }}
        className="mb-[clamp(40px,6vw,72px)]"
        style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "clamp(20px,5vw,60px)", alignItems: "start" }}
      >
        <Eyebrow>Credentials</Eyebrow>
        <h2 className="leading-[1.06] tracking-[-0.02em] max-w-[17ch]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(30px,4.4vw,52px)" }}>
          The paper trail — and what&apos;s coming next.
        </h2>
      </motion.div>

      {/* Sections */}
      <div className="flex flex-col gap-[clamp(32px,5vw,52px)]">
        {SECTIONS.map(({ status, heading }) => {
          const items = ITEMS.filter(item => item.status === status);
          const cfg = STATUS_CONFIG[status];
          return (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              {/* Sub-heading */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase px-[10px] py-[5px] rounded-full"
                  style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace", color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
                >
                  {cfg.dot && <span className="pulse-live w-1.5 h-1.5 rounded-full inline-block" style={{ background: cfg.color }} />}
                  {heading}
                </span>
                <div className="flex-1 h-px" style={{ background: cfg.border }} />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[clamp(10px,1.5vw,16px)]">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease }}
                    className="flex items-start gap-4 p-[20px_24px] rounded-[16px] border transition-colors duration-300 hover:bg-white/[0.03]"
                    style={{ background: cfg.bg, borderColor: cfg.border }}
                  >
                    {/* Pip */}
                    <div className="shrink-0 mt-[3px] w-2 h-2 rounded-full" style={{ background: cfg.color, opacity: status === "future" ? 0.45 : 1 }} />
                    <div>
                      <h4 className="mb-1 tracking-[-0.01em] leading-snug" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "18px", color: status === "future" ? "#6f6c64" : "#ece8e1" }}>
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-[10px] text-[12px] text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>
                        <span>{item.issuer}</span>
                        {item.year && <span style={{ color: cfg.color, opacity: 0.8 }}>{item.year}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
