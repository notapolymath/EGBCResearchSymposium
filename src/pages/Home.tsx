import React, { ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Dna, 
  MapPin, 
  ArrowUpRight, 
  FlaskConical, 
  Users, 
  ArrowRight 
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const FadeInWhenVisible = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-x-hidden relative">
      {/* Persistent Liquid Elements */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-exeter-red/5 rounded-full blur-[120px] animate-liquid -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-exeter-teal/5 rounded-full blur-[140px] animate-liquid -z-10 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-white overflow-hidden pb-20">
        <div className="absolute inset-0 grid-pattern-light opacity-30 px-96" />
        
        {/* Animated DNA Background Element */}
        <motion.div 
          style={{ y: heroY, rotate: 15 }}
          className="absolute -right-20 top-20 opacity-[0.03] text-exeter-dark pointer-events-none select-none"
        >
          <Dna size={800} strokeWidth={0.5} />
        </motion.div>

        <motion.div 
          style={{ y: heroY, rotate: -15 }}
          className="absolute -left-40 bottom-0 opacity-[0.02] text-exeter-red pointer-events-none select-none"
        >
          <div className="flex gap-4 flex-wrap w-[600px]">
             {Array.from({ length: 40 }).map((_, i) => (
               <motion.div 
                 key={i}
                 animate={{ 
                   scale: [1, 1.2, 1],
                   opacity: [0.3, 0.6, 0.3]
                 }}
                 transition={{ 
                   duration: 3 + Math.random() * 2,
                   repeat: Infinity,
                   delay: Math.random() * 2
                 }}
                 className="w-2 h-2 rounded-full bg-current"
               />
             ))}
          </div>
        </motion.div>

        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute top-0 right-0 w-3/4 h-full bg-exeter-cream/[0.3] backdrop-blur-3xl -skew-x-[25deg] transform translate-x-1/3 pointer-events-none border-l border-exeter-red/10" 
        />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10 w-full pt-20">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-5 px-6 py-3 bg-white/50 backdrop-blur-md rounded-full border border-gray-100 mb-16 academic-shadow"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-exeter-red">2027 Research Symposium Open</span>
              <div className="w-2 h-2 rounded-full bg-exeter-teal animate-pulse shadow-[0_0_10px_#40b3b1]" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[1] md:leading-[0.85] text-exeter-dark mb-10 md:mb-16 tracking-tighter"
            >
              Democratizing <br />
              <span className="text-exeter-red italic font-normal inline-block transform md:-translate-x-2">Research</span> Experience
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-light mb-12 md:mb-20 max-w-2xl leading-snug tracking-tight"
            >
              The Exeter Genetics and Biotechnology Club hopes to create <span className="text-exeter-dark font-medium underline decoration-exeter-gold decoration-4 underline-offset-8">a platform for scientific inquiry and communication.</span> 
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-10"
            >
              <Link to="/competition" className="group relative px-10 sm:px-16 py-5 sm:py-7 bg-exeter-dark text-white font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-5 hover:shadow-2xl hover:shadow-exeter-dark/30 transition-all duration-700 rounded-full overflow-hidden text-xs sm:text-base">
                <span className="relative z-10">Sign Up</span>
                <ArrowUpRight size={22} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-700" />
                <motion.div 
                   className="absolute inset-0 bg-exeter-red translate-y-full group-hover:translate-y-0 transition-transform duration-700"
                />
              </Link>
              <Link to="/about" className="px-10 sm:px-16 py-5 sm:py-7 liquid-glass text-exeter-dark border border-white/40 font-bold uppercase tracking-[0.3em] hover:bg-white hover:border-exeter-dark/20 transition-all flex items-center justify-center academic-shadow rounded-full text-xs sm:text-base">
                About Us
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="relative p-2 liquid-glass rounded-2xl academic-shadow group border border-white/60">
              <div className="aspect-[4/6] overflow-hidden rounded-xl bg-exeter-cream">
                 <img 
                   src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" 
                   alt="Academic Research" 
                   className="w-full h-full object-cover transform grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3000ms]"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -top-12 -right-12 w-40 h-40 liquid-glass rounded-full flex items-center justify-center text-exeter-dark shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-1000 border border-white/50 backdrop-blur-2xl">
                 <img src="image.png" alt="Logo" className="w-20 h-20 object-contain rounded-full shadow-inner" />
              </div>
              <div className="p-12 text-center">
                 <span className="font-mono text-[10px] font-bold text-exeter-red uppercase tracking-[0.5em] block mb-4">Symposium 2027</span>
                 <h3 className="font-serif text-4xl font-bold text-exeter-dark italic tracking-tighter">"Non Sibi Innovation"</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 md:py-40 bg-white px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <FadeInWhenVisible>
            <div className="space-y-12">
              <SectionHeader number="01" title="Our Mission" subtitle="Scientific Opportunity and Communication" />
              <p className="text-xl md:text-3xl text-exeter-dark font-light leading-snug tracking-tight">
                Addressing the <span className="text-exeter-red italic font-semibold">entry barrier</span> to modern research through rigorous mentorship and computational mastery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
                <div className="space-y-6 group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-exeter-teal/10 flex items-center justify-center text-exeter-teal transition-colors group-hover:bg-exeter-teal group-hover:text-white"
                  >
                    <FlaskConical size={24} />
                  </motion.div>
                  <h4 className="font-bold text-exeter-dark uppercase text-xs tracking-[0.3em]">Technical Launch Pad</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">Resources for R-Bioconductor and Pythonic genomic analysis that are expected in any research experience.</p>
                </div>
                <div className="space-y-6 group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-14 h-14 bg-exeter-gold/10 flex items-center justify-center text-exeter-gold transition-colors group-hover:bg-exeter-gold group-hover:text-white"
                  >
                    <Users size={24} />
                  </motion.div>
                  <h4 className="font-bold text-exeter-dark uppercase text-xs tracking-[0.3em]">Presentation Experience</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">Standardized research symposium experience that models those in undergraduate and graduate settings.</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
          
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-16 bg-exeter-cream academic-shadow border border-gray-100 relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-exeter-red/5 -rotate-45 translate-x-12 -translate-y-12" />
               <div className="space-y-12">
                  <div className="flex gap-8 items-start">
                     <span className="font-serif text-7xl font-light text-exeter-teal leading-none">“</span>
                     <p className="font-serif text-3xl text-exeter-dark italic leading-relaxed">
                       "Goodness without knowledge is weak and feeble, yet knowledge without goodness is dangerous, and that both united form the noblest character, and lay the surest foundation of usefulness to [hu]mankind.”
                     </p>
                  </div>
                  <div className="flex items-center gap-6 pl-16">
                     <div className="w-12 h-[1px] bg-exeter-red" />
                     <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-exeter-red">John Phillips, Founder of Phillips Exeter Academy</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section id="symposium" className="py-20 md:py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-2/3">
             <SectionHeader number="03" title="Symposium Schedule" subtitle="Program Sequence" />
             <div className="space-y-4">
                {[
                  { time: "08:00", event: "Institutional Check-in", loc: "Phelps Science Center" },
                  { time: "09:00", event: "Opening Plenary", loc: "The Forum" },
                  { time: "10:30", event: "Poster Session Alpha", loc: "Grainger Hall" },
                  { time: "12:00", event: "Scholars Luncheon", loc: "Academy Commons" },
                  { time: "13:30", event: "Poster Session Beta", loc: "Grainger Hall" },
                  { time: "15:00", event: "Award Convocation", loc: "The Forum" },
                ].map((e, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center p-6 md:p-10 bg-white border border-gray-50 hover:border-exeter-red hover:academic-shadow transition-all duration-500 group cursor-default gap-4 sm:gap-0"
                  >
                    <div className="font-mono text-exeter-red font-bold text-lg md:text-xl w-32 tracking-wider shrink-0 underline decoration-exeter-teal decoration-2 underline-offset-8">
                       {e.time}
                    </div>
                    <div className="flex-1 sm:px-12">
                       <h4 className="font-serif text-2xl md:text-3xl font-bold text-exeter-dark group-hover:text-exeter-red transition-colors italic leading-tight sm:leading-none">{e.event}</h4>
                       <span className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-4">
                          <MapPin size={12} className="text-exeter-teal" /> {e.loc}
                       </span>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-12">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-exeter-dark text-white p-16 relative overflow-hidden"
             >
                <Dna className="absolute -bottom-16 -right-16 w-64 h-64 opacity-5 text-exeter-gold rotate-12" />
                <h4 className="font-serif text-4xl font-bold mb-10 italic uppercase border-b border-white/10 pb-6">Key Metrics</h4>
                <div className="space-y-12">
                   {[
                     { label: "Research Entries", val: "5+", color: "text-exeter-red" },
                     { label: "Partner Schools", val: "1+", color: "text-exeter-teal" },
                     { label: "Grant Awards", val: "$100", color: "text-exeter-gold" },
                   ].map((stat, i) => (
                     <div key={i} className="space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-400">{stat.label}</span>
                        <div className={`text-5xl font-serif font-bold ${stat.color}`}>{stat.val}</div>
                     </div>
                   ))}
                </div>
             </motion.div>
             <div className="p-12 border-2 border-exeter-red/10 bg-exeter-cream shadow-inner space-y-8">
                <SectionHeader number="04" title="Oversight" subtitle="Academic Integrity" />
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                   Managed by the Symposium Board in collaboration with the Science Faculty and Guest Judges to ensure all methodology meets collegiate standards.
                </p>
                <Link to="/educators" className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-exeter-red hover:gap-6 transition-all">
                   Faculty Guidelines <ArrowRight size={14} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="register" className="py-56 bg-exeter-red relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-0 left-0 w-full h-full text-white/5 font-serif text-[40rem] font-bold leading-none select-none pointer-events-none -translate-x-1/4 translate-y-1/4"
        >
           MMXXVII
        </motion.div>
        
        <FadeInWhenVisible>
          <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[14rem] font-bold uppercase tracking-tighter leading-[0.8] mb-12 md:mb-20 drop-shadow-2xl">
              Research <br /><span className="text-exeter-gold italic font-normal lowercase tracking-normal">immersion.</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-light text-white/90 max-w-3xl mx-auto mb-12 md:mb-20 leading-snug">
              Establish your legacy. The portal for final project submissions is now formally open.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center">
               <Link 
                 to="/competition"
                 className="px-10 md:px-20 py-5 md:py-8 bg-white text-exeter-red font-bold uppercase tracking-[0.4em] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-exeter-dark hover:text-white transition-all duration-500 md:text-lg flex items-center justify-center rounded-sm"
               >
                  Sign Up as a Research
               </Link>
               <Link 
                 to="/educators"
                 className="px-10 md:px-20 py-5 md:py-8 border-2 border-white/30 text-white font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-exeter-red transition-all duration-500 md:text-lg flex items-center justify-center rounded-sm"
               >
                  Partner with us
               </Link>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
};
