"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav, { NavLink } from "@/components/Nav";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";
import { Project } from "@/lib/projects";

const LINK_PAGE: Record<NavLink, NavLink> = {
  home: "home",
  about: "home",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  certifications: "certifications",
  contact: "contact",
};

const pageVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0, y: -8,
    transition: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PortfolioPage() {
  const [activeLink, setActiveLink] = useState<NavLink>("home");
  const [activePage, setActivePage] = useState<NavLink>("home");
  const [caseProject, setCaseProject] = useState<Project | null>(null);

  const handleNav = useCallback((link: NavLink) => {
    const page = LINK_PAGE[link];
    setActiveLink(link);
    setActivePage(page);
    window.scrollTo(0, 0);
    if (link === "about" && page === "home") {
      setTimeout(() => {
        document.getElementById("about-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#0b0b0c]">
        <div className="bloom-bg absolute inset-0" />
      </div>

      <Nav active={activeLink} onNav={handleNav} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {activePage === "home" && <HomeSection onNav={handleNav} />}
            {activePage === "experience" && <ExperienceSection />}
            {activePage === "projects" && <ProjectsSection onOpenCase={setCaseProject} />}
            {activePage === "skills" && <SkillsSection />}
            {activePage === "certifications" && <CertificationsSection />}
            {activePage === "contact" && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <CaseStudyOverlay project={caseProject} onClose={() => setCaseProject(null)} />
    </>
  );
}
