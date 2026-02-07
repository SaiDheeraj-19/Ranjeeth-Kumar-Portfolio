"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, GraduationCap, ChevronRight, MapPin } from "lucide-react";
import { FadeIn, EASING } from "@/components/animations/Motion";

export const Contact = () => {
    const email = "ranjithkumar.c@gmail.com";
    const linkedIn = "https://www.linkedin.com/in/dr-c-ranjeeth-kumar-25636484/";
    const scholar = "https://scholar.google.com/citations?user=oSRpBXMAAAAJ&hl=en&oi=ao";

    return (
        <footer className="bg-brand-obsidian text-brand-ivory pt-32 pb-16 overflow-hidden relative" id="contact">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    <div className="lg:col-span-8">
                        <FadeIn>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-ivory/40 mb-8 block font-bold">Colloquium & Inquiry</span>
                            <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.95] tracking-tighter mb-16 text-balance">
                                The Future of AI is Built on <br className="hidden md:block" /> Structural Partnership.
                            </h2>
                        </FadeIn>

                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <FadeIn delay={0.2} className="group cursor-pointer">
                                <a href={`mailto:${email}`} className="flex flex-col gap-6">
                                    <div className="w-16 h-16 bg-brand-ivory/5 rounded-full flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-brand-ivory transition-all duration-700">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-1 block">Inquiry Protocol</span>
                                        <span className="text-xl font-serif">{email}</span>
                                    </div>
                                </a>
                            </FadeIn>

                            <FadeIn delay={0.3} className="group cursor-pointer">
                                <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6">
                                    <div className="w-16 h-16 bg-brand-ivory/5 rounded-full flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-brand-ivory transition-all duration-700">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-1 block">Executive Node</span>
                                        <span className="text-xl font-serif">LinkedIn Leadership Profile</span>
                                    </div>
                                </a>
                            </FadeIn>

                            <FadeIn delay={0.4} className="group cursor-pointer">
                                <a href={scholar} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6">
                                    <div className="w-16 h-16 bg-brand-ivory/5 rounded-full flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-brand-ivory transition-all duration-700">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-1 block">Scholarly Index</span>
                                        <span className="text-xl font-serif">Google Scholar Profile</span>
                                    </div>
                                </a>
                            </FadeIn>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
                        <FadeIn delay={0.5} className="bg-brand-ivory/5 p-10 rounded-sm border border-brand-ivory/10 hover:border-brand-indigo/30 transition-colors duration-700 group">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-8">Base of Operations</p>
                            <div className="flex items-start gap-4 mb-10">
                                <MapPin className="w-5 h-5 text-brand-indigo mt-1" />
                                <p className="text-2xl font-serif leading-snug">Chennai, Tamil Nadu, <br /> India — Operating Globally.</p>
                            </div>
                            <a
                                href={`mailto:${email}?subject=Strategic Inquiry - Dr. Ranjeeth Kumar`}
                                className="w-full py-4 bg-brand-ivory text-brand-obsidian text-[11px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 hover:bg-brand-indigo hover:text-brand-ivory transition-all duration-700 cursor-pointer"
                            >
                                Initiate Strategic Inquiry <ChevronRight className="w-4 h-4" />
                            </a>
                        </FadeIn>

                        <div className="mt-20 lg:mt-0 flex flex-col gap-4">
                            <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold tracking-widest leading-loose">
                                &copy; {new Date().getFullYear()} PROF. DR. C. RANJEETH KUMAR. <br />
                                INSTITUTIONAL DIGITAL ASSET. ALL IMPACT RECORDED.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-brand-ivory/10"></div>
            <div className="absolute top-0 left-0 w-[1px] h-full bg-brand-ivory/5"></div>
        </footer>
    );
};
