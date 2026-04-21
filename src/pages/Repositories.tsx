import React from "react";
import { motion } from "motion/react";
import { Database, ArrowLeft, Search, FileText, Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const Repositories = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Hub
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
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Knowledge Management</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Digital <br /><span className="NOT-italic text-exeter-red tracking-normal">Repos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-gold pl-8 md:pl-12">
               Building the Academy's first centralized hub for student-authored scientific findings. Democratizing data for future generations of scholars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <SectionHeader number="01" title="Scholarly Storage" subtitle="A Permanent Scientific Record" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-24">
           {[
             { icon: <Search />, title: "Pattern Indexing", desc: "Advanced metadata categorization for rapid discovery of prior student investigations." },
             { icon: <FileText />, title: "Standardized Formatting", desc: "Implementing a unified scholarly layout for all archived research posters and papers." },
             { icon: <Share2 />, title: "Peer-to-Peer Access", desc: "Secure digital infrastructure allowing authenticated members to query raw experimental datasets." }
           ].map((repo, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 md:p-16 border border-gray-100 bg-white academic-shadow group hover:border-exeter-red transition-all duration-700 h-full flex flex-col"
             >
                <div className="w-16 h-16 bg-exeter-red/10 text-exeter-red flex items-center justify-center mb-10 group-hover:bg-exeter-red group-hover:text-white transition-all">
                  {repo.icon}
                </div>
                <h4 className="font-serif font-bold text-3xl text-exeter-dark mb-6 group-hover:italic transition-all">{repo.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed mb-8">{repo.desc}</p>
                <Link to="/disciplines/archives" className="mt-auto flex items-center gap-3 text-exeter-red font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                   Access Repository <ArrowRight size={12} />
                </Link>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-40 bg-exeter-cream border-y border-gray-100 px-6 overflow-hidden relative">
         <Database className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.03] text-exeter-dark rotate-12" />
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-exeter-dark mb-8 md:mb-10 italic uppercase tracking-tighter">The Living Archive.</h3>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12 md:mb-20 max-w-3xl mx-auto">
               Our digital repositories serve as the definitive institutional memory for biological inquiry at Phillips Exeter Academy.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
               {[
                 { label: "Active Sets", val: "250+" },
                 { label: "Research Papers", val: "120+" },
                 { label: "Poster Designs", val: "85+" },
                 { label: "Total Asset Size", val: "4.2TB" }
               ].map((stat) => (
                 <div key={stat.label} className="space-y-4">
                    <span className="font-serif text-5xl font-bold text-exeter-red block leading-none">{stat.val}</span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">{stat.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};
