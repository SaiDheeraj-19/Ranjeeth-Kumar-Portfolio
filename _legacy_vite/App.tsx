
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import IndustrialImpact from './components/IndustrialImpact';
import ResearchPatents from './components/ResearchPatents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#0f172a]">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <IndustrialImpact />
        <ResearchPatents />
        
        {/* Leadership & Ecosystem Building */}
        <section className="py-24 px-6 border-t border-[#D9CFC7]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-xs uppercase tracking-[0.4em] text-[#C9B59C] font-bold mb-6">Mentorship</h2>
              <h3 className="text-3xl font-serif font-bold text-[#0f172a] mb-6">Building the Future AI Cohort.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Supervising thesis projects for UpGrad & Golden Gate University (USA), mentoring 50+ 
                national competition winners.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-[#D9CFC7] rounded-xl bg-[#EFE9E3]/50">
                <div className="text-[#C9B59C] text-2xl font-serif font-bold mb-2">50+</div>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">Student Projects</p>
                <p className="text-sm text-slate-600">Mentored multiple teams to victory in national and international AI hackathons.</p>
              </div>
              <div className="p-8 border border-[#D9CFC7] rounded-xl bg-[#EFE9E3]/50">
                <div className="text-[#C9B59C] text-2xl font-serif font-bold mb-2">AICTE</div>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">Idea Lab Leader</p>
                <p className="text-sm text-slate-600">Pioneered the establishment of high-tech innovation ecosystems at institutional scale.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
