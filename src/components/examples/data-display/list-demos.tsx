"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Image,
  Music,
  Video,
  Download,
  Trash2,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function ListDemos() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* 基础列表 - 带图标 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础列表</h4>
        <div className="rounded-lg border border-border/50 divide-y divide-border/50">
          {[
            { icon: FileText, label: "项目文档.pdf", meta: "2.4 MB" },
            { icon: Image, label: "封面设计.png", meta: "1.8 MB" },
            { icon: Music, label: "背景音乐.mp3", meta: "5.2 MB" },
            { icon: Video, label: "演示视频.mp4", meta: "24.1 MB" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-3">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 text-sm">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 带描述的列表 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带描述</h4>
        <div className="rounded-lg border border-border/50 divide-y divide-border/50">
          {[
            {
              icon: Star,
              label: "代码审查",
              desc: "修复支付模块的边界条件",
              badge: "紧急",
              badgeVariant: "destructive" as const,
            },
            {
              icon: Clock,
              label: "接口对接",
              desc: "与第三方支付平台联调",
              badge: "进行中",
              badgeVariant: "default" as const,
            },
            {
              icon: CheckCircle2,
              label: "单元测试",
              desc: "补充订单模块测试覆盖率",
              badge: "已完成",
              badgeVariant: "secondary" as const,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 px-4 py-3">
              <item.icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <Badge variant={item.badgeVariant} className="text-[10px] px-1.5 py-0">
                    {item.badge}
                  </Badge>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 带操作按钮 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带操作</h4>
        <div className="rounded-lg border border-border/50 divide-y divide-border/50">
          {[
            { label: "周报模板.docx", size: "156 KB", date: "3月18日" },
            { label: "数据导出.xlsx", size: "2.1 MB", date: "3月17日" },
            { label: "会议纪要.pdf", size: "890 KB", date: "3月15日" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.label}</p>
                <p className="text-xs text-muted-foreground">
                  {item.size} · {item.date}
                </p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Download className="h-3.5 w-3.5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
