"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info, Trash2, UserPlus } from "lucide-react";

export function DialogDemos() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      {/* 信息弹窗 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Info className="h-4 w-4" />
            信息弹窗
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>关于 StyleVault</DialogTitle>
            <DialogDescription>
              StyleVault 是一个现代化的前端组件样式展示库，收录精选的 UI 组件和页面模板，
              作为日常开发的视觉灵感来源。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">了解更多</Button>
            <Button>知道了</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 确认删除 */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="gap-2">
            <Trash2 className="h-4 w-4" />
            确认删除
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确定要删除吗？</AlertDialogTitle>
            <AlertDialogDescription>
              此操作无法撤销。删除后，该项目及其所有关联数据将被永久移除。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              确认删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 表单弹窗 */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogTrigger asChild>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            表单弹窗
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>添加成员</DialogTitle>
            <DialogDescription>
              填写以下信息来邀请新成员加入团队。
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="member-name">姓名</Label>
              <Input id="member-name" placeholder="请输入姓名" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="member-email">邮箱</Label>
              <Input id="member-email" type="email" placeholder="name@example.com" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFormOpen(false)}>
              取消
            </Button>
            <Button onClick={() => setFormOpen(false)}>发送邀请</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
