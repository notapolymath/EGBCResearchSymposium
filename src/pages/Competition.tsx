import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Award, Target, CheckCircle2, FlaskConical, Code2, Users, ArrowRight, Stars } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router-dom";

const EntranceReveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Competition = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.6em] text-exeter-red mb-12 block">Research Vanguard 2027</span>
            <h1 className="font-serif text-7xl md:text-[11rem] font-bold leading-[0.8] uppercase tracking-tighter">
               The Open <br /><span className="text-exeter-gold italic font-normal lowercase tracking-normal">Prize.</span>
            </h1>
          </motion.div>
          <div className="pb-8">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="p-10 bg-white/10 border border-white/20 backdrop-blur-xl rounded-sm shadow-[0_0_100px_rgba(253,185,33,0.1)] group relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-exeter-gold/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-exeter-gold font-bold block mb-4">Cumulative Prize Pool</span>
                <span className="font-serif text-6xl font-bold text-white tracking-tighter">$10,000+</span>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <SectionHeader number="01" title="Laureate Categories" subtitle="Grand Research Awards 2027" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
           {[
             { title: "Theoretical Innovation", prize: "$2,500", icon: <Target size={28} />, desc: "Awarding the most rigorous original hypotheses in molecular genetics." },
             { title: "Computational Mastery", prize: "$2,000", icon: <Code2 size={28} />, desc: "Superior architectural design in Pythonic/R-based genomic modeling." },
             { title: "Clinical Vanguard", prize: "$2,000", icon: <FlaskConical size={28} />, desc: "Exceptional experimental fidelity and novel wet-lab laboratory findings." },
             { title: "Societal Integrity", prize: "$1,500", icon: <Users size={28} />, desc: "Projects focused on the definitive ethics of contemporary science." },
             { title: "Visual Narrative", prize: "$1,000", icon: <Award size={28} />, desc: "Superior clarity of digital poster session communication and design." },
             { title: "Emerging Scholar", prize: "$1,000", icon: <Stars size={28} />, desc: "High-level research contribution from underclassman investigators." }
           ].map((category, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group p-16 liquid-glass rounded-2xl hover:academic-shadow border border-white/60 transition-all duration-1000 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-12 text-exeter-dark opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000 rotate-12">
                   {category.icon}
                </div>
                <div className="w-14 h-14 bg-white border border-gray-100 flex items-center justify-center text-exeter-dark mb-10 group-hover:bg-exeter-dark group-hover:text-white transition-all">
                   {category.icon}
                </div>
                <h4 className="font-serif font-bold text-3xl text-exeter-dark mb-4 group-hover:italic transition-all">{category.title}</h4>
                <span className="font-mono text-[10px] font-bold text-exeter-red uppercase mb-8 block tracking-[0.4em] underline decoration-exeter-teal decoration-2 underline-offset-8">
                   {category.prize} Scholarship
                </span>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{category.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Rules & Eligibility */}
      <section className="py-40 bg-exeter-dark text-white px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-exeter-teal/5 -skew-x-12 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 relative z-10">
           <div className="lg:w-1/2 space-y-16">
              <SectionHeader number="02" title="Participation" subtitle="Institutional Standards" />
              <div className="space-y-10 mt-12">
                 {[
                   "Enrollment in a formally registered secondary academic institution.",
                   "Original investigation or high-impact meta-analysis frameworks.",
                   "Strict compliance with PEA Scientific Ethics and the Honor Code.",
                   "Maximum contingent of three students per research submission.",
                   "Adherence to standardized APA/AMA citation and data protocols."
                 ].map((rule, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex gap-6 items-start group"
                   >
                      <CheckCircle2 className="text-exeter-teal shrink-0 mt-1 group-hover:scale-125 transition-transform" size={24} />
                      <p className="text-xl text-gray-400 font-light leading-snug tracking-tight group-hover:text-white transition-colors">{rule}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
           
           <EntranceReveal delay={0.2}>
             <div className="bg-white text-exeter-dark p-20 academic-shadow relative group">
                <div className="absolute top-0 right-0 w-3 h-full bg-exeter-gold" />
                <h3 className="font-serif text-5xl font-bold mb-12 uppercase tracking-tighter italic">Critical Deadlines</h3>
                <div className="flex flex-col gap-10">
                   {[
                     { label: "Abstract Submission Due", val: "Oct 15, 2026", color: "text-exeter-red" },
                     { label: "Primary Vanguard Review", val: "Jan 20, 2027", color: "text-exeter-teal" },
                     { label: "Grand Symposium Day", val: "Spring 2027", color: "text-exeter-dark" },
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-gray-100 pb-6 group/item">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 group-hover/item:text-exeter-dark transition-colors">{item.label}</span>
                        <span className={`font-serif text-2xl font-bold ${item.color} group-hover/item:italic transition-all`}>{item.val}</span>
                     </div>
                   ))}
                </div>
                <a href="mailto:jtkim1@exeter.edu" className="w-full py-8 bg-exeter-dark text-white font-bold uppercase tracking-[0.4em] mt-16 hover:bg-exeter-red transition-all shadow-2xl flex items-center justify-center gap-4 group/btn">
                   Register to Portal <ArrowRight size={22} className="group-hover/btn:translate-x-3 transition-transform" />
                </a>
             </div>
           </EntranceReveal>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-40 px-6 max-w-7xl mx-auto text-center border-t border-gray-50">
         <EntranceReveal>
            <SectionHeader number="03" title="Executive Registry" subtitle="Engaged Global Institutions" />
            <div className="flex flex-wrap justify-center gap-24 mt-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000 p-12 bg-exeter-cream">
               {["Major Academic Institutions", "Secondary Research Hubs", "Global Biological Societies"].map((group) => (
                 <span key={group} className="font-serif text-3xl font-bold text-exeter-dark uppercase tracking-tighter hover:text-exeter-red transition-colors cursor-default">{group}</span>
               ))}
            </div>
            <div className="mt-20">
               <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold block mb-8">Ready to join the vanguard?</span>
               <a href="mailto:jtkim1@exeter.edu" className="inline-block px-16 py-6 border-2 border-exeter-dark font-bold uppercase tracking-[0.4em] hover:bg-exeter-dark hover:text-white transition-all text-sm">
                  Become a Partner School
               </a>
            </div>
         </EntranceReveal>
      </section>
    </div>
  );
};
