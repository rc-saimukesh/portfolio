export interface Metric { n: string; l: string; }

export interface Project {
  id: string;
  title: string;
  year: string;
  tagline: string;
  mesh: string[];
  challenge: string;
  body: string;
  approach: string;
  metrics: Metric[];
  tags: string[];
  githubUrl?: string;
}

export interface Repo {
  name: string;
  desc: string;
  year: string;
  tags: string[];
  githubUrl: string;
}

// ── Featured projects (full case-study overlay) ────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "sentinel",
    title: "Sentinel",
    year: "2024",
    tagline: "An autonomous AI platform that ingests, triages, and investigates cybersecurity alerts — so analysts don't have to.",
    mesh: ["#9fb0f0", "#86b894", "#6e8ef0"],
    challenge: "Security teams were drowning in alerts. Manual triage was slow, inconsistent, and burning out the people doing it.",
    body: "The alert queue never empties. Analysts spend hours on low-signal noise while genuinely dangerous incidents sit waiting. The real problem isn't a lack of tools — it's that every alert demands human attention even when 80% of them don't deserve it.",
    approach: "Built an LLM-powered orchestration engine with LangGraph and FastAPI. It classifies incoming alerts, queries AbuseIPDB for threat intel, and runs RAG + GraphRAG pipelines against an internal knowledge base. High-confidence incidents get auto-remediated; ambiguous ones get a detailed AI brief routed to a human. Everything lands in a Streamlit dashboard and pushes to Jira, ServiceNow, Slack, or email.",
    metrics: [
      { n: "GraphRAG", l: "context retrieval" },
      { n: "5+", l: "integrations wired" },
      { n: "Docker", l: "containerised deploy" },
    ],
    tags: ["Python", "LangGraph", "RAG · GraphRAG", "LLMs", "FastAPI", "Streamlit"],
  },
  {
    id: "pulse",
    title: "Pulse",
    year: "2023",
    tagline: "A CNN that estimates cardiac function from pediatric echocardiograms. Published at IEEE ICSCAN.",
    mesh: ["#f3a886", "#e7b66a", "#f08080"],
    challenge: "Manual LVEF estimation from echocardiograms is time-consuming and introduces inter-observer variability — especially critical when the patient is a child.",
    body: "Left Ventricular Ejection Fraction is a key measure of heart function. Estimating it manually from ultrasound images requires a trained cardiologist and is prone to inconsistency. For pediatric patients, where anatomy differs from adults, the problem is harder and the stakes higher.",
    approach: "Built a Convolutional Neural Network trained on pediatric echocardiogram datasets, applying transfer learning and careful hyperparameter tuning. Validated rigorously and written up for the IEEE International Conference on System, Computation, Automation and Networking (ICSCAN 2024).",
    metrics: [
      { n: "0.87", l: "R² score" },
      { n: "IEEE", l: "published paper" },
      { n: "CNN", l: "transfer learning" },
    ],
    tags: ["Python", "CNN", "Transfer Learning", "Flask", "AI · ML"],
  },
  {
    id: "fishly",
    title: "Fishly",
    year: "2024",
    tagline: "AI automations and a full-stack web platform for an early-stage startup — shipped solo in two months.",
    mesh: ["#86b894", "#9fb0f0", "#e7b66a"],
    challenge: "An early-stage startup needed to automate core workflows, launch a customer-facing platform, and do it fast enough to support an investor conversation.",
    body: "Fishly was running on spreadsheets and manual processes that didn't scale. They needed automations that just ran, a web presence that converted, and everything deployed reliably — in weeks, not months. I was the only engineer.",
    approach: "Designed AI-powered automations using Make (Integromat) with custom API integrations and event triggers. Built the customer-facing React + TypeScript frontend (deployed on Vercel) and a Flask backend API — wired to MongoDB, deployed on AWS EC2, automated with Docker and Git.",
    metrics: [
      { n: "−60%", l: "manual workload" },
      { n: "100+", l: "customers, week one" },
      { n: "AWS EC2", l: "production deploy" },
    ],
    tags: ["React", "TypeScript", "Flask", "AWS EC2", "MongoDB", "Docker"],
    githubUrl: "https://github.com/Sai-2002/Fishly",
  },
  {
    id: "deepguard",
    title: "DeepGuard",
    year: "2024",
    tagline: "A full-stack deepfake detection system — Next.js frontend backed by a Python API for face extraction and analysis.",
    mesh: ["#9fb0f0", "#f3a886", "#c084fc"],
    challenge: "Deepfakes are increasingly convincing and mainstream tooling for detecting them is either inaccessible or unreliable for real-world use.",
    body: "As generative models get better, the gap between real and synthetic media closes fast. Building a practical detection tool means handling the messy reality of in-the-wild media — variable quality, different face angles, compression artifacts — not just clean benchmark datasets.",
    approach: "Split across two repos: a Python API with dedicated face detection and extraction modules, and a Next.js frontend that lets users upload and analyse media. The API handles the CV heavy lifting — detecting faces, extracting regions of interest, and running the detection model — while the frontend keeps the experience clean and accessible.",
    metrics: [
      { n: "Next.js", l: "frontend" },
      { n: "Python", l: "CV backend" },
      { n: "2 repos", l: "frontend + API" },
    ],
    tags: ["Next.js", "Python", "Computer Vision", "Face Detection", "ML"],
    githubUrl: "https://github.com/Sai-2002/deepfake-detection-frontend",
  },
  {
    id: "safestep",
    title: "SafeStep",
    year: "2024",
    tagline: "IoT fall detection using accelerometer and gyroscope sensor data, with real-time location alerts via Google Maps.",
    mesh: ["#86b894", "#e7b66a", "#6ee7b7"],
    challenge: "Elderly and at-risk individuals fall without anyone being notified — and knowing where it happened matters as much as knowing it happened.",
    body: "Falls are a leading cause of serious injury in elderly populations. The window between a fall and getting help is critical. A wearable that just detects a fall isn't enough — it needs to pinpoint the location and get the alert to the right people instantly.",
    approach: "Built a Python + Flask API that ingests live accelerometer, gyroscope, and GPS data from an IoT sensor. The fall detection algorithm analyses the readings in real time. When a fall is detected, it reverse geocodes the GPS coordinates via Google Maps API and pushes an alert with the precise location. User auth via phone number, data persisted in MongoDB Atlas.",
    metrics: [
      { n: "6", l: "sensor axes tracked" },
      { n: "Real-time", l: "fall detection" },
      { n: "Google Maps", l: "location alerts" },
    ],
    tags: ["Python", "Flask", "MongoDB Atlas", "IoT", "Google Maps API"],
    githubUrl: "https://github.com/Sai-2002/FallDetection-IOT",
  },
  {
    id: "scanteen",
    title: "Scanteen",
    year: "2023",
    tagline: "A QR-based food ordering app for college canteens, built with and for a team of five.",
    mesh: ["#e7b66a", "#f3a886", "#86b894"],
    challenge: "Canteen queues were long, orders got lost, and the whole process was manual. Students wanted to order from their phones.",
    body: "College canteens run on chaos — shouted orders, handwritten lists, queues at peak hour. The idea was simple: scan a QR code at your table, browse the menu, order, pay, and get notified when it's ready. The engineering challenge was making it reliable enough that a canteen would actually trust it.",
    approach: "Led the first iteration of frontend development in Flutter — building the full user-side interface from scratch, including browsing, ordering, and checkout flows. Coordinated and mentored a team of five junior developers, handled task breakdown and code review, and delivered a clean handoff so the team could carry the project forward independently.",
    metrics: [
      { n: "Flutter", l: "cross-platform" },
      { n: "5", l: "devs mentored" },
      { n: "Full", l: "user flow shipped" },
    ],
    tags: ["Flutter", "Dart", "UI/UX", "Team Lead"],
    githubUrl: "https://github.com/Sai-2002/scanteen-ui",
  },
];

