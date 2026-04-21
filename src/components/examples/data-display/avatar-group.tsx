"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

const people = [
  { name: "李雷", initials: "李" },
  { name: "韩梅梅", initials: "韩" },
  { name: "Jim", initials: "J" },
  { name: "Kate", initials: "K" },
  { name: "Lucy", initials: "L" },
  { name: "王明", initials: "王" },
  { name: "Tom", initials: "T" },
];

const statusColors: Record<string, string> = {
  online: "bg-emerald-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
};

const statusPeople = [
  { name: "李雷", initials: "李", status: "online" as const },
  { name: "韩梅梅", initials: "韩", status: "online" as const },
  { name: "Jim", initials: "J", status: "busy" as const },
  { name: "Kate", initials: "K", status: "offline" as const },
  { name: "Lucy", initials: "L", status: "online" as const },
];

export function AvatarGroupDemo() {
  return (
    <div className="grid gap-8">
      {/* 不同尺寸 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          不同尺寸
        </h3>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-1">
            <Avatar size="sm">
              <AvatarFallback>李</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Avatar>
              <AvatarFallback>李</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Avatar size="lg">
              <AvatarFallback>李</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
        </div>
      </div>

      {/* 头像组（重叠排列 + 计数） */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          头像组
        </h3>
        <div className="flex flex-col gap-4">
          <AvatarGroup>
            {people.slice(0, 4).map((p) => (
              <Avatar key={p.name}>
                <AvatarFallback>{p.initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+{people.length - 4}</AvatarGroupCount>
          </AvatarGroup>

          <AvatarGroup>
            {people.slice(0, 4).map((p) => (
              <Avatar key={p.name} size="lg">
                <AvatarFallback>{p.initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+{people.length - 4}</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </div>

      {/* 带状态指示器 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          状态指示器
        </h3>
        <div className="flex items-center gap-3">
          {statusPeople.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <Avatar size="lg">
                <AvatarFallback>{p.initials}</AvatarFallback>
                <AvatarBadge className={statusColors[p.status]} />
              </Avatar>
              <span className="text-xs text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            在线
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            忙碌
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-gray-400" />
            离线
          </span>
        </div>
      </div>
    </div>
  );
}
