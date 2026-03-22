"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings, CalendarDays, Compass, MessageCircle } from "lucide-react";

export function PopoverDemo() {
  return (
    <div className="space-y-8">
      {/* 基础 Popover */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础弹出层</h4>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              打开设置
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">尺寸</h4>
                <p className="text-sm text-muted-foreground">
                  设置组件的默认宽高。
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">宽度</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">高度</Label>
                  <Input id="height" defaultValue="auto" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">最大宽度</Label>
                  <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* 带表单的 Popover */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">带表单的弹出层</h4>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              日期范围
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">选择日期范围</h4>
                <p className="text-sm text-muted-foreground">
                  设定查询的起止日期。
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="start-date">开始日期</Label>
                  <Input id="start-date" type="date" defaultValue="2026-03-01" className="h-8" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="end-date">结束日期</Label>
                  <Input id="end-date" type="date" defaultValue="2026-03-23" className="h-8" />
                </div>
              </div>
              <Button size="sm">应用</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* 不同方向 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">不同弹出方向</h4>
        <div className="flex flex-wrap items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">上方</Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-60">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">从上方弹出的内容面板</p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">下方</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" className="w-60">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">从下方弹出的内容面板</p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">左侧</Button>
            </PopoverTrigger>
            <PopoverContent side="left" className="w-60">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">从左侧弹出的内容面板</p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">右侧</Button>
            </PopoverTrigger>
            <PopoverContent side="right" className="w-60">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">从右侧弹出的内容面板</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
