import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain, 
  Rocket, 
  ChevronRight, 
  Terminal,
  Download,
  GraduationCap,
  Briefcase,
  Trophy,
  MapPin,
  Database,
  LineChart,
  Layout,
  MessageSquare
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import './index.css';

// --- Custom SVGs for missing Lucide icons ---
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  const skills = [
    { name: 'Python', level: 90 }, { name: 'Machine Learning', level: 85 },
    { name: 'NLP', level: 80 }, { name: 'Deep Learning', level: 80 },
    { name: 'Data Analysis', level: 90 }, { name: 'SQL', level: 85 },
    { name: 'React', level: 75 }, { name: 'Node.js', level: 75 },
    { name: 'GitHub', level: 90 }, { name: 'Power BI', level: 80 },
    { name: 'Pandas', level: 90 }, { name: 'TensorFlow', level: 75 },
    { name: 'Scikit-learn', level: 85 }
  ];

  const projects = [
    {
      title: 'PDF Chatbot',
      description: 'An AI chatbot that interacts with PDF documents using NLP for intelligent querying and summarization.',
      tags: ['Python', 'NLP', 'LLMs', 'Vector DB'],
      icon: <MessageSquare className="w-6 h-6 text-ai-purple" />,
      link: 'https://github.com/Pooj16',
      live: '#'
    },
    {
      title: 'HR AI Assistant',
      description: 'AI-powered assistant for HR workflows, handling employee queries and integrating with dashboards.',
      tags: ['Node.js', 'React', 'AI APIs', 'NLP'],
      icon: <Briefcase className="w-6 h-6 text-ai-blue" />,
      link: 'https://github.com/Pooj16',
      live: '#'
    },
    {
      title: 'Blackbox Data Anomaly Detection',
      description: 'Analysis and visualization of aircraft blackbox data for detecting anomalies through reverse engineering.',
      tags: ['Data Science', 'Python', 'Machine Learning', 'EDA'],
      icon: <LineChart className="w-6 h-6 text-teal-400" />,
      link: 'https://github.com/Pooj16',
      live: '#'
    },
    {
      title: 'Influencer Engagement Platform',
      description: 'Smart platform connecting influencers and brands with authentication and engagement analytics.',
      tags: ['HTML/CSS', 'JavaScript', 'Web Dev'],
      icon: <Layout className="w-6 h-6 text-pink-400" />,
      link: 'https://github.com/Pooj16/influencer-sponsor',
      live: '#'
    }
  ];

  const experience = [
    {
      role: 'AI & Software Development Intern',
      company: 'ORCUS INFO',
      period: '05/2025 - 06/2025',
      description: 'Worked on developing an AI-powered HR Assistant website with employee query handling and dashboard integration.'
    },
    {
      role: 'AIML Intern',
      company: 'Cube AISolutions Tech Pvt. Ltd.',
      period: '01/2025 - 04/2025',
      description: 'Developed AIML models for client use cases and supported chatbot deployment workflows.'
    },
    {
      role: 'Intern',
      company: 'Corizo',
      period: '2024',
      description: 'Contributed to practical applications of Data Science and Machine Learning models.'
    }
  ];

  const achievements = [
    {
      title: 'Diploma in Programming & Data Science',
      org: 'IIT Madras',
      date: 'Dec 2024',
      type: 'certification'
    },
    {
      title: 'Second Place, SheCodeAI Hackathon',
      org: 'National Hackathon',
      date: 'Dec 2024',
      type: 'award',
      highlight: 'Cash award of Rs. 10,000'
    },
    {
      title: 'Winner, AI & ML Model Development',
      org: 'Paradox 2024, IIT Madras',
      date: 'Dec 2023',
      type: 'award'
    },
    {
      title: 'Foundation in Data Science',
      org: 'IIT Madras',
      date: 'Dec 2023',
      type: 'certification'
    }
  ];

  const SectionHeading = ({ children, subtitle }) => (
    <div className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-ai-darker relative selection:bg-ai-purple/30 text-slate-300 font-sans">
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ai-purple/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-ai-blue/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-ai-darker/70 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-purple to-ai-blue flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Pooja.dev</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all text-sm font-medium">
            Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-32 min-h-[90vh] flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium text-ai-purple border-ai-purple/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-purple"></span>
              </span>
              Available for Internships & Opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="text-gradient">Pooja Shivakumar</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-slate-300 mb-6"
            >
              AI & Data Science Student | NLP & Intelligent Systems Enthusiast
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              Passionate about building intelligent systems, AI-powered applications, and data-driven solutions. I specialize in designing scalable models and turning complex data into actionable insights.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a href="#projects" className="px-8 py-4 rounded-xl bg-ai-purple hover:bg-ai-purple/90 text-white font-medium transition-all shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)] flex items-center gap-2">
                View Projects
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#" className="px-8 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </a>
              <div className="flex gap-4 ml-4">
                <a href="https://github.com/Pooj16" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/pooja-shivk/" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="mailto:pooja16.shivk@gmail.com" className="p-3 rounded-full glass-card hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-ai-purple to-ai-blue rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src={profileImg} 
                alt="Pooja Shivakumar" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <SectionHeading subtitle="My academic background and areas of interest.">About Me</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ai-purple/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <GraduationCap className="w-8 h-8 text-ai-purple mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">B.Tech in AI & Data Science</h3>
                <p className="text-slate-400 mb-2">Dr. Mahalingam College of Engineering and Technology</p>
                <p className="text-sm font-mono text-ai-purple">2023 - 2027 • CGPA: 8.6</p>
              </div>

              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ai-blue/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <Database className="w-8 h-8 text-ai-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">BS / Diploma in Data Science</h3>
                <p className="text-slate-400 mb-2">Indian Institute of Technology Madras (IITM)</p>
                <p className="text-sm font-mono text-ai-blue">2023 - Present</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {['NLP', 'AI Assistants', 'Machine Learning', 'Data Science', 'Chatbot Development', 'Intelligent Systems', 'Software Engineering', 'Backend Development'].map((interest, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:border-ai-purple/50 transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <SectionHeading subtitle="Technical toolkit I use to build solutions.">Skills & Technologies</SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-5 group hover:border-ai-purple/40 hover:bg-white/10 transition-all relative overflow-hidden"
              >
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-ai-purple to-ai-blue transition-all duration-1000 ease-out opacity-50 group-hover:opacity-100"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                <div className="text-xs text-slate-500 font-mono text-right">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <SectionHeading subtitle="Selected AI and Data Science projects I've built.">Featured Projects</SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col group hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-ai-darker border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-purple transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. EXPERIENCE & 6. ACHIEVEMENTS SECTION */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div>
              <SectionHeading>Experience</SectionHeading>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {experience.map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-ai-darker text-slate-500 group-hover:text-ai-purple group-hover:border-ai-purple/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-white/10 transition-colors">
                      <div className="flex flex-col mb-2">
                        <h4 className="font-bold text-white text-lg">{exp.role}</h4>
                        <span className="text-ai-purple font-medium text-sm">{exp.company}</span>
                      </div>
                      <div className="text-slate-500 text-xs font-mono mb-4">{exp.period}</div>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <SectionHeading>Achievements</SectionHeading>
              <div className="space-y-6">
                {achievements.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 flex gap-4 items-start"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {item.type === 'award' ? (
                        <Trophy className="w-6 h-6 text-yellow-500" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-ai-blue" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm mb-2">{item.org} • {item.date}</p>
                      {item.highlight && (
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <br/><span className="text-gradient">Together</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Currently looking for new opportunities, internships, and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <a href="mailto:pooja16.shivk@gmail.com" className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-ai-darker font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
              <a href="https://linkedin.com/in/pooja-shivk/" target="_blank" rel="noreferrer" className="w-full md:w-auto px-8 py-4 rounded-xl glass-card text-white font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <Mail className="w-6 h-6 text-ai-purple mb-3" />
                <span className="text-slate-300 text-sm">pooja16.shivk@gmail.com</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-ai-blue mb-3" />
                <span className="text-slate-300 text-sm">Tamil Nadu, India</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <GithubIcon className="w-6 h-6 text-slate-300 mb-3" />
                <a href="https://github.com/Pooj16" target="_blank" rel="noreferrer" className="text-slate-300 text-sm hover:text-white">github.com/Pooj16</a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      {/* 8. FOOTER */}
      <footer className="border-t border-white/5 bg-ai-darker relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-purple to-ai-blue flex items-center justify-center text-white font-bold mb-4">
            P
          </div>
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            Designed & Developed by <span className="text-slate-300">Pooja Shivakumar</span>
          </p>
          <p className="text-slate-600 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
