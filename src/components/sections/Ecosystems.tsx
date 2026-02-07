"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, EASING } from "@/components/animations/Motion";

const assets = [
    {
        title: "AICTE Idea Lab",
        description: "Spearheaded the design and scaling of national-level innovation infrastructure, mentoring 50+ high-impact student projects to global recognition.",
        stat: "50+ Projects Mentored",
        tag: "Institutional Scale"
    },
    {
        title: "Artispec Technologies",
        description: "Co-founded a deep-tech startup specializing in AI Machine Vision, bridging the gap between theoretical computer vision and industrial shop-floor inspection.",
        stat: "Startup Co-Founder",
        tag: "Entrepreneurship"
    },
    {
        title: "Global AI Training",
        description: "Lead instructor for specialized AI/ML skill development programs, leveraging certifications from NVIDIA, Google, and Oracle for industry workforce transformation.",
        stat: "NVIDIA Certified",
        tag: "Intellectual Capital"
    }
];

export const Ecosystems = () => {
    return (
        <section className="py-32 md:py-48 bg-brand-obsidian text-brand-ivory relative overflow-hidden" id="ecosystems">
            {/* Structural Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-indigo/[0.02] -skew-x-12 translate-x-1/4"></div>

            <div className="container-custom relative z-10">
                <FadeIn className="max-w-4xl mb-32">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-ivory/40 mb-6 block font-bold">Innovation Architecture</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
                        Scaling AI Capability <br className="hidden md:block" /> and Regional Ecosystems.
                    </h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {assets.map((asset, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: EASING }}
                        >
                            <div className="h-[2px] w-full bg-brand-ivory/10 mb-10 overflow-hidden relative">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: EASING }}
                                    className="absolute inset-0 bg-brand-indigo"
                                />
                            </div>

                            <div className="mb-10">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-indigo mb-4 block">{asset.tag}</span>
                                <p className="text-3xl lg:text-4xl font-serif mb-6 group-hover:text-brand-indigo transition-colors duration-500">{asset.stat}</p>
                                <h3 className="text-xl font-bold font-sans mb-4 tracking-tight leading-snug">{asset.title}</h3>
                                <p className="text-brand-ivory/50 font-sans font-light leading-relaxed text-base">
                                    {asset.description}
                                </p>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <a href="#contact" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group/btn cursor-pointer">
                                    Inquire for Collaboration
                                    <span className="w-10 h-px bg-brand-ivory/20 group-hover/btn:bg-brand-indigo transition-all group-hover/btn:w-16"></span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
