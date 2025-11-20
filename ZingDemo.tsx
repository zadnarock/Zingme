import React, { useState, useEffect } from 'react';
import { generateExperience } from '../services/geminiService';
import { ExperienceIdea, ViewState } from '../types';

export const ZingDemo: React.FC = () => {
  const [mood, setMood] = useState('');
  const [context, setContext] = useState('');
  const [state, setState] = useState<ViewState>(ViewState.IDLE);
  const [results, setResults] = useState<ExperienceIdea[]>([]);
  const [loadingText, setLoadingText] = useState("Initializing core...");

  useEffect(() => {
    if (state === ViewState.THINKING) {
      const texts = [
        "Scanning city database...",
        "Analyzing emotional context...",
        "Filtering for 'Hidden Gems'...",
        "Synthesizing magic layer...",
        "Finalizing curation..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingText(texts[i % texts.length]);
        i++;
      }, 800);
      return () => clearInterval(interval);
    }
  }, [state]);

  const handleZing = async () => {
    if (!mood) return;
    setState(ViewState.THINKING);
    try {
      const data = await generateExperience(mood, context || "Surprise me");
      setResults(data);
      setState(ViewState.RESULTS);
      // Auto scroll to results on mobile
      setTimeout(() => {
        document.getElementById('results-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (e) {
      console.error(e);
      setState(ViewState.ERROR);
    }
  };

  return (
    <section id="demo" className="py-20 md:py-32 relative bg-night-950 border-y border-white/5 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-DEFAULT to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-xs md:text-sm mb-4 block flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            The Experience Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 text-white">Your AI Creative Director</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg px-2">
            Tell us the feeling. We engineer the moment.<br/>
            <span className="text-slate-600 text-xs md:text-sm mt-2 block font-mono">Powered by Gemini 2.5 Flash</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Interface */}
          <div className="glass-panel-strong rounded-3xl p-1 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-accent-DEFAULT to-brand-500 opacity-50"></div>
            
            <div className="relative bg-night-900/90 rounded-2xl p-5 md:p-10 space-y-6 md:space-y-8">
              
              {/* Input Field */}
              <div>
                <label className="block text-xs font-bold text-brand-300 uppercase tracking-widest mb-3 md:mb-4">Input Vibe Parameters</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    placeholder="e.g., I want to feel like I'm in a Wes Anderson movie..."
                    className="w-full bg-night-950 border border-white/10 rounded-xl px-4 py-4 md:px-6 md:py-6 text-base md:text-xl text-white placeholder-slate-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-display"
                    onKeyDown={(e) => e.key === 'Enter' && handleZing()}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded-lg border border-white/5 text-xs text-slate-500 hidden md:block font-mono">
                    RETURN ↵
                  </div>
                </div>
              </div>

              {/* Suggestion Chips - Horizontal Scroll on Mobile */}
              <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {[
                  { m: "Spontaneous & Energetic", c: "With close friends" },
                  { m: "Deep conversations", c: "Date night" },
                  { m: "Solo recharge", c: "Nature focus" }
                ].map((s, i) => (
                  <button 
                    key={i}
                    onClick={() => { setMood(s.m); setContext(s.c); }}
                    className="whitespace-nowrap text-xs font-medium bg-night-800 hover:bg-brand-900/30 border border-white/10 text-slate-400 hover:text-brand-300 px-4 py-2.5 rounded-full transition-all hover:border-brand-500/50 flex items-center gap-2 active:bg-white/5 flex-shrink-0"
                  >
                    <span>+</span> {s.m}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex flex-col md:flex-row gap-6 pt-6 border-t border-white/5 items-end">
                <div className="flex-1 w-full">
                   <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Select Context</label>
                   <div className="grid grid-cols-2 md:flex gap-2">
                     {['Small Group', 'Big Party', 'Solo', 'Couple'].map((opt) => (
                       <button
                          key={opt}
                          onClick={() => setContext(opt)}
                          className={`flex-1 py-3 px-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide transition-all border ${
                            context === opt 
                            ? 'bg-white text-night-950 border-white shadow-lg' 
                            : 'bg-transparent border-white/10 text-slate-500 hover:border-white/30 hover:text-slate-300'
                          }`}
                       >
                         {opt}
                       </button>
                     ))}
                   </div>
                </div>
                
                <button 
                  onClick={handleZing}
                  disabled={!mood || state === ViewState.THINKING}
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 min-w-[180px] text-sm md:text-base active:scale-95"
                >
                  {state === ViewState.THINKING ? (
                    <span className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-100"></div>
                       <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
                    </span>
                  ) : "Generate Plan"}
                </button>
              </div>
            </div>
          </div>

          {/* Thinking State - Terminal Style */}
          {state === ViewState.THINKING && (
             <div className="mt-8 md:mt-12 font-mono text-xs md:text-sm text-brand-400 bg-night-900/50 p-4 md:p-6 rounded-xl border border-brand-500/20 max-w-md mx-auto">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
               </div>
               <div className="space-y-1 overflow-hidden">
                 <p className="opacity-50">$ init_zing_engine --v2.5</p>
                 <p className="opacity-75 truncate">$ processing_mood: "{mood}"</p>
                 <p className="text-white animate-pulse"> > {loadingText}</p>
               </div>
             </div>
          )}

          {/* Results Grid - Holographic Cards */}
          {state === ViewState.RESULTS && (
            <div id="results-grid" className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
              {results.map((idea, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-night-800/40 border border-white/10 p-1 rounded-2xl hover:bg-night-800/80 transition-all duration-500 active:scale-[0.98] cursor-pointer h-full"
                  style={{ animation: `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${idx * 0.1}s`, opacity: 0 }}
                >
                  {/* Glowing Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-hot opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                  
                  <div className="bg-night-900/90 rounded-xl p-5 md:p-6 h-full flex flex-col relative overflow-hidden">
                    {/* Holographic Sheen */}
                    <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none transform rotate-45"></div>

                    <div className="flex justify-between items-start mb-4">
                       <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold font-display text-white border border-white/10">
                         {idx + 1}
                       </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-3 leading-tight group-hover:text-brand-200 transition-colors">{idea.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{idea.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {idea.vibe.split(',').map((v, i) => (
                          <span key={i} className="text-[10px] text-slate-300 bg-white/5 border border-white/5 px-2 py-1 rounded uppercase tracking-wider">{v.trim()}</span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10">
                         <div className="flex items-start gap-3">
                            <div className="mt-0.5 text-accent-hot">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                            <div>
                              <span className="text-[10px] font-bold text-accent-hot block mb-0.5 uppercase tracking-wide">Magic Twist</span>
                              <p className="text-xs text-indigo-100 italic">"{idea.twist}"</p>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};