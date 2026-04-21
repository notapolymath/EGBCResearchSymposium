import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Users, ArrowUpRight, ArrowRight, Dna } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const FadeScale = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Team = () => {
  const heads = [
    { name: "Adrian Chan", role: "Club Cohead", bio: "Fostering interest in computational biology and genomic data analysis through high-impact research cycles." },
    { name: "Luke Wang", role: "Club Cohead", bio: "Expanding student access to high-level biological research methodologies and specialized laboratory protocols." },
    { name: "Jaiden Kim", role: "Club Cohead", bio: "Integrating cutting-edge laboratory techniques with real-world biotechnology applications for the symposium vanguard." },
    { name: "Reya Satam", role: "Club Cohead", bio: "Leading institutional outreach efforts to connect student researchers with distinguished industry professionals and alumni." },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-exeter-cream py-24 md:py-48 px-6 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-exeter-red font-bold mb-6 md:mb-10 block">Executive Stewardship</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[9rem] font-bold italic text-exeter-dark leading-[1] md:leading-[0.8] tracking-tighter">
               Directorial <br /><span className="NOT-italic text-exeter-red tracking-normal uppercase">Board.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xs text-gray-400 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold leading-relaxed border-l-2 border-exeter-gold pl-6 md:pl-8 lg:mb-4"
          >
            Responsible for strategic institutional direction, integrity, and operational execution.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <SectionHeader number="01" title="Symposium Leadership" subtitle="Executive Committee" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-12 md:mt-20">
          {heads.map((head, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="flex flex-col group h-full"
            >
              <div className="aspect-[16/10] bg-exeter-cream border border-gray-100 rounded-sm overflow-hidden relative academic-shadow mb-10">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-150 transform group-hover:scale-100 transition-transform duration-[2000ms]">
                   <Dna size={300} />
                </div>
                <div className="absolute inset-0 bg-exeter-dark translate-y-full group-hover:translate-y-0 transition-transform duration-700 p-12 flex flex-col justify-end text-white">
                   <div className="space-y-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-exeter-gold">Inquiry Focus</span>
                      <p className="text-sm font-light leading-relaxed text-gray-300">
                         {head.bio}
                      </p>
                   </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                   <span className="font-mono text-[10px] font-black text-exeter-red uppercase tracking-[0.4em]">{head.role}</span>
                   <div className="h-[1px] flex-1 bg-gray-100" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-exeter-dark mb-6 group-hover:italic transition-all duration-500">{head.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 md:py-40 bg-exeter-dark text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-exeter-red/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
           <SectionHeader number="02" title="Academic Oversight" subtitle="Scientific Advisory" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mt-12 md:mt-20">
              <FadeScale>
                <div className="space-y-12">
                   <p className="text-xl md:text-3xl text-gray-400 font-light leading-snug tracking-tight">
                     The symposium mandates are governed by the <span className="text-white font-medium underline decoration-exeter-gold decoration-4 underline-offset-8">Phillips Exeter Academy Science Department</span>. Advisors provide the definitive framework for ethical inquiry.
                   </p>
                   <div className="space-y-8">
                      <motion.div 
                        whileHover={{ x: 20 }}
                        className="flex gap-6 items-center border-b border-white/10 pb-8 cursor-default group"
                      >
                         <ArrowUpRight className="text-exeter-gold group-hover:rotate-45 transition-transform" size={24} />
                         <div className="space-y-1">
                            <h4 className="font-serif text-2xl font-bold italic">Dr. Summer Morrill</h4>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-exeter-teal">Instructor in Biology, Official Advisor</span>
                         </div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 20 }}
                        className="flex gap-6 items-center border-b border-white/10 pb-8 cursor-default group"
                      >
                         <ArrowUpRight className="text-exeter-gold group-hover:rotate-45 transition-transform" size={24} />
                         <div className="space-y-1">
                            <h4 className="font-serif text-2xl font-bold italic">Phillips Exeter Academy Ethics Board</h4>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-exeter-teal">Symposium Ethics Liaison</span>
                         </div>
                      </motion.div>
                   </div>
                </div>
              </FadeScale>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white text-exeter-dark p-12 md:p-20 shadow-2xl relative group overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-2 h-full bg-exeter-gold" />
                 <h4 className="font-serif text-4xl font-bold mb-8 italic uppercase tracking-tighter">Judging Panel 2027</h4>
                 <p className="text-gray-500 font-light leading-relaxed mb-12 italic">
                   Evaluating the next generation of biological inquiry.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                   {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="aspect-square bg-exeter-cream border border-gray-100 flex items-center justify-center relative group/judge">
                        <Users className="text-exeter-dark/10 group-hover/judge:text-exeter-red transition-colors" size={40} />
                        <div className="absolute inset-x-0 bottom-0 py-2 bg-exeter-dark/80 backdrop-blur-md opacity-0 group-hover/judge:opacity-100 transition-opacity">
                           <span className="font-mono text-[8px] text-white uppercase text-center block">TBD Institutional Judge</span>
                        </div>
                     </div>
                   ))}
                 </div>
                 <a href="mailto:jtkim1@exeter.edu" className="w-full bg-exeter-red text-white py-6 flex items-center justify-center gap-4 font-bold uppercase tracking-[0.4em] hover:bg-exeter-dark transition-all group/btn shadow-xl shadow-exeter-red/20">
                    Apply as Judge <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                 </a>
              </motion.div>
           </div>
        </div>
      </section>

              <section className="py-20 md:py-40 px-6 max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-10 md:space-y-12"
        >
          <Dna className="mx-auto text-exeter-red mb-8 md:mb-12 animate-pulse" size={60} />
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-exeter-dark mb-8 md:mb-10 italic leading-tight">Augment the Board.</h2>
          <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed mb-10 md:mb-16 tracking-tight max-w-3xl mx-auto">
            We are periodically welcoming dedicated students to join specialized sub-committees in <span className="text-exeter-red font-semibold">Technical Logistics</span> and <span className="text-exeter-teal font-semibold">Institutional Outreach</span>.
          </p>
          <a href="mailto:jtkim1@exeter.edu" className="group relative inline-flex items-center gap-6 px-10 md:px-16 py-5 md:py-7 bg-exeter-dark text-white font-bold uppercase tracking-[0.4em] hover:shadow-2xl hover:shadow-exeter-dark/40 transition-all duration-500 overflow-hidden text-xs md:text-base">
            <span className="relative z-10">Application Portal</span>
            <ArrowUpRight size={24} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <motion.div 
               className="absolute inset-0 bg-exeter-red translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </a>
        </motion.div>
      </section>
    </div>
  );
};
