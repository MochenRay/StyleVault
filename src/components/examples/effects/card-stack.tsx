"use client";

import { startTransition, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StoryCard = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  accent: string;
};

const cards: StoryCard[] = [
  {
    id: "01",
    eyebrow: "Narrative Layer",
    title: "Scroll into the signal",
    copy: "把关键结论先抬到最上层，再把细节折叠进后续卡片，适合首页 hero 或产品故事流。",
    accent: "from-sky-500/25 to-cyan-400/15",
  },
  {
    id: "02",
    eyebrow: "Intentional Density",
    title: "Stack, then reveal",
    copy: "堆叠卡片让页面在不一次性塞满内容的前提下，保留“还有下一层”的预期。",
    accent: "from-fuchsia-500/25 to-violet-400/15",
  },
  {
    id: "03",
    eyebrow: "Interaction",
    title: "Swipe the top layer",
    copy: "顶层卡片用拖拽或按钮切换，背后的卡片负责制造空间深度和节奏感。",
    accent: "from-amber-500/25 to-orange-400/15",
  },
  {
    id: "04",
    eyebrow: "Use Case",
    title: "Works for feature tours",
    copy: "适合 onboarding、案例轮播、功能亮点、版本更新摘要等一段一段展开的内容。",
    accent: "from-emerald-500/25 to-teal-400/15",
  },
];

export function CardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const next = (dir: 1 | -1) => {
    setDirection(dir);
    startTransition(() => {
      setActiveIndex((current) => (current + dir + cards.length) % cards.length);
    });
  };

  const stack = useMemo(() => {
    return [0, 1, 2].map((offset) => cards[(activeIndex + offset) % cards.length]);
  }, [activeIndex]);

  const topCard = stack[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
      <div className="relative mx-auto h-[300px] w-full max-w-[520px]">
        {stack
          .slice(1)
          .reverse()
          .map((card, index) => {
            const depth = stack.length - index - 1;

            return (
              <div
                key={`${card.id}-shadow`}
                className={cn(
                  "absolute inset-x-4 rounded-[28px] border border-border/50 bg-card/85 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.12)] backdrop-blur-sm"
                )}
                style={{
                  top: depth === 2 ? 34 : 18,
                  transform: `scale(${depth === 2 ? 0.9 : 0.95})`,
                  opacity: depth === 2 ? 0.45 : 0.72,
                }}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground/80">
                  {card.eyebrow}
                </p>
                <h4 className="mt-3 text-lg font-semibold">{card.title}</h4>
              </div>
            );
          })}

        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={topCard.id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x <= -120 || info.velocity.x <= -500) {
                next(1);
              } else if (info.offset.x >= 120 || info.velocity.x >= 500) {
                next(-1);
              }
            }}
            variants={{
              enter: (dir: 1 | -1) => ({
                x: dir * 60,
                rotate: dir * 5,
                opacity: 0,
                scale: 0.96,
              }),
              center: {
                x: 0,
                rotate: 0,
                opacity: 1,
                scale: 1,
              },
              exit: (dir: 1 | -1) => ({
                x: dir * -220,
                rotate: dir * -10,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className={cn(
              "absolute inset-0 overflow-hidden rounded-[30px] border border-border/60 bg-card p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                topCard.accent
              )}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {topCard.eyebrow}
                </p>
                <h3 className="mt-3 max-w-[16ch] text-3xl font-semibold tracking-tight">
                  {topCard.title}
                </h3>
                <p className="mt-4 max-w-[38ch] text-sm leading-6 text-muted-foreground">
                  {topCard.copy}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  拖拽卡片或点击切换
                </div>
                <div className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  {activeIndex + 1} / {cards.length}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Stacked Storytelling
          </p>
          <h4 className="mt-2 text-lg font-semibold">卡片堆栈交互</h4>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            近期社区里很常见的 pattern：用分层卡片制造节奏，再让顶层承担交互。
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => next(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => next(1)}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
