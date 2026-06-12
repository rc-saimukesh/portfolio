"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import Tag from "@/components/Tag";

const EXPERIENCE = [
  {
    years: "Apr 2025 — Present",
    place: "Zoho Corp · Chennai",
    title: "Technical Trainer & Solutions Engineer",
    desc: "Deliver developer training on Zoho CRM and the Zoho Developer Space — covering API integrations, server-side and client-side scripting in Deluge and JavaScript, and cloud-hosted app architectures. Design and build proof-of-concept solutions that show customers what's possible, not just what's documented.",
    tags: ["Zoho CRM", "Deluge", "JavaScript", "REST APIs", "Training"],
  },
  {
    years: "Nov 2024 — Jan 2025",
    place: "Fishly · Chennai (Freelance)",
    title: "AI Automation & Full-Stack Developer",
    desc: "Sole engineer at an early-stage startup. Built AI-powered workflow automations using Make and custom API integrations, shipped a React + Flask web platform on AWS EC2, and wired up MongoDB for data management. Reduced manual workload by 60% and onboarded 100+ customers in week one of launch — contributing to their investor funding round.",
    tags: ["React", "Flask", "AWS EC2", "MongoDB", "Make · Integromat", "Docker"],
  },
  {
    years: "Apr 2022 — Jul 2022",
    place: "Campalin EduTech · Bangalore",
    title: "Bug Bounty Intern",
    desc: "Conducted security assessments across web apps, mobile apps, and APIs — identifying and reporting vulnerabilities for prompt resolution. Hands-on with Burp Suite, OWASP ZAP, and Nmap. First real exposure to thinking like an attacker, which still informs how I think about building systems.",
    tags: ["Burp Suite", "OWASP ZAP", "Nmap", "Penetration Testing"],
  },
];

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-[clamp(20px,5vw,64px)]" style={{ paddingTop: "clamp(96px,14vh,150px)", paddingBottom: "clamp(60px,10vh,120px)" }}>
      {/* Page head */}
      <motion.div
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
        className="mb-[clamp(40px,6vw,72px)]"
        style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "clamp(20px,5vw,60px)", alignItems: "start" }}
      >
        <Eyebrow>Experience</Eyebrow>
        <h2 className="leading-[1.06] tracking-[-0.02em] max-w-[17ch]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(30px,4.4vw,52px)" }}>
          Training, building, and breaking things — in that order.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-[960px] mx-auto">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 rounded-[2px] opacity-70" style={{ background: "linear-gradient(180deg, #f3a886, #86b894)" }} />

        {EXPERIENCE.map((exp, i) => {
          const isOdd = i % 2 === 0;
          const accentColor = isOdd ? "#f3a886" : "#86b894";
          return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }}
              className="relative mb-[clamp(20px,3vw,34px)] last:mb-0 group"
              style={{
                width: "calc(50% - 34px)",
                marginLeft: isOdd ? 0 : "auto",
                marginRight: isOdd ? "auto" : 0,
                textAlign: isOdd ? "right" : "left",
              }}
            >
              {/* Node */}
              <div
                className="hidden md:block absolute top-[30px] w-[15px] h-[15px] rounded-full bg-[#0b0b0c] z-10 transition-all duration-300"
                style={{
                  [isOdd ? "right" : "left"]: "-41px",
                  border: `2.5px solid ${accentColor}`,
                  boxShadow: `0 0 0 5px color-mix(in srgb, ${accentColor} 20%, transparent)`,
                }}
              />
              {/* Connector */}
              <div
                className="hidden md:block absolute top-[37px] w-[26px] h-[2px]"
                style={{
                  [isOdd ? "right" : "left"]: "-28px",
                  background: isOdd
                    ? `linear-gradient(90deg, transparent, color-mix(in srgb, ${accentColor} 60%, transparent))`
                    : `linear-gradient(90deg, color-mix(in srgb, ${accentColor} 60%, transparent), transparent)`,
                  transform: isOdd ? "scaleX(-1)" : undefined,
                }}
              />
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-[20px] border border-white/10 transition-transform duration-[450ms] hover:-translate-y-[5px]"
                style={{
                  padding: "clamp(22px,2.4vw,30px)",
                  background: `color-mix(in srgb, #16161a 90%, ${accentColor} 10%)`,
                  boxShadow: "0 16px 44px rgba(0,0,0,0.32)",
                }}
              >
                <div className="absolute w-[200px] h-[200px] -top-[90px] -right-[60px] rounded-full pointer-events-none opacity-[0.34]"
                  style={{ background: accentColor, filter: "blur(50px)" }} />
                <div className={`relative z-10 flex flex-col gap-[3px] mb-[14px] ${isOdd ? "items-end" : ""}`}>
                  <span className="text-[13px] tracking-[0.04em]" style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace", color: accentColor }}>{exp.years}</span>
                  <span className="text-[13.5px] text-[#6f6c64]">{exp.place}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-[9px] tracking-[-0.01em]" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(22px,2.8vw,31px)" }}>{exp.title}</h3>
                  <p className="mb-[18px] text-[#a7a399] max-w-[54ch]">{exp.desc}</p>
                  <div className={`flex flex-wrap gap-2 ${isOdd ? "justify-end" : ""}`}>
                    {exp.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
