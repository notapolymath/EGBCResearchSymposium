import React from "react";
import { motion } from "motion/react";
import { Users, ArrowLeft, GraduationCap, MessagesSquare, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";

export const MentorProgram = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-exeter-dark text-white py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-24 -right-24 text-[20rem] md:text-[30rem] font-serif font-bold italic select-none pointer-events-none"
        >
          Join
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
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-exeter-gold font-bold mb-8 md:mb-10 block">Collaborative Inquiry</span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[10rem] font-bold italic leading-[1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
               Mentor <br /><span className="NOT-italic text-exeter-teal tracking-normal">Program.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-exeter-red pl-8 md:pl-12">
               Facilitating senior-led workshops to guide new researchers through complex laboratory protocols. Non Sibi in scientific action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-12 md:space-y-16">
            <SectionHeader number="01" title="The Partnership" subtitle="Harkness-Based Mentorship" />
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              Our mentorship program pairs experienced student investigators with new club members. This senior-led initiative ensures that technical knowledge is transferred securely and effectively within the Academy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 pt-4 md:pt-8">
               {[
                 { icon: <GraduationCap />, title: "Scholarly Guidance", desc: "Seniors provide definitive insight into experimental design and methodology." },
                 { icon: <MessagesSquare />, title: "Technical Sessions", desc: "Weekly one-on-one reviews of data analysis and laboratory protocol compliance." }
               ].map((card, i) => (
                 <div key={i} className="p-10 border border-gray-100 bg-exeter-cream academic-shadow group hover:border-exeter-teal transition-all">
                    <div className="text-exeter-teal mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h4 className="font-serif font-bold text-2xl mb-4 italic">{card.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{card.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 academic-shadow relative border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
                  alt="Student Mentors" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                  referrerPolicy="no-referrer"
                />
             </div>
             <motion.div 
               whileHover={{ y: -10 }}
               className="absolute -bottom-12 -right-12 bg-exeter-red text-white p-12 academic-shadow shadow-2xl shadow-exeter-red/20"
             >
                <Award size={40} className="mb-6 text-exeter-gold" />
                <h5 className="font-serif text-3xl font-bold mb-2 italic">Standardized Review</h5>
                <p className="font-mono text-[9px] uppercase tracking-widest text-exeter-gold/80 block">All mentors are board-verified.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Series */}
      <section className="py-20 md:py-40 bg-exeter-dark text-white px-6 text-center border-t border-white/5">
        <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.1] md:leading-none italic mb-12 md:mb-16 underline decoration-exeter-red decoration-2 md:decoration-4 underline-offset-[10px] md:underline-offset-[16px]">Vanguard Workshops.</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           <div className="p-16 border border-white/10 hover:bg-white/5 transition-all text-left group">
              <span className="font-mono text-[10px] text-exeter-gold uppercase tracking-[0.4em] block mb-4">Phase Alpha</span>
              <h4 className="font-serif text-3xl font-bold italic mb-6">Introduction to Querying</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-10">Foundational skills in searching genomic databases and identifying target study areas.</p>
              <Link to="/learning" className="flex items-center gap-3 text-exeter-red font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                 System Access <ArrowRight size={12} />
              </Link>
           </div>
           <div className="p-16 border border-white/10 hover:bg-white/5 transition-all text-left group">
              <span className="font-mono text-[10px] text-exeter-gold uppercase tracking-[0.4em] block mb-4">Phase Beta</span>
              <h4 className="font-serif text-3xl font-bold italic mb-6">Advanced Laboratory Protocol</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-10">Technical mastery of sequence analyzers and wet-lab environmental standards.</p>
              <Link to="/learning" className="flex items-center gap-3 text-exeter-red font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                 System Access <ArrowRight size={12} />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};
