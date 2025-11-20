import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-night-950 relative overflow-hidden">
      {/* Process / How it Works */}
      <div id="process" className="container mx-auto px-6 mb-20 md:mb-32">
        <div className="text-center mb-16 md:mb-20">
           <span className="text-accent-glow text-xs md:text-sm font-bold uppercase tracking-widest mb-2 block">The ZingMe Flow</span>
           <h2 className="text-3xl md:text-5xl font-display font-bold">From Vague to Vivid</h2>
        </div>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Connecting Line - Desktop (Centered) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent hidden md:block"></div>
          
          {/* Connecting Line - Mobile (Left Aligned) */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent md:hidden"></div>
          
          {[
            {
              step: "01",
              title: "The Spark",
              desc: "You feel bored, stressed, or curious. You don't want to search.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path><path d="M9 21h6"></path></svg>
              ),
              align: "left"
            },
            {
              step: "02",
              title: "The Curation",
              desc: "Our AI considers your mood, context, and past loves to generate 3 perfect options.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              ),
              align: "right"
            },
            {
              step: "03",
              title: "The Execution",
              desc: "One tap. We book the table, buy the tickets, and send you the calendar invite.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ),
              align: "left"
            }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-12 md:mb-0 relative ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Mobile Node Positioner - moves node to left on mobile */}
              <div className="absolute left-0 top-0 md:hidden z-20">
                <div className="relative w-14 h-14 rounded-full bg-night-900 border-4 border-night-950 ring-2 ring-brand-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  <div className="text-brand-200 scale-75">{item.icon}</div>
                </div>
              </div>

              {/* Desktop Node Spacer - Invisible on mobile */}
              <div className="hidden md:flex flex-1 justify-end order-2 md:order-none"></div>

              {/* Desktop Node - Centered */}
              <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-night-900 border-4 border-night-950 ring-2 ring-brand-500/50 items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] flex-shrink-0">
                <div className="text-brand-200">{item.icon}</div>
                <div className="absolute -top-10 text-4xl font-display font-bold text-white/5">{item.step}</div>
              </div>

              {/* Content */}
              <div className={`flex-1 pl-20 md:pl-0 text-left md:text-${item.align === 'left' ? 'right' : 'left'} md:p-6 w-full`}>
                <span className="md:hidden text-sm font-bold text-brand-500 mb-1 block">Step {item.step}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Platform Layer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* Discovery Card */}
          <div className="md:col-span-2 bg-night-900 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-brand-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
               <div className="w-12 h-12 bg-night-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-brand-400 shadow-lg shadow-brand-500/10">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
               </div>
               <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Context-Aware Discovery</h3>
               <p className="text-slate-400 leading-relaxed max-w-md text-sm md:text-base">
                 No more 30-minute scroll spirals. Our AI builds an "Idea Palette" tailored to your exact mood, the weather outside, and who you're with. It's curation, not search.
               </p>
            </div>
          </div>

          {/* Execution Card */}
          <div className="md:row-span-2 bg-gradient-to-b from-night-900 to-night-950 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-accent-DEFAULT/30 transition-colors">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-DEFAULT/10 to-transparent"></div>
             <div className="relative z-10">
                <div className="w-12 h-12 bg-night-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-accent-400 shadow-lg shadow-accent-DEFAULT/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Total Execution</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                  One tap on "Make it happen" and we handle bookings, tickets, and logistics.
                </p>
                <div className="bg-night-800 rounded-xl p-4 border border-white/5 transform group-hover:translate-y-1 transition-transform duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Reservation</span>
                    <span className="text-xs text-brand-400 font-mono border border-brand-500/20 px-1.5 py-0.5 rounded bg-brand-500/10">CONFIRMED</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">Toit Brewpub</div>
                  <div className="text-xs text-slate-500">Friday, 8:00 PM • 4 Guests</div>
                </div>
             </div>
          </div>

          {/* AmazeMe Card */}
          <div id="amazeme" className="bg-night-900 border border-white/5 rounded-3xl p-8 relative group hover:border-brand-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 bg-night-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-brand-400 shadow-lg shadow-brand-500/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">The Magic Layer</h3>
            <p className="text-slate-400 text-sm md:text-base">
              We infuse magic into plans. A picnic isn't just a picnic; it's jasmine iced tea because we know that smell reminds your friend of home.
            </p>
          </div>

          {/* Wedge Card */}
          <div className="bg-gradient-to-br from-brand-900/20 to-night-900 border border-white/5 rounded-3xl p-8 group hover:scale-[1.02] transition-transform">
            <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 bg-night-800 border border-white/10 rounded-xl flex items-center justify-center text-brand-300">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               </div>
               <span className="bg-brand-500/20 text-brand-300 text-[10px] font-bold px-2 py-1 rounded uppercase animate-pulse-slow">Live Beta</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Micro-Rest</h3>
            <p className="text-slate-400 text-sm mb-4">10-min AI resets to boost focus and energy instantly.</p>
            <div className="flex -space-x-2 overflow-hidden">
               <div className="inline-block h-6 w-6 rounded-full ring-2 ring-night-900 bg-slate-600"></div>
               <div className="inline-block h-6 w-6 rounded-full ring-2 ring-night-900 bg-slate-500"></div>
               <div className="inline-block h-6 w-6 rounded-full ring-2 ring-night-900 bg-slate-400 text-[8px] flex items-center justify-center font-bold text-night-900">+4k</div>
            </div>
          </div>

        </div>

        {/* Team Section */}
        <div id="team" className="border-t border-white/5 pt-16 md:pt-20">
          <div className="text-center mb-12 md:mb-16">
             <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Built by Believers</h3>
             <p className="text-slate-400 text-sm md:text-base">Engineered by 3 IIT founders obsessed with solving the "Ordinary".</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             {[
               { role: "Product & Vision", desc: "Ex-Consumer Tech. Obsessed with user psychology." },
               { role: "AI & Engineering", desc: "Building the prediction engine behind the magic." },
               { role: "Design & Brand", desc: "Crafting the interface between human and experience." }
             ].map((member, i) => (
               <div key={i} className="text-center group relative p-6 rounded-2xl hover:bg-white/5 transition-colors bg-night-900/30 border border-white/5 md:bg-transparent md:border-none">
                 <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-night-800 rounded-full border-2 border-white/10 mb-6 flex items-center justify-center group-hover:border-brand-500 transition-colors relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="font-display font-bold text-xl md:text-2xl text-slate-600 group-hover:text-brand-400 transition-colors">0{i+1}</span>
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2">IIT Founder</h4>
                 <div className="text-xs font-bold text-brand-500 uppercase tracking-widest mb-3">{member.role}</div>
                 <p className="text-slate-500 text-sm px-4">{member.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};