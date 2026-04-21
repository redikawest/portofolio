"use client";

import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// Aliases
export const fadeInUp = fadeUp;
export const fadeInLeft = fadeUp;
export const fadeInRight = fadeUp;
export const staggerContainer = stagger;
export const staggerFast = stagger;
export const scaleIn = fadeUp;
export const cardHover = { rest: {}, hover: {} };
