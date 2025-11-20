import React from 'react';

export const Hero: React.FC = () => {
  const vibes = [
    "Chill Sunset", "Rooftop Jazz", "Hidden Speakeasy", "Forest Hike", 
    "Art Gallery Date", "Techno Bunker", "Street Food Crawl", "Pottery Workshop",
    "Stargazing", "Comedy Club", "Vinyl Listening Session"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-20 md:pt-20 overflow-hidden bg-night-950 selection:bg-brand-500/30">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-600/10 rounded-full blur-[80px] md:blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-accent-DEFAULT/10 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[40vw] h-[40vw] bg-accent-hot/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col md:flex-row items-center gap-12 justify-center md:justify-start">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left pt-8 md:pt-0 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-brand-100 tracking-widest uppercase">Accepting Early Access</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-white">
            Stop Scrolling.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-accent-hot animate-text-gradient bg-[length:200%_auto] pb-2">
              Start Living.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed font-light px-4 md:px-0">
            The antidote to ordinary. We use AI to turn vague feelings into vivid experiences, then handle the execution so you just show up.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-night-950 font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300 overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Try the AI Demo
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-200 via-white to-brand-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              Read the Vision
            </button>
          </div>
        </div>

        {/* Right Content - 3D Floating Cards (Desktop) */}
        <div className="flex-1 relative h-[500px] w-full perspective-1000 hidden md:flex items-center justify-center">
          <div className="relative w-72 h-96 preserve-3d animate-float">
            {/* Card 3 (Back) */}
            <div className="absolute inset-0 rounded-3xl bg-night-800 border border-white/10 p-6 shadow-2xl transform translate-x-8 translate-y-8 -rotate-12 opacity-60">
               <div className="h-32 rounded-xl bg-slate-800/50 mb-4"></div>
               <div className="h-4 w-3/4 bg-slate-700/50 rounded mb-2"></div>
               <div className="h-4 w-1/2 bg-slate-700/50 rounded"></div>
            </div>
            {/* Card 2 (Middle) */}
            <div className="absolute inset-0 rounded-3xl bg-night-800 border border-white/10 p-6 shadow-2xl transform translate-x-4 translate-y-4 -rotate-6 opacity-80">
               <div className="h-32 rounded-xl bg-indigo-900/30 mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
               </div>
               <div className="h-4 w-3/4 bg-indigo-900/50 rounded mb-2"></div>
               <div className="h-4 w-1/2 bg-indigo-900/50 rounded"></div>
            </div>
            {/* Card 1 (Front) */}
            <div className="absolute inset-0 rounded-3xl glass-panel-strong p-6 shadow-[0_20px_50px_-12px_rgba(249,115,22,0.25)] transform hover:scale-105 transition-transform duration-300 border-t border-white/20">
               <div className="h-40 rounded-xl bg-gradient-to-br from-brand-500 to-accent-hot mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-xs font-bold text-white">
                    Suggested for you
                  </div>
               </div>
               <div className="space-y-3">
                 <h3 className="text-2xl font-display font-bold text-white">Neon Jazz Night</h3>
                 <div className="flex gap-2">
                   <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-brand-200">Live Music</span>
                   <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-brand-200">Intimate</span>
                 </div>
                 <p className="text-sm text-slate-300">Hidden basement bar. Password required.</p>
               </div>
            </div>
            {/* Floating Status */}
            <div className="absolute -right-12 top-12 p-4 rounded-2xl glass-panel border-l-4 border-brand-500 animate-float animation-delay-2000">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">ZingMe Status</div>
                  <div className="text-sm font-bold text-white">Booked</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Only Visual */}
        <div className="md:hidden w-full max-w-sm mx-auto mt-8 perspective-1000 h-64 relative">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-accent-DEFAULT/20 blur-3xl rounded-full"></div>
           <div className="relative w-full h-full glass-panel-strong rounded-2xl p-5 border border-white/10 animate-float shadow-xl flex flex-col">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-400"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] text-slate-400 font-mono">AI_CURATION_ACTIVE</div>
              </div>
              <div className="flex-1 bg-night-900/50 rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center text-center">
                 <div className="text-2xl mb-2">✨</div>
                 <div className="text-lg font-bold text-white mb-1">Hidden Jazz Club</div>
                 <div className="text-xs text-slate-400">Matched to: "Chill, Rainy, Intimate"</div>
              </div>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-500 w-2/3 animate-pulse"></div>
              </div>
           </div>
        </div>

      </div>
      
      {/* Infinite Marquee */}
      <div className="w-full bg-night-900/50 border-y border-white/5 py-3 md:py-4 overflow-hidden backdrop-blur-sm mt-12 md:mt-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...vibes, ...vibes, ...vibes].map((vibe, i) => (
            <span key={i} className="text-sm md:text-lg font-display font-medium text-slate-500 mx-4 md:mx-8 flex items-center gap-3 md:gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50"></span>
              {vibe}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};