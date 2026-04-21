"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ShaderPreset = {
  id: string;
  name: string;
  accent: string;
  background: string;
  blobs: Array<{
    size: number;
    top: string;
    left: string;
    color: string;
    duration: number;
    delay?: number;
  }>;
};

const presets: ShaderPreset[] = [
  {
    id: "aurora",
    name: "Aurora",
    accent: "极光薄雾",
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(36,58,125,0.9) 45%, rgba(3,7,18,0.96))",
    blobs: [
      {
        size: 260,
        top: "-10%",
        left: "-5%",
        color: "rgba(129, 140, 248, 0.55)",
        duration: 12,
      },
      {
        size: 220,
        top: "35%",
        left: "58%",
        color: "rgba(56, 189, 248, 0.42)",
        duration: 15,
        delay: 0.8,
      },
      {
        size: 240,
        top: "55%",
        left: "18%",
        color: "rgba(45, 212, 191, 0.35)",
        duration: 14,
        delay: 0.3,
      },
    ],
  },
  {
    id: "solar",
    name: "Solar",
    accent: "灼热等离子",
    background:
      "linear-gradient(135deg, rgba(24,24,27,0.97), rgba(82,31,12,0.92) 48%, rgba(17,24,39,0.95))",
    blobs: [
      {
        size: 280,
        top: "-12%",
        left: "12%",
        color: "rgba(251, 146, 60, 0.55)",
        duration: 13,
      },
      {
        size: 230,
        top: "42%",
        left: "54%",
        color: "rgba(244, 63, 94, 0.45)",
        duration: 16,
        delay: 0.5,
      },
      {
        size: 180,
        top: "58%",
        left: "8%",
        color: "rgba(250, 204, 21, 0.36)",
        duration: 11,
        delay: 0.9,
      },
    ],
  },
  {
    id: "glacier",
    name: "Glacier",
    accent: "冷色玻璃流",
    background:
      "linear-gradient(135deg, rgba(8,47,73,0.95), rgba(14,116,144,0.82) 42%, rgba(15,23,42,0.94))",
    blobs: [
      {
        size: 250,
        top: "-8%",
        left: "58%",
        color: "rgba(125, 211, 252, 0.5)",
        duration: 14,
      },
      {
        size: 240,
        top: "38%",
        left: "-4%",
        color: "rgba(103, 232, 249, 0.36)",
        duration: 17,
        delay: 0.7,
      },
      {
        size: 190,
        top: "60%",
        left: "42%",
        color: "rgba(165, 243, 252, 0.3)",
        duration: 12,
        delay: 0.4,
      },
    ],
  },
];

export function ShaderGradient() {
  const [presetId, setPresetId] = useState<ShaderPreset["id"]>("aurora");
  const activePreset =
    presets.find((preset) => preset.id === presetId) ?? presets[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setPresetId(preset.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition-colors",
              preset.id === activePreset.id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div
        className="relative overflow-hidden rounded-[28px] border border-white/20 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
        style={{ background: activePreset.background }}
      >
        <div className="absolute inset-0">
          {activePreset.blobs.map((blob, index) => (
            <motion.div
              key={`${activePreset.id}-${index}`}
              className="absolute rounded-full blur-3xl"
              style={{
                top: blob.top,
                left: blob.left,
                width: blob.size,
                height: blob.size,
                background: blob.color,
              }}
              animate={{
                x: [0, 20, -18, 0],
                y: [0, -24, 18, 0],
                scale: [1, 1.12, 0.96, 1],
              }}
              transition={{
                duration: blob.duration,
                delay: blob.delay ?? 0,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.32),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.16),transparent_30%,rgba(255,255,255,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.42))]" />

        <div className="relative space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                Shader-driven Surface
              </p>
              <h4 className="mt-2 text-2xl font-semibold tracking-tight">
                {activePreset.name} Gradient
              </h4>
            </div>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">
              {activePreset.accent}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Animated gradient fields",
              "Soft particle haze",
              "Interactive hero backdrop",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 p-3 text-sm text-white/80 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
