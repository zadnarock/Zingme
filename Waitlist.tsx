import React, { useState } from 'react';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden bg-night-950">
      {/* Meteor Shower Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent to-brand-400 animate-meteor opacity-0"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            ></div>
         ))}
      </div>

      {/* Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-brand-900/20 to-transparent opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 animate-float">
           <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-brand-500 to-accent-DEFAULT rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-500/30">
             <span className="font-display font-bold text-white text-3xl">Z</span>
           </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-white">
          Don't Search.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-white to-brand-400 animate-shimmer bg-[length:200%_auto]">Just Zing it.</span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          The search bar is dead. The future is curated. <br/>
          Join the waitlist to unlock the Experience Engine and our Beta Micro-Rest tools.
        </p>

        <div className="max-w-md mx-auto relative">
          {status === 'success' ? (
            <div className="bg-brand-500/10 border border-brand-500/20 rounded-2xl p-8 animate-fade-in-up backdrop-blur-md">
              <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-400 border border-brand-500/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-slate-400">Keep an eye on your inbox. Magic is coming.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-slate-500 hover:text-white underline decoration-slate-700 underline-offset-4">Add another email</button>
            </div>
          ) : (
            <form className="space-y-4 relative group" onSubmit={handleSubmit}>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-DEFAULT rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="w-full bg-night-900 border border-white/10 rounded-2xl py-5 px-6 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-lg shadow-xl"
                  disabled={status === 'loading'}
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-night-950 font-bold rounded-2xl py-5 hover:bg-brand-50 transition-all shadow-lg shadow-white/5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait relative overflow-hidden"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Securing your spot...
                  </span>
                ) : "Get Early Access"}
              </button>
              
              <p className="text-xs text-slate-600 mt-4 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                Limited spots for Bengaluru launch
              </p>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-semibold text-slate-400">ZingMe.ai &copy; 2024</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-400 transition-colors">Pitch Deck</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-400 transition-colors">LinkedIn</a>
            <a href="mailto:founders@zingme.ai" className="hover:text-brand-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};