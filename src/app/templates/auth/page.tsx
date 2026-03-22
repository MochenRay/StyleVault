"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Mail, Lock, Github, Chrome } from "lucide-react";

type Variant = "centered" | "split" | "social";

function CenteredLogin() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="flex min-h-[500px] items-center justify-center bg-secondary/20 rounded-lg p-6">
      <Card className="w-full max-w-sm p-6">
        <div className="text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
            S
          </div>
          <h2 className="mt-4 text-xl font-bold">欢迎回来</h2>
          <p className="mt-1 text-sm text-muted-foreground">请登录您的账号</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="c-email">邮箱</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="c-email" type="email" placeholder="you@example.com" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-pwd">密码</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="c-pwd" type={showPwd ? "text" : "password"} placeholder="••••••••" className="pl-9 pr-9" />
              <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox />
              记住我
            </label>
            <a href="#" className="text-sm text-primary hover:underline">忘记密码？</a>
          </div>
          <Button className="w-full">登录</Button>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          还没有账号？<a href="#" className="text-primary hover:underline">立即注册</a>
        </p>
      </Card>
    </div>
  );
}

function SplitLogin() {
  return (
    <div className="flex min-h-[500px] overflow-hidden rounded-lg border border-border/50">
      {/* 左侧品牌区 */}
      <div className="hidden sm:flex sm:w-1/2 flex-col justify-between bg-primary p-8 text-primary-foreground">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground/20 font-bold">
          S
        </div>
        <div>
          <h2 className="text-2xl font-bold">开始你的旅程</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">
            加入超过 10,000 名开发者的社区，一起构建更好的产品。
          </p>
        </div>
        <p className="text-xs text-primary-foreground/50">© 2026 StyleVault</p>
      </div>
      {/* 右侧表单 */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-xs space-y-4">
          <div>
            <h2 className="text-xl font-bold">创建账号</h2>
            <p className="mt-1 text-sm text-muted-foreground">填写以下信息完成注册</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="s-name">姓名</Label>
            <Input id="s-name" placeholder="你的名字" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="s-email">邮箱</Label>
            <Input id="s-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="s-pwd">密码</Label>
            <Input id="s-pwd" type="password" placeholder="至少 8 位" />
          </div>
          <Button className="w-full">注册</Button>
          <p className="text-center text-sm text-muted-foreground">
            已有账号？<a href="#" className="text-primary hover:underline">登录</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialLogin() {
  return (
    <div className="flex min-h-[500px] items-center justify-center bg-secondary/20 rounded-lg p-6">
      <Card className="w-full max-w-sm p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold">登录</h2>
          <p className="mt-1 text-sm text-muted-foreground">选择一种方式继续</p>
        </div>
        <div className="mt-6 space-y-3">
          <Button variant="outline" className="w-full gap-2">
            <Github className="h-4 w-4" />
            使用 GitHub 登录
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Chrome className="h-4 w-4" />
            使用 Google 登录
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            使用 X 登录
          </Button>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">或使用邮箱</span>
          <Separator className="flex-1" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="space-y-2">
            <Label htmlFor="social-email">邮箱</Label>
            <Input id="social-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="social-pwd">密码</Label>
            <Input id="social-pwd" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">登录</Button>
        </div>
      </Card>
    </div>
  );
}

const variants: { key: Variant; label: string }[] = [
  { key: "centered", label: "居中卡片" },
  { key: "split", label: "左右分栏" },
  { key: "social", label: "社交登录" },
];

export default function AuthTemplatePage() {
  const [active, setActive] = useState<Variant>("centered");

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-xl font-bold">登录 / 注册</h1>
        <p className="mt-1 text-sm text-muted-foreground">三种常见的认证页面变体</p>
      </div>

      <div className="flex gap-2">
        {variants.map((v) => (
          <button
            key={v.key}
            onClick={() => setActive(v.key)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              active === v.key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {v.label}
          </button>
        ))}
      </div>

      {active === "centered" && <CenteredLogin />}
      {active === "split" && <SplitLogin />}
      {active === "social" && <SocialLogin />}
    </div>
  );
}
