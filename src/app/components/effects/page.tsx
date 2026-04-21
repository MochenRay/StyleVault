import { ComponentCard } from "@/components/showcase/component-card";
import { ScrollAnimation } from "@/components/examples/effects/scroll-animation";
import { HoverEffects } from "@/components/examples/effects/hover-effects";
import { MagneticButton } from "@/components/examples/effects/magnetic-button";
import { PageTransition } from "@/components/examples/effects/page-transition";
import { ParallaxDemo } from "@/components/examples/effects/parallax-demo";
import { KineticTypography } from "@/components/examples/effects/kinetic-typography";
import { ShaderGradient } from "@/components/examples/effects/shader-gradient";
import { CardStack } from "@/components/examples/effects/card-stack";

export default function EffectsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">动效</h1>
        <p className="mt-2 text-muted-foreground">
          滚动动画、hover 效果、磁性按钮、页面过渡、视差滚动、动态排版、shader 渐变、卡片堆栈
        </p>
      </div>

      <div className="space-y-6">
        <ComponentCard
          title="滚动动画"
          description="Fade Up、Fade Scale、Stagger List"
        >
          <ScrollAnimation />
        </ComponentCard>

        <ComponentCard
          title="Hover 效果"
          description="渐变流光、弹性放大、3D 倾斜、光标高光"
        >
          <HoverEffects />
        </ComponentCard>

        <ComponentCard
          title="磁性按钮"
          description="鼠标靠近时向光标方向偏移跟随"
        >
          <MagneticButton />
        </ComponentCard>

        <ComponentCard
          title="页面过渡"
          description="AnimatePresence 的 fade / slide / scale 切换"
        >
          <PageTransition />
        </ComponentCard>

        <ComponentCard
          title="视差滚动"
          description="多层元素以不同速度移动，创造深度感"
        >
          <ParallaxDemo />
        </ComponentCard>

        <ComponentCard
          title="动态排版"
          description="逐字出现、打字机效果、单词高亮轮播"
        >
          <KineticTypography />
        </ComponentCard>

        <ComponentCard
          title="Shader Gradient"
          description="参考 2026 年初 shader/animated gradient 趋势的动态背景"
        >
          <ShaderGradient />
        </ComponentCard>

        <ComponentCard
          title="Card Stack"
          description="近期常见的堆叠卡片叙事与可拖拽切换交互"
        >
          <CardStack />
        </ComponentCard>
      </div>
    </div>
  );
}
