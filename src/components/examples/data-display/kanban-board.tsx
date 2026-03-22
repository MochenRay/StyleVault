"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Circle, Clock, CheckCircle2 } from "lucide-react";

interface KanbanTask {
  id: string;
  title: string;
  description: string;
  tags: { label: string; variant: "default" | "secondary" | "outline" | "destructive" }[];
  assignee: { name: string; initials: string };
  priority?: "high" | "medium" | "low";
}

interface KanbanColumn {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  tasks: KanbanTask[];
}

const columns: KanbanColumn[] = [
  {
    id: "todo",
    title: "待办",
    icon: Circle,
    iconColor: "text-muted-foreground",
    tasks: [
      {
        id: "t1",
        title: "设计系统升级方案",
        description: "梳理现有组件库，规划 v3.0 升级路径和兼容策略",
        tags: [
          { label: "设计", variant: "secondary" },
          { label: "P1", variant: "destructive" },
        ],
        assignee: { name: "郑欣", initials: "郑" },
        priority: "high",
      },
      {
        id: "t2",
        title: "竞品分析报告",
        description: "调研市场上 5 款同类产品的核心功能和定价策略",
        tags: [{ label: "产品", variant: "secondary" }],
        assignee: { name: "曹双", initials: "曹" },
      },
      {
        id: "t3",
        title: "API 文档更新",
        description: "补充 v2.8 新增接口的文档和示例代码",
        tags: [
          { label: "文档", variant: "outline" },
          { label: "后端", variant: "secondary" },
        ],
        assignee: { name: "王华杰", initials: "王" },
      },
    ],
  },
  {
    id: "in-progress",
    title: "进行中",
    icon: Clock,
    iconColor: "text-chart-1",
    tasks: [
      {
        id: "t4",
        title: "用户权限模块重构",
        description: "将 RBAC 迁移到 ABAC 模型，支持更细粒度的权限控制",
        tags: [
          { label: "后端", variant: "secondary" },
          { label: "P0", variant: "destructive" },
        ],
        assignee: { name: "杨向荣", initials: "杨" },
        priority: "high",
      },
      {
        id: "t5",
        title: "仪表盘数据可视化",
        description: "实现首页 Dashboard 的图表组件和实时数据刷新",
        tags: [{ label: "前端", variant: "secondary" }],
        assignee: { name: "吴时婧", initials: "吴" },
        priority: "medium",
      },
    ],
  },
  {
    id: "done",
    title: "已完成",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    tasks: [
      {
        id: "t6",
        title: "登录流程优化",
        description: "新增微信扫码登录和短信验证码登录方式",
        tags: [
          { label: "前端", variant: "secondary" },
          { label: "后端", variant: "secondary" },
        ],
        assignee: { name: "张福浩", initials: "张" },
      },
      {
        id: "t7",
        title: "性能基准测试",
        description: "完成核心接口的压测报告，P99 延迟 < 200ms",
        tags: [{ label: "测试", variant: "outline" }],
        assignee: { name: "汪杰", initials: "汪" },
      },
    ],
  },
];

const priorityColors: Record<string, string> = {
  high: "border-l-red-500",
  medium: "border-l-amber-500",
  low: "border-l-blue-500",
};

export function KanbanBoard() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {columns.map((col) => {
        const Icon = col.icon;
        return (
          <div key={col.id} className="flex flex-col gap-3">
            {/* 列头 */}
            <div className="flex items-center gap-2 px-1">
              <Icon className={`h-4 w-4 ${col.iconColor}`} />
              <span className="text-sm font-medium">{col.title}</span>
              <Badge variant="secondary" className="ml-auto text-xs">
                {col.tasks.length}
              </Badge>
            </div>

            {/* 任务卡片 */}
            <div className="flex flex-col gap-2">
              {col.tasks.map((task) => (
                <Card
                  key={task.id}
                  className={`border-l-2 p-3 ${
                    task.priority ? priorityColors[task.priority] : "border-l-transparent"
                  }`}
                >
                  <p className="text-sm font-medium leading-snug">{task.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {task.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {task.tags.map((tag) => (
                        <Badge
                          key={tag.label}
                          variant={tag.variant}
                          className="text-[10px] px-1.5 py-0"
                        >
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                    <Avatar size="sm">
                      <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
