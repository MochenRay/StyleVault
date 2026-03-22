"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Users,
  AlertTriangle,
  Camera,
  Monitor,
  Smartphone,
  Trash2,
  Plus,
  Download,
  MoreHorizontal,
} from "lucide-react";

type TabKey = "profile" | "notifications" | "security" | "billing" | "team" | "danger";

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "profile", label: "个人资料", icon: User },
  { key: "notifications", label: "通知设置", icon: Bell },
  { key: "security", label: "安全", icon: Shield },
  { key: "billing", label: "账单", icon: CreditCard },
  { key: "team", label: "团队", icon: Users },
  { key: "danger", label: "危险区域", icon: AlertTriangle },
];

const notificationGroups = [
  {
    title: "产品通知",
    items: [
      { label: "新功能发布", desc: "当有新功能上线时通知你", defaultOn: true },
      { label: "产品更新", desc: "重要的产品变更和维护通知", defaultOn: true },
      { label: "使用报告", desc: "每周发送使用数据摘要", defaultOn: false },
    ],
  },
  {
    title: "团队通知",
    items: [
      { label: "成员变动", desc: "有人加入或离开团队时通知", defaultOn: true },
      { label: "评论和提及", desc: "被@或收到评论时通知", defaultOn: true },
      { label: "任务分配", desc: "有新任务分配给你时通知", defaultOn: true },
    ],
  },
  {
    title: "营销通知",
    items: [
      { label: "促销活动", desc: "特别优惠和折扣信息", defaultOn: false },
      { label: "新闻通讯", desc: "行业资讯和最佳实践", defaultOn: false },
    ],
  },
];

const devices = [
  { name: "MacBook Pro", type: "desktop" as const, location: "上海, 中国", lastActive: "当前活跃", current: true },
  { name: "iPhone 15 Pro", type: "mobile" as const, location: "上海, 中国", lastActive: "2 小时前", current: false },
  { name: "Windows Desktop", type: "desktop" as const, location: "北京, 中国", lastActive: "3 天前", current: false },
];

const invoices = [
  { id: "INV-2024-012", date: "2024-12-01", amount: "¥99.00", status: "已支付" },
  { id: "INV-2024-011", date: "2024-11-01", amount: "¥99.00", status: "已支付" },
  { id: "INV-2024-010", date: "2024-10-01", amount: "¥99.00", status: "已支付" },
  { id: "INV-2024-009", date: "2024-09-01", amount: "¥99.00", status: "已支付" },
];

const teamMembers = [
  { name: "张三", email: "zhangsan@example.com", role: "管理员", avatar: "张" },
  { name: "李四", email: "lisi@example.com", role: "编辑者", avatar: "李" },
  { name: "王五", email: "wangwu@example.com", role: "查看者", avatar: "王" },
  { name: "赵六", email: "zhaoliu@example.com", role: "编辑者", avatar: "赵" },
];

const roleBadgeStyle: Record<string, string> = {
  管理员: "bg-primary/10 text-primary",
  编辑者: "bg-chart-2/10 text-chart-2",
  查看者: "bg-muted-foreground/10 text-muted-foreground",
};

function ProfileTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold">个人资料</h2>
        <p className="text-sm text-muted-foreground">管理你的公开信息和账号资料</p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
            雷
          </div>
          <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border bg-background shadow-sm hover:bg-accent">
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>
        <div>
          <p className="font-medium">上传新头像</p>
          <p className="text-sm text-muted-foreground">支持 JPG、PNG，最大 2MB</p>
        </div>
      </div>

      <Separator />

      {/* Form */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">姓</Label>
          <Input id="firstName" defaultValue="李" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">名</Label>
          <Input id="lastName" defaultValue="雷" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="email">邮箱</Label>
          <Input id="email" type="email" defaultValue="leilei@example.com" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="bio">个人简介</Label>
          <textarea
            id="bio"
            rows={3}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            defaultValue="全栈产品经理，热爱技术与设计的交叉领域。"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">取消</Button>
        <Button>保存更改</Button>
      </div>
    </div>
  );
}

function NotificationsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold">通知设置</h2>
        <p className="text-sm text-muted-foreground">管理你接收通知的方式和频率</p>
      </div>

      {notificationGroups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">{group.title}</h3>
          <Card className="divide-y divide-border/50">
            {group.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.defaultOn} />
              </div>
            ))}
          </Card>
        </div>
      ))}
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold">安全设置</h2>
        <p className="text-sm text-muted-foreground">管理密码、两步验证和登录设备</p>
      </div>

      {/* Change Password */}
      <Card className="p-5">
        <h3 className="font-medium">修改密码</h3>
        <p className="mt-1 text-sm text-muted-foreground">定期更换密码以保证账号安全</p>
        <div className="mt-5 grid gap-4 sm:max-w-md">
          <div className="space-y-2">
            <Label htmlFor="currentPwd">当前密码</Label>
            <Input id="currentPwd" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPwd">新密码</Label>
            <Input id="newPwd" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPwd">确认新密码</Label>
            <Input id="confirmPwd" type="password" />
          </div>
          <Button className="w-fit">更新密码</Button>
        </div>
      </Card>

      {/* 2FA */}
      <Card className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-medium">两步验证</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            启用后，登录时需要额外输入验证码
          </p>
        </div>
        <Switch />
      </Card>

      {/* Devices */}
      <div>
        <h3 className="mb-3 font-medium">登录设备</h3>
        <Card className="divide-y divide-border/50">
          {devices.map((device) => (
            <div key={device.name} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                {device.type === "desktop" ? (
                  <Monitor className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Smartphone className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {device.name}
                    {device.current && (
                      <Badge variant="secondary" className="ml-2 text-[10px]">
                        当前设备
                      </Badge>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {device.location} &middot; {device.lastActive}
                  </p>
                </div>
              </div>
              {!device.current && (
                <Button variant="ghost" size="sm" className="text-xs text-destructive hover:text-destructive">
                  移除
                </Button>
              )}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function BillingTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold">账单管理</h2>
        <p className="text-sm text-muted-foreground">管理订阅方案和支付信息</p>
      </div>

      {/* Current Plan */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">当前方案</h3>
              <Badge>Pro</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">¥99/月 &middot; 下次续费日期：2025-01-01</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">更换方案</Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">取消订阅</Button>
          </div>
        </div>
      </Card>

      {/* Payment Method */}
      <Card className="p-5">
        <h3 className="mb-4 font-medium">支付方式</h3>
        <div className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-14 items-center justify-center rounded-md bg-background border text-xs font-bold">
              VISA
            </div>
            <div>
              <p className="text-sm font-medium">**** **** **** 4242</p>
              <p className="text-xs text-muted-foreground">有效期 12/2026</p>
            </div>
          </div>
          <Button variant="outline" size="sm">更换</Button>
        </div>
      </Card>

      {/* Invoice History */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-medium">账单历史</h3>
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
            <Download className="h-3.5 w-3.5" />
            导出全部
          </Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>账单号</TableHead>
                <TableHead>日期</TableHead>
                <TableHead>金额</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="w-[50px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-mono text-xs">{inv.id}</TableCell>
                  <TableCell className="text-muted-foreground">{inv.date}</TableCell>
                  <TableCell className="font-medium">{inv.amount}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {inv.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Download className="h-3.5 w-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

function TeamTab() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">团队管理</h2>
          <p className="text-sm text-muted-foreground">邀请成员并管理角色权限</p>
        </div>
        <Button className="gap-1.5">
          <Plus className="h-4 w-4" />
          邀请成员
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>成员</TableHead>
              <TableHead>角色</TableHead>
              <TableHead className="w-[50px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${roleBadgeStyle[member.role]}`}>
                    {member.role}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function DangerZoneTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold">危险区域</h2>
        <p className="text-sm text-muted-foreground">以下操作不可逆，请谨慎操作</p>
      </div>

      <Card className="border-destructive/30 bg-destructive/5 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-destructive">删除账号</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              永久删除你的账号和所有相关数据。此操作无法撤销，所有项目、文件和团队数据都将被清除。
            </p>
            <div className="mt-4 space-y-3">
              <div className="space-y-2">
                <Label htmlFor="confirmDelete" className="text-sm">
                  输入 <span className="font-mono font-bold text-destructive">DELETE</span> 以确认
                </Label>
                <Input
                  id="confirmDelete"
                  placeholder="输入 DELETE"
                  className="max-w-xs border-destructive/30 focus-visible:ring-destructive/30"
                />
              </div>
              <Button variant="destructive" className="gap-1.5">
                <Trash2 className="h-4 w-4" />
                永久删除账号
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

const tabComponents: Record<TabKey, React.FC> = {
  profile: ProfileTab,
  notifications: NotificationsTab,
  security: SecurityTab,
  billing: BillingTab,
  team: TeamTab,
  danger: DangerZoneTab,
};

export default function SettingsTemplatePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const ActiveContent = tabComponents[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 px-6 py-4">
        <h1 className="text-xl font-bold">设置</h1>
        <p className="text-sm text-muted-foreground">管理你的账号设置和偏好</p>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <nav className="hidden w-56 shrink-0 border-r border-border/50 p-4 md:block">
          <ul className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isDanger = tab.key === "danger";
              return (
                <li key={tab.key}>
                  <button
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                      activeTab === tab.key
                        ? isDanger
                          ? "bg-destructive/10 text-destructive font-medium"
                          : "bg-accent text-accent-foreground font-medium"
                        : isDanger
                          ? "text-destructive/70 hover:bg-destructive/5 hover:text-destructive"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile tabs */}
        <div className="flex overflow-x-auto border-b border-border/50 px-4 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 px-3 py-3 text-sm transition-colors ${
                activeTab === tab.key
                  ? "border-b-2 border-primary font-medium text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-2xl">
            <ActiveContent />
          </div>
        </main>
      </div>
    </div>
  );
}
