"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const frameworks = [
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const cities = [
  {
    group: "中国",
    items: [
      { value: "beijing", label: "北京 Beijing" },
      { value: "shanghai", label: "上海 Shanghai" },
      { value: "shenzhen", label: "深圳 Shenzhen" },
      { value: "hangzhou", label: "杭州 Hangzhou" },
    ],
  },
  {
    group: "日本",
    items: [
      { value: "tokyo", label: "东京 Tokyo" },
      { value: "osaka", label: "大阪 Osaka" },
    ],
  },
  {
    group: "欧美",
    items: [
      { value: "london", label: "伦敦 London" },
      { value: "paris", label: "巴黎 Paris" },
      { value: "new-york", label: "纽约 New York" },
      { value: "sf", label: "旧金山 San Francisco" },
    ],
  },
];

export function ComboboxDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [basicValue, setBasicValue] = useState("");

  const [multiOpen, setMultiOpen] = useState(false);
  const [multiValues, setMultiValues] = useState<string[]>([]);

  const [groupOpen, setGroupOpen] = useState(false);
  const [groupValue, setGroupValue] = useState("");

  const allCities = cities.flatMap((g) => g.items);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* 基础 Combobox */}
      <div className="space-y-2">
        <Label>基础 Combobox</Label>
        <Popover open={basicOpen} onOpenChange={setBasicOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={basicOpen}
              className="w-full justify-between font-normal"
            >
              {basicValue
                ? frameworks.find((f) => f.value === basicValue)?.label
                : "搜索并选择框架..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="输入关键词搜索..." />
              <CommandList>
                <CommandEmpty>没有找到匹配项</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((fw) => (
                    <CommandItem
                      key={fw.value}
                      value={fw.value}
                      keywords={[fw.label]}
                      onSelect={(val) => {
                        setBasicValue(val === basicValue ? "" : val);
                        setBasicOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          basicValue === fw.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {fw.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* 多选 Combobox */}
      <div className="space-y-2">
        <Label>多选 Combobox</Label>
        <Popover open={multiOpen} onOpenChange={setMultiOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={multiOpen}
              className="w-full justify-between font-normal"
            >
              {multiValues.length > 0 ? (
                <span className="flex flex-wrap gap-1">
                  {multiValues.map((v) => (
                    <Badge key={v} variant="secondary" className="text-xs">
                      {frameworks.find((f) => f.value === v)?.label}
                    </Badge>
                  ))}
                </span>
              ) : (
                "选择多个框架..."
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="输入关键词搜索..." />
              <CommandList>
                <CommandEmpty>没有找到匹配项</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((fw) => {
                    const isSelected = multiValues.includes(fw.value);
                    return (
                      <CommandItem
                        key={fw.value}
                        value={fw.value}
                        keywords={[fw.label]}
                        onSelect={(val) => {
                          setMultiValues((prev) =>
                            prev.includes(val)
                              ? prev.filter((v) => v !== val)
                              : [...prev, val]
                          );
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            isSelected ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {fw.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* 带分组的 Combobox */}
      <div className="space-y-2 sm:col-span-2">
        <Label>带分组的 Combobox（城市列表）</Label>
        <Popover open={groupOpen} onOpenChange={setGroupOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={groupOpen}
              className="w-full justify-between font-normal sm:w-1/2"
            >
              {groupValue
                ? allCities.find((c) => c.value === groupValue)?.label
                : "搜索城市..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="输入城市名称..." />
              <CommandList>
                <CommandEmpty>没有找到匹配的城市</CommandEmpty>
                {cities.map((group) => (
                  <CommandGroup key={group.group} heading={group.group}>
                    {group.items.map((city) => (
                      <CommandItem
                        key={city.value}
                        value={city.value}
                        keywords={[city.label]}
                        onSelect={(val) => {
                          setGroupValue(val === groupValue ? "" : val);
                          setGroupOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            groupValue === city.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {city.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
