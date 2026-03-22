import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { componentCategories, templateCategories } from "@/data/navigation";
import type { NavItem } from "@/data/navigation";

function CategoryCard({ item }: { item: NavItem }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.comingSoon ? "#" : item.href}
      className={`card-glow group relative flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-5 transition-all ${
        item.comingSoon
          ? "pointer-events-none opacity-50"
          : "hover:-translate-y-0.5"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {item.comingSoon ? (
          <Badge variant="secondary" className="text-xs">
            即将推出
          </Badge>
        ) : item.count ? (
          <Badge className="bg-primary/15 text-primary border-0 text-xs">
            {item.count} 个组件
          </Badge>
        ) : null}
      </div>
      <div>
        <h3 className="font-medium text-foreground">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
      {!item.comingSoon && (
        <div className="mt-auto flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
          浏览 <ArrowRight className="h-3.5 w-3.5" />
        </div>
      )}
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="noise-bg grid-bg bg-background transition-colors duration-300">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            前端视觉参考库
          </p>
          <h1
            className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50 bg-clip-text font-bold tracking-tighter text-transparent"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
            }}
          >
            Style
            <br />
            Vault
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
            精选组件样式与页面模板，日常开发的视觉灵感来源
          </p>
        </div>
      </section>

      {/* 组件分类 */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">组件</h2>
          <Link
            href="/components"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            查看全部 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {componentCategories.map((item) => (
            <CategoryCard key={item.href} item={item} />
          ))}
        </div>
      </section>

      {/* 模板分类 */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">页面模板</h2>
          <Link
            href="/templates"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            查看全部 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {templateCategories.map((item) => (
            <CategoryCard key={item.href} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
