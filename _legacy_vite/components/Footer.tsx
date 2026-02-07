
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 bg-[#0f172a] text-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8">Let’s Discuss the Next <span className="text-[#C9B59C] italic">Frontier.</span></h2>
            <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
              Available for strategic institutional leadership roles, industrial consultancy, and high-impact research collaborations.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C9B59C] group-hover:border-[#C9B59C] group-hover:text-[#0f172a] transition-all">
                  <span className="text-xs">@</span>
                </div>
                <span className="text-lg font-medium border-b border-transparent group-hover:border-[#C9B59C] transition-all">dr.kumar@artispec.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C9B59C] group-hover:border-[#C9B59C] group-hover:text-[#0f172a] transition-all">
                  <span className="text-xs">LI</span>
                </div>
                <span className="text-lg font-medium border-b border-transparent group-hover:border-[#C9B59C] transition-all">linkedin.com/in/ranjeethkumar</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Institutional HQ</h4>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-[#C9B59C] uppercase tracking-widest font-bold mb-2">Dean's Office</p>
                <p className="text-lg font-serif">Innovation & Entrepreneurship Ecosystem</p>
                <p className="text-slate-400 text-sm mt-1">Leading AICTE Idea Labs & Startup Incubation</p>
              </div>
              <div>
                <p className="text-xs text-[#C9B59C] uppercase tracking-widest font-bold mb-2">Academic Presence</p>
                <p className="text-lg font-serif">Professor of Computer Science</p>
                <p className="text-slate-400 text-sm mt-1">Specializing in AI, Deep Learning, & CV</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">© 2024 Dr. C. Ranjeeth Kumar. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#C9B59C]">Curriculum Vitae</a>
            <a href="#" className="hover:text-[#C9B59C]">Google Scholar</a>
            <a href="#" className="hover:text-[#C9B59C]">ResearchGate</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
