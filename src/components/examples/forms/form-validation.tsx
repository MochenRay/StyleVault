"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

type FormErrors = Record<string, string>;

export function FormValidation() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
    agree: false,
  });

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "请输入姓名";
    if (!form.email.trim()) errs.email = "请输入邮箱";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "请输入有效的邮箱地址";
    if (!form.role) errs.role = "请选择角色";
    if (!form.message.trim()) errs.message = "请输入留言内容";
    else if (form.message.length < 10) errs.message = "留言至少 10 个字符";
    if (!form.agree) errs.agree = "请同意条款";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      toast.error("表单有错误，请检查后重试");
      return;
    }

    setSubmitting(true);
    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("提交成功！");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-7 w-7 text-teal" />
        </div>
        <h3 className="mt-4 text-lg font-medium">提交成功</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          感谢您的反馈，我们会尽快回复
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", role: "", message: "", agree: false });
          }}
        >
          重新提交
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* 姓名 */}
        <div className="space-y-2">
          <Label htmlFor="v-name">
            姓名 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="v-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={errors.name ? "border-destructive/50" : ""}
            placeholder="张三"
          />
          {errors.name && (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* 邮箱 */}
        <div className="space-y-2">
          <Label htmlFor="v-email">
            邮箱 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="v-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={errors.email ? "border-destructive/50" : ""}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* 角色 */}
      <div className="space-y-2">
        <Label>
          角色 <span className="text-destructive">*</span>
        </Label>
        <Select
          value={form.role}
          onValueChange={(v) => setForm({ ...form, role: v })}
        >
          <SelectTrigger
            className={errors.role ? "border-destructive/50" : ""}
          >
            <SelectValue placeholder="选择角色" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">开发者</SelectItem>
            <SelectItem value="designer">设计师</SelectItem>
            <SelectItem value="pm">产品经理</SelectItem>
            <SelectItem value="other">其他</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && (
          <p className="flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" /> {errors.role}
          </p>
        )}
      </div>

      {/* 留言 */}
      <div className="space-y-2">
        <Label htmlFor="v-message">
          留言 <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="v-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={errors.message ? "border-destructive/50" : ""}
          placeholder="请输入您的反馈..."
          rows={4}
        />
        <div className="flex justify-between">
          {errors.message ? (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground">
            {form.message.length} 字符
          </span>
        </div>
      </div>

      {/* 条款 */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <Checkbox
            id="v-agree"
            checked={form.agree}
            onCheckedChange={(checked) =>
              setForm({ ...form, agree: checked === true })
            }
          />
          <Label htmlFor="v-agree" className="text-sm leading-snug cursor-pointer">
            我同意{" "}
            <span className="text-primary hover:underline cursor-pointer">
              服务条款
            </span>{" "}
            和{" "}
            <span className="text-primary hover:underline cursor-pointer">
              隐私政策
            </span>
          </Label>
        </div>
        {errors.agree && (
          <p className="flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" /> {errors.agree}
          </p>
        )}
      </div>

      {/* 提交 */}
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            提交中...
          </>
        ) : (
          "提交反馈"
        )}
      </Button>
    </form>
  );
}
