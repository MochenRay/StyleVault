import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { componentCategories } from "@/data/navigation";

export default function ComponentsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">组件画廊</h1>
        <p className="mt-2 text-muted-foreground">
          浏览所有可用的 UI 组件分类
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {componentCategories.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.comingSoon ? "#" : item.href}
              className={`card-glow group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all ${
                item.comingSoon
                  ? "pointer-events-none opacity-50"
                  : "hover:-translate-y-0.5"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{item.title}</h3>
                  {item.comingSoon && (
                    <Badge variant="secondary" className="text-[10px]">
                      即将推出
                    </Badge>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {!item.comingSoon && (
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
