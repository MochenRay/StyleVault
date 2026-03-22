"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const notifications = [
  { id: "email", label: "邮件通知", description: "接收重要更新邮件", defaultChecked: true },
  { id: "push", label: "推送通知", description: "浏览器推送消息", defaultChecked: false },
  { id: "sms", label: "短信通知", description: "接收短信验证码", defaultChecked: true },
];

const features = [
  { id: "darkmode", label: "深色模式" },
  { id: "animations", label: "界面动效" },
  { id: "sound", label: "操作音效" },
  { id: "analytics", label: "数据分析" },
];

export function ToggleSwitches() {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>(
    Object.fromEntries(notifications.map((n) => [n.id, n.defaultChecked]))
  );

  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({
    darkmode: true,
    animations: true,
    sound: false,
    analytics: false,
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {/* 开关组 */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">通知开关</h4>
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-border/50 px-4 py-3"
            >
              <div>
                <Label htmlFor={item.id} className="text-sm cursor-pointer">
                  {item.label}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <Switch
                id={item.id}
                checked={switchStates[item.id]}
                onCheckedChange={(checked) =>
                  setSwitchStates((prev) => ({ ...prev, [item.id]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* 复选框组 */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">功能复选框</h4>
        <div className="space-y-3">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Checkbox
                id={`cb-${item.id}`}
                checked={checkboxStates[item.id]}
                onCheckedChange={(checked) =>
                  setCheckboxStates((prev) => ({
                    ...prev,
                    [item.id]: checked === true,
                  }))
                }
              />
              <Label htmlFor={`cb-${item.id}`} className="text-sm cursor-pointer">
                {item.label}
              </Label>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          已选中{" "}
          {Object.values(checkboxStates).filter(Boolean).length} /{" "}
          {features.length} 项
        </p>
      </div>
    </div>
  );
}
