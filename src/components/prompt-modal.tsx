"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Copy, Sun, Moon, Type } from "lucide-react";
import type { StyleDefinition } from "@/data/styles";

interface PromptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  style: StyleDefinition;
}

export function PromptModal({ open, onOpenChange, style }: PromptModalProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(style.prompt);
      toast.success("已复制 Prompt", {
        description: `${style.name} 风格的设计系统 prompt 已复制到剪贴板`,
      });
    } catch {
      toast.error("复制失败", { description: "请手动选择文本复制" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{style.name}</DialogTitle>
          <DialogDescription>{style.description}</DialogDescription>
        </DialogHeader>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="gap-1 text-xs">
            {style.defaultMode === "light" ? (
              <Sun className="h-3 w-3" />
            ) : (
              <Moon className="h-3 w-3" />
            )}
            {style.defaultMode === "light" ? "浅色模式" : "深色模式"}
          </Badge>
          <Badge variant="secondary" className="gap-1 text-xs">
            <Type className="h-3 w-3" />
            {style.typography.charAt(0).toUpperCase() + style.typography.slice(1)}
          </Badge>
          <span className="text-xs text-muted-foreground ml-auto">
            {style.prompt.length.toLocaleString()} 字符
          </span>
        </div>

        {/* Prompt Content */}
        <div className="flex-1 overflow-y-auto rounded-lg border border-border/50 bg-background/50">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="ml-2">prompt.xml</span>
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-muted-foreground font-mono whitespace-pre-wrap">
            <code>{style.prompt}</code>
          </pre>
        </div>

        {/* Copy Button */}
        <div className="flex justify-end pt-2">
          <Button onClick={handleCopy} className="gap-2">
            <Copy className="h-4 w-4" />
            复制提示词
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
