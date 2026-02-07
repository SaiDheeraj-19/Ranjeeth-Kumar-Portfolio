"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/animations/Motion";
import { CredibilityLogos } from "@/components/ui/Logos";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-brand-ivory">
            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end h-full">
                {/* Main Content Column */}
                <div className="lg:col-span-8 lg:pr-20">
                    <StaggerContainer delay={0.1} className="flex flex-col">
                        <FadeIn delay={0.3}>
                            <h1 className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-serif text-brand-obsidian leading-[0.88] tracking-tighter">
                                Dr. C. Ranjeeth <br /> Kumar
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.35}>
                            <div className="flex items-center gap-4 mt-6 mb-14">
                                <span className="w-12 h-[1px] bg-brand-indigo/40"></span>
                                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-brand-muted font-bold font-sans">
                                    Dean • Professor • Applied AI Leader
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="max-w-2xl">
                                    <h2 className="text-2xl md:text-3xl text-brand-obsidian/80 font-serif leading-tight text-balance mb-8">
                                        Building Industry-Ready AI,
                                        Innovation Ecosystems,
                                        and Future-Focused Institutions.
                                    </h2>
                                    <p className="text-xl text-brand-muted leading-relaxed font-sans font-light">
                                        Over 15 years of academic leadership and applied AI research, bridging universities and industry through real-world systems, industrial vision, and global recognition across Chennai and international academic networks.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </StaggerContainer>
                </div>

                {/* Right Column: Trust Signals */}
                <div className="lg:col-span-4 self-stretch flex flex-col justify-end">
                    <FadeIn delay={0.8} className="lg:mb-0 mb-12">
                        <div className="bg-brand-obsidian/[0.02] p-10 border-l border-brand-obsidian/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-brand-obsidian/10 group-hover:scale-110 transition-transform duration-1000"></div>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-brand-muted/60 mb-8 font-bold">Trusted Peer Selection</p>
                            <div className="scale-90 origin-left">
                                <CredibilityLogos />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* 
          EDITORIAL WATERMARK: 
          ONLY "RK" as requested.
      */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none select-none z-0">
                <span className="text-[50vw] font-serif leading-none italic select-none">
                    RK
                </span>
            </div>

            {/* SCROLL PROMPT */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-[8%] flex items-center gap-6"
            >
                <div className="w-[1px] h-12 bg-brand-obsidian/10 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-brand-obsidian/40"
                    />
                </div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-muted/40 font-bold">Initiate Navigation</span>
            </motion.div>
        </section>
    );
};
