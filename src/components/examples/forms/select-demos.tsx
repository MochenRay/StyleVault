"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
];

const timezones = [
  { group: "亚洲", items: [
    { value: "asia-shanghai", label: "上海 (GMT+8)" },
    { value: "asia-tokyo", label: "东京 (GMT+9)" },
    { value: "asia-singapore", label: "新加坡 (GMT+8)" },
  ]},
  { group: "欧洲", items: [
    { value: "europe-london", label: "伦敦 (GMT+0)" },
    { value: "europe-paris", label: "巴黎 (GMT+1)" },
  ]},
  { group: "美洲", items: [
    { value: "us-pacific", label: "太平洋时间 (GMT-8)" },
    { value: "us-eastern", label: "东部时间 (GMT-5)" },
  ]},
];

export function SelectDemos() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* 基础下拉 */}
      <div className="space-y-2">
        <Label>基础下拉选择</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="选择框架" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((fw) => (
              <SelectItem key={fw.value} value={fw.value}>
                {fw.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 分组下拉 */}
      <div className="space-y-2">
        <Label>分组下拉</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="选择时区" />
          </SelectTrigger>
          <SelectContent>
            {timezones.map((group) => (
              <div key={group.group}>
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  {group.group}
                </div>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 禁用状态 */}
      <div className="space-y-2">
        <Label>禁用状态</Label>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="不可选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">无</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 有默认值 */}
      <div className="space-y-2">
        <Label>有默认值</Label>
        <Select defaultValue="next">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((fw) => (
              <SelectItem key={fw.value} value={fw.value}>
                {fw.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
