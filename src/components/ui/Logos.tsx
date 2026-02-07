import React from "react";

/**
 * LOGO STRATEGY: Institutional minimalism.
 * We use high-precision typography and clean marks to represent global authority partners.
 */
export const CredibilityLogos = () => {
    return (
        <div className="flex flex-wrap items-center gap-x-12 gap-y-10 opacity-30 grayscale hover:opacity-50 transition-all duration-1000 cursor-default">
            {/* NVIDIA */}
            <div className="flex items-center">
                <span className="text-sm font-black tracking-[-0.05em] font-sans">NVIDIA</span>
            </div>

            {/* ROLLS ROYCE */}
            <div className="flex items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] border-y border-brand-obsidian/20 py-0.5 px-2">ROLLS-ROYCE</span>
            </div>

            {/* GE HEALTHCARE */}
            <div className="flex items-center">
                <span className="text-xs font-light tracking-[0.15em] uppercase">GE Healthcare</span>
            </div>

            {/* L&T TECHNOLOGY SERVICES */}
            <div className="flex items-center">
                <span className="text-xs font-black italic tracking-tighter">L&T TECHNOLOGY</span>
            </div>

            {/* SCHLUMBERGER */}
            <div className="flex items-center">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Schlumberger</span>
            </div>

            {/* GOOGLE CLOUD */}
            <div className="flex items-center gap-2">
                <span className="w-1 h-5 bg-brand-indigo/60"></span>
                <span className="text-sm font-medium tracking-tight font-sans">Google Cloud</span>
            </div>

            {/* ORACLE */}
            <div className="flex items-center">
                <span className="text-xs font-bold tracking-[0.1em] uppercase">Oracle AI</span>
            </div>
        </div>
    );
};
