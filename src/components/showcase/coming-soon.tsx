import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
  items?: string[];
}

export function ComingSoon({ title, description, items }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <Construction className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      {description && (
        <p className="mt-2 max-w-md text-muted-foreground">{description}</p>
      )}
      {items && items.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
