import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { FlaskConical, Dna, Code2, Users, Database, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

const FadeInVisible = ({ children, delay = 0, x = 0, y = 20 }: { children: ReactNode, delay?: number, x?: number, y?: number }) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-exeter-teal font-bold mb-8 block">Legacy of Inquiry</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-bold mb-10 md:mb-12 italic leading-[1] md:leading-[0.9] tracking-tighter">
               Biological <span className="text-exeter-red NOT-italic font-bold tracking-normal uppercase">Mastery.</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl">
               Phillips Exeter Academy's premier hub for biotechnological innovation, bridging the gap between theoretical classroom boundaries and real-world scientific application.
            </p>
          </motion.div>
        </div>
        <motion.div 
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 0.1, x: 0 }}
           transition={{ duration: 2 }}
           className="absolute -bottom-20 -right-20 font-serif text-[30rem] font-bold text-white select-none pointer-events-none italic"
        >
           Bio
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-exeter-teal/5 rounded-full blur-[100px] animate-liquid -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <FadeInVisible x={-30}>
            <div className="space-y-12">
              <SectionHeader number="01" title="Research Ethos" subtitle="Our Global Perspective" />
              <div className="space-y-10">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  The club was founded on the belief that <span className="text-exeter-red italic font-semibold">scientific discovery</span> should be high-impact yet accessible. We focus on low-barrier entry points like dry-lab research and computational biology to empower every student.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-10 liquid-glass rounded-xl border border-white academic-shadow group"
                  >
                     <h4 className="font-serif font-bold text-2xl mb-4 text-exeter-dark group-hover:text-exeter-red transition-colors">Inclusivity</h4>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">Breaking down the elitism often associated with laboratory research through open-source access.</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-10 liquid-glass rounded-xl border border-white academic-shadow group"
                  >
                     <h4 className="font-serif font-bold text-2xl mb-4 text-exeter-dark group-hover:text-exeter-teal transition-colors">Innovation</h4>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">Using proprietary data sets and world-class computational modeling to analyze genomic sequences.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeInVisible>
          
          <FadeInVisible delay={0.2} x={30}>
            <div className="relative group">
               <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 academic-shadow relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80" 
                    alt="Lab Research" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-exeter-dark/20 group-hover:bg-transparent transition-colors duration-1000" />
               </div>
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -bottom-16 -right-16 bg-white border border-gray-100 p-12 academic-shadow hidden md:block"
               >
                  <span className="font-serif text-6xl font-bold italic text-exeter-red leading-none">20+</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.4em] mt-4 text-gray-400 font-bold whitespace-nowrap">Active Research Lines</span>
               </motion.div>
            </div>
          </FadeInVisible>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-40 bg-exeter-dark border-t border-gray-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader number="02" title="Core Disciplines" subtitle="Areas of Scientific Engagement" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {[
              { icon: <Dna />, title: "Genomics", desc: "Exploring the fundamental code of life through hereditary analysis and sequence patterns.", path: "/disciplines/genomics" },
              { icon: <Code2 />, title: "Bioinformatics", desc: "Leveraging Pythonic frameworks and R-Bioconductor to analyze large-scale proteomic data.", path: "/disciplines/bioinformatics" },
              { icon: <FlaskConical />, title: "Synthetic Bio", desc: "Engaging with the ethics and implementation of modern techniques like CRISPR-Cas9.", path: "/disciplines/synthetic-bio" },
              { icon: <Database />, title: "Digital Repositories", desc: "Building the Academy's first centralized hub for student-authored scientific findings.", path: "/disciplines/repositories" },
              { icon: <Users />, title: "The Mentor Program", desc: "Facilitating senior-led workshops to guide new researchers through laboratory protocols.", path: "/disciplines/mentor-program" },
              { icon: <BookOpen />, title: "Curated Archives", desc: "Synthesizing current academic literature to find gaps for novel student investigation.", path: "/disciplines/archives" }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-12 hover:border-exeter-teal hover:bg-white/[0.07] transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-exeter-teal/10 text-exeter-teal flex items-center justify-center mb-10 group-hover:bg-exeter-teal group-hover:text-white transition-all">
                  {pillar.icon}
                </div>
                <h3 className="font-serif font-bold text-3xl text-white mb-6 group-hover:italic transition-all">{pillar.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">{pillar.desc}</p>
                <Link to={pillar.path} className="flex items-center gap-3 text-exeter-teal font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                   Explore Discipline <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-20 md:py-40 px-6 max-w-5xl mx-auto text-center">
        <FadeInVisible>
          <SectionHeader number="03" title="Our Heritage" subtitle="Tradition of Academic Excellence" />
          <p className="text-xl md:text-3xl text-gray-500 font-light leading-relaxed mb-16 md:mb-20 tracking-tight">
            What originated as a scholarly interest group has evolved into the Academy's most <span className="text-exeter-dark font-medium underline decoration-exeter-red decoration-4 underline-offset-8">prolific scientific body</span>. We exist to push the envelope of secondary school discovery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
             <div className="text-center group">
                <motion.span 
                  whileInView={{ scale: [1, 1.2, 1] }}
                  className="font-serif text-5xl md:text-7xl font-bold text-exeter-dark block group-hover:text-exeter-red transition-colors"
                >
                  2027
                </motion.span>
                <span className="block font-mono text-[9px] md:text-[10px] text-gray-400 uppercase mt-4 tracking-[0.5em] font-bold">Research Cycle</span>
             </div>
             <div className="h-[1px] bg-gray-100 w-full hidden md:block" />
             <div className="text-center group">
                <motion.span 
                  whileInView={{ scale: [1, 1.2, 1] }}
                  className="font-serif text-5xl md:text-7xl font-bold text-exeter-dark block group-hover:text-exeter-teal transition-colors"
                >
                  50+
                </motion.span>
                <span className="block font-mono text-[9px] md:text-[10px] text-gray-400 uppercase mt-4 tracking-[0.5em] font-bold">Active Members</span>
             </div>
          </div>
        </FadeInVisible>
      </section>
    </div>
  );
};
