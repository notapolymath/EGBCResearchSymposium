import { Link } from "react-router-dom";
import { Dna, Instagram, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="bg-exeter-dark text-white pt-32 pb-16 px-6 overflow-hidden mt-auto relative border-t border-white/5">
    <div className="absolute inset-0 bg-grid-pattern-light opacity-[0.03] pointer-events-none" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-exeter-red/5 rounded-full blur-[100px] animate-liquid -z-10 translate-x-1/2 -translate-y-1/2" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24 relative z-10">
      <div className="md:col-span-5">
        <div className="flex items-center gap-5 mb-10 group cursor-default">
           <div className="relative">
             <div className="absolute -inset-2 bg-exeter-teal rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000" />
             <div className="relative liquid-glass rounded-full p-1 overflow-hidden border border-white/20">
               <img src="image.png" alt="Logo" className="w-12 h-12 object-cover rounded-full" />
             </div>
           </div>
           <div>
             <span className="font-serif font-bold text-3xl block leading-[0.85] uppercase tracking-tighter italic">Exeter <br /><span className="text-exeter-gold NOT-italic">Genetics.</span></span>
             <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-gray-500 mt-2 block tracking-widest">Phillips Exeter Academy</span>
           </div>
        </div>
        <p className="text-gray-500 text-lg font-light leading-snug max-w-sm mb-12 tracking-tight">
          Phillips Exeter Academy’s premier research society, committed to fostering <span className="text-white italic">Harkness-driven</span> scientific excellence in modern genomics.
        </p>
        <div className="flex gap-10">
           {[
             { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/exetergeneticsclub/" }
           ].map((social, i) => (
             <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-exeter-red group-hover:bg-exeter-red group-hover:text-white transition-all duration-500">
                  {social.icon}
               </div>
               <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400 transition-colors uppercase">{social.label}</span>
             </a>
           ))}
         </div>
      </div>
      
      <div className="md:col-span-2">
        <h5 className="font-bold text-[10px] uppercase tracking-[0.5em] text-exeter-red mb-12">Academic Network</h5>
        <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
           {["Home", "About Club", "Board", "Resources", "Competition"].map((item) => (
             <li key={item}>
               <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-all flex items-center justify-between group">
                 {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </Link>
             </li>
           ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <h5 className="font-bold text-[10px] uppercase tracking-[0.5em] text-exeter-red mb-12">Inquiry Portal</h5>
        <div className="space-y-6">
          <div className="text-[10px] font-mono font-bold text-gray-400 tracking-[0.2em] leading-loose uppercase">
             Phillips Exeter Academy<br />
             20 Main Street<br />
             Exeter, NH 03833
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-exeter-red block">Kim, Jaiden</span>
            <a href="mailto:jtkim1@exeter.edu" className="block font-serif text-lg font-bold italic tracking-tight hover:text-exeter-gold transition-colors">
              jtkim1@exeter.edu
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-3">
        <h5 className="font-bold text-[10px] uppercase tracking-[0.5em] text-exeter-red mb-12">Scientific Dispatch</h5>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xs">Subscribe to the digital dispatch for research deadlines and symposium circulars.</p>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
           <div className="relative">
             <input type="email" placeholder="Institutional Email" className="bg-white/5 border border-white/10 px-6 py-5 text-xs focus:outline-none focus:border-exeter-teal transition-all w-full tracking-[0.1em]" />
             <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20">
               <Mail size={16} />
             </div>
           </div>
           <button className="bg-exeter-red text-white py-5 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-exeter-dark transition-all shadow-xl shadow-exeter-red/10">
             Authorize Access
           </button>
        </form>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:grid md:grid-cols-3 items-center">
       <div className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] order-2 md:order-1">
         © 2026 Phillips Exeter Academy Genetics & Biotech Club.
       </div>
       <div className="mb-10 md:mb-0 order-1 md:order-2 flex justify-center">
          <div className="w-10 h-[1px] bg-exeter-red/30" />
       </div>
       <div className="flex gap-10 text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] order-3 justify-end w-full flex-wrap">
          <a href="https://www.exeter.edu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:italic text-exeter-red">exeter.edu</a>
          <span className="opacity-20">|</span>
          <a href="https://www.exeter.edu/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:italic">Privacy Policy</a>
          <a href="https://www.exeter.edu/academics/harkness-learning" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:italic">Scientific Ethics</a>
          <a href="https://www.exeter.edu/academics/departments/science" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:italic">Academic Integrity</a>
       </div>
    </div>
  </footer>
);
