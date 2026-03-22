"use client";

import { useState } from "react";

const data = [
  { month: "1月", value: 4200 },
  { month: "2月", value: 3800 },
  { month: "3月", value: 5100 },
  { month: "4月", value: 4600 },
  { month: "5月", value: 6200 },
  { month: "6月", value: 5800 },
];

export function BarChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxValue = Math.max(...data.map((d) => d.value));
  const chartHeight = 200;
  const chartWidth = 400;
  const barWidth = 40;
  const gap = (chartWidth - data.length * barWidth) / (data.length + 1);

  // Y 轴刻度
  const yTicks = [0, 2000, 4000, 6000];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${chartWidth + 60} ${chartHeight + 50}`}
        className="w-full max-w-[500px] mx-auto"
      >
        {/* Y 轴刻度线和标签 */}
        {yTicks.map((tick) => {
          const y = chartHeight - (tick / maxValue) * chartHeight + 10;
          return (
            <g key={tick}>
              <line
                x1="50"
                y1={y}
                x2={chartWidth + 50}
                y2={y}
                className="stroke-border/30"
                strokeDasharray="4 4"
              />
              <text
                x="45"
                y={y + 4}
                textAnchor="end"
                className="fill-muted-foreground"
                fontSize="11"
              >
                {tick >= 1000 ? `${tick / 1000}k` : tick}
              </text>
            </g>
          );
        })}

        {/* 柱子 */}
        {data.map((item, i) => {
          const barHeight = (item.value / maxValue) * chartHeight;
          const x = 50 + gap + i * (barWidth + gap);
          const y = chartHeight - barHeight + 10;
          const isHovered = hoveredIndex === i;

          return (
            <g
              key={item.month}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
            >
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                className={
                  isHovered
                    ? "fill-primary"
                    : "fill-primary/60"
                }
                style={{ transition: "fill 0.2s, height 0.3s, y 0.3s" }}
              />

              {/* Hover 数值 */}
              {isHovered && (
                <>
                  <rect
                    x={x + barWidth / 2 - 24}
                    y={y - 30}
                    width="48"
                    height="22"
                    rx="4"
                    className="fill-foreground"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 15}
                    textAnchor="middle"
                    className="fill-background"
                    fontSize="11"
                    fontWeight="600"
                  >
                    ¥{item.value.toLocaleString()}
                  </text>
                </>
              )}

              {/* X 轴标签 */}
              <text
                x={x + barWidth / 2}
                y={chartHeight + 28}
                textAnchor="middle"
                className="fill-muted-foreground"
                fontSize="12"
              >
                {item.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
