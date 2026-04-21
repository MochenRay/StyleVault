"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NumberPagination() {
  const [current, setCurrent] = useState(3);
  const total = 10;

  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const visible = pages.filter(
    (p) => p === 1 || p === total || Math.abs(p - current) <= 1
  );

  const items: (number | "dots")[] = [];
  for (let i = 0; i < visible.length; i++) {
    if (i > 0 && visible[i] - visible[i - 1] > 1) {
      items.push("dots");
    }
    items.push(visible[i]);
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        disabled={current === 1}
        onClick={() => setCurrent((c) => c - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {items.map((item, i) =>
        item === "dots" ? (
          <span key={`dots-${i}`} className="px-2 text-muted-foreground">
            ···
          </span>
        ) : (
          <Button
            key={item}
            variant={item === current ? "default" : "outline"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrent(item)}
          >
            {item}
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        disabled={current === total}
        onClick={() => setCurrent((c) => c + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function SimplePagination() {
  const [page, setPage] = useState(1);
  const total = 12;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="gap-1"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        上一页
      </Button>
      <span className="text-sm text-muted-foreground">
        第 {page} / {total} 页
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={page === total}
        onClick={() => setPage((p) => p + 1)}
        className="gap-1"
      >
        下一页
        <ChevronRight className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

export function PaginationDemos() {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">数字分页</h4>
        <NumberPagination />
      </div>
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">简洁分页</h4>
        <SimplePagination />
      </div>
    </div>
  );
}
