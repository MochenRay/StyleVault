"use client";

import { useState } from "react";

const currentData = [30, 45, 35, 60, 50, 75, 65, 85, 70, 90, 80, 95];
const previousData = [20, 35, 30, 40, 45, 50, 55, 60, 50, 65, 60, 70];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function buildPath(data: number[], w: number, h: number, padding: number) {
  const max = Math.max(...data, ...previousData);
  const min = 0;
  const range = max - min || 1;
  const stepX = (w - padding * 2) / (data.length - 1);

  return data
    .map((v, i) => {
      const x = padding + i * stepX;
      const y = h - padding - ((v - min) / range) * (h - padding * 2);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function buildAreaPath(data: number[], w: number, h: number, padding: number) {
  const linePath = buildPath(data, w, h, padding);
  const stepX = (w - padding * 2) / (data.length - 1);
  const lastX = padding + (data.length - 1) * stepX;
  return `${linePath} L ${lastX} ${h - padding} L ${padding} ${h - padding} Z`;
}

function getPoint(data: number[], index: number, w: number, h: number, padding: number) {
  const max = Math.max(...data, ...previousData);
  const range = max || 1;
  const stepX = (w - padding * 2) / (data.length - 1);
  const x = padding + index * stepX;
  const y = h - padding - (data[index] / range) * (h - padding * 2);
  return { x, y };
}

export function LineChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const w = 500;
  const h = 240;
  const padding = 40;

  // Y 轴刻度
  const yTicks = [0, 25, 50, 75, 100];
  const max = Math.max(...currentData, ...previousData);

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded bg-primary" />
          本期
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded bg-muted-foreground/40" />
          上期
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[540px]">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="[stop-color:oklch(var(--primary))]" stopOpacity="0.3" />
            <stop offset="100%" className="[stop-color:oklch(var(--primary))]" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y 轴刻度线 */}
        {yTicks.map((tick) => {
          const y = h - padding - (tick / max) * (h - padding * 2);
          return (
            <g key={tick}>
              <line
                x1={padding}
                y1={y}
                x2={w - padding / 2}
                y2={y}
                className="stroke-border/30"
                strokeDasharray="4 4"
              />
              <text
                x={padding - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-muted-foreground"
                fontSize="10"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* X 轴标签（每隔一个显示） */}
        {months.map((m, i) => {
          if (i % 2 !== 0) return null;
          const stepX = (w - padding * 2) / (months.length - 1);
          const x = padding + i * stepX;
          return (
            <text
              key={m}
              x={x}
              y={h - 8}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {m}
            </text>
          );
        })}

        {/* 上期折线 */}
        <path
          d={buildPath(previousData, w, h, padding)}
          fill="none"
          className="stroke-muted-foreground/40"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {/* 本期面积 */}
        <path d={buildAreaPath(currentData, w, h, padding)} fill="url(#areaGradient)" />

        {/* 本期折线 */}
        <path
          d={buildPath(currentData, w, h, padding)}
          fill="none"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 交互层 */}
        {currentData.map((_, i) => {
          const stepX = (w - padding * 2) / (currentData.length - 1);
          const x = padding + i * stepX;
          const pt = getPoint(currentData, i, w, h, padding);

          return (
            <g key={i}>
              {/* 隐形感应区 */}
              <rect
                x={x - stepX / 2}
                y={padding / 2}
                width={stepX}
                height={h - padding}
                fill="transparent"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {hoveredIndex === i && (
                <>
                  {/* 竖线 */}
                  <line
                    x1={pt.x}
                    y1={padding}
                    x2={pt.x}
                    y2={h - padding}
                    className="stroke-border"
                    strokeDasharray="3 3"
                  />
                  {/* 数据点 */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    className="fill-primary stroke-background"
                    strokeWidth="2"
                  />
                  {/* Tooltip */}
                  <rect
                    x={pt.x - 20}
                    y={pt.y - 28}
                    width="40"
                    height="20"
                    rx="4"
                    className="fill-foreground"
                  />
                  <text
                    x={pt.x}
                    y={pt.y - 14}
                    textAnchor="middle"
                    className="fill-background"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {currentData[i]}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
