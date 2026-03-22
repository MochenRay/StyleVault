"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  MoreHorizontal,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

const stats = [
  { label: "总营收", value: "¥128,450", change: "+12.5%", up: true, icon: DollarSign, color: "bg-primary/10 text-primary" },
  { label: "活跃用户", value: "2,834", change: "+8.2%", up: true, icon: Users, color: "bg-chart-2/10 text-chart-2" },
  { label: "转化率", value: "3.24%", change: "-0.4%", up: false, icon: Activity, color: "bg-chart-3/10 text-chart-3" },
  { label: "订单量", value: "1,245", change: "+5.7%", up: true, icon: ShoppingCart, color: "bg-chart-4/10 text-chart-4" },
];

const barData = [
  { month: "1月", value: 4200 },
  { month: "2月", value: 3800 },
  { month: "3月", value: 5100 },
  { month: "4月", value: 4600 },
  { month: "5月", value: 6200 },
  { month: "6月", value: 5800 },
];

const lineData = [30, 45, 35, 60, 50, 75, 65, 85, 70, 90, 80, 95];
const lineMonths = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

const orders = [
  { id: "ORD-001", customer: "张三", product: "Pro 套餐", amount: "¥2,999", status: "已完成" },
  { id: "ORD-002", customer: "李四", product: "基础版", amount: "¥599", status: "进行中" },
  { id: "ORD-003", customer: "王五", product: "企业版", amount: "¥9,999", status: "已完成" },
  { id: "ORD-004", customer: "赵六", product: "Pro 套餐", amount: "¥2,999", status: "待支付" },
  { id: "ORD-005", customer: "孙七", product: "基础版", amount: "¥599", status: "已完成" },
];

const statusStyle: Record<string, string> = {
  已完成: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  进行中: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  待支付: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

function MiniBarChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...barData.map((d) => d.value));

  return (
    <div className="flex items-end gap-2 h-[180px] px-2 pt-4">
      {barData.map((item, i) => (
        <div key={item.month} className="flex-1 flex flex-col items-center gap-1" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
          {hovered === i && <span className="text-xs font-medium">¥{item.value.toLocaleString()}</span>}
          <div className={`w-full rounded-t-md transition-all ${hovered === i ? "bg-primary" : "bg-primary/60"}`} style={{ height: `${(item.value / max) * 140}px` }} />
          <span className="text-[10px] text-muted-foreground">{item.month}</span>
        </div>
      ))}
    </div>
  );
}

function MiniLineChart() {
  const w = 400, h = 160, p = 20;
  const max = Math.max(...lineData);
  const stepX = (w - p * 2) / (lineData.length - 1);
  const path = lineData.map((v, i) => `${i === 0 ? "M" : "L"} ${p + i * stepX} ${h - p - (v / max) * (h - p * 2)}`).join(" ");
  const areaPath = `${path} L ${p + (lineData.length - 1) * stepX} ${h - p} L ${p} ${h - p} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[180px]">
      <defs>
        <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="[stop-color:oklch(var(--chart-2))]" stopOpacity="0.3" />
          <stop offset="100%" className="[stop-color:oklch(var(--chart-2))]" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 0.25, 0.5, 0.75, 1].map((t) => <line key={t} x1={p} y1={h - p - t * (h - p * 2)} x2={w - p} y2={h - p - t * (h - p * 2)} className="stroke-border/20" strokeDasharray="4 4" />)}
      <path d={areaPath} fill="url(#dashGrad)" />
      <path d={path} fill="none" className="stroke-chart-2" strokeWidth="2" strokeLinecap="round" />
      {lineMonths.map((m, i) => i % 3 === 0 ? <text key={m} x={p + i * stepX} y={h - 2} textAnchor="middle" className="fill-muted-foreground" fontSize="10">{m}</text> : null)}
    </svg>
  );
}

export default function DashboardTemplatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">仪表板</h1>
            <p className="text-sm text-muted-foreground">数据概览与业务分析</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5"><Calendar className="h-3.5 w-3.5" />最近 30 天</Button>
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="h-3.5 w-3.5" />筛选</Button>
            <Button size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" />导出</Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}`}><stat.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={`gap-0.5 text-xs ${stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                  {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}{stat.change}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2"><h3 className="text-sm font-medium">月度营收</h3><Badge variant="secondary" className="text-xs">柱状图</Badge></div>
            <MiniBarChart />
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2"><h3 className="text-sm font-medium">用户增长趋势</h3><Badge variant="secondary" className="text-xs">折线图</Badge></div>
            <MiniLineChart />
          </Card>
        </div>

        <Card>
          <div className="flex items-center justify-between border-b border-border/50 px-5 py-3">
            <h3 className="text-sm font-medium">最近订单</h3>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">查看全部</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>订单号</TableHead><TableHead>客户</TableHead><TableHead>产品</TableHead><TableHead>金额</TableHead><TableHead>状态</TableHead><TableHead className="w-[50px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">{order.id}</TableCell>
                  <TableCell className="font-medium">{order.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{order.product}</TableCell>
                  <TableCell className="font-medium">{order.amount}</TableCell>
                  <TableCell><span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusStyle[order.status]}`}>{order.status}</span></TableCell>
                  <TableCell><Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-3.5 w-3.5" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
