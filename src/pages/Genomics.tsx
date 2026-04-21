import React from "react";
import { motion } from "motion/react";
import { Dna, ArrowLeft, ArrowRight, FlaskConical, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const Genomics = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Gen
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
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Discipline Vanguard</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Genomics <br /><span className="NOT-italic text-exeter-red tracking-normal">Frontier.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-gold pl-8 md:pl-12">
               Exploring the fundamental code of life through hereditary analysis and sequence patterns. We focus on the structural integrity of genetic mapping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-16">
            <SectionHeader number="01" title="Core Inquiry" subtitle="Mapping the Human Blueprint" />
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Our genomics division investigates the molecular mechanisms of inheritance. Members engage with high-level data sets to identify polymorphisms and structural variations across diverse populations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-10 border border-gray-100 bg-exeter-cream academic-shadow rounded-lg group">
                   <Dna size={32} className="text-exeter-red mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="font-serif font-bold text-2xl mb-4 italic">Sequence Analysis</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed">Identifying specific markers that define genetic susceptibility and phenotypic expression.</p>
                </div>
                <div className="p-10 border border-gray-100 bg-exeter-cream academic-shadow rounded-lg group">
                   <Microscope size={32} className="text-exeter-teal mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="font-serif font-bold text-2xl mb-4 italic">Hereditary Flow</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed">Mapping the transmission of complex traits across generations using pedigree modeling.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square bg-gray-100 p-2 academic-shadow rounded-sm overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80" 
                  alt="Genomics Lab" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-exeter-dark text-white p-12 academic-shadow">
                <span className="font-serif text-5xl font-bold italic text-exeter-gold">99.9%</span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.4em] mt-2 text-gray-400">Genetic Commonality</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-40 bg-exeter-cream text-center px-6">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-exeter-dark mb-8 md:mb-12 italic uppercase tracking-tighter">Pursue the Code.</h2>
        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 md:mb-16 max-w-2xl mx-auto">
          Students interested in genomics research should coordinate with the Technical Board to access specialized sequence data repositories.
        </p>
        <a href="mailto:jtkim1@exeter.edu" className="inline-block px-10 md:px-20 py-5 md:py-8 bg-exeter-dark text-white font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-exeter-red transition-all shadow-2xl text-sm md:text-base">
          Request Research Access
        </a>
      </section>
    </div>
  );
};
