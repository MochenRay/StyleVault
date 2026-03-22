"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";

function GlowBorderCard() {
  return (
    <div className="group relative rounded-xl p-[1px] overflow-hidden">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-chart-2 to-chart-3 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-chart-2 to-chart-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-xl bg-card p-6 text-center">
        <h4 className="font-semibold">边框渐变流光</h4>
        <p className="mt-1 text-sm text-muted-foreground">Hover 显示渐变边框</p>
      </div>
    </div>
  );
}

function ScaleBlurCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl border border-border/50 bg-card p-6 text-center cursor-pointer overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <h4 className="relative font-semibold">弹性放大</h4>
      <p className="relative mt-1 text-sm text-muted-foreground">Spring 物理弹性缩放</p>
    </motion.div>
  );
}

function TiltCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = -(e.clientX - rect.left - rect.width / 2) / 10;
    setRotate({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ perspective: 800 }}
      className="rounded-xl border border-border/50 bg-card p-6 text-center cursor-pointer"
    >
      <h4 className="font-semibold">3D 倾斜</h4>
      <p className="mt-1 text-sm text-muted-foreground">鼠标跟随的 3D 透视效果</p>
    </motion.div>
  );
}

function SpotlightCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative rounded-xl border border-border/50 bg-card p-6 text-center cursor-pointer overflow-hidden"
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px"
          style={{
            background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, oklch(var(--primary) / 0.12), transparent 60%)`,
          }}
        />
      )}
      <h4 className="relative font-semibold">光标跟随高光</h4>
      <p className="relative mt-1 text-sm text-muted-foreground">鼠标位置的径向渐变光斑</p>
    </div>
  );
}

export function HoverEffects() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <GlowBorderCard />
      <ScaleBlurCard />
      <TiltCard />
      <SpotlightCard />
    </div>
  );
}
