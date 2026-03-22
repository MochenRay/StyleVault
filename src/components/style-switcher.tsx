"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "@/components/style-provider";
import { PromptModal } from "@/components/prompt-modal";
import { cn } from "@/lib/utils";
import { Palette, FileText, X, Sun, Moon, ChevronRight } from "lucide-react";
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

  const filtered = allStyles.filter((s) => {
    if (modeFilter !== "all" && s.defaultMode !== modeFilter) return false;
    if (typoFilter !== "all" && s.typography !== typoFilter) return false;
    return true;
  });

  return (
    <>
      {/* 浮动底栏 */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-border/50 bg-card/90 backdrop-blur-md px-2 py-1.5 shadow-lg">
          <span className="px-3 text-xs font-semibold tracking-wide opacity-70">
            style/vault
          </span>

          <div className="h-4 w-px bg-border/50" />

          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
          >
            <StyleSwatch style={currentStyle} />
            <span className="font-medium">{currentStyle.name}</span>
          </button>

          <div className="h-4 w-px bg-border/50" />

          <button
            onClick={() => setPromptOpen(true)}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
          >
            <FileText className="h-3.5 w-3.5" />
            Prompt
          </button>

          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
          >
            <Palette className="h-3.5 w-3.5" />
            Styles
          </button>
        </div>

        {/* 风格面板 */}
        <AnimatePresence>
          {panelOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[320px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                <div>
                  <h3 className="text-sm font-semibold">Design Styles</h3>
                  <p className="text-xs text-muted-foreground">
                    {allStyles.length} unique aesthetics
                  </p>
                </div>
                <button
                  onClick={() => setPanelOpen(false)}
                  className="rounded-md p-1 hover:bg-secondary transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Filters */}
              <div className="border-b border-border/50 px-4 py-2.5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider w-12">
                    MODE
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
                        {m === "all" ? "All" : m === "light" ? (
                          <span className="flex items-center gap-1"><Sun className="h-3 w-3" />Light</span>
                        ) : (
                          <span className="flex items-center gap-1"><Moon className="h-3 w-3" />Dark</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider w-12">
                    TYPE
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
                        {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Style List */}
              <div className="max-h-[360px] overflow-y-auto py-1">
                {filtered.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setStyle(style.id);
                      setPanelOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2.5 transition-colors hover:bg-secondary/50",
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
                        {style.defaultMode === "light" ? "Light" : "Dark"}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
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
      </div>

      {/* Prompt Modal */}
      <PromptModal
        open={promptOpen}
        onOpenChange={setPromptOpen}
        style={currentStyle}
      />
    </>
  );
}
