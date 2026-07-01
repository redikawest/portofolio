"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export type SchemaNode = { id: string; label: string; position: [number, number, number] };
export type SchemaEdge = [string, string];

// The actual stack — a literal expression of the systems being described, not decoration.
export const SCHEMA_NODES: SchemaNode[] = [
  { id: "nextjs", label: "Next.js", position: [-3.2, 1.6, -1] },
  { id: "react", label: "React", position: [-4.6, -0.4, 0.5] },
  { id: "typescript", label: "TypeScript", position: [-2.2, -1.8, 1.8] },
  { id: "laravel", label: "Laravel", position: [0.4, 2.4, -2] },
  { id: "php", label: "PHP", position: [2.6, 1.2, -0.8] },
  { id: "nodejs", label: "Node.js", position: [1.6, -1.4, 1.2] },
  { id: "postgres", label: "PostgreSQL", position: [-0.6, -2.6, -1] },
  { id: "redis", label: "Redis", position: [3.4, -0.6, 0.6] },
  { id: "docker", label: "Docker", position: [4.6, 1.8, -1.6] },
  { id: "nginx", label: "Nginx", position: [3.8, -2.4, -0.4] },
];

export const SCHEMA_EDGES: SchemaEdge[] = [
  ["nextjs", "react"],
  ["nextjs", "typescript"],
  ["react", "typescript"],
  ["laravel", "php"],
  ["laravel", "postgres"],
  ["laravel", "redis"],
  ["php", "nodejs"],
  ["nodejs", "typescript"],
  ["nodejs", "redis"],
  ["nodejs", "nginx"],
  ["postgres", "redis"],
  ["docker", "nginx"],
  ["docker", "postgres"],
  ["docker", "nodejs"],
  ["nginx", "laravel"],
  ["redis", "docker"],
];

// Boot sequence length — exported so components (e.g. Hero) can sync their own entrance timing.
export const SCHEMA_BOOT_MS = 2000;

const BOOT_STAGGER = 0.11; // seconds between each node's reveal
const BOOT_DURATION = 0.6; // seconds each node takes to scale in

function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function NodePoint({ position, delay }: { position: [number, number, number]; delay: number }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const elapsed = t - delay;
    const boot = elapsed < 0 ? 0 : Math.min(1, easeOutBack(Math.min(1, elapsed / BOOT_DURATION)));
    const bob = elapsed > BOOT_DURATION ? Math.sin(t * 0.6 + delay * 4) * 0.04 : 0;
    mesh.current.scale.setScalar(Math.max(0, boot));
    mesh.current.position.y = position[1] + bob;
  });

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[0.065, 0]} />
      <meshBasicMaterial color="#C4622D" transparent opacity={0.45} />
    </mesh>
  );
}

function EdgeLine({
  from,
  to,
  delay,
}: {
  from: [number, number, number];
  to: [number, number, number];
  delay: number;
}) {
  const ref = useRef<any>(null);
  const points = useMemo(() => [from, to], [from, to]);

  useFrame((state) => {
    if (!ref.current?.material) return;
    const elapsed = state.clock.elapsedTime - delay;
    const target = elapsed < 0 ? 0 : Math.min(1, elapsed / BOOT_DURATION);
    ref.current.material.opacity = target * 0.14;
  });

  return (
    <Line
      ref={ref}
      points={points}
      color="#545B66"
      lineWidth={1}
      transparent
      opacity={0}
    />
  );
}

export default function SchemaGraph() {
  const group = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.035 + mouse.current.x * 0.12;
    group.current.rotation.x = t * 0.018 + mouse.current.y * 0.06;
  });

  const nodeById = useMemo(() => {
    const map = new Map<string, SchemaNode>();
    SCHEMA_NODES.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  return (
    <group ref={group}>
      {SCHEMA_EDGES.map(([a, b], i) => {
        const nodeA = nodeById.get(a)!;
        const nodeB = nodeById.get(b)!;
        return (
          <EdgeLine
            key={`${a}-${b}`}
            from={nodeA.position}
            to={nodeB.position}
            delay={0.4 + i * 0.05}
          />
        );
      })}
      {SCHEMA_NODES.map((node, i) => (
        <NodePoint key={node.id} position={node.position} delay={i * BOOT_STAGGER} />
      ))}
    </group>
  );
}
