"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/animations/Motion";

export const Narrative = () => {
    return (
        <section className="py-32 md:py-56 bg-brand-ivory relative overflow-hidden" id="narrative">
            {/* Background Marker */}
            <div className="absolute top-0 left-[8%] h-full w-px bg-brand-obsidian/[0.03]"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    <div className="lg:col-span-12 mb-24">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-[1px] bg-brand-indigo"></span>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted font-bold font-sans">Strategic Vision</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl lg:text-[6.5vw] font-serif text-brand-obsidian leading-[0.98] max-w-6xl tracking-tighter">
                                An Institutional Bridge <br className="hidden md:block" />
                                between Academic Rigor <br className="hidden md:block" />
                                and Applied Intelligence.
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7">
                        <StaggerContainer delay={0.2} className="space-y-16">
                            <FadeIn>
                                <div className="relative pl-12">
                                    <span className="absolute left-0 top-0 text-7xl font-serif text-brand-indigo/20 leading-none">“</span>
                                    <p className="text-2xl md:text-3xl lg:text-4xl text-brand-obsidian/90 font-serif leading-[1.25] italic tracking-tight">
                                        Dr. Ranjeeth Kumar operates at the decision-making intersection where research excellence meets industrial scale.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="prose prose-2xl font-sans text-brand-obsidian/60 leading-relaxed space-y-12 max-w-none font-light pl-12 border-l border-brand-obsidian/[0.05]">
                                <FadeIn>
                                    <p className="text-xl md:text-2xl">
                                        As the <strong className="font-bold text-brand-obsidian">Dean of Innovation & Entrepreneurship</strong>, Dr. Kumar architectures the transition of academic discoveries into tangible economic and technological assets. With over 15 years of institutional leadership, his focus is on building robust ecosystems that sustain high-impact research.
                                    </p>
                                </FadeIn>

                                <FadeIn>
                                    <p className="text-xl md:text-2xl">
                                        His perspective is uniquely tri-fold: an <strong className="font-bold text-brand-obsidian">Academic Authority</strong> leading computer science research, an <strong className="font-bold text-brand-obsidian">Industry Consultant</strong> for global giants like Rolls-Royce and GE Healthcare, and a <strong className="font-bold text-brand-obsidian">Deep-Tech Founder</strong> deploying real-world machine vision systems.
                                    </p>
                                </FadeIn>
                            </div>
                        </StaggerContainer>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9 sticky top-32">
                        <FadeIn delay={0.4}>
                            <div className="bg-brand-obsidian p-12 text-brand-ivory rounded-sm shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
                                {/* Visual Anchor */}
                                <div className="w-16 h-px bg-brand-indigo/40 mb-12"></div>

                                <h3 className="text-2xl font-serif mb-12 border-b border-brand-ivory/10 pb-6 tracking-tight w-full">Fixed Points of Authority</h3>
                                <ul className="space-y-10 w-full">
                                    {[
                                        { label: "Current Tenure", value: "Dean – Innovation & Entrepreneurship" },
                                        { label: "Global Mentorship", value: "Thesis Supervisor – Golden Gate Univ (USA)" },
                                        { label: "Commercial Core", value: "Co-Founder – Artispec Technologies" },
                                        { label: "Elite Certification", value: "NVIDIA DLI Certified Instructor" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex flex-col gap-3">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/30 font-bold">{item.label}</span>
                                            <span className="text-base font-sans font-medium tracking-tight text-brand-ivory/90 leading-snug">{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
