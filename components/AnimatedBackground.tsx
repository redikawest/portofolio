"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import SchemaGraph, { SCHEMA_EDGES, SCHEMA_NODES } from "./SchemaGraph";

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// Static 2D projection of the same schema used when 3D is unavailable
// (no WebGL, mobile, or prefers-reduced-motion) — a real fallback, not a placeholder.
function SchemaFallback() {
  const SCALE = 12;
  const CX = 100;
  const CY = 60;
  const project = (p: [number, number, number]) => [p[0] * SCALE + CX, -p[1] * SCALE + CY];
  const nodeById = useMemo(() => {
    const map = new Map(SCHEMA_NODES.map((n) => [n.id, n]));
    return map;
  }, []);

  return (
    <svg
      viewBox="0 0 200 120"
      className="absolute inset-0 h-full w-full opacity-[0.14]"
      preserveAspectRatio="xMidYMid slice"
    >
      {SCHEMA_EDGES.map(([a, b]) => {
        const [x1, y1] = project(nodeById.get(a)!.position);
        const [x2, y2] = project(nodeById.get(b)!.position);
        return (
          <line
            key={`${a}-${b}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#545B66"
            strokeWidth={0.3}
          />
        );
      })}
      {SCHEMA_NODES.map((n) => {
        const [x, y] = project(n.position);
        return <circle key={n.id} cx={x} cy={y} r={1.4} fill="#C4622D" />;
      })}
    </svg>
  );
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.innerWidth < 768);
    setWebglSupported(detectWebGL());
  }, []);

  const show3D = mounted && !reduced && !isMobile && webglSupported;
  const showFallback = mounted && !show3D;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base canvas */}
      <div className="absolute inset-0 bg-canvas" />

      {/* Three.js schema graph */}
      {show3D && (
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 9], fov: 58 }}
            gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
          >
            <SchemaGraph />
          </Canvas>
        </div>
      )}

      {/* Static wireframe fallback — no WebGL, mobile, or reduced motion */}
      {showFallback && <SchemaFallback />}

      {/* Soft accent glow — top right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/[0.05] blur-[130px]" />
      {/* Soft graphite glow — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-muted/[0.05] blur-[110px]" />

      {/* Very subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(rgba(84,91,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(84,91,102,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
