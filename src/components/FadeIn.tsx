"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.7,
}: FadeInProps) {
  // El bloque prefers-reduced-motion de globals.css solo frena animaciones y transiciones CSS;
  // framer-motion anima por JS, así que hay que consultar la preferencia acá.
  const reduceMotion = useReducedMotion();

  // Estos valores son la posición INICIAL: el elemento arranca desplazado y viaja hasta 0,
  // por eso "left" parte en x positivo (se mueve hacia la izquierda).
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = reduceMotion ? { y: 0, x: 0 } : directionOffset[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        reduceMotion
          ? { duration: 0.01, delay: 0 }
          : {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
