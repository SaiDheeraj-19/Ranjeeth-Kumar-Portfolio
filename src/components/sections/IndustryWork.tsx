"use client";

import { motion } from "framer-motion";
import { Factory, Cpu, Database, Network } from "lucide-react";
import { FadeIn, StaggerContainer, EASING } from "@/components/animations/Motion";

const cases = [
    {
        title: "Aerospace Visual Inspection",
        partner: "Rolls-Royce / HAL Joint Venture",
        impact: "Autonomous high-precision detection of defects in aerospace turbine components using deep learning.",
        icon: <Factory className="w-5 h-5" />,
        metrics: ["Industry-Ready AI", "Aerospace Standard"]
    },
    {
        title: "Digital Twin Synthesis",
        partner: "GE Healthcare",
        impact: "AI-driven simulation and diagnostic models for healthcare infrastructure and medical imaging devices.",
        icon: <Cpu className="w-5 h-5" />,
        metrics: ["Medical AI", "Digital Twins"]
    },
    {
        title: "Document Cognitive Intelligence",
        partner: "L&T Technology Services",
        impact: "Architecting Generative AI and NLP workflows to automate large-scale industrial document intelligence.",
        icon: <Database className="w-5 h-5" />,
        metrics: ["GenAI", "Scalable NLP"]
    },
    {
        title: "Deep Drilling Automation",
        partner: "Schlumberger (Cameron)",
        impact: "Deployment of real-time computer vision systems for automated monitoring and predictive safety in drilling rigs.",
        icon: <Network className="w-5 h-5" />,
        metrics: ["Real-time Vision", "Industrial Safety"]
    }
];

export const IndustryWork = () => {
    return (
        <section className="py-32 md:py-48 bg-white" id="industry">
            <div className="container-custom">
                <div className="flex flex-col space-y-12 mb-32">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted/70 mb-6 block font-bold">Industrial Impact</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-obsidian leading-[1.05] tracking-tighter max-w-5xl">
                            Knowledge Applied <br className="hidden md:block" /> at Global Scale.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} className="max-w-2xl">
                        <p className="text-xl md:text-2xl text-brand-muted font-serif font-light leading-relaxed">
                            Leading <strong className="font-semibold text-brand-obsidian">₹35+ Lakhs</strong> in funded consultancy, bridging the gap between PhD-level research and zero-failure industrial environments with world-class partners.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4, ease: EASING }}
                            className="group p-12 lg:p-16 border border-brand-obsidian/[0.05] hover:border-brand-obsidian transition-colors duration-700 rounded-sm bg-brand-ivory/[0.2] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm group-hover:bg-brand-obsidian group-hover:text-brand-ivory transition-all duration-500 border border-brand-obsidian/[0.03]">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-obsidian/[0.03] rounded-full">
                                        <div className="w-1.5 h-1.5 bg-brand-indigo rounded-full animate-pulse"></div>
                                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Strategic Deployment</span>
                                    </div>
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-serif mb-4 tracking-tight group-hover:text-brand-indigo transition-colors duration-500">{item.title}</h3>
                                <p className="text-[11px] uppercase tracking-widest text-brand-muted font-bold mb-8">Executive Partner: {item.partner}</p>
                                <p className="text-brand-obsidian/70 font-sans leading-relaxed text-lg mb-10 font-light">
                                    {item.impact}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    {item.metrics.map((m, i) => (
                                        <span key={i} className="px-3 py-1 bg-brand-obsidian/[0.04] text-[10px] uppercase font-bold tracking-tighter rounded-sm">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                                <div className="h-[1px] w-full bg-brand-obsidian/[0.05] group-hover:bg-brand-obsidian transition-colors duration-700"></div>
                                <a
                                    href="#contact"
                                    className="text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-6 group/btn cursor-pointer"
                                >
                                    Technical Impact Summary
                                    <span className="w-0 group-hover:w-12 h-[1px] bg-brand-obsidian transition-all duration-700"></span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
