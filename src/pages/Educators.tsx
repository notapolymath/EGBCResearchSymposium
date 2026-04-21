import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Users, BookOpen, GraduationCap, ArrowUpRight, Award, ShieldCheck, Dna, ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { Link } from "react-router-dom";

const EntranceReveal = ({ children, delay = 0, y = 30 }: { children: ReactNode, delay?: number, y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Educators = () => {
  const collaborations = [
    { icon: <GraduationCap size={28} />, title: "Curriculum Integration", desc: "Structured architectural kits for teaching Pythonic genomic analysis in a standard biology context.", href: "https://www.ncbi.nlm.nih.gov/education/" },
    { icon: <Users size={28} />, title: "Advisory Network", desc: "Joining a global collective of secondary school educators serving as critical blind-reviewers.", href: "https://www.exeter.edu/academics/departments/science" },
    { icon: <BookOpen size={28} />, title: "Institutional Sync", desc: "Standardized frameworks for hosting regional symposium cycles with verified judging criteria.", href: "https://www.biointeractive.org/" }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-exeter-cream py-48 px-6 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-end relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-exeter-red font-bold mb-10 block">Scholarly Partnership</span>
            <h1 className="font-serif text-6xl md:text-[9rem] font-bold italic leading-[0.8] text-exeter-dark tracking-tighter">
              Institutional <br /><span className="NOT-italic text-exeter-teal tracking-normal uppercase">Access.</span>
            </h1>
          </motion.div>
          <div className="max-w-md pb-8">
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-gray-500 text-xl font-light leading-snug border-l-2 border-exeter-gold pl-10"
             >
               Bridging the gap between secondary school curricula and advanced university-level research methodologies.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Collaboration Frameworks */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <SectionHeader number="01" title="Academic Support" subtitle="Teacher Engagement Modules" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
           {collaborations.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -10 }}
               className="p-16 border border-gray-100 bg-white academic-shadow group hover:border-exeter-red transition-all duration-500 h-full flex flex-col"
             >
                <div className="w-16 h-16 bg-exeter-red/10 text-exeter-red flex items-center justify-center mb-10 group-hover:bg-exeter-red group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-serif font-bold text-3xl text-exeter-dark mb-6 group-hover:italic transition-all">{item.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed mb-8">{item.desc}</p>
                <div className="mt-auto">
                   <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-exeter-red font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      Authoritative Access <ArrowRight size={12} />
                   </a>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Advisory & Judging */}
      <section className="py-40 bg-exeter-dark text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <EntranceReveal>
            <div className="space-y-12">
              <SectionHeader number="02" title="The Faculty Board" subtitle="Oversight & Evaluation" />
              <p className="text-3xl text-gray-400 font-light leading-snug tracking-tight">
                Our 2027 Research Cycle is recruiting <span className="text-white font-medium underline decoration-exeter-teal decoration-4 underline-offset-8">Distinguished Faculty</span> for the National Evaluation Board and Judging Committee.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                 <div className="space-y-6 group">
                    <div className="flex items-center gap-4 text-exeter-red group-hover:translate-x-2 transition-transform">
                       <Award size={24} />
                       <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Official Certification</span>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Formal institutional verification from Phillips Exeter Academy for academic service excellence.</p>
                 </div>
                 <div className="space-y-6 group">
                    <div className="flex items-center gap-4 text-exeter-teal group-hover:translate-x-2 transition-transform">
                       <ShieldCheck size={24} />
                       <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Integrity Guard</span>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Standardized ethics protocols for impartial project evaluation across different secondary schools.</p>
                 </div>
              </div>
            </div>
          </EntranceReveal>
          
          <EntranceReveal delay={0.2}>
             <div className="p-20 bg-white/5 border border-white/10 academic-shadow backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-exeter-teal/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                <h3 className="font-serif text-4xl font-bold mb-12 uppercase tracking-tighter italic">Institutional Portal</h3>
                <div className="space-y-10 mb-16">
                   {[
                     { label: "Oversight Standards 2027", path: "https://www.exeter.edu/academics/departments/science" },
                     { label: "Ethics & Safety Protocol", path: "/disciplines/archives" },
                     { label: "Research Grant Framework", path: "/competition" },
                   ].map((link, i) => (
                     <div key={i}>
                       {link.path.startsWith("/") ? (
                         <Link 
                            to={link.path}
                            className="flex justify-between items-center border-b border-white/5 pb-6 text-xl font-light text-gray-400 hover:text-white transition-colors group/item"
                         >
                            <span>{link.label}</span>
                            <ArrowRight size={20} className="text-exeter-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                         </Link>
                       ) : (
                         <a 
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center border-b border-white/5 pb-6 text-xl font-light text-gray-400 hover:text-white transition-colors group/item"
                         >
                            <span>{link.label}</span>
                            <ExternalLink size={20} className="text-exeter-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                         </a>
                       )}
                     </div>
                   ))}
                </div>
                <button className="w-full py-7 bg-exeter-red text-white font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-exeter-dark transition-all shadow-2xl shadow-exeter-red/20">
                   Join Advisory Vanguard
                </button>
             </div>
          </EntranceReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 max-w-5xl mx-auto text-center">
         <EntranceReveal>
           <h2 className="font-serif text-6xl md:text-8xl font-bold mb-12 text-exeter-dark uppercase tracking-tighter italic leading-none">Empower your <br /> scholars.</h2>
           <p className="text-2xl text-gray-500 font-light leading-relaxed mb-20 tracking-tight max-w-3xl mx-auto">
              Implement our world-class research modules into your local curriculum. Request the definitive <span className="text-exeter-red font-semibold">Symposium Pack</span> today.
           </p>
           <button className="group relative px-20 py-8 bg-exeter-dark text-white font-bold uppercase tracking-[0.4em] hover:shadow-2xl hover:shadow-exeter-dark/40 transition-all duration-500 overflow-hidden">
             <span className="relative z-10">Request Resources</span>
             <motion.div 
               className="absolute inset-0 bg-exeter-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500"
             />
           </button>
         </EntranceReveal>
      </section>
    </div>
  );
};
