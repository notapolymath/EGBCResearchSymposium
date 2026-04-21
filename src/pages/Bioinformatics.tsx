import React from "react";
import { motion } from "motion/react";
import { Code2, ArrowLeft, Database, Terminal, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const Bioinformatics = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Data
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
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Computational Architecture</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Bioinfor <br /><span className="NOT-italic text-exeter-teal tracking-normal">matics.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-gold pl-8 md:pl-12">
               Leveraging Pythonic frameworks and R-Bioconductor to analyze large-scale proteomic data. We bridge the gap between biology and information theory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[4/3] bg-exeter-dark p-6 academic-shadow rounded-sm overflow-hidden flex items-center justify-center border border-white/10">
                <div className="w-full h-full font-mono text-[10px] text-exeter-teal opacity-60 overflow-hidden leading-tight">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap">
                      {`$ bioconductor_run --input="genomic_flow_${i}.fastq" --threshold=0.00${i} --output="analysis_result"`}
                    </div>
                  ))}
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 academic-shadow rounded-sm border border-gray-100 flex flex-col items-center">
                <Code2 size={48} className="text-exeter-teal mb-6" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">System Ready</span>
             </div>
          </div>

            <div className="space-y-12 md:space-y-16 order-1 lg:order-2">
            <SectionHeader number="01" title="Algorithmic Mastery" subtitle="The Digital Biological Frontier" />
            <div className="space-y-10">
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                Modern bioinformatics is the cornerstone of contemporary discovery. We equip students with the technical stack necessary to query multi-gigabyte genomic databases and extract meaningful biological insights.
              </p>
              <ul className="space-y-8">
                {[
                  { icon: <Database />, title: "Bioconductor Integration", desc: "Mastering the world's premier open-source software for genomic analysis." },
                  { icon: <Terminal />, title: "Custom Scripting", desc: "Developing Python frameworks for automated pattern recognition in protein strings." },
                  { icon: <Cpu />, title: "Performance Computing", desc: "Optimizing analysis pipelines for high-throughput institutional data sets." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 15 }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="w-14 h-14 bg-exeter-cream border border-gray-100 flex items-center justify-center text-exeter-teal group-hover:bg-exeter-teal group-hover:text-white transition-all">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-serif font-bold text-2xl text-exeter-dark group-hover:italic transition-all">{item.title}</h4>
                       <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* R-Studio Section */}
      <section className="py-20 md:py-40 bg-exeter-teal text-white px-6 overflow-hidden relative">
         <div className="absolute inset-0 grid-pattern-light opacity-5 pointer-events-none" />
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <SectionHeader number="02" title="The Stack" subtitle="Technical Infrastructure" />
            <p className="text-2xl md:text-4xl font-serif font-bold italic mb-10 md:mb-16 tracking-tight">"Efficiency is the prerequisite for discovery."</p>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-6 md:pt-10">
               {["R-Studio", "PyCharm", "AWS Bio", "Nextflow"].map((tech) => (
                 <div key={tech} className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white text-[10px] font-bold uppercase tracking-[0.4em] hover:text-exeter-teal transition-all cursor-default">
                    {tech}
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};
