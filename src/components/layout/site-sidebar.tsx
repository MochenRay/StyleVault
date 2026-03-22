"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { componentCategories } from "@/data/navigation";
import { Badge } from "@/components/ui/badge";

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto border-r border-border/50 py-6 pr-4 lg:block">
      <nav className="space-y-1">
        {componentCategories.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.title}</span>
              {item.comingSoon && (
                <Badge variant="secondary" className="ml-auto text-[10px] px-1.5 py-0">
                  Soon
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
