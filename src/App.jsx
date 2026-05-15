import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2, Brain, Rocket, ChevronRight, Terminal } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'AI Candidate Assessor',
      description: 'An automated ATS parsing and evaluation system using NLP to match resumes with job descriptions.',
      tags: ['Python', 'React', 'HuggingFace', 'FastAPI'],
      icon: <Brain className="w-6 h-6 text-ai-purple" />,
      link: '#'
    },
    {
      title: 'Rule-Based ATC Mediator',
      description: 'Air traffic control mediator designed to streamline communications and ensure safety compliance protocols.',
      tags: ['TypeScript', 'React', 'Node.js', 'WebSockets'],
      icon: <Rocket className="w-6 h-6 text-ai-blue" />,
      link: '#'
    },
    {
      title: 'Deep Sludge Scanner',
      description: 'A deep-learning pipeline for audio analysis, turning unstructured media into actionable timelines.',
      tags: ['Python', 'PyTorch', 'OpenAI Whisper', 'Tailwind'],
      icon: <Terminal className="w-6 h-6 text-teal-400" />,
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-ai-darker relative selection:bg-ai-purple/30 text-slate-300">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-purple/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai-blue/20 rounded-full blur-[128px]"></div>
      </div>

      <nav className="relative z-10 border-b border-white/5 bg-ai-darker/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-ai-purple" />
            <span className="text-xl font-bold text-white tracking-tight">Pooja.dev</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Pooj16" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium text-ai-purple border-ai-purple/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-purple"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Building the future with <br className="hidden md:block" />
            <span className="text-gradient">Intelligent Systems</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Software Engineer specializing in AI integrations, full-stack web applications, and scalable automation pipelines. I turn complex problems into elegant, modern solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-xl bg-ai-purple hover:bg-ai-purple/90 text-white font-medium transition-all shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] flex items-center gap-2">
              View Projects
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#" className="px-8 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400">A selection of my recent AI and full-stack projects.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col group hover:border-ai-purple/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ai-darker border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ai-purple transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-md bg-ai-darker border border-white/5 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-ai-purple transition-colors mt-auto w-fit">
                  View Source
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-white/5 bg-ai-darker relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Pooja. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Pooj16" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
