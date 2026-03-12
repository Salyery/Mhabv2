import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { HowItWorks } from './components/HowItWorks';
import { Screencast } from './components/Screencast';
import { Roadmap } from './components/Roadmap';
import { Future } from './components/Future';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    document.title = "MediaHUB - там, где медиапланы становятся решениями";
    
    // Add dynamic favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    const svgIcon = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stop-color="#60A5FA"/>
          <stop offset="0.5" stop-color="#A78BFA"/>
          <stop offset="1" stop-color="#EC4899"/>
        </linearGradient>
      </defs>
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#g)" stroke-width="3" stroke-linejoin="round" fill="none"/>
      <circle cx="16" cy="16" r="5" fill="url(#g)"/>
    </svg>`;
    link.href = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      
      {/* Hexagonal grid pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-60">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
              <polygon points="28,0 56,15 56,45 28,60 0,45 0,15" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
              <polygon points="28,60 56,75 56,105 28,120 0,105 0,75" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Subtle glow spots */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-2/3 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <Navigation />
      
      <main className="relative">
        <Hero />
        <Comparison />
        <HowItWorks />
        <Screencast />
        <Roadmap />
        <Future />
        <CTA />
      </main>
      
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}