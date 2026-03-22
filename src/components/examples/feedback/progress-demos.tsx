"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

function AnimatedProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">上传中...</span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );
}

function StepProgress() {
  const steps = ["选择计划", "填写信息", "确认支付"];
  const currentStep = 1; // 0-indexed

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
                i < currentStep
                  ? "bg-primary text-primary-foreground"
                  : i === currentStep
                    ? "border-2 border-primary text-primary"
                    : "border border-border text-muted-foreground"
              }`}
            >
              {i < currentStep ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`text-sm ${
                i <= currentStep ? "font-medium" : "text-muted-foreground"
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`h-px w-8 ${
                i < currentStep ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function CircularProgress({ value, size = 80 }: { value: number; size?: number }) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-secondary"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-primary"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <span className="absolute text-sm font-semibold">{value}%</span>
    </div>
  );
}

export function ProgressDemos() {
  return (
    <div className="space-y-8">
      {/* 静态进度条 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">静态进度</h4>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>存储空间</span>
              <span className="text-muted-foreground">7.2 / 10 GB</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>任务完成</span>
              <span className="text-muted-foreground">18 / 24</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </div>
      </div>

      {/* 动画进度 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">动画加载</h4>
        <AnimatedProgress />
      </div>

      {/* 分步进度 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">分步进度</h4>
        <StepProgress />
      </div>

      {/* 环形进度 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">环形进度</h4>
        <div className="flex items-center gap-6">
          <CircularProgress value={25} />
          <CircularProgress value={62} />
          <CircularProgress value={88} />
        </div>
      </div>
    </div>
  );
}
