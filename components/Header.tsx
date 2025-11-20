import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to allow menu close animation
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled || mobileMenuOpen
          ? 'bg-night-950/90 backdrop-blur-2xl border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-accent-DEFAULT rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
            <div className="relative w-full h-full rounded-xl bg-night-900 border border-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            ZingMe<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">.ai</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Demo', 'Vision', 'Process', 'Team'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors py-2 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => scrollToSection('waitlist')}
          className="hidden md:block group relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white overflow-hidden transition-all hover:bg-white/10 hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Join Waitlist
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-night-950 z-40 flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 to-night-950/90"></div>
        
        <nav className="relative z-10 flex flex-col items-center gap-8 text-center">
          {['Demo', 'Vision', 'Process', 'Team'].map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="text-3xl font-display font-bold text-white hover:text-brand-400 transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-lg shadow-lg shadow-brand-500/20"
          >
            Join Waitlist
          </button>
        </nav>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-brand-500 via-accent-DEFAULT to-brand-500 transition-all duration-100" style={{ width: `${scrollProgress * 100}%`, opacity: scrolled ? 1 : 0 }}></div>
    </header>
  );
};