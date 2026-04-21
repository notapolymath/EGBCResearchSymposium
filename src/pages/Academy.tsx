import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, MapPin, Building2, Globe, ArrowRight, Library, Dna } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const FadeReveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Academy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center bg-exeter-dark overflow-hidden">
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0 grayscale opacity-40 scale-110"
        >
           <img 
             src="https://images.unsplash.com/photo-1541339905195-03f443e467dd?auto=format&fit=crop&q=80" 
             alt="Exeter Campus" 
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-exeter-dark via-exeter-dark/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12 md:pt-20">
           <motion.div
             style={{ scale: textScale }}
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-5xl"
           >
              <span className="font-mono text-[9px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-exeter-gold mb-8 md:mb-12 block">Institutional Identity</span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-[1] md:leading-[0.8] tracking-tighter uppercase whitespace-pre-line md:whitespace-normal">
                Phillips {"\n"} Exeter {"\n"}<span className="text-exeter-gold italic font-normal lowercase tracking-normal">Academy.</span>
              </h1>
           </motion.div>
        </div>
      </section>

      {/* Institutional Mission */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-16">
            <SectionHeader number="01" title="The Academy" subtitle="Exeter, New Hampshire" />
            <p className="text-xl md:text-3xl text-exeter-dark font-light leading-snug tracking-tight">
              Phillips Exeter Academy is a residential community for students with an intellectual curiosity and a commitment to excellence. Our program is centered around <span className="text-exeter-red italic font-semibold border-b-2 border-exeter-red/10">Harkness</span>, a unique pedagogical approach that fosters critical thinking and collaborative inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
               <div className="flex flex-col group">
                  <motion.span 
                    whileInView={{ scale: [1, 1.1, 1] }}
                    className="font-serif text-5xl md:text-7xl font-bold text-exeter-dark leading-none group-hover:text-exeter-red transition-colors"
                  >
                    1781
                  </motion.span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-4">Founded</span>
               </div>
               <div className="flex flex-col group">
                  <motion.span 
                    whileInView={{ scale: [1, 1.1, 1] }}
                    className="font-serif text-5xl md:text-7xl font-bold text-exeter-dark leading-none group-hover:text-exeter-teal transition-colors"
                  >
                    1000+
                  </motion.span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-4">Enrolled Scholars</span>
               </div>
            </div>
          </div>
          
          <FadeReveal>
            <div className="bg-exeter-cream p-10 md:p-20 border-2 border-exeter-red/5 academic-shadow relative group">
               <div className="absolute top-0 right-0 w-3 h-full bg-exeter-red" />
               <h3 className="font-serif text-4xl md:text-5xl font-bold text-exeter-dark mb-6 md:mb-10 italic tracking-tighter">Non Sibi</h3>
               <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 md:mb-12">
                 "Non Sibi" (Not for self) is the definitive core motto of the Academy. The Genetics club embodies this by democratizing access to high-impact biological inquiry.
               </p>
               <a href="https://www.exeter.edu" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-exeter-red hover:text-exeter-dark transition-all">
                 Academy Portal <ArrowRight size={20} className="group-hover/link:translate-x-3 transition-transform" />
               </a>
            </div>
          </FadeReveal>
        </div>
      </section>

      {/* Campus Context */}
      <section className="py-40 bg-exeter-dark border-y border-white/5 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-exeter-teal/[0.03] rounded-full blur-[120px] animate-liquid -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <SectionHeader number="02" title="Facilities" subtitle="Scientific Infrastructure" />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
              {[
                { icon: <Building2 size={32} />, title: "Phelps Science", desc: "Housing state-of-the-art biological labs, sequence analyzers, and Harkness classrooms." },
                { icon: <Library size={32} />, title: "Class of 1945 Library", desc: "One of the largest secondary school libraries globally, offering definitive digital research archives." },
                { icon: <MapPin size={32} />, title: "Grainger Hall", desc: "The primary venue for the Research Symposium, offering a high-level stage for digital poster sessions." }
              ].map((loc, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   whileHover={{ y: -15, scale: 1.02 }}
                   className="liquid-glass border border-white/10 p-16 hover:border-exeter-gold/50 transition-all duration-1000 group rounded-2xl"
                >
                   <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-exeter-gold mb-12 group-hover:bg-exeter-gold group-hover:text-exeter-dark transition-all duration-700">
                      {loc.icon}
                   </div>
                   <h4 className="font-serif font-bold text-4xl text-white mb-6 italic tracking-tighter">{loc.title}</h4>
                   <p className="text-lg text-gray-400 font-light leading-relaxed">{loc.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-48 px-6 max-w-5xl mx-auto text-center">
         <FadeReveal>
            <SectionHeader number="03" title="Stewardship" subtitle="Global & Local Engagement" />
            <div className="space-y-12 md:space-y-16">
               <p className="text-xl md:text-3xl text-gray-500 font-light leading-relaxed tracking-tight">
                 The Academy’s unique location provides a bridge between historical academic tradition and modern scientific ambition. We connect the <span className="text-exeter-red italic font-semibold">Exeter Campus</span> to the global research vanguard.
               </p>
               <div className="flex justify-center flex-wrap gap-10 md:gap-16 pt-6 md:pt-10">
                  <div className="flex flex-col items-center gap-4 group cursor-default">
                     <div className="w-16 h-16 rounded-full bg-exeter-cream flex items-center justify-center text-exeter-teal border border-gray-100 group-hover:bg-exeter-teal group-hover:text-white transition-all">
                        <Globe size={24} />
                     </div>
                     <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">International Body</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 group cursor-default">
                     <div className="w-16 h-16 rounded-full bg-exeter-cream flex items-center justify-center text-exeter-red border border-gray-100 group-hover:bg-exeter-red group-hover:text-white transition-all">
                        <Building2 size={24} />
                     </div>
                     <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">450+ Campus Acres</span>
                  </div>
               </div>
            </div>
         </FadeReveal>
      </section>
    </div>
  );
};
