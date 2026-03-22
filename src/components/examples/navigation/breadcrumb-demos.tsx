"use client";

import { Home, ChevronRight } from "lucide-react";

export function BreadcrumbDemos() {
  return (
    <div className="space-y-8">
      {/* 基础面包屑 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础链式</h4>
        <nav className="flex items-center gap-1.5 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            首页
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            产品管理
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <span className="font-medium">商品详情</span>
        </nav>
      </div>

      {/* 带图标 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带图标</h4>
        <nav className="flex items-center gap-1.5 text-sm">
          <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-3.5 w-3.5" />
            首页
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            组件库
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            导航
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <span className="font-medium">面包屑</span>
        </nav>
      </div>

      {/* 带省略 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带省略</h4>
        <nav className="flex items-center gap-1.5 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            首页
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <span className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            ···
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            设置
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <span className="font-medium">安全设置</span>
        </nav>
      </div>
    </div>
  );
}
