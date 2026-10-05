\import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import poojaImg from "@/assets/pooja.png";
import resumePdf from "@/assets/Pooja-Shivakumar-Resume.pdf";

const projects = [
  {
    no: "01",
    title: "Logic Reuse Assistant for Frappe/ERPNext",
    period: "Aug 2026 — Sep 2026",
    stack: ["Python", "RAG", "LLM", "Vector Search"],
    desc: "A RAG-based developer tool that indexes Frappe/ERPNext codebase logic using vector search and LLM reasoning to recommend code reuse, reducing duplicate implementations and supporting maintainable automation workflows.",
    github: "https://github.com/SowmiyaS06/frappe-project",
  },
  {
    no: "02",
    title: "Recruitment & HR Automation Platform",
    period: "Oct 2025 — Mar 2026",
    stack: ["Python", "SQL", "AI APIs", "Git"],
    desc: "A full-stack ATS-based candidate filtering platform with AI API integration for automated recruitment workflows, including evaluation and validation of AI-generated screening outputs.",
    github: "https://github.com/Pooj16/PRO-HRM",
  },
  {
    no: "03",
    title: "Document Chatbot with Voice & Translation",
    period: "Feb 2025 — Mar 2025",
    stack: ["Python", "Streamlit", "OpenAI", "Whisper"],
    desc: "A multimodal AI chatbot that extracts PDF and DOCX content, transcribes audio using Whisper, translates across 5 languages, and uses PyTest to validate AI outputs and API responses.",
    github: "https://github.com/Pooj16/voice-chatbot-for-documents",
  },
  {
    no: "04",
    title: "Image-based Phishing Detection",
    period: "Jan 2026 — Feb 2026",
    stack: ["Python", "CNN", "Scikit-learn", "Git"],
    desc: "An ML classification system using CNN to detect phishing websites from visual patterns, with precision and recall evaluation to improve the reliability of security decisions.",
    github: "https://github.com/Pooj16/image-phishing",
  },
];

const experience = [
  {
    role: "Software Engineering Intern",
    org: "Tridots Tech Pvt. Ltd., Chennai",
    period: "2026 — Present",
    detail:
      "Developing web applications using Frappe Framework with Python, JavaScript, and Bootstrap, including form customization, scripting, UI development, and reusable, testable code modules on the ERPNext platform.",
  },
  {
    role: "AI & Software Development Intern",
    org: "Orcus Info",
    period: "May 2025 — Jun 2025",
    detail:
      "Architected an AI-powered web platform using Node.js, React, and REST APIs, integrating AI APIs to automate product features and evaluating AI-generated outputs for correctness, reducing manual effort by 40%.",
  },
  {
    role: "AIML Intern",
    org: "Cube AI Solutions Tech Pvt. Ltd.",
    period: "Jan 2025 — Apr 2025",
    detail:
      "Engineered reusable, testable Python modules using Pandas, NumPy, and Scikit-learn; deployed 2 production-ready REST API workflows and validated model outputs for consistency and accuracy, improving performance by 15%.",
  },
];

const skills = {
  Languages: ["Python", "JavaScript", "Java", "SQL", "C"],
  "Testing & Automation": [
    "PyTest",
    "Unit Testing",
    "REST API Testing",
    "AI Output Evaluation",
    "Test Script Writing",
  ],
  "Frameworks & Tools": [
    "Flask",
    "FastAPI",
    "Node.js",
    "React",
    "Frappe Framework",
    "ERPNext",
    "REST APIs",
    "Streamlit",
  ],
  "AI / ML": [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "EDA",
    "Regression",
    "Classification",
    "LLM",
    "RAG",
    "Vector Search",
  ],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "DBMS"],
  "CS & Tools": [
    "Git",
    "GitHub",
    "Linux",
    "OOP",
    "SDLC",
    "Agile",
    "Telemetry",
    "Logs Analysis",
  ],
};

