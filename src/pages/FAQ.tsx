import React from "react";
import { motion } from "motion/react";
import { HelpCircle, ChevronDown, MessageCircle, FileText, ShieldAlert } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

interface FAQItemProps {
  question: string;
  answer: string;
  i: number;
  key?: React.Key;
}

const FAQItem = ({ question, answer, i }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-exeter-dark group-hover:text-exeter-red transition-colors flex items-center gap-4">
          <span className="font-mono text-[10px] text-exeter-teal opacity-50 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-full ${isOpen ? "bg-exeter-red text-white" : "bg-gray-50 text-gray-400"} transition-colors`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-8 pr-12 text-gray-500 font-light leading-relaxed text-lg max-w-3xl">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in the 2027 Symposium?",
      answer: "The symposium is open to all Phillips Exeter Academy students, as well as students from schools who partner with us. We welcome researchers at all stages of their investigation—from initial hypothesis to final data analysis preferably being students in high school and able to physically attend the symposium at Phillips Exeter Academy, Exeter, New Hampshire."
    },
    {
      question: "What are the core research tracks?",
      answer: "We primarily facilitate research in Genomics, Bioinformatics, and Synthetic Biology. However, we also support interdisciplinary projects that intersect with ethical policy, computational modeling, and chemical biology."
    },
    {
      question: "Is there a prerequisite for the Mentor Program?",
      answer: "No specific prerequisite is required to join as a mentee. We look for curiosity and a commitment to the iterative nature of scientific discovery. Seniors who wish to lead must demonstrate mastery in their respective technical fields."
    },
    {
      question: "How are grant awards determined?",
      answer: "Awards are determined by the Symposium Board in collaboration with the Science Faculty. Projects are evaluated based on methodological rigor, institutional impact, and the clarity of scientific communication."
    },
    {
      question: "Can I submit research conducted outside the club?",
      answer: "Yes, provided the methodology is verified under our academic integrity standards. We encourage students to present diverse findings from summer institutes and independent investigations."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-40">
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-40">
            <SectionHeader number="01" title="Inquiry" subtitle="Frequently Asked Questions" />
            <div className="p-10 liquid-glass border border-exeter-red/10 rounded-2xl space-y-8">
              <div className="flex items-center gap-4 text-exeter-red">
                <HelpCircle size={24} />
                <h4 className="font-serif text-xl font-bold italic underline underline-offset-4 decoration-2">Direct Inquiry.</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                If your technical query is not addressed here, please contact the registry board for definitive guidance.
              </p>
              <div className="pt-4 space-y-4">
                <a href="mailto:jtkim1@exeter.edu" className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-exeter-dark hover:text-exeter-red transition-colors">
                  <MessageCircle size={14} /> Contact Registry
                </a>
                <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-exeter-teal">
                  <ShieldAlert size={14} /> Security Protocol V2.1
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} i={i} />
              ))}
            </div>

            <div className="mt-32 p-16 bg-exeter-dark text-white rounded-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-grid-pattern-light opacity-5" />
               <div className="absolute -bottom-10 -right-10 text-[10rem] font-serif font-bold italic opacity-5 pointer-events-none select-none group-hover:scale-110 transition-transform duration-1000">
                  Join.
               </div>
               <div className="relative z-10 max-w-xl">
                  <span className="font-mono text-[10px] text-exeter-gold uppercase tracking-[0.4em] mb-6 block">Ready to Investigate?</span>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight italic">Secure your place in the 2027 cohort.</h3>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <button className="px-10 py-5 bg-exeter-red text-white uppercase font-bold text-[10px] tracking-[0.3em] hover:bg-white hover:text-exeter-dark transition-all">
                        Register Now
                     </button>
                     <button className="px-10 py-5 border border-white/20 text-white uppercase font-bold text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all">
                        Download Prospectus
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
