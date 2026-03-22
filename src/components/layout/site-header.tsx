import Link from "next/link";
import { Blocks, LayoutTemplate } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Style<span className="text-primary">Vault</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/components"
            className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Blocks className="h-4 w-4" />
            组件
          </Link>
          <Link
            href="/templates"
            className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <LayoutTemplate className="h-4 w-4" />
            模板
          </Link>
          <div className="ml-2 h-5 w-px bg-border" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
