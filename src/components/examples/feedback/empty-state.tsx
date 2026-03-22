"use client";

import { Button } from "@/components/ui/button";
import {
  Inbox,
  Search,
  AlertTriangle,
  Rocket,
  Plus,
  RefreshCw,
  ArrowRight,
  FileX,
} from "lucide-react";

function EmptyData() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/60 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Inbox className="h-7 w-7 text-muted-foreground" />
      </div>
      <h4 className="mt-4 text-base font-semibold">暂无数据</h4>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        当前列表为空，你可以创建第一条记录开始使用。
      </p>
      <Button className="mt-4 gap-2" size="sm">
        <Plus className="h-4 w-4" />
        新建记录
      </Button>
    </div>
  );
}

function SearchEmpty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/60 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Search className="h-7 w-7 text-muted-foreground" />
      </div>
      <h4 className="mt-4 text-base font-semibold">未找到结果</h4>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        没有匹配 &quot;dashboard template&quot; 的内容，试试调整关键词或筛选条件。
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" size="sm">清除筛选</Button>
        <Button variant="outline" size="sm">浏览全部</Button>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-destructive/30 bg-destructive/5 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-7 w-7 text-destructive" />
      </div>
      <h4 className="mt-4 text-base font-semibold">加载失败</h4>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        数据加载时遇到错误，请检查网络连接或稍后重试。
      </p>
      <Button variant="outline" className="mt-4 gap-2" size="sm">
        <RefreshCw className="h-4 w-4" />
        重新加载
      </Button>
    </div>
  );
}

function OnboardingState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-primary/30 bg-primary/5 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Rocket className="h-7 w-7 text-primary" />
      </div>
      <h4 className="mt-4 text-base font-semibold">欢迎使用 StyleVault</h4>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        这里是你的组件工作台。从创建第一个项目开始，探索丰富的样式组件。
      </p>
      <div className="mt-4 flex gap-2">
        <Button size="sm" className="gap-2">
          开始使用
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <FileX className="h-4 w-4" />
          查看文档
        </Button>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <EmptyData />
      <SearchEmpty />
      <ErrorState />
      <OnboardingState />
    </div>
  );
}
