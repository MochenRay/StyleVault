"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "活跃" | "离线" | "已禁用";
};

const users: User[] = [
  { id: 1, name: "张三", email: "zhangsan@example.com", role: "管理员", status: "活跃" },
  { id: 2, name: "李四", email: "lisi@example.com", role: "编辑", status: "活跃" },
  { id: 3, name: "王五", email: "wangwu@example.com", role: "查看者", status: "离线" },
  { id: 4, name: "赵六", email: "zhaoliu@example.com", role: "编辑", status: "已禁用" },
  { id: 5, name: "孙七", email: "sunqi@example.com", role: "查看者", status: "活跃" },
];

const statusVariant: Record<User["status"], "default" | "secondary" | "destructive"> = {
  活跃: "default",
  离线: "secondary",
  已禁用: "destructive",
};

export function DataTable() {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sorted = [...users].sort((a, b) =>
    sortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div className="rounded-lg border border-border/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>
              <button
                onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                姓名
                <ArrowUpDown className="h-3.5 w-3.5" />
              </button>
            </TableHead>
            <TableHead>邮箱</TableHead>
            <TableHead>角色</TableHead>
            <TableHead>状态</TableHead>
            <TableHead className="w-[60px]">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((user, i) => (
            <TableRow
              key={user.id}
              className={i % 2 === 1 ? "bg-muted/30" : ""}
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge variant={statusVariant[user.status]} className="text-xs">
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t border-border/50 px-4 py-3 text-sm text-muted-foreground">
        <span>显示 1-5 共 20 条</span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>
            上一页
          </Button>
          <Button variant="outline" size="sm">
            下一页
          </Button>
        </div>
      </div>
    </div>
  );
}
