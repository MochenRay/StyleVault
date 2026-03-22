"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Mail, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useState } from "react";

export function TextInputs() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* 基础输入框 */}
      <div className="space-y-2">
        <Label htmlFor="basic">基础输入框</Label>
        <Input id="basic" placeholder="请输入内容..." />
      </div>

      {/* 带图标 */}
      <div className="space-y-2">
        <Label htmlFor="with-icon">带搜索图标</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="with-icon" placeholder="搜索..." className="pl-9" />
        </div>
      </div>

      {/* 带前缀 */}
      <div className="space-y-2">
        <Label htmlFor="with-prefix">带前缀</Label>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-secondary px-3 text-sm text-muted-foreground">
            https://
          </span>
          <Input
            id="with-prefix"
            placeholder="example.com"
            className="rounded-l-none"
          />
        </div>
      </div>

      {/* 邮箱输入 */}
      <div className="space-y-2">
        <Label htmlFor="email">邮箱输入</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-9"
          />
        </div>
      </div>

      {/* 密码输入 */}
      <div className="space-y-2">
        <Label htmlFor="password">密码输入</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="请输入密码"
            defaultValue="mypassword123"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* 禁用态 */}
      <div className="space-y-2">
        <Label htmlFor="disabled">禁用态</Label>
        <Input
          id="disabled"
          placeholder="不可编辑"
          disabled
          defaultValue="已禁用的内容"
        />
      </div>

      {/* 错误态 */}
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="error" className="text-destructive">
          错误态
        </Label>
        <div className="relative">
          <Input
            id="error"
            placeholder="请输入有效邮箱"
            defaultValue="invalid-email"
            className="border-destructive/50 focus-visible:ring-destructive/30"
          />
          <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />
        </div>
        <p className="text-xs text-destructive">请输入有效的邮箱地址</p>
      </div>
    </div>
  );
}
