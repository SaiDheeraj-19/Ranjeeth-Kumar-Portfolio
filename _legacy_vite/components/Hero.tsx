
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="profile" className="relative pt-48 pb-20 px-8 bg-[#F9F8F6] overflow-hidden">
      {/* Editorial Decorative Element */}
      <div className="absolute top-0 right-0 w-[45vw] h-[100vh] bg-[#EFE9E3] -translate-y-1/4 translate-x-1/4 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(3.5rem,8vw,8.5rem)] font-serif font-bold leading-[0.9] mb-12 tracking-[-0.03em] text-[#0f172a]">
              Bridging Rigor <br /> 
              & <span className="text-[#D9CFC7] italic font-medium">Scale.</span>
            </h1>
            
            <p className="text-xl lg:text-[24px] text-slate-600/90 max-w-2xl leading-[1.6] mb-20 font-light tracking-tight">
              A PhD-led approach to artificial intelligence that prioritizes 
              <span className="text-[#0f172a] font-medium"> institutional innovation</span> and 
              <span className="text-[#0f172a] font-medium"> industrial-grade deployment</span> for Tier-1 global organizations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-[#D9CFC7]">
              {[
                { label: 'Current Role', value: 'Dean of Innovation' },
                { label: 'Foundation', value: 'Artispec Tech' },
                { label: 'Expertise', value: 'Applied AI & CV' },
                { label: 'Pedigree', value: 'Ph.D. CS & Eng.' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <p className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-3 group-hover:text-[#C9B59C] transition-colors">{item.label}</p>
                  <p className="text-[14px] font-bold text-[#0f172a] tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="relative group">
              <div className="aspect-[1/1] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-white/40 bg-white">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGfn7GJ4ptIKg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719030429855?e=1772064000&v=beta&t=SLVQf_tQ9iY1sWRgXxJnze192dovL2UoJSIDbHXjk_Q" 
                  alt="Dr. C. Ranjeeth Kumar"
                  className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out scale-105 group-hover:scale-100"
                />
              </div>
              {/* Floating Caption */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-[#D9CFC7]/30 max-w-[220px]">
                <div className="text-[#C9B59C] font-serif text-4xl font-bold mb-1 leading-none">15Y+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold leading-relaxed">
                  Elite Academic & Industry Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
