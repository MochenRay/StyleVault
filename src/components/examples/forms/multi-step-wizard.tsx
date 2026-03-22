"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const steps = [
  { id: 1, title: "基本信息" },
  { id: 2, title: "偏好设置" },
  { id: 3, title: "确认提交" },
];

interface FormData {
  name: string;
  email: string;
  role: string;
  theme: string;
  newsletter: boolean;
  language: string;
}

export function MultiStepWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    theme: "",
    newsletter: true,
    language: "",
  });

  const progress = submitted ? 100 : ((currentStep - 1) / steps.length) * 100;

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      role: "",
      theme: "",
      newsletter: true,
      language: "",
    });
  };

  return (
    <div className="space-y-6">
      {/* 进度条 */}
      <Progress value={progress} className="h-2" />

      {/* 步骤指示器 */}
      <div className="flex items-center justify-between">
        {steps.map((step, idx) => {
          const isCompleted = submitted || currentStep > step.id;
          const isCurrent = !submitted && currentStep === step.id;

          return (
            <div key={step.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent && "border-primary text-primary",
                    !isCompleted &&
                      !isCurrent &&
                      "border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <span
                  className={cn(
                    "text-xs",
                    isCurrent
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <Separator
                  className={cn(
                    "mx-4 flex-1",
                    isCompleted ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      <Separator />

      {/* 步骤内容 */}
      <div className="min-h-[200px]">
        {/* 步骤 1：基本信息 */}
        {!submitted && currentStep === 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="wizard-name">姓名</Label>
              <Input
                id="wizard-name"
                placeholder="请输入姓名"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wizard-email">邮箱</Label>
              <Input
                id="wizard-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>角色</Label>
              <Select
                value={formData.role}
                onValueChange={(v) => updateField("role", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择你的角色" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">开发者 Developer</SelectItem>
                  <SelectItem value="designer">设计师 Designer</SelectItem>
                  <SelectItem value="pm">产品经理 PM</SelectItem>
                  <SelectItem value="other">其他 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* 步骤 2：偏好设置 */}
        {!submitted && currentStep === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>主题偏好</Label>
              <Select
                value={formData.theme}
                onValueChange={(v) => updateField("theme", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">浅色 Light</SelectItem>
                  <SelectItem value="dark">深色 Dark</SelectItem>
                  <SelectItem value="system">跟随系统 System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>语言</Label>
              <Select
                value={formData.language}
                onValueChange={(v) => updateField("language", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh-CN">简体中文</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="ja-JP">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3 sm:col-span-2">
              <Switch
                id="wizard-newsletter"
                checked={formData.newsletter}
                onCheckedChange={(v) => updateField("newsletter", v as boolean)}
              />
              <Label htmlFor="wizard-newsletter">订阅邮件通知</Label>
            </div>
          </div>
        )}

        {/* 步骤 3：确认提交 */}
        {!submitted && currentStep === 3 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              请确认以下信息无误后提交：
            </p>
            <div className="rounded-md border p-4">
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground">姓名</dt>
                  <dd className="font-medium">{formData.name || "未填写"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">邮箱</dt>
                  <dd className="font-medium">{formData.email || "未填写"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">角色</dt>
                  <dd className="font-medium">{formData.role || "未选择"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">主题</dt>
                  <dd className="font-medium">{formData.theme || "未选择"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">语言</dt>
                  <dd className="font-medium">
                    {formData.language || "未选择"}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">邮件通知</dt>
                  <dd className="font-medium">
                    {formData.newsletter ? "已订阅" : "未订阅"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        {/* 提交成功 */}
        {submitted && (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">提交成功</h3>
              <p className="text-sm text-muted-foreground">
                表单已模拟提交，数据不会被实际保存。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex justify-between">
        {!submitted ? (
          <>
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              上一步
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? "提交" : "下一步"}
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={handleReset} className="mx-auto">
            重新开始
          </Button>
        )}
      </div>
    </div>
  );
}
