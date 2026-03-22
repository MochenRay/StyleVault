"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { RotateCcw } from "lucide-react";

function FadeUpCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function FadeScaleCard({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollAnimation() {
  const [resetKey, setResetKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const listItems = ["列表项 1", "列表项 2", "列表项 3", "列表项 4", "列表项 5"];

  const handleReset = () => {
    setResetKey((k) => k + 1);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">向下滚动查看动画效果，滚回来可重复触发</p>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-md border border-border/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
        >
          <RotateCcw className="h-3 w-3" />
          重置
        </button>
      </div>

      <div
        key={resetKey}
        ref={scrollRef}
        className="space-y-8 max-h-[400px] overflow-y-auto rounded-lg border border-border/50 p-6"
      >
        <div className="h-[120px] flex items-end justify-center">
          <p className="text-xs text-muted-foreground animate-bounce">↓ 向下滚动</p>
        </div>

        {/* Fade Up */}
        <FadeUpCard>
          <div className="rounded-lg border border-border/50 bg-secondary/30 p-6 text-center">
            <h4 className="font-semibold">Fade Up</h4>
            <p className="mt-1 text-sm text-muted-foreground">从下方淡入，滚动进入视口时触发</p>
          </div>
        </FadeUpCard>

        <div className="h-[100px]" />

        {/* Fade In Scale */}
        <FadeScaleCard>
          <div className="rounded-lg border border-border/50 bg-secondary/30 p-6 text-center">
            <h4 className="font-semibold">Fade In + Scale</h4>
            <p className="mt-1 text-sm text-muted-foreground">从小到大淡入，视觉层次递进</p>
          </div>
        </FadeScaleCard>

        <div className="h-[100px]" />

        {/* Stagger List */}
        <div>
          <h4 className="mb-3 text-center font-semibold">Stagger List</h4>
          <div className="space-y-2">
            {listItems.map((item, i) => (
              <FadeUpCard key={item} delay={i * 0.1}>
                <div className="rounded-md border border-border/50 bg-secondary/30 px-4 py-3 text-sm">
                  {item} — 延迟 {(i * 100).toFixed(0)}ms 依次出现
                </div>
              </FadeUpCard>
            ))}
          </div>
        </div>

        <div className="h-[80px]" />
      </div>
    </div>
  );
}
