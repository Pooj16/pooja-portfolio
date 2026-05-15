import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import poojaImg from "@/assets/pooja.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja S — Software Engineer & Data Science Student" },
      { name: "description", content: "Portfolio of Pooja S, a software engineer and data science student at Dr. Mahalingam College of Engineering and Technology, building scalable AI-powered systems and applications." },
      { property: "og:title", content: "Pooja S — Software Engineer" },
      { property: "og:description", content: "Software engineer and data science student building AI-powered, scalable applications." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    no: "01",
    title: "HR AI Website",
    period: "2025 — Present",
    stack: ["Node.js", "React", "AI APIs"],
    desc: "An AI-powered HR assistant with ATS-based candidate filtering, intelligent query handling, and dashboard integration for streamlined recruitment.",
  },
  {
    no: "02",
    title: "Hospital Management System",
    period: "2025",
    stack: ["Python", "SQL"],
    desc: "End-to-end patient management system handling doctors, appointments, and medical records with relational data integrity at its core.",
  },
  {
    no: "03",
    title: "Influencer Sponsorship Platform",
    period: "2024",
    stack: ["Web", "Auth", "Campaigns"],
    desc: "A web platform bridging influencers and brands — authentication, campaign creation, and engagement workflows under one roof.",
  },
];

const experience = [
  {
    role: "AI & Software Development Intern",
    org: "Orcus Info",
    period: "May 2025 — Jun 2025",
    detail: "Built an AI-powered HR assistant website with employee query handling and dashboard integration.",
  },
  {
    role: "AIML Intern",
    org: "Cube AI Solutions Tech Pvt. Ltd.",
    period: "Jan 2025 — Apr 2025",
    detail: "Developed AIML models for client use cases and supported chatbot deployment workflows.",
  },
];

const skills = {
  Languages: ["Python", "Java", "C", "JavaScript"],
  "Data Science": ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "EDA", "ML"],
  "AI / ML": ["Deep Learning", "NLP", "Prompt Engineering", "Conversational AI", "Rasa Chatbots"],
  Web: ["React", "Node.js", "HTML", "CSS"],
  Databases: ["MySQL", "MongoDB"],
};

const achievements = [
  { year: "2024", title: "2nd Place — SheCodeAI Hackathon", note: "₹10,000 cash award" },
  { year: "2024", title: "Diploma in Programming", note: "IIT Madras" },
  { year: "2023", title: "Winner — AI/ML Development", note: "Paradox '24, IIT Madras" },
  { year: "2023", title: "Foundation in Data Science", note: "IIT Madras" },
];

function Portfolio() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });
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
          <a href="#top" className="font-serif text-xl tracking-tight">Pooja<span className="text-primary">.</span></a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="font-mono text-xs text-muted-foreground hidden sm:block">{time}</div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-40 pb-32 px-6 md:px-10 grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-8"
          >
            ◆ Software Engineer · Pollachi, India
          </motion.div>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-serif text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-tight text-balance"
              >
                Pooja <span className="italic gold-text">Shivkumar</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Building scalable, reliable systems at the intersection of <span className="text-foreground">software engineering</span> and <span className="text-foreground">data science</span>. Currently studying at Dr. Mahalingam College of Engineering and Technology, alongside an online BS degree from IIT Madras.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-4 relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <img src={poojaImg} alt="Pooja Shivkumar" className="w-full h-full object-cover grayscale-[15%] contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-4 border-t border-border pt-8"
          >
            <Stat label="CGPA" value="8.6" />
            <Stat label="Internships" value="02" />
            <Stat label="Hackathon Wins" value="02" />
            <Stat label="Years Coding" value="04+" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="01 — About">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-serif text-4xl md:text-5xl leading-tight text-balance">
            Engineering <span className="italic">elegant</span> systems with <span className="gold-text italic">intent</span>.
          </h2>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a software engineer in the making — passionate about translating ambiguous problems into clean, maintainable code. My foundation in data structures, algorithms, and ML lets me move fluidly across the stack.
            </p>
            <p>
              I care about craft. About systems that scale gracefully. About interfaces that feel inevitable. Whether shipping AI-powered tools or designing back-end logic, I aim for work that's worth shipping.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6 font-mono text-xs uppercase tracking-widest">
              <div>
                <div className="text-primary mb-2">Focus</div>
                <div className="text-foreground/80 normal-case font-sans text-sm">Backend · Scalable Systems · DSA</div>
              </div>
              <div>
                <div className="text-primary mb-2">Currently</div>
                <div className="text-foreground/80 normal-case font-sans text-sm">B.Tech AI & DS · BS Data Science</div>
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
              <div className="md:col-span-1 font-mono text-xs text-primary pt-2">{p.no}</div>
              <div className="md:col-span-5">
                <h3 className="font-serif text-3xl md:text-4xl group-hover:italic transition-all duration-500">{p.title}</h3>
                <div className="font-mono text-xs text-muted-foreground mt-2">{p.period}</div>
              </div>
              <p className="md:col-span-4 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="md:col-span-2 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded-full text-muted-foreground">{s}</span>
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
                <div className="font-mono text-xs text-primary tracking-widest uppercase">{e.period}</div>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">{e.role}</h3>
                <div className="text-foreground/80 mt-1">{e.org}</div>
                <p className="text-muted-foreground mt-3 leading-relaxed">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills + Achievements */}
      <Section id="skills" eyebrow="04 — Toolkit & Recognition">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl mb-10">The <span className="italic gold-text">stack</span>.</h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="border-t border-border pt-5">
                  <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{cat}</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-2xl md:text-3xl">
                    {items.map((s, i) => (
                      <span key={s} className="hover:italic hover:text-primary transition-all cursor-default">
                        {s}{i < items.length - 1 && <span className="text-border ml-6">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl mb-10"><span className="italic">Honors</span>.</h2>
            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 border border-border rounded-sm bg-card/40 hover:border-primary/60 transition-colors"
                >
                  <div className="font-mono text-xs text-primary">{a.year}</div>
                  <div className="font-serif text-xl mt-1">{a.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{a.note}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10 border-t border-border grain">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-8">◆ Let's build something</div>
          <h2 className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight text-balance">
            Have a <span className="italic gold-text">project</span><br />in mind?
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
            <a href="https://linkedin.com/in/pooja-shivk/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn ↗</a>
            <a href="https://github.com/Pooj16" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub ↗</a>
            <a href="tel:+919445251282" className="hover:text-primary transition-colors">+91 94452 51282</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>© 2026 Pooja Shivkumar. All rights reserved.</div>
          <div>Designed & built with intent.</div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl gold-text">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Section({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-16">{eyebrow}</div>
        {children}
      </div>
    </section>
  );
}
