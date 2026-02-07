"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, FileCheck, ShieldCheck, Globe } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations/Motion";

const highlights = [
    {
        label: "Research Publications",
        count: "30+",
        desc: "Authored specialized research in Computer Vision, GenAI, and ML architectures, published in high-impact international venues.",
        icon: <BookOpen className="w-4 h-4" />
    },
    {
        label: "Journal Indexed",
        count: "17+",
        desc: "SCI / Scopus indexed contributions (Elsevier, Springer, IEEE, Oxford) ensuring the highest peer-reviewed standard.",
        icon: <FileCheck className="w-4 h-4" />
    },
    {
        label: "Intellectual Property",
        count: "04",
        desc: "Patents (2 granted, 2 published) covering assistive tech, cognitive monitoring, and industrial automation frameworks.",
        icon: <Award className="w-4 h-4" />
    }
];

export const ResearchTrust = () => {
    const scholarUrl = "https://scholar.google.com/citations?user=oSRpBXMAAAAJ&hl=en&oi=ao";

    return (
        <section className="py-32 md:py-48 bg-brand-ivory border-y border-brand-obsidian/[0.03]" id="research">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

                    <div className="lg:col-span-12 mb-16">
                        <FadeIn>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted/70 mb-6 block font-bold">Scientific Repository</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-brand-obsidian leading-[1.05] tracking-tighter max-w-4xl">
                                Advancing the Global <br className="hidden md:block" /> Research Frontier.
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7">
                        <StaggerContainer className="grid grid-cols-1 gap-16">
                            {highlights.map((h, i) => (
                                <FadeIn key={i} className="flex gap-10 group">
                                    <div className="flex-shrink-0 w-20 h-20 bg-white border border-brand-obsidian/5 flex items-center justify-center rounded-sm shadow-sm group-hover:bg-brand-obsidian group-hover:text-brand-ivory transition-all duration-700">
                                        <span className="text-2xl font-serif">{h.count}</span>
                                    </div>
                                    <div className="pt-2">
                                        <div className="flex items-center gap-3 text-brand-indigo mb-4">
                                            {h.icon}
                                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{h.label}</span>
                                        </div>
                                        <p className="text-2xl md:text-3xl text-brand-obsidian/80 font-serif leading-snug mb-4 tracking-tight">{h.desc}</p>
                                        <a
                                            href={scholarUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 cursor-pointer"
                                        >
                                            Explore Citations <Globe className="w-3 h-3" />
                                        </a>
                                    </div>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div className="lg:col-span-5">
                        <FadeIn delay={0.3} className="bg-brand-obsidian p-16 rounded-sm relative overflow-hidden text-brand-ivory shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 blur-[60px] rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-10 block font-bold">Global Recognition</span>
                            <h3 className="text-3xl font-serif mb-12 leading-tight">Peer Validations & Trust.</h3>

                            <div className="space-y-12 relative z-10">
                                <div className="flex flex-col gap-4 group">
                                    <div className="p-3 bg-brand-indigo/20 text-brand-indigo w-fit rounded-full group-hover:bg-brand-indigo group-hover:text-brand-ivory transition-colors">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-2">Excellence in Pedagogy</h4>
                                        <p className="text-xl font-serif group-hover:text-brand-indigo transition-colors">Top 100 International Distinguished Educators</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 group">
                                    <div className="p-3 bg-brand-indigo/20 text-brand-indigo w-fit rounded-full group-hover:bg-brand-indigo group-hover:text-brand-ivory transition-colors">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-40 mb-2">Academic Leadership</h4>
                                        <p className="text-xl font-serif group-hover:text-brand-indigo transition-colors leading-snug">Jyestha Acharya Award – Bharat Education Excellence</p>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-brand-ivory/10">
                                    <p className="text-sm text-brand-ivory/60 italic leading-relaxed font-light">
                                        Senior Reviewer for high-impact international journals and Certified NVIDIA Deep Learning Institute Instructor.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
