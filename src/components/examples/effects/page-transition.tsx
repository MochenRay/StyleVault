"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const tabs = ["概览", "详情", "评论"];

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { duration: 0.25 },
  },
};

const content: Record<string, string> = {
  概览: "这是概览页面。展示产品的核心功能和关键指标摘要。",
  详情: "这是详情页面。包含完整的技术规格、功能列表和使用说明。",
  评论: "这是评论页面。用户反馈、评分和使用体验分享。",
};

type VariantKey = keyof typeof variants;

export function PageTransition() {
  const [activeTab, setActiveTab] = useState("概览");
  const [effect, setEffect] = useState<VariantKey>("fade");

  return (
    <div className="space-y-4">
      {/* 效果选择 */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">切换效果：</span>
        {(Object.keys(variants) as VariantKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setEffect(key)}
            className={cn(
              "rounded-md px-3 py-1 text-xs transition-colors",
              effect === key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Tab 切换 */}
      <div className="rounded-lg border border-border/50 overflow-hidden">
        <div className="flex border-b border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 px-4 py-2.5 text-sm transition-colors",
                activeTab === tab
                  ? "bg-secondary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative h-[120px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={variants[effect].initial}
              animate={variants[effect].animate}
              exit={variants[effect].exit}
              transition={variants[effect].transition}
              className="p-5"
            >
              <h4 className="font-medium">{activeTab}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {content[activeTab]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
