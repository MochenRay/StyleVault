"use client";

import { useState, useCallback } from "react";
import {
  ChevronRight,
  Folder,
  FolderOpen,
  FileText,
  FileCode,
  FileJson,
  Image,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TreeNode {
  name: string;
  type: "folder" | "file";
  icon?: React.ElementType;
  children?: TreeNode[];
}

const projectTree: TreeNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "app",
        type: "folder",
        children: [
          { name: "layout.tsx", type: "file", icon: FileCode },
          { name: "page.tsx", type: "file", icon: FileCode },
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Header.tsx", type: "file", icon: FileCode },
              { name: "Sidebar.tsx", type: "file", icon: FileCode },
              { name: "Footer.tsx", type: "file", icon: FileCode },
            ],
          },
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "users",
                type: "folder",
                children: [
                  { name: "route.ts", type: "file", icon: FileCode },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          { name: "utils.ts", type: "file", icon: FileCode },
          { name: "db.ts", type: "file", icon: FileCode },
        ],
      },
      {
        name: "assets",
        type: "folder",
        children: [
          { name: "logo.svg", type: "file", icon: Image },
          { name: "hero.png", type: "file", icon: Image },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "favicon.ico", type: "file", icon: Image },
      { name: "robots.txt", type: "file", icon: FileText },
    ],
  },
  { name: "package.json", type: "file", icon: FileJson },
  { name: "tsconfig.json", type: "file", icon: FileJson },
  { name: "README.md", type: "file", icon: FileText },
];

function TreeItem({
  node,
  level = 0,
  expandedPaths,
  onToggle,
}: {
  node: TreeNode;
  level?: number;
  expandedPaths: Set<string>;
  onToggle: (path: string) => void;
}) {
  const path = `${level}-${node.name}`;
  const isExpanded = expandedPaths.has(path);
  const isFolder = node.type === "folder";
  const Icon = node.icon || (isFolder ? (isExpanded ? FolderOpen : Folder) : FileText);

  return (
    <div>
      <button
        onClick={() => isFolder && onToggle(path)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted",
          isFolder ? "cursor-pointer font-medium" : "cursor-default"
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {isFolder ? (
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
              isExpanded && "rotate-90"
            )}
          />
        ) : (
          <span className="w-3.5" />
        )}
        <Icon
          className={cn(
            "h-4 w-4 shrink-0",
            isFolder ? "text-chart-1" : "text-muted-foreground"
          )}
        />
        <span>{node.name}</span>
      </button>
      {isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <TreeItem
              key={`${path}/${child.name}`}
              node={child}
              level={level + 1}
              expandedPaths={expandedPaths}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function TreeView() {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(
    () => new Set(["0-src", "1-src/app"])
  );

  const handleToggle = useCallback((path: string) => {
    setExpandedPaths((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  return (
    <div className="rounded-lg border bg-card p-3">
      <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        项目目录
      </p>
      <div className="space-y-0.5">
        {projectTree.map((node) => (
          <TreeItem
            key={node.name}
            node={node}
            expandedPaths={expandedPaths}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
