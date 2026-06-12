"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";

interface SkillItem {
  name: string;
  note?: string;
}

interface SkillGroup {
  title: string;
  idx: string;
  skills: SkillItem[];
}

const GROUPS: SkillGroup[] = [
  {
    title: "Cloud & DevOps",
    idx: "01",
    skills: [
      { name: "AWS EC2", note: "learning" },
      { name: "AWS ECR · S3", note: "learning" },
      { name: "AWS Lambda · SNS", note: "learning" },
      { name: "Docker · Kubernetes", note: "learning" },
      { name: "Vercel · Git" },
    ],
  },
  {
    title: "Zoho Platform",
    idx: "02",
    skills: [
      { name: "Zoho CRM" },
      { name: "Zoho Catalyst" },
      { name: "Deluge" },
      { name: "Zia Agents" },
    ],
  },
  {
    title: "AI & Automation",
    idx: "03",
    skills: [
      { name: "LLMs & Prompt Engineering" },
      { name: "RAG · GraphRAG" },
      { name: "LangGraph · LangChain" },
      { name: "AI Agents" },
      { name: "Workflow Automation" },
    ],
  },
  {
    title: "Frameworks & Stack",
    idx: "04",
    skills: [
      { name: "React · Next.js" },
      { name: "Flask · FastAPI" },
      { name: "Flutter" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Languages",
    idx: "05",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Dart" },
      { name: "Java · C/C++" },
    ],
  },
];


export default function SkillsSection() {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]" style={{ paddingTop: "clamp(96px,14vh,150px)", paddingBottom: "clamp(60px,10vh,120px)" }}>
      <motion.div
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
        className="mb-[clamp(40px,6vw,72px)]"
        style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "clamp(20px,5vw,60px)", alignItems: "start" }}
      >
        <Eyebrow>Skills &amp; Tools</Eyebrow>
        <h2 className="leading-[1.06] tracking-[-0.02em] max-w-[17ch]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(30px,4.4vw,52px)" }}>
          What I build with every day — and what I&apos;m picking up next.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 rounded-[22px] overflow-hidden border border-white/[0.055]">
        {GROUPS.map((grp, gi) => (
          <motion.div
            key={grp.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.55, delay: gi * 0.08, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
            className="border-b border-white/[0.055]"
            style={{ padding: "clamp(24px,3vw,36px)", borderRight: gi % 2 === 0 ? "1px solid rgba(255,255,255,0.055)" : undefined, gridColumn: gi === 4 ? "1 / -1" : undefined }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-5">
              <h3 className="tracking-[-0.01em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(21px,2.4vw,27px)" }}>{grp.title}</h3>
              <span className="text-[12px] text-[#6f6c64]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}>{grp.idx}</span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col">
              {grp.skills.map((skill, si) => (
                <li key={skill.name} className={`flex items-center justify-between gap-3 py-[11px] text-[15px] text-[#a7a399] ${si > 0 ? "border-t border-white/[0.055]" : ""}`}>
                  <span>{skill.name}</span>
                  {skill.note && (
                    <span
                      className="text-[11px] tracking-[0.04em]"
                      style={{
                        fontFamily: "var(--font-jetbrains), ui-monospace, monospace",
                        color: skill.note === "studying" ? "#86b894" : "#9fb0f0",
                      }}
                    >{skill.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
