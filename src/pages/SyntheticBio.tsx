import React from "react";
import { motion } from "motion/react";
import { FlaskConical, ArrowLeft, ShieldCheck, Zap, Scissors, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const SyntheticBio = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Syn
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
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Genetic Engineering</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Synthetic <br /><span className="NOT-italic text-exeter-red tracking-normal">Biology.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-teal pl-8 md:pl-12">
               Engaging with the ethics and implementation of modern techniques like CRISPR-Cas9. Redesigning biological systems for institutional and clinical impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-16">
            <SectionHeader number="01" title="Biological Design" subtitle="Engineering Life Systems" />
            <div className="space-y-12">
               <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                 Synthetic biology moves beyond observation into active redesign. Our symposium participants explore the practical architecture of gene editing while maintaining a rigorous focus on ethical oversight.
               </p>
               <div className="space-y-8">
                  {[
                    { icon: <Scissors />, title: "CRISPR-Cas9 Ethics", desc: "Analyzing the moral imperative and technical precision of targeted genetic modifications." },
                    { icon: <ShieldCheck />, title: "Biosafety Protocols", desc: "Rigorous institutional frameworks for handling synthesized genetic material at the secondary level." },
                    { icon: <Zap />, title: "Path Engineering", desc: "Modeling metabolic pathways to increase efficiency in bio-manufacturing and clinical solutions." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex flex-col sm:flex-row gap-6 md:gap-8 group"
                    >
                       <div className="w-16 h-16 shrink-0 rounded-full bg-exeter-cream flex items-center justify-center text-exeter-red group-hover:bg-exeter-red group-hover:text-white transition-all">
                          {item.icon}
                       </div>
                       <div className="flex-1 border-b border-gray-100 pb-8">
                          <h4 className="font-serif font-bold text-2xl text-exeter-dark group-hover:italic transition-all">{item.title}</h4>
                          <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
          
          <div className="p-1 liquid-glass rounded-2xl academic-shadow border border-white/60 relative overflow-hidden group">
             <div className="aspect-[4/5] bg-exeter-dark relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" 
                  alt="Synthetic Bio Lab" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-exeter-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <h5 className="font-serif text-3xl font-bold mb-4 italic">The CRISPR Protocol</h5>
                   <p className="text-xs text-gray-400 font-mono uppercase tracking-widest leading-loose">Institutional safety verification required for all synthetic modeling.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 bg-exeter-teal text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <FlaskConical size={60} className="mx-auto text-exeter-gold opacity-50" />
           <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none italic italic">Integrity in <br /> Synthesis.</h3>
           <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
             Our Synthetic Biology division operates under a strict mandate: "Scientific power is meaningless without a definitive ethical compass."
           </p>
           <a href="https://www.exeter.edu/academics/harkness-learning" target="_blank" rel="noopener noreferrer" className="inline-block px-10 md:px-16 py-4 md:py-6 bg-white text-exeter-teal font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-exeter-dark hover:text-white transition-all shadow-2xl text-xs md:text-base">
              View Ethics Charter
           </a>
        </div>
      </section>
    </div>
  );
};
