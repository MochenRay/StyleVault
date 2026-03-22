"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  { title: "品牌推广", subtitle: "2026 春季新品发布", color: "bg-chart-1/20 text-chart-1" },
  { title: "技术方案", subtitle: "AI 驱动的智能分析", color: "bg-chart-2/20 text-chart-2" },
  { title: "用户增长", subtitle: "月活突破百万里程碑", color: "bg-chart-3/20 text-chart-3" },
  { title: "数据洞察", subtitle: "Q1 季度经营报告", color: "bg-chart-4/20 text-chart-4" },
  { title: "产品迭代", subtitle: "v3.0 全新架构升级", color: "bg-primary/20 text-primary" },
];

export function CarouselDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [thumbApi, setThumbApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  // 自动播放
  useEffect(() => {
    if (!api || !isPlaying) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      thumbApi?.scrollTo(index);
    },
    [api, thumbApi]
  );

  return (
    <div className="grid gap-8">
      {/* 基础轮播 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          基础轮播
        </h3>
        <div className="mx-auto max-w-md px-12">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <Card
                    className={cn(
                      "flex h-48 flex-col items-center justify-center gap-2",
                      slide.color
                    )}
                  >
                    <p className="text-2xl font-bold">{slide.title}</p>
                    <p className="text-sm opacity-70">{slide.subtitle}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* 点指示器 */}
          <div className="mt-3 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 带缩略图导航 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          缩略图导航
        </h3>
        <div className="mx-auto max-w-md">
          <Carousel setApi={setThumbApi}>
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <Card
                    className={cn(
                      "flex h-40 flex-col items-center justify-center gap-2",
                      slide.color
                    )}
                  >
                    <p className="text-2xl font-bold">{slide.title}</p>
                    <p className="text-sm opacity-70">{slide.subtitle}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-2 flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "flex-1 rounded-md border-2 p-2 text-center text-xs font-medium transition-colors",
                  i === current
                    ? "border-primary bg-primary/5"
                    : "border-transparent bg-muted hover:bg-muted/80"
                )}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 自动播放 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          自动播放
        </h3>
        <div className="mx-auto flex max-w-md items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => setIsPlaying((p) => !p)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <span className="text-sm text-muted-foreground">
            {isPlaying ? "播放中（3 秒/张）" : "已暂停"}
            {" — 当前第 "}
            {current + 1}
            {" / "}
            {slides.length}
            {" 张"}
          </span>
        </div>
      </div>
    </div>
  );
}
