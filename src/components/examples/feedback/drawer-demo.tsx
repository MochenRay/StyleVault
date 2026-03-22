"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { PanelRight, PanelBottom, PanelLeft, FileEdit, Minus, Plus } from "lucide-react";
import { useState } from "react";

export function DrawerDemo() {
  const [goal, setGoal] = useState(25);

  return (
    <div className="flex flex-wrap gap-3">
      {/* 右侧详情面板 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2">
            <PanelRight className="h-4 w-4" />
            右侧详情
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>项目详情</SheetTitle>
            <SheetDescription>
              查看和编辑项目的基本信息。
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-6">
            <div className="space-y-1">
              <p className="text-sm font-medium">项目名称</p>
              <p className="text-sm text-muted-foreground">StyleVault 样式展示库</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium">技术栈</p>
              <p className="text-sm text-muted-foreground">Next.js 16 + Tailwind v4 + shadcn/ui</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium">创建时间</p>
              <p className="text-sm text-muted-foreground">2026-03-20</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium">状态</p>
              <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                进行中
              </span>
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline">关闭</Button>
            <Button>保存修改</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* 底部操作面板（Drawer） */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="gap-2">
            <PanelBottom className="h-4 w-4" />
            底部面板
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>调整目标</DrawerTitle>
              <DrawerDescription>设置你的每日学习目标（分钟）。</DrawerDescription>
            </DrawerHeader>
            <div className="flex items-center justify-center gap-4 py-4">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setGoal(Math.max(5, goal - 5))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <div className="text-5xl font-bold tracking-tighter">{goal}</div>
                <div className="text-sm text-muted-foreground">分钟/天</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setGoal(Math.min(120, goal + 5))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <DrawerFooter>
              <Button>确认设置</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {/* 左侧导航面板 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2">
            <PanelLeft className="h-4 w-4" />
            左侧导航
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>导航菜单</SheetTitle>
            <SheetDescription>快速跳转到各个模块。</SheetDescription>
          </SheetHeader>
          <nav className="space-y-1 py-6">
            {["首页概览", "组件库", "页面模板", "动效示例", "设计系统", "更新日志"].map(
              (item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              )
            )}
          </nav>
        </SheetContent>
      </Sheet>

      {/* 带表单的抽屉 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2">
            <FileEdit className="h-4 w-4" />
            表单面板
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>编辑个人信息</SheetTitle>
            <SheetDescription>
              修改你的个人资料，点击保存后生效。
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-6">
            <div className="grid gap-2">
              <Label htmlFor="drawer-name">姓名</Label>
              <Input id="drawer-name" placeholder="请输入姓名" defaultValue="李雷" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-email">邮箱</Label>
              <Input id="drawer-email" type="email" placeholder="name@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-bio">个人简介</Label>
              <Input id="drawer-bio" placeholder="一句话介绍自己" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-role">角色</Label>
              <Input id="drawer-role" placeholder="如：产品经理" />
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline">取消</Button>
            <Button>保存修改</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
