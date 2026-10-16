"use client";

import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const RADIUS = 120; // cursor influence radius, px
const STRENGTH = 45; // max displacement, px
const SPRING = { stiffness: 180, damping: 14, mass: 0.4 };

function RepelLetter({
    letter,
    mouseX,
    mouseY,
}: {
    letter: string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const originX = useRef(0);
    const originY = useRef(0);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, SPRING);
    const springY = useSpring(y, SPRING);

    // Subtle tilt proportional to horizontal displacement
    const rotate = useTransform(springX, (v) => v * 0.3);

    // Capture original position relative to the container
    useEffect(() => {
        const capture = () => {
            if (!ref.current) return;
            const container = ref.current.closest("[data-text-repel]");
            if (!container) return;
            const cr = container.getBoundingClientRect();
            const lr = ref.current.getBoundingClientRect();
            originX.current = lr.left - cr.left + lr.width / 2;
            originY.current = lr.top - cr.top + lr.height / 2;
        };

        const raf = requestAnimationFrame(capture);
        window.addEventListener("resize", capture);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", capture);
        };
    }, []);

    // React to cursor position changes via motion value subscriptions
    useEffect(() => {
        const update = () => {
            const dx = originX.current - mouseX.get();
            const dy = originY.current - mouseY.get();
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < RADIUS && distance > 0) {
                // Quadratic falloff for natural-feeling force
                const force = ((1 - distance / RADIUS) ** 2) * STRENGTH;
                const angle = Math.atan2(dy, dx);
                x.set(Math.cos(angle) * force);
                y.set(Math.sin(angle) * force);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        const unsub1 = mouseX.on("change", update);
        const unsub2 = mouseY.on("change", update);
        return () => {
            unsub1();
            unsub2();
        };
    }, [mouseX, mouseY, x, y]);

    return (
        <motion.span
            ref={ref}
            className="inline-block whitespace-pre will-change-transform"
            style={{ x: springX, y: springY, rotate }}
            aria-hidden
        >
            {letter}
        </motion.span>
    );
}

export function TextRepel({ text, className }: { text: string; className?: string }) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const mouseX = useMotionValue(-9999);
    const mouseY = useMotionValue(-9999);

    return (
        <span
            ref={containerRef}
            data-text-repel
            className={cn(
                "inline-flex flex-wrap items-center justify-center cursor-default select-none",
                className
            )}
            onMouseMove={(e) => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (!rect) return;
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }}
            onMouseLeave={() => {
                mouseX.set(-9999);
                mouseY.set(-9999);
            }}
            aria-label={text}
        >
            {text.match(/\s+|\S+/g)?.map((token, i) =>
                /\s+/.test(token) ? (
                    <span key={i} className="inline-block whitespace-pre">{token}</span>
                ) : (
                    <span key={i} className="inline-block whitespace-nowrap">
                        {token.split("").map((letter, j) => (
                            <RepelLetter key={j} letter={letter} mouseX={mouseX} mouseY={mouseY} />
                        ))}
                    </span>
                )
            )}
        </span>
    );
}
