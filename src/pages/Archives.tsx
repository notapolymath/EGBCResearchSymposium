import React from "react";
import { motion } from "motion/react";
import { Library, ArrowLeft, BookOpen, Search, Filter, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const Archives = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.1, rotate: 0 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Lit
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/about" className="inline-flex items-center gap-3 text-exeter-teal font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-12 md:mb-16 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to About
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Academic Synthesis</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Curated <br /><span className="NOT-italic text-exeter-dark tracking-normal">Archives.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-red pl-8 md:pl-12 uppercase italic tracking-tighter">
               Synthesizing current academic literature to find gaps for novel student investigation. Our library is the definitive bridge to high-level discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-16">
            <SectionHeader number="01" title="Scholarly Oversight" subtitle="Bridging Theoretical Gaps" />
            <div className="space-y-12">
               <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                 Effective research begins with comprehensive literature review. Our curated archives provided club members with a definitive selection of peer-reviewed journals, specifically filtered for secondary school accessibility and impact.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-gray-100 bg-exeter-cream academic-shadow text-center group">
                     <BookOpen className="mx-auto text-exeter-red mb-6 group-hover:scale-125 transition-transform" />
                     <h5 className="font-serif text-xl font-bold italic">Journal Access</h5>
                     <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold block mt-3">Institutional Gateway</span>
                  </div>
                  <div className="p-10 border border-gray-100 bg-exeter-cream academic-shadow text-center group">
                     <Search className="mx-auto text-exeter-teal mb-6 group-hover:scale-125 transition-transform" />
                     <h5 className="font-serif text-xl font-bold italic">Gap Analysis</h5>
                     <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold block mt-3">Targeted Discovery</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="relative group p-4 border border-gray-100 academic-shadow">
             <div className="aspect-video bg-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1544640805-35c0fa648a35?auto=format&fit=crop&q=80" 
                  alt="Scholarly Archive" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[4000ms]"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="p-12 space-y-6">
                <div className="flex items-center gap-4 text-exeter-red">
                   <Filter size={20} />
                   <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Proprietary Filter</span>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed italic">"Our archives represent the convergence of Academy tradition and global academic progress."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 md:py-40 bg-exeter-dark border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between lg:items-end gap-12 mb-16 md:mb-24">
              <SectionHeader number="02" title="The Collection" subtitle="Standardized Resource Index" />
              <a href="mailto:jtkim1@exeter.edu" className="px-10 md:px-12 py-4 md:py-5 border border-white/20 text-exeter-gold font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-exeter-dark transition-all text-center">
                 Request Full Catalog
              </a>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 border-t border-white/5">
              {[
                { title: "Nature Genetics Quarterly", year: "2026", type: "Journal", href: "https://www.nature.com/ng/" },
                { title: "Bioinformatics Paradigm Shift", year: "2025", type: "White Paper", href: "https://academic.oup.com/bioinformatics" },
                { title: "Synthetic Ethics Framework 2.0", year: "2026", type: "Monograph", href: "https://www.exeter.edu/academics/harkness-learning" },
                { title: "Advanced Bioconductor Review", year: "2027", type: "Review", href: "https://www.bioconductor.org/" },
                { title: "Genomic Mapping Protocols", year: "2026", type: "Digital Asset", href: "https://www.ncbi.nlm.nih.gov/" },
                { title: "The Heritage Publication", year: "2024", type: "Archive", href: "https://www.exeter.edu/academics/departments/science" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-start border-b border-white/10 pb-8 hover:border-exeter-red transition-colors group cursor-pointer">
                   <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-exeter-teal mb-4 block font-bold">{item.type}</span>
                      <h4 className="font-serif text-2xl font-bold text-white group-hover:text-exeter-red transition-colors italic leading-none">{item.title}</h4>
                   </div>
                   <ArrowUpRight className="text-white/20 group-hover:text-exeter-red transition-colors" size={24} />
                </a>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
