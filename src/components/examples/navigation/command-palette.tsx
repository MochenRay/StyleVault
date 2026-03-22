"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Plus,
  Download,
  Command,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CommandItem = {
  icon: typeof Home;
  label: string;
  shortcut?: string;
  group: string;
};

const commands: CommandItem[] = [
  { icon: Home, label: "回到首页", shortcut: "⌘H", group: "导航" },
  { icon: BarChart3, label: "数据分析", shortcut: "⌘D", group: "导航" },
  { icon: Users, label: "用户管理", shortcut: "⌘U", group: "导航" },
  { icon: Settings, label: "系统设置", shortcut: "⌘,", group: "导航" },
  { icon: Plus, label: "新建项目", shortcut: "⌘N", group: "操作" },
  { icon: FileText, label: "新建文档", group: "操作" },
  { icon: Download, label: "导出数据", group: "操作" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );
  const groups = [...new Set(filtered.map((c) => c.group))];

  return (
    <div>
      <Button
        variant="outline"
        className="gap-2 text-muted-foreground"
        onClick={() => setOpen(!open)}
      >
        <Command className="h-4 w-4" />
        命令面板
        <kbd className="ml-2 rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-mono">
          ⌘K
        </kbd>
      </Button>

      {open && (
        <div className="mt-3 rounded-lg border border-border/50 bg-card shadow-lg overflow-hidden max-w-md">
          {/* 搜索框 */}
          <div className="flex items-center gap-2 border-b border-border/50 px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索命令..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          {/* 命令列表 */}
          <div className="max-h-[280px] overflow-y-auto p-1.5">
            {groups.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                未找到匹配的命令
              </p>
            ) : (
              groups.map((group) => (
                <div key={group}>
                  <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {group}
                  </p>
                  {filtered
                    .filter((c) => c.group === group)
                    .map((cmd) => (
                      <button
                        key={cmd.label}
                        className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors hover:bg-secondary"
                        onClick={() => setOpen(false)}
                      >
                        <cmd.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1 text-left">{cmd.label}</span>
                        {cmd.shortcut && (
                          <kbd className="rounded border border-border/50 bg-secondary/50 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </button>
                    ))}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
