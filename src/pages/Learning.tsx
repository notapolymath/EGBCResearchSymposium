import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Code2, Database, FlaskConical, ExternalLink, PlayCircle, ArrowRight, Library, FileText, Smartphone, Dna } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const EntranceFade = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Learning = () => {
  const resources = [
    { type: "Technical", title: "R for Bioinformatics", category: "Genomics", desc: "A definitive architectural guide to analyzing complex genomic datasets using the R programming language.", href: "https://www.bioconductor.org/" },
    { type: "Methodology", title: "Scholarly Composition 101", category: "Academic", desc: "How to structure peer-reviewed papers and symposium posters with clinical precision and clarity.", href: "/disciplines/archives" },
    { type: "Foundational", title: "Intro to CRISPR-Cas9", category: "Gene Editing", desc: "A systematic overview of contemporary gene editing technology and its ethical frontier in medicine.", href: "/disciplines/synthetic-bio" },
    { type: "Software", title: "Pythonic Systems Biology", category: "Programming", desc: "Developing automated scripts for high-throughput biological data collection and visualization.", href: "https://biopython.org/" },
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Liquid Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-exeter-teal/5 rounded-full blur-3xl animate-liquid -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-exeter-red/5 rounded-full blur-3xl animate-liquid -z-10 -translate-x-1/2 translate-y-1/2" />

      {/* Header */}
      <section className="bg-exeter-dark py-48 px-6 overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern-light opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold mb-10 block text-white/60">Digital Knowledge Hub</span>
            <h1 className="font-serif text-6xl md:text-[9rem] font-bold italic leading-[0.85] text-white tracking-tighter uppercase">
              Vanguard <br /><span className="NOT-italic text-exeter-dark tracking-normal">Archive.</span>
            </h1>
            <p className="text-2xl text-white/90 font-light mt-16 leading-snug tracking-tight max-w-2xl border-l-2 border-exeter-gold pl-12">
              An open-source institutional library providing the technical architecture required for independent biological investigation at the secondary level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-20">
            <div>
              <h4 className="font-serif text-3xl font-bold text-exeter-dark mb-10 italic uppercase tracking-tighter">Scholarly Paths</h4>
              <ul className="space-y-6">
                {[
                  { name: "In-Silico Basis", path: "/disciplines/bioinformatics" },
                  { name: "Bioinformatic Systems", path: "/disciplines/genomics" },
                  { name: "Wet-Lab Protocol", path: "/disciplines/synthetic-bio" },
                  { name: "Genomic Ethics", path: "/disciplines/archives" }
                ].map((item) => (
                  <li key={item.name}>
                    <motion.div whileHover={{ x: 10 }}>
                      <Link 
                        to={item.path}
                        className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-exeter-red transition-all group w-full text-left"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-exeter-red group-hover:scale-150 transition-all" />
                        {item.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
            
            <EntranceFade delay={0.2}>
              <div className="bg-exeter-cream p-12 border border-gray-100 academic-shadow relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-exeter-red/5 -translate-y-8 translate-x-8 rounded-full" />
                 <h5 className="font-serif font-bold text-2xl text-exeter-dark mb-6 tracking-tight italic">Advise & Review</h5>
                 <p className="text-sm text-gray-500 font-light leading-relaxed mb-10">Direct synchronization with the Board for one-on-one technical advisory sessions.</p>
                 <a href="mailto:jtkim1@exeter.edu" className="w-full inline-block text-center py-4 border border-exeter-dark text-[10px] font-bold text-exeter-dark uppercase tracking-[0.3em] hover:bg-exeter-dark hover:text-white transition-all">
                    Initiate Advisory
                 </a>
              </div>
            </EntranceFade>
          </div>

          {/* Resource Grid */}
          <div className="lg:col-span-3">
             <SectionHeader number="01" title="Digital Library" subtitle="Standardized Research Modules" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                {resources.map((res, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="p-16 border border-gray-100 bg-white academic-shadow group hover:border-exeter-teal transition-all duration-700 h-full flex flex-col"
                  >
                     <div className="flex justify-between items-start mb-12">
                        <span className="font-mono text-[9px] font-bold px-4 py-2 bg-exeter-cream text-exeter-dark border border-gray-100 uppercase tracking-widest">{res.type}</span>
                        <div className="text-exeter-teal opacity-10 group-hover:opacity-100 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700">
                           {res.title.includes("Bio") ? <Database size={44} /> : 
                            res.title.includes("Scholarly") ? <BookOpen size={44} /> : 
                            res.title.includes("Python") ? <Code2 size={44} /> : <FlaskConical size={44} />}
                        </div>
                     </div>
                     <span className="font-mono text-[10px] text-exeter-red font-bold uppercase mb-4 block tracking-[0.4em]">{res.category}</span>
                     <h3 className="font-serif text-4xl font-bold text-exeter-dark mb-6 group-hover:italic transition-all tracking-tighter">{res.title}</h3>
                     <p className="text-gray-500 font-light leading-relaxed mb-12">{res.desc}</p>
                      <div className="mt-auto">
                        {res.href.startsWith("/") ? (
                          <Link 
                            to={res.href}
                            className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-exeter-dark group-hover:text-exeter-teal transition-all"
                          >
                             <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-exeter-teal">
                                <ArrowRight size={18} />
                             </div>
                             Explore Resource
                          </Link>
                        ) : (
                          <a 
                            href={res.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-exeter-dark group-hover:text-exeter-teal transition-all"
                          >
                             <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-exeter-teal">
                                <ExternalLink size={18} />
                             </div>
                             Authoritative Access
                          </a>
                        )}
                      </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Workshop Series */}
      <section className="py-48 bg-exeter-dark border-y border-white/5 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
           <SectionHeader number="02" title="Practical Application" subtitle="Institutional Workshop Cycles" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mt-20">
              <EntranceFade>
                <div className="aspect-video bg-black relative rounded-sm overflow-hidden flex items-center justify-center academic-shadow group border border-white/10">
                   <img 
                     src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80" 
                     alt="Laboratory Workshop" 
                     className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                     referrerPolicy="no-referrer"
                   />
                   <div className="relative z-10 cursor-pointer">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <PlayCircle size={100} className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
                      </motion.div>
                   </div>
                   <div className="absolute bottom-10 left-10 p-6 bg-exeter-dark/80 backdrop-blur-md border border-white/10">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-exeter-gold block mb-2 font-bold">Vanguard Session 04</span>
                      <span className="font-serif text-lg text-white font-bold italic uppercase tracking-tighter">Extracting Genomic Data</span>
                   </div>
                </div>
              </EntranceFade>
              
              <div className="space-y-12">
                 <EntranceFade delay={0.2}>
                   <h3 className="font-serif text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none italic">Technical <br /><span className="NOT-italic text-exeter-teal tracking-normal">Synchronicity.</span></h3>
                   <p className="text-2xl text-gray-400 font-light leading-snug tracking-tight pt-8">
                     Bi-weekly digital symposiums detailing the practical architecture of independent investigation. From laboratory extraction to final scholarly presentation.
                   </p>
                   <div className="space-y-10 pt-16">
                      {[
                        { label: "Live Broadcast Protocol", icon: <Smartphone size={20} />, href: "https://www.exeter.edu/academics/departments/science" },
                        { label: "Institutional Recap Archive", icon: <FileText size={20} />, href: "/disciplines/archives" },
                        { label: "Methodology Vanguard", icon: <Library size={20} />, href: "/disciplines" },
                      ].map((link, i) => (
                        <motion.a 
                          key={i}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          whileHover={{ x: 15 }}
                          className="flex items-center gap-6 group cursor-pointer"
                        >
                           <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-exeter-gold group-hover:bg-exeter-gold group-hover:text-exeter-dark transition-all">
                              {link.icon}
                           </div>
                           <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-all">{link.label}</span>
                        </motion.a>
                      ))}
                   </div>
                 </EntranceFade>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
