"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

/**
 * EXECUTIVE MOTION CONSTANTS
 * Defining the signature rhythm of the platform.
 */
export const EASING = [0.16, 1, 0.3, 1]; // High-end hardware acceleration curve
export const STAGGER_DEFAULT = 0.08;
export const DURATION_DEFAULT = 0.8;

interface AnimationProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    amount?: "some" | "all";
}

/**
 * TextReveal
 * Refined staggered character or word reveal for headings.
 * Simulates a high-end printing or screen-draw effect.
 */
export const TextReveal = ({ children, delay = 0, className = "" }: AnimationProps) => {
    const words = typeof children === "string" ? children.split(" ") : [];

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

/**
 * FadeIn
 * Subtle upward drift with opacity. The "Executive Standard".
 */
export const FadeIn = ({ children, delay = 0, className = "" }: AnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
                duration: DURATION_DEFAULT,
                delay,
                ease: EASING,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/**
 * StaggerContainer
 * Utility for animating children in sequence.
 */
export const StaggerContainer = ({ children, delay = 0, className = "" }: AnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: STAGGER_DEFAULT,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};
