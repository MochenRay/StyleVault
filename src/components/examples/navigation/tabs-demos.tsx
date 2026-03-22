"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Settings, Bell } from "lucide-react";

export function TabsDemos() {
  return (
    <div className="space-y-8">
      {/* 基础标签页 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础标签</h4>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="analytics">分析</TabsTrigger>
            <TabsTrigger value="reports">报表</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            这里是概览面板的内容。展示核心指标和快捷操作入口。
          </TabsContent>
          <TabsContent value="analytics" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            这里是分析面板的内容。展示趋势图表和数据洞察。
          </TabsContent>
          <TabsContent value="reports" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            这里是报表面板的内容。支持导出和定期发送。
          </TabsContent>
        </Tabs>
      </div>

      {/* 带图标 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带图标</h4>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile" className="gap-1.5">
              <User className="h-3.5 w-3.5" />
              个人资料
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-1.5">
              <Bell className="h-3.5 w-3.5" />
              通知
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-1.5">
              <Settings className="h-3.5 w-3.5" />
              设置
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            管理你的个人信息、头像和简介。
          </TabsContent>
          <TabsContent value="notifications" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            配置通知偏好和免打扰时段。
          </TabsContent>
          <TabsContent value="settings" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            账号安全、语言和主题偏好设置。
          </TabsContent>
        </Tabs>
      </div>

      {/* 带 Badge */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带计数</h4>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all" className="gap-1.5">
              全部
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-[10px]">
                128
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="unread" className="gap-1.5">
              未读
              <Badge className="ml-1 px-1.5 py-0 text-[10px]">
                5
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="archived" className="gap-1.5">
              已归档
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            所有消息列表。
          </TabsContent>
          <TabsContent value="unread" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            5 条未读消息。
          </TabsContent>
          <TabsContent value="archived" className="mt-3 rounded-md border border-border/50 p-4 text-sm text-muted-foreground">
            已归档的消息。
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
