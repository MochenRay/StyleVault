import { ComponentCard } from "@/components/showcase/component-card";
import { DialogDemos } from "@/components/examples/feedback/dialog-demos";
import { ToastDemos } from "@/components/examples/feedback/toast-demos";
import { ProgressDemos } from "@/components/examples/feedback/progress-demos";
import { SkeletonDemos } from "@/components/examples/feedback/skeleton-demos";
import { AlertDemos } from "@/components/examples/feedback/alert-demos";
import { DrawerDemo } from "@/components/examples/feedback/drawer-demo";
import { PopoverDemo } from "@/components/examples/feedback/popover-demo";
import { EmptyState } from "@/components/examples/feedback/empty-state";

export default function FeedbackPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">反馈</h1>
        <p className="mt-2 text-muted-foreground">
          弹窗、Toast、抽屉、弹出层、进度条、骨架屏、空状态等反馈组件
        </p>
      </div>

      <div className="space-y-6">
        <ComponentCard
          title="弹窗"
          description="信息弹窗、确认删除、表单弹窗"
        >
          <DialogDemos />
        </ComponentCard>

        <ComponentCard
          title="抽屉面板"
          description="右侧详情、底部操作、左侧导航、带表单"
        >
          <DrawerDemo />
        </ComponentCard>

        <ComponentCard
          title="Toast 通知"
          description="成功、错误、信息、带撤销操作"
        >
          <ToastDemos />
        </ComponentCard>

        <ComponentCard
          title="弹出层"
          description="点击触发、带表单、多方向定位"
        >
          <PopoverDemo />
        </ComponentCard>

        <ComponentCard
          title="进度条"
          description="静态、动画加载、分步进度、环形进度"
        >
          <ProgressDemos />
        </ComponentCard>

        <ComponentCard
          title="骨架屏"
          description="卡片骨架与列表骨架加载占位"
        >
          <SkeletonDemos />
        </ComponentCard>

        <ComponentCard
          title="提示"
          description="信息、成功、警告、错误四种提示样式"
        >
          <AlertDemos />
        </ComponentCard>

        <ComponentCard
          title="空状态"
          description="无数据、搜索无结果、错误状态、首次引导"
        >
          <EmptyState />
        </ComponentCard>
      </div>
    </div>
  );
}
