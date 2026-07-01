"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isFine, setIsFine] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const dotX = useSpring(cursorX, { damping: 28, stiffness: 800 });
  const dotY = useSpring(cursorY, { damping: 28, stiffness: 800 });
  const ringX = useSpring(cursorX, { damping: 32, stiffness: 200 });
  const ringY = useSpring(cursorY, { damping: 32, stiffness: 200 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setIsFine(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(
        el.tagName === "BUTTON" ||
          el.tagName === "A" ||
          el.closest("button") !== null ||
          el.closest("a") !== null ||
          el.getAttribute("role") === "button"
      );
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY]);

  if (!isFine) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          background: "radial-gradient(circle, #C4622D, #9a4d24)",
          boxShadow: "0 0 8px rgba(196,98,45,0.6)",
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: clicking ? 0.4 : 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(196,98,45,0.7)" : "rgba(196,98,45,0.35)",
        }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: clicking ? 0.4 : visible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
