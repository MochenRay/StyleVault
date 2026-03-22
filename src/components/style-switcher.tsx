"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "@/components/style-provider";
import { PromptModal } from "@/components/prompt-modal";
import { cn } from "@/lib/utils";
import { Palette, FileText, X, Sun, Moon } from "lucide-react";
import type { StyleDefinition } from "@/data/styles";

type ModeFilter = "all" | "light" | "dark";
type TypoFilter = "all" | "sans" | "serif" | "mono";

function StyleSwatch({ style }: { style: StyleDefinition }) {
  return (
    <div
      className="h-8 w-8 rounded-full border-2 border-border/30 shrink-0"
      style={{
        background: `linear-gradient(135deg, ${style.swatch.primary} 40%, ${style.swatch.bg} 60%)`,
      }}
    />
  );
}

export function StyleSwitcher() {
  const { currentStyle, setStyle, allStyles } = useStyle();
  const [panelOpen, setPanelOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const [modeFilter, setModeFilter] = useState<ModeFilter>("all");
  const [typoFilter, setTypoFilter] = useState<TypoFilter>("all");
  const panelRef = useRef<HTMLDivElement>(null);

  const filtered = allStyles.filter((s) => {
    if (modeFilter !== "all" && s.defaultMode !== modeFilter) return false;
    if (typoFilter !== "all" && s.typography !== typoFilter) return false;
    return true;
  });

  // 点击面板外区域关闭
  useEffect(() => {
    if (!panelOpen) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [panelOpen]);

  return (
    <>
      {/* 侧边浮动触发按钮 */}
      <button
        onClick={() => setPanelOpen(!panelOpen)}
        className={cn(
          "fixed right-4 top-1/2 z-50 -translate-y-1/2",
          "flex h-11 w-11 items-center justify-center",
          "rounded-xl border-2 border-foreground/20 bg-card shadow-lg",
          "transition-all duration-200",
          "hover:border-primary hover:shadow-xl hover:scale-105",
          panelOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="切换设计风格"
      >
        <Palette className="h-5 w-5 text-foreground" />
      </button>

      {/* 侧边面板 */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            ref={panelRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-[320px] border-l border-border/50 bg-card/95 backdrop-blur-md shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold">设计风格</h3>
                <p className="text-xs text-muted-foreground">
                  {allStyles.length} 种视觉风格
                </p>
              </div>
              <button
                onClick={() => setPanelOpen(false)}
                className="rounded-md p-1.5 hover:bg-secondary transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 当前风格 */}
            <div className="border-b border-border/50 px-5 py-3">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
                当前风格
              </p>
              <div className="flex items-center gap-3">
                <StyleSwatch style={currentStyle} />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{currentStyle.name}</p>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    {currentStyle.defaultMode === "light" ? (
                      <Sun className="h-3 w-3" />
                    ) : (
                      <Moon className="h-3 w-3" />
                    )}
                    {currentStyle.defaultMode === "light" ? "浅色" : "深色"} · {currentStyle.typography}
                  </p>
                </div>
                <button
                  onClick={() => setPromptOpen(true)}
                  className="flex items-center gap-1 rounded-md border border-border/50 px-2.5 py-1 text-xs transition-colors hover:bg-secondary"
                >
                  <FileText className="h-3 w-3" />
                  提示词
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="border-b border-border/50 px-5 py-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider w-12">
                  模式
                </span>
                <div className="flex gap-1">
                  {(["all", "light", "dark"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setModeFilter(m)}
                      className={cn(
                        "rounded-md px-2 py-0.5 text-xs transition-colors",
                        modeFilter === m
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {m === "all" ? "全部" : m === "light" ? (
                        <span className="flex items-center gap-1"><Sun className="h-3 w-3" />浅色</span>
                      ) : (
                        <span className="flex items-center gap-1"><Moon className="h-3 w-3" />深色</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider w-12">
                  字体
                </span>
                <div className="flex gap-1">
                  {(["all", "sans", "serif", "mono"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTypoFilter(t)}
                      className={cn(
                        "rounded-md px-2 py-0.5 text-xs capitalize transition-colors",
                        typoFilter === t
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {t === "all" ? "全部" : t === "sans" ? "无衬线" : t === "serif" ? "衬线" : "等宽"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Style List */}
            <div className="flex-1 overflow-y-auto py-1">
              {filtered.map((style) => (
                <button
                  key={style.id}
                  onClick={() => {
                    setStyle(style.id);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-5 py-3 transition-colors hover:bg-secondary/50",
                    currentStyle.id === style.id && "bg-secondary"
                  )}
                >
                  <StyleSwatch style={style} />
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{style.name}</p>
                    <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      {style.defaultMode === "light" ? (
                        <Sun className="h-3 w-3" />
                      ) : (
                        <Moon className="h-3 w-3" />
                      )}
                      {style.defaultMode === "light" ? "浅色" : "深色"} · {style.typography}
                    </p>
                  </div>
                  {currentStyle.id === style.id && (
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  无匹配风格
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prompt Modal */}
      <PromptModal
        open={promptOpen}
        onOpenChange={setPromptOpen}
        style={currentStyle}
      />
    </>
  );
}
