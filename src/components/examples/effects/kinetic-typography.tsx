"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function LetterByLetter() {
  const text = "StyleVault 样式展示库";
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h4 className="mb-4 text-sm font-medium text-muted-foreground">字母逐个出现</h4>
      <div className="flex flex-wrap">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="text-2xl font-bold"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function TypewriterEffect() {
  const fullText = "构建现代化的前端组件库，让开发更高效。";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [index, fullText]);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h4 className="mb-4 text-sm font-medium text-muted-foreground">打字机效果</h4>
      <p className="text-xl font-semibold">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-6 bg-primary ml-0.5 align-middle"
        />
      </p>
    </div>
  );
}

function WordRotator() {
  const words = ["更快", "更聪明", "更优雅", "更高效"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h4 className="mb-4 text-sm font-medium text-muted-foreground">单词高亮轮播</h4>
      <p className="text-2xl font-bold">
        让产品开发{" "}
        <span className="relative inline-block w-24 text-left align-bottom">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentIndex]}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </div>
  );
}

export function KineticTypography() {
  return (
    <div className="grid gap-4">
      <LetterByLetter />
      <TypewriterEffect />
      <WordRotator />
    </div>
  );
}
