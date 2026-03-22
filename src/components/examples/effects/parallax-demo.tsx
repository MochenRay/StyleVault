"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative h-[350px] overflow-hidden rounded-lg border border-border/50 bg-gradient-to-b from-background to-secondary/30"
    >
      {/* 背景层 - 大圆 */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="h-48 w-48 rounded-full bg-primary/5 blur-2xl" />
      </motion.div>

      {/* 中景层 - 几何图形 */}
      <motion.div style={{ y: midY }} className="absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-16 w-16 rounded-xl border border-primary/20 bg-primary/5 rotate-12" />
        <div className="absolute right-[20%] top-[30%] h-12 w-12 rounded-full border border-chart-2/20 bg-chart-2/5" />
        <div className="absolute left-[60%] bottom-[25%] h-14 w-14 rounded-lg border border-chart-3/20 bg-chart-3/5 -rotate-6" />
        <div className="absolute left-[25%] bottom-[20%] h-10 w-10 rounded-full border border-chart-4/20 bg-chart-4/5" />
      </motion.div>

      {/* 前景层 - 文字 */}
      <motion.div
        style={{ y: fgY, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h3 className="text-2xl font-bold">视差滚动</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-[240px] text-center">
          多层元素以不同速度移动，创造深度感
        </p>
      </motion.div>

      {/* 提示 */}
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="text-[11px] text-muted-foreground/60">滚动页面查看视差效果</span>
      </div>
    </div>
  );
}
