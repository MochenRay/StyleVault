"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const sparklineData = [35, 50, 40, 70, 55, 80, 65, 90, 75, 95];

function Sparkline({ data, color = "var(--primary)" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 32;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* 基础数值卡 */}
      <Card className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">总营收</p>
            <p className="text-2xl font-bold">¥128,450</p>
          </div>
        </div>
      </Card>

      {/* 带涨跌趋势 */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10">
              <Users className="h-5 w-5 text-chart-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">活跃用户</p>
              <p className="text-2xl font-bold">2,834</p>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="h-3 w-3" />
            +12.5%
          </Badge>
        </div>
      </Card>

      {/* 带 Sparkline */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
              <Activity className="h-5 w-5 text-chart-3" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">转化率</p>
              <p className="text-2xl font-bold">3.24%</p>
            </div>
          </div>
          <Sparkline data={sparklineData} />
        </div>
      </Card>

      {/* 带进度条 */}
      <Card className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
            <ShoppingCart className="h-5 w-5 text-chart-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">月度目标</p>
              <Badge variant="secondary" className="gap-1 text-red-500 dark:text-red-400">
                <TrendingDown className="h-3 w-3" />
                -3.2%
              </Badge>
            </div>
            <p className="text-2xl font-bold">1,245</p>
            <div className="mt-2 flex items-center gap-2">
              <Progress value={62} className="h-1.5" />
              <span className="text-xs text-muted-foreground">62%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
