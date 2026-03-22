"use client";

import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

export function ComponentCard({
  title,
  description,
  children,
  code,
}: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="card-glow rounded-xl border border-border/50 bg-card overflow-hidden">
      {/* 头部 */}
      <div className="flex items-center justify-between border-b border-border/50 px-5 py-3">
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          {description && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {code && (
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform",
                showCode && "rotate-180"
              )}
            />
          </button>
        )}
      </div>

      {/* 预览区 */}
      <div className="p-6">{children}</div>

      {/* 代码区 */}
      {code && showCode && (
        <div className="border-t border-border/50 bg-background/50">
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-muted-foreground">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
