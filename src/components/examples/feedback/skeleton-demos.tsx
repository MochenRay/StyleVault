"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemos() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {/* 卡片骨架 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">卡片骨架</h4>
        <div className="rounded-lg border border-border/50 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-3 w-[180px]" />
            </div>
          </div>
          <Skeleton className="h-[120px] w-full rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </div>
      </div>

      {/* 列表骨架 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">列表骨架</h4>
        <div className="rounded-lg border border-border/50 divide-y divide-border/50">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <Skeleton className="h-8 w-8 rounded-md" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3.5 w-[140px]" />
                <Skeleton className="h-3 w-[200px]" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
