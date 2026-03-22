"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function SliderDemos() {
  const [basic, setBasic] = useState([50]);
  const [volume, setVolume] = useState([75]);
  const [range, setRange] = useState([20, 80]);
  const [stepped, setStepped] = useState([50]);

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {/* 基础滑块 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>基础滑块</Label>
          <span className="text-sm text-muted-foreground">{basic[0]}%</span>
        </div>
        <Slider
          value={basic}
          onValueChange={setBasic}
          max={100}
          step={1}
        />
      </div>

      {/* 音量控制 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>音量控制</Label>
          <span className="text-sm font-mono text-primary">{volume[0]}</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
        />
      </div>

      {/* 范围选择 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>价格范围</Label>
          <span className="text-sm text-muted-foreground">
            ¥{range[0]} — ¥{range[1]}
          </span>
        </div>
        <Slider
          value={range}
          onValueChange={setRange}
          max={100}
          step={1}
        />
      </div>

      {/* 带步进 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>步进 = 25</Label>
          <span className="text-sm text-muted-foreground">{stepped[0]}%</span>
        </div>
        <Slider
          value={stepped}
          onValueChange={setStepped}
          max={100}
          step={25}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
    </div>
  );
}