const achievements = [
  {
    year: "2025",
    title: "2nd Place — SheCodeAI Hackathon",
    note: "₹10,000 prize · AI/ML Track · 80+ teams",
  },
  {
    year: "2024",
    title: "Winner — Paradox",
    note: "IIT Madras",
  },
  {
    year: "2025",
    title: "Diploma in Programming & Foundation in Data Science",
    note: "IIT Madras · 2023–2025",
  },
];

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      });

      setTime(t + " IST");
    };

    update();

    const i = setInterval(update, 30000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Pooja<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#work"
              className="hover:text-foreground transition-colors"
            >
              Work
            </a>

            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>

            <a
              href="#experience"
              className="hover:text-foreground transition-colors"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="font-mono text-xs text-muted-foreground hidden sm:block">
            {time}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative pt-40 pb-32 px-6 md:px-10 grain"
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-8"
          >
            ◆ Software Engineer · Chennai, India
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-serif text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-tight text-balance"
              >
                Pooja{" "}
                <span className="italic gold-text">Shivakumar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Building reliable software and AI-powered systems at the
                intersection of{" "}
                <span className="text-foreground">
                  software engineering
                </span>{" "}
                and{" "}
                <span className="text-foreground">data science</span>.
                Currently working as a Software Engineering Intern while
                pursuing B.Tech in AI & Data Science and a BS in Data Science
                from IIT Madras.
              </motion.p>

              {/* Resume Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={resumePdf}
                  download="Pooja-Shivakumar-Resume.pdf"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:gap-5 transition-all duration-500"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                >
                  Download Resume
                  <span className="text-xl">↓</span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  View My Work
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-4 relative"
            >
              <div
                className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={poojaImg}
                  alt="Pooja Shivakumar"
                  className="w-full h-full object-cover grayscale-[15%] contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-4 border-t border-border pt-8"
          >
            <Stat label="CGPA" value="8.6" />
            <Stat label="Internships" value="03" />
            <Stat label="Hackathon Wins" value="02" />
            <Stat label="Years Coding" value="04+" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="01 — About">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-serif text-4xl md:text-5xl leading-tight text-balance">
            Engineering <span className="italic">elegant</span> systems with{" "}
            <span className="gold-text italic">intent</span>.
          </h2>

          <div className="md:col-span-6 md:col-start-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a software engineering and AI enthusiast passionate about
              translating ambiguous problems into clean, maintainable
              solutions. My background in data science, machine learning, and
              software development lets me work across AI-powered applications,
              backend systems, and developer tools.
            </p>

            <p>
              I enjoy building systems that are reliable, testable, and useful
              — from AI-powered recruitment platforms to RAG-based developer
              tools and Frappe/ERPNext applications.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 font-mono text-xs uppercase tracking-widest">
              <div>
                <div className="text-primary mb-2">Focus</div>

                <div className="text-foreground/80 normal-case font-sans text-sm">
                  Software Engineering · AI/ML · RAG
                </div>
              </div>

              <div>
                <div className="text-primary mb-2">Currently</div>

                <div className="text-foreground/80 normal-case font-sans text-sm">
                  B.Tech AI & DS · BS Data Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" eyebrow="02 — Selected Work">
        <h2 className="font-serif text-5xl md:text-7xl mb-16 text-balance">
          Projects, <span className="italic gold-text">recently</span>.
        </h2>

        <div className="space-y-px">
          {projects.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border last:border-b py-8 md:py-10 grid md:grid-cols-12 gap-6 items-start hover:bg-card/40 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4 rounded-sm"
            >
              <div className="md:col-span-1 font-mono text-xs text-primary pt-2">
                {p.no}
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-3xl md:text-4xl group-hover:italic transition-all duration-500">
                  {p.title}
                </h3>

                <div className="font-mono text-xs text-muted-foreground mt-2">
                  {p.period}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors"
                >
                  View on GitHub
                  <span className="text-sm">↗</span>
                </a>
              </div>

              <p className="md:col-span-4 text-muted-foreground leading-relaxed">
                {p.desc}
              </p>

              <div className="md:col-span-2 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded-full text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="03 — Experience">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-serif text-4xl md:text-5xl leading-tight">
            Where I've <span className="italic">shipped</span>.
          </h2>

          <div className="md:col-span-7 space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-primary/40 pl-6 relative"
              >
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary" />

                <div className="font-mono text-xs text-primary tracking-widest uppercase">
                  {e.period}
                </div>

                <h3 className="font-serif text-2xl md:text-3xl mt-2">
                  {e.role}
                </h3>

                <div className="text-foreground/80 mt-1">
                  {e.org}
                </div>

                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {e.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills + Achievements */}
      <Section id="skills" eyebrow="04 — Toolkit & Recognition">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl mb-10">
              The <span className="italic gold-text">stack</span>.
            </h2>

            <div className="space-y-8">
              {Object.entries(skills).map(([cat, items]) => (
                <div
                  key={cat}
                  className="border-t border-border pt-5"
                >
                  <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                    {cat}
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-2xl md:text-3xl">
                    {items.map((s, i) => (
                      <span
                        key={s}
                        className="hover:italic hover:text-primary transition-all cursor-default"
                      >
                        {s}

                        {i < items.length - 1 && (
                          <span className="text-border ml-6">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl mb-10">
              <span className="italic">Honors</span>.
            </h2>

            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="p-5 border border-border rounded-sm bg-card/40 hover:border-primary/60 transition-colors"
                >
                  <div className="font-mono text-xs text-primary">
                    {a.year}
                  </div>

                  <div className="font-serif text-xl mt-1">
                    {a.title}
                  </div>

                  <div className="text-sm text-muted-foreground mt-1">
                    {a.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section
        id="contact"
        className="relative py-32 md:py-48 px-6 md:px-10 border-t border-border grain"
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-8">
            ◆ Let's build something
          </div>

          <h2 className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight text-balance">
            Have a <span className="italic gold-text">project</span>
            <br />
            in mind?
          </h2>

          <a
            href="mailto:pooja16.shivk@gmail.com"
            className="inline-flex items-center gap-3 mt-14 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:gap-5 transition-all duration-500"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            pooja16.shivk@gmail.com
            <span className="text-xl">→</span>
          </a>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <a
              href="https://linkedin.com/in/pooja-shivk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Pooj16"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="tel:+919445251282"
              className="hover:text-primary transition-colors"
            >
              +91 94452 51282
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>
            © 2026 Pooja Shivakumar. All rights reserved.
          </div>

          <div>
            Designed & built with intent.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl gold-text">
        {value}
      </div>

      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="py-28 md:py-40 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-16">
          {eyebrow}
        </div>

        {children}
      </div>
    </section>
  );
}