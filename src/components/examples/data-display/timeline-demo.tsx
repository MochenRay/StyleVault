"use client";

import {
  CheckCircle2,
  Circle,
  Loader2,
  Rocket,
  Code2,
  TestTube2,
  PackageCheck,
  Flag,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type TimelineStatus = "completed" | "in-progress" | "pending";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: TimelineStatus;
  icon: React.ElementType;
}

const milestones: TimelineEvent[] = [
  {
    date: "2026-01",
    title: "项目启动",
    description: "完成立项审批，组建核心团队（产品 2 人 + 研发 4 人），确定技术栈为 Next.js + Go 微服务架构。",
    status: "completed",
    icon: Flag,
  },
  {
    date: "2026-02",
    title: "需求评审 & 原型设计",
    description: "产出 PRD v1.0，完成 45 页交互原型，通过 3 轮评审后锁定 MVP 范围。",
    status: "completed",
    icon: Users,
  },
  {
    date: "2026-03",
    title: "核心模块开发",
    description: "用户系统、权限模块、数据看板三大核心模块并行开发。当前进度约 70%。",
    status: "in-progress",
    icon: Code2,
  },
  {
    date: "2026-04",
    title: "集成测试",
    description: "全链路集成测试，覆盖率目标 > 85%，性能基准测试 P99 < 200ms。",
    status: "pending",
    icon: TestTube2,
  },
  {
    date: "2026-05",
    title: "UAT & 灰度发布",
    description: "内部 UAT 一周，灰度放量 5% → 20% → 50%，监控核心指标无异常后全量。",
    status: "pending",
    icon: PackageCheck,
  },
  {
    date: "2026-06",
    title: "正式上线",
    description: "全量发布，启动运营推广计划，目标首月 DAU 突破 5000。",
    status: "pending",
    icon: Rocket,
  },
];

const statusConfig: Record<
  TimelineStatus,
  { badge: string; badgeVariant: "default" | "secondary" | "outline"; dotColor: string; lineColor: string; StatusIcon: React.ElementType }
> = {
  completed: {
    badge: "已完成",
    badgeVariant: "default",
    dotColor: "bg-emerald-500 text-white",
    lineColor: "bg-emerald-500",
    StatusIcon: CheckCircle2,
  },
  "in-progress": {
    badge: "进行中",
    badgeVariant: "secondary",
    dotColor: "bg-chart-1 text-white",
    lineColor: "bg-chart-1",
    StatusIcon: Loader2,
  },
  pending: {
    badge: "待处理",
    badgeVariant: "outline",
    dotColor: "bg-muted text-muted-foreground",
    lineColor: "bg-border",
    StatusIcon: Circle,
  },
};

export function TimelineDemo() {
  return (
    <div className="relative">
      {milestones.map((event, i) => {
        const config = statusConfig[event.status];
        const Icon = event.icon;
        const isLast = i === milestones.length - 1;

        return (
          <div key={event.date} className="relative flex gap-4 pb-8 last:pb-0">
            {/* 竖线 */}
            {!isLast && (
              <div
                className={cn(
                  "absolute left-[15px] top-9 h-[calc(100%-20px)] w-0.5",
                  config.lineColor
                )}
              />
            )}

            {/* 节点 */}
            <div
              className={cn(
                "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                config.dotColor
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4",
                  event.status === "in-progress" && "animate-spin"
                )}
              />
            </div>

            {/* 内容 */}
            <div className="flex-1 pt-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {event.date}
                </span>
                <Badge variant={config.badgeVariant} className="text-[10px] px-1.5 py-0">
                  {config.badge}
                </Badge>
              </div>
              <p className="mt-1 text-sm font-medium">{event.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
