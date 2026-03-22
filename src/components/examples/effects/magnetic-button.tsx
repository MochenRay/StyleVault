"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

function MagneticElement({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-8">
      <MagneticElement strength={0.4}>
        <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25">
          磁性按钮
        </button>
      </MagneticElement>

      <MagneticElement strength={0.3}>
        <button className="rounded-xl border-2 border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
          描边变体
        </button>
      </MagneticElement>

      <MagneticElement strength={0.5}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer">
          →
        </div>
      </MagneticElement>
    </div>
  );
}
