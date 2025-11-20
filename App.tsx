import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ZingDemo } from './components/ZingDemo';
import { Features } from './components/Features';
import { Waitlist } from './components/Waitlist';

function App() {
  return (
    <div className="min-h-screen bg-night-900 text-white selection:bg-zing-500 selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <ZingDemo />
        <Features />
        <Waitlist />
      </main>
    </div>
  );
}

export default App;