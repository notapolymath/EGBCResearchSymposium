import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenu(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Learning", path: "/learning" },
    { name: "2027", path: "/competition" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <div className="fixed top-8 right-8 z-[9999] pointer-events-none">
        <nav className={`transition-all duration-700 pointer-events-auto liquid-glass py-3.5 rounded-full px-8 flex items-center gap-6 md:gap-10 border ${scrolled ? "bg-white/95 backdrop-blur-3xl border-white/40 shadow-2xl scale-[1.03]" : "bg-white/60 backdrop-blur-xl border-white/20 shadow-xl"}`}>
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={link.path} 
                  className={`text-[10.5px] font-bold uppercase tracking-[0.35em] transition-all relative group py-2 ${location.pathname === link.path ? "text-exeter-red" : "text-exeter-dark/60 hover:text-exeter-dark"}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-blob" className="absolute -inset-x-5 -inset-y-2.5 bg-exeter-red/5 rounded-full blur-sm -z-10" />
                  )}
                  <motion.span 
                    className={`absolute inset-x-0 -bottom-1 h-[1.5px] bg-exeter-red transition-all duration-500 ${location.pathname === link.path ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`} 
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-5 md:gap-7 shrink-0 relative">
            <div className="relative flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute right-14 bg-white/95 border border-exeter-dark/10 rounded-full px-5 py-2.5 overflow-hidden shadow-lg backdrop-blur-xl"
                  >
                    <input 
                      type="text"
                      autoFocus
                      placeholder="Search archives..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      className="bg-transparent border-none outline-none text-[10px] w-full font-mono placeholder:text-gray-400"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-full transition-colors ${searchOpen ? "bg-exeter-red text-white shadow-lg" : "text-exeter-dark hover:bg-gray-100"}`}
              >
                <Search size={18} />
              </motion.button>
            </div>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-exeter-dark p-2 hover:bg-gray-100 rounded-full" 
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>

          {/* Mobile Menu Portal */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute top-full right-0 mt-6 w-80 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-[2rem] overflow-hidden z-[100] lg:hidden"
              >
                <div className="p-10 flex flex-col gap-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search Archive..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      className="w-full bg-gray-50 border border-gray-100 rounded-full px-12 py-4 text-[10.5px] font-mono outline-none focus:border-exeter-red transition-all"
                    />
                    <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  <div className="space-y-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -15, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link 
                          to={link.path} 
                          onClick={() => setMobileMenu(false)} 
                          className={`text-[11px] font-bold uppercase tracking-[0.25em] block py-4 border-b border-gray-50 last:border-0 ${location.pathname === link.path ? "text-exeter-red" : "text-exeter-dark/60"}`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    to="/competition" 
                    onClick={() => setMobileMenu(false)} 
                    className="bg-exeter-dark text-white py-5 text-[10px] font-bold uppercase tracking-[0.35em] text-center mt-4 group flex items-center justify-center gap-3 active:scale-95 transition-transform"
                  >
                    Symposium 2027 <ArrowRight size={14} className="text-exeter-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
};
