"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileQuestion,
  ServerCrash,
  ShieldOff,
  Home,
  RefreshCw,
  Mail,
  Ghost,
  Flame,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";

const errorPages = [
  {
    code: "404",
    title: "页面未找到",
    label: "Not Found",
    desc: "你访问的页面不存在或已被移动。请检查 URL 是否正确，或返回首页重新导航。",
    color: "text-primary",
    bgColor: "bg-primary/10",
    iconMain: FileQuestion,
    iconDeco: Ghost,
    buttonText: "返回首页",
    buttonIcon: Home,
    buttonVariant: "default" as const,
  },
  {
    code: "500",
    title: "服务器错误",
    label: "Internal Server Error",
    desc: "服务器遇到了意外问题，我们的团队已收到通知并正在处理。请稍后重试。",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    iconMain: ServerCrash,
    iconDeco: Flame,
    buttonText: "重新加载",
    buttonIcon: RefreshCw,
    buttonVariant: "default" as const,
  },
  {
    code: "403",
    title: "无访问权限",
    label: "Forbidden",
    desc: "你没有权限访问此资源。如果你认为这是一个错误，请联系管理员获取访问权限。",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    iconMain: ShieldOff,
    iconDeco: Lock,
    buttonText: "联系管理员",
    buttonIcon: Mail,
    buttonVariant: "outline" as const,
  },
];

export default function ErrorPagesTemplatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 px-6 py-4">
        <h1 className="text-xl font-bold">错误页面</h1>
        <p className="text-sm text-muted-foreground">三种常见错误页面的设计展示</p>
      </div>

      <div className="p-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {errorPages.map((page, i) => (
            <motion.div
              key={page.code}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Section label */}
              <div className="mb-3 flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">
                  {page.code}
                </Badge>
                <span className="text-sm text-muted-foreground">{page.label}</span>
              </div>

              {/* Error page card */}
              <Card className="overflow-hidden">
                <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
                  {/* Background decoration */}
                  <div className="absolute inset-0 grid-bg opacity-20" />

                  {/* Floating decoration icon */}
                  <motion.div
                    className="absolute right-8 top-8 hidden sm:block"
                    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <page.iconDeco className={`h-8 w-8 ${page.color} opacity-20`} />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-8 hidden sm:block"
                    animate={{ y: [0, 6, 0], rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <page.iconDeco className={`h-6 w-6 ${page.color} opacity-15`} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    {/* Big number */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                      className={`text-[8rem] font-black leading-none tracking-tighter ${page.color} opacity-10 sm:text-[10rem]`}
                    >
                      {page.code}
                    </motion.div>

                    {/* Icon + text overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${page.bgColor}`}
                      >
                        <page.iconMain className={`h-8 w-8 ${page.color}`} />
                      </motion.div>

                      <h2 className="mt-4 text-2xl font-bold">{page.title}</h2>
                      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                        {page.desc}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <Button variant={page.buttonVariant} className="gap-2">
                          <page.buttonIcon className="h-4 w-4" />
                          {page.buttonText}
                        </Button>
                        <Button variant="ghost" className="gap-2">
                          <Home className="h-4 w-4" />
                          返回首页
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
