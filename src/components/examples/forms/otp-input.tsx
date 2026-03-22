"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export function OtpInputDemo() {
  const [value4, setValue4] = useState("");
  const [value6, setValue6] = useState("");
  const [valueSep, setValueSep] = useState("");

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {/* 4 位验证码 */}
      <div className="space-y-2">
        <Label>4 位验证码</Label>
        <InputOTP maxLength={4} value={value4} onChange={setValue4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">
          当前输入：{value4 || "—"}
        </p>
      </div>

      {/* 6 位验证码 */}
      <div className="space-y-2">
        <Label>6 位验证码</Label>
        <InputOTP maxLength={6} value={value6} onChange={setValue6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">
          当前输入：{value6 || "—"}
        </p>
      </div>

      {/* 带分隔符（XXX-XXX） */}
      <div className="space-y-2">
        <Label>带分隔符（XXX-XXX）</Label>
        <InputOTP maxLength={6} value={valueSep} onChange={setValueSep}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">
          当前输入：{valueSep
            ? `${valueSep.slice(0, 3)}-${valueSep.slice(3)}`
            : "—"}
        </p>
      </div>

      {/* 禁用状态 */}
      <div className="space-y-2">
        <Label>禁用状态</Label>
        <InputOTP maxLength={4} disabled value="12">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">不可编辑</p>
      </div>
    </div>
  );
}
