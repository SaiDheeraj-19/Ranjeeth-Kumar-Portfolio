"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const navLinks = [
        { name: "STRATEGIC PROFILE", href: "#narrative" },
        { name: "ECOSYSTEMS", href: "#ecosystems" },
        { name: "GLOBAL IMPACT", href: "#industry" },
        { name: "RESEARCH", href: "#research" },
        { name: "INQUIRY", href: "#contact" },
    ];

    return (
        <>
            <nav
                className="absolute top-0 left-0 right-0 z-[100] py-12 bg-transparent"
            >
                <div className="container-custom flex justify-between items-center">
                    {/* Strong Executive Monogram */}
                    <a href="#" className="group">
                        <div className="font-serif text-5xl font-black text-brand-obsidian transition-all duration-700 group-hover:text-brand-indigo tracking-tighter leading-none">
                            RK
                        </div>
                    </a>

                    {/* Nav Links - Senior Polish */}
                    <div className="hidden lg:flex gap-14 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted hover:text-brand-obsidian transition-all duration-500 relative py-1 group font-sans"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-indigo group-hover:w-full transition-all duration-700 ease-out"></span>
                            </a>
                        ))}
                    </div>

                    {/* Industrial Menu Trigger */}
                    <button className="lg:hidden flex flex-col gap-1.5 items-end group">
                        <span className="w-6 h-[2px] bg-brand-obsidian transform transition-transform group-hover:translate-x-1"></span>
                        <span className="w-4 h-[2px] bg-brand-obsidian"></span>
                    </button>
                </div>
            </nav>
        </>
    );
};
