"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { User, Bell, Lock, AlertTriangle } from "lucide-react";

const sections = [
  { id: "profile", label: "个人信息", icon: User },
  { id: "notifications", label: "通知设置", icon: Bell },
  { id: "security", label: "安全", icon: Lock },
  { id: "danger", label: "危险操作", icon: AlertTriangle },
];

export default function FormPageTemplatePage() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-xl font-bold">设置</h1>
        <p className="mt-1 text-sm text-muted-foreground">管理你的账号信息和偏好</p>
      </div>

      <div className="flex gap-8">
        {/* 左侧导航 */}
        <nav className="hidden md:block w-48 shrink-0 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                activeSection === section.id
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <section.icon className="h-4 w-4" />
              {section.label}
            </button>
          ))}
        </nav>

        {/* 右侧表单 */}
        <div className="flex-1 max-w-2xl space-y-8">
          {/* 个人信息 */}
          <Card id="profile" className="p-6">
            <h2 className="font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              个人信息
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">更新你的头像和个人资料</p>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  李
                </div>
                <div>
                  <Button variant="outline" size="sm">更换头像</Button>
                  <p className="mt-1 text-xs text-muted-foreground">支持 JPG, PNG, 最大 2MB</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">姓</Label>
                  <Input id="first-name" defaultValue="李" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">名</Label>
                  <Input id="last-name" defaultValue="雷" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">个人简介</Label>
                <Textarea id="bio" placeholder="简单介绍一下自己..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-email">邮箱</Label>
                <Input id="settings-email" type="email" defaultValue="rayli@example.com" />
              </div>
              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </div>
          </Card>

          {/* 通知设置 */}
          <Card id="notifications" className="p-6">
            <h2 className="font-semibold flex items-center gap-2">
              <Bell className="h-4 w-4" />
              通知设置
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">选择你希望收到的通知类型</p>
            <Separator className="my-4" />
            <div className="space-y-4">
              {[
                { label: "邮件通知", desc: "接收重要更新和周报", defaultChecked: true },
                { label: "推送通知", desc: "浏览器和移动端推送", defaultChecked: true },
                { label: "营销邮件", desc: "新功能和促销信息", defaultChecked: false },
                { label: "安全提醒", desc: "异常登录和密码变更", defaultChecked: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.defaultChecked} />
                </div>
              ))}
            </div>
          </Card>

          {/* 安全 */}
          <Card id="security" className="p-6">
            <h2 className="font-semibold flex items-center gap-2">
              <Lock className="h-4 w-4" />
              安全
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">管理密码和安全选项</p>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-pwd">当前密码</Label>
                <Input id="current-pwd" type="password" placeholder="••••••••" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-pwd">新密码</Label>
                  <Input id="new-pwd" type="password" placeholder="至少 8 位" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-pwd">确认新密码</Label>
                  <Input id="confirm-pwd" type="password" placeholder="再次输入" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>更新密码</Button>
              </div>
            </div>
          </Card>

          {/* 危险操作 */}
          <Card id="danger" className="border-destructive/30 p-6">
            <h2 className="font-semibold flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-4 w-4" />
              危险操作
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">以下操作不可逆，请谨慎执行</p>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">导出数据</p>
                  <p className="text-xs text-muted-foreground">下载你的所有数据的副本</p>
                </div>
                <Button variant="outline" size="sm">导出</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-destructive">删除账号</p>
                  <p className="text-xs text-muted-foreground">永久删除你的账号和所有数据</p>
                </div>
                <Button variant="destructive" size="sm">删除账号</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
