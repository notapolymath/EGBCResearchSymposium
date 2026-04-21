import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, ArrowRight, FileText, FlaskConical, Users, GraduationCap, Microscope } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

interface SearchResult {
  title: string;
  category: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const SEARCH_INDEX: SearchResult[] = [
  { title: "Home", category: "General", description: "The central portal for the Exeter Genetics & Biotech Symposium 2027.", path: "/", icon: <Search size={20} /> },
  { title: "About the Club", category: "Archive", description: "Our legacy of biological inquiry and research ethos.", path: "/about", icon: <FileText size={20} /> },
  { title: "Executive Board", category: "Team", description: "The directorial board managing Symposium 2027.", path: "/team", icon: <Users size={20} /> },
  { title: "Phillips Exeter Academy", category: "Institution", description: "The tradition of academic excellence and Non Sibi.", path: "/academy", icon: <GraduationCap size={20} /> },
  { title: "Learning Resources", category: "Education", description: "Bespoke training modules in genomic analysis and bioinformatics.", path: "/learning", icon: <Microscope size={20} /> },
  { title: "Symposium 2027 Prize", category: "Event", description: "Guidelines, deadlines, and submission portal for the 2027 prize.", path: "/competition", icon: <FlaskConical size={20} /> },
  { title: "Genomics Discipline", category: "Science", description: "Exploring the fundamental code of life through hereditary analysis.", path: "/disciplines/genomics", icon: <Search size={20} /> },
  { title: "Bioinformatics", category: "Science", description: "Leveraging Pythonic frameworks and R-Bioconductor for proteomics.", path: "/disciplines/bioinformatics", icon: <Search size={20} /> },
  { title: "Synthetic Biology", category: "Science", description: "Engaging with CRIPSR-Cas9 techniques and biological ethics.", path: "/disciplines/synthetic-bio", icon: <Search size={20} /> },
  { title: "Digital Repositories", category: "Archive", description: "Academy's hub for student-authored scientific findings.", path: "/disciplines/repositories", icon: <FileText size={20} /> },
  { title: "Mentor Program", category: "Education", description: "Senior-led workshops guiding new researchers through protocols.", path: "/disciplines/mentor-program", icon: <GraduationCap size={20} /> },
  { title: "Curated Archives", category: "Archive", description: "Synthesizing academic literature and research gaps.", path: "/disciplines/archives", icon: <FileText size={20} /> },
];

export const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="bg-white min-h-[70vh] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          number="SEARCH" 
          title="Archive Query" 
          subtitle={`Results for: "${query}"`} 
        />

        <div className="mb-20">
          <p className="text-gray-500 font-light text-xl mb-12">
            Found <span className="text-exeter-red font-bold">{results.length}</span> entries matching your investigation parameters.
          </p>

          <div className="space-y-6">
            {results.length > 0 ? (
              results.map((result, i) => (
                <motion.div
                  key={result.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={result.path}
                    className="group block p-8 bg-exeter-cream/50 border border-gray-100 hover:border-exeter-red hover:bg-white transition-all duration-300 academic-shadow"
                  >
                    <div className="flex items-start gap-8">
                      <div className="w-14 h-14 bg-white flex items-center justify-center text-exeter-teal border border-gray-50 group-hover:bg-exeter-red group-hover:text-white transition-colors academic-shadow">
                        {result.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-exeter-teal">{result.category}</span>
                          <div className="h-[1px] w-8 bg-gray-200" />
                          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Entry Index: {i + 1}</span>
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-exeter-dark group-hover:text-exeter-red transition-all group-hover:italic mb-4">
                          {result.title}
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed mb-6">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-exeter-red opacity-0 group-hover:opacity-100 transition-all group-hover:gap-6">
                          Authorize Access <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 bg-exeter-cream rounded-sm border border-dashed border-gray-200"
              >
                <Search size={48} className="mx-auto text-gray-300 mb-8" />
                <h4 className="font-serif text-3xl font-bold text-exeter-dark mb-4">Zero Matches Identified</h4>
                <p className="text-gray-500 max-w-sm mx-auto mb-10">No records matching "<span className="italic">{query}</span>" currently exist in the 2027 Symposium archives.</p>
                <Link to="/" className="text-exeter-red font-mono text-[10px] font-bold uppercase tracking-[0.4em] hover:tracking-[0.6em] transition-all">Reset Investigation Loop</Link>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-40 p-12 liquid-glass border border-exeter-dark/5 bg-exeter-cream/30 text-center">
            <h4 className="font-serif text-2xl font-bold text-exeter-dark mb-4 italic">Can't find what you're looking for?</h4>
            <p className="text-sm text-gray-500 mb-8 max-w-lg mx-auto">Our physical archives at the Phelps Science Center contain over 15 years of club history not fully indexed on our digital symposium portal.</p>
            <a href="mailto:jtkim1@exeter.edu" className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-exeter-dark hover:text-exeter-red transition-colors">Contact Registry Board</a>
        </div>
      </div>
    </div>
  );
};
