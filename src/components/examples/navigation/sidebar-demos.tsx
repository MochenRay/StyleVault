"use client";

import { useState } from "react";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  ShoppingCart,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Layout,
} from "lucide-react";
import { cn } from "@/lib/utils";

const basicItems = [
  { icon: Home, label: "首页", active: true },
  { icon: BarChart3, label: "数据分析" },
  { icon: Users, label: "用户管理" },
  { icon: ShoppingCart, label: "订单管理" },
  { icon: MessageSquare, label: "消息中心" },
  { icon: Settings, label: "系统设置" },
];

type GroupItem = {
  label: string;
  icon: typeof Home;
  children?: { label: string; active?: boolean }[];
};

const groupedItems: GroupItem[] = [
  {
    label: "工作台",
    icon: Layout,
    children: [
      { label: "仪表板", active: true },
      { label: "工作流" },
      { label: "日程" },
    ],
  },
  {
    label: "内容管理",
    icon: FileText,
    children: [
      { label: "文章列表" },
      { label: "分类标签" },
      { label: "媒体库" },
    ],
  },
  {
    label: "用户管理",
    icon: Users,
    children: [
      { label: "用户列表" },
      { label: "角色权限" },
    ],
  },
];

function GroupedSidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    工作台: true,
  });

  return (
    <div className="space-y-1">
      {groupedItems.map((group) => (
        <div key={group.label}>
          <button
            onClick={() =>
              setExpanded((prev) => ({
                ...prev,
                [group.label]: !prev[group.label],
              }))
            }
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <group.icon className="h-4 w-4" />
            <span className="flex-1 text-left">{group.label}</span>
            {expanded[group.label] ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
          {expanded[group.label] && group.children && (
            <div className="ml-4 mt-1 space-y-0.5 border-l border-border/50 pl-3">
              {group.children.map((child) => (
                <button
                  key={child.label}
                  className={cn(
                    "block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                    child.active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {child.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function SidebarDemos() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* 基础侧边栏 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础导航</h4>
        <div className="rounded-lg border border-border/50 p-3 h-[320px]">
          <div className="space-y-1">
            {basicItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                  item.active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 分组折叠侧边栏 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">分组折叠</h4>
        <div className="rounded-lg border border-border/50 p-3 h-[320px] overflow-y-auto">
          <GroupedSidebar />
        </div>
      </div>
    </div>
  );
}