// ── Smaller repos — shown as a compact grid with GitHub links ──────────────
export const REPOS: Repo[] = [
  {
    name: "Advanced Keylogger",
    desc: "C++ keylogger using reverse shell and socket programming — captures keystrokes and exfiltrates log files via a Kali Linux netcat listener. Built for cybersecurity research.",
    year: "2023",
    tags: ["C++", "Reverse Shell", "Sockets", "Cybersecurity"],
    githubUrl: "https://github.com/Sai-2002/advanced_keylogger",
  },
  {
    name: "Blockchain Voting",
    desc: "A blockchain-based voting system in Python — immutable vote ledger using core blockchain data structures.",
    year: "2023",
    tags: ["Python", "Blockchain", "Cryptography"],
    githubUrl: "https://github.com/Sai-2002/blockChainVoting",
  },
  {
    name: "Kanban",
    desc: "Python backend for a Kanban board app — task and workflow management with a REST API and route structure.",
    year: "2024",
    tags: ["Python", "REST API", "Backend"],
    githubUrl: "https://github.com/Sai-2002/kanban",
  },
  {
    name: "Voice Bot",
    desc: "Discord bot for voice channel management — push, pull, and move users between voice channels with simple commands.",
    year: "2023",
    tags: ["Python", "Discord.py", "Bot"],
    githubUrl: "https://github.com/Sai-2002/Voice_Bot",
  },
  {
    name: "Proxy Server",
    desc: "A Python proxy server implementation — forwards and intercepts network requests.",
    year: "2023",
    tags: ["Python", "Networking", "Proxy"],
    githubUrl: "https://github.com/Sai-2002/proxy_server",
  },
  {
    name: "Multithread Client-Server",
    desc: "Multi-threaded client-server application using Python socket programming — handles concurrent connections.",
    year: "2023",
    tags: ["Python", "Sockets", "Multithreading"],
    githubUrl: "https://github.com/Sai-2002/Multithread-client-server",
  },
  {
    name: "Netflix Clone",
    desc: "A JavaScript frontend clone of the Netflix UI — built as a front-end engineering exercise.",
    year: "2023",
    tags: ["JavaScript", "HTML/CSS", "Frontend"],
    githubUrl: "https://github.com/Sai-2002/netflix-clone",
  },
];
