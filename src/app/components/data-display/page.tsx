import { ComponentCard } from "@/components/showcase/component-card";
import { StatCards } from "@/components/examples/data-display/stat-cards";
import { BarChart } from "@/components/examples/data-display/bar-chart";
import { LineChart } from "@/components/examples/data-display/line-chart";
import { DataTable } from "@/components/examples/data-display/data-table";
import { ListDemos } from "@/components/examples/data-display/list-demos";
import { AccordionDemo } from "@/components/examples/data-display/accordion-demo";
import { AvatarGroupDemo } from "@/components/examples/data-display/avatar-group";
import { CarouselDemo } from "@/components/examples/data-display/carousel-demo";
import { TreeView } from "@/components/examples/data-display/tree-view";
import { KanbanBoard } from "@/components/examples/data-display/kanban-board";
import { TimelineDemo } from "@/components/examples/data-display/timeline-demo";

export default function DataDisplayPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">数据展示</h1>
        <p className="mt-2 text-muted-foreground">
          统计卡片、图表、数据表格、列表、手风琴、时间线等数据展示组件
        </p>
      </div>

      <div className="space-y-6">
        <ComponentCard
          title="统计卡片"
          description="基础数值、涨跌趋势、迷你折线、进度条"
        >
          <StatCards />
        </ComponentCard>

        <ComponentCard
          title="柱状图"
          description="纯 SVG 实现，hover 高亮显示数值"
        >
          <BarChart />
        </ComponentCard>

        <ComponentCard
          title="折线图"
          description="双线对比（本期 vs 上期），渐变面积填充"
        >
          <LineChart />
        </ComponentCard>

        <ComponentCard
          title="数据表格"
          description="用户列表、排序、状态标签、分页"
        >
          <DataTable />
        </ComponentCard>

        <ComponentCard
          title="列表"
          description="基础、带描述、带操作按钮三种变体"
        >
          <ListDemos />
        </ComponentCard>

        <ComponentCard
          title="手风琴"
          description="单项/多项展开、带图标、FAQ 风格"
        >
          <AccordionDemo />
        </ComponentCard>

        <ComponentCard
          title="头像组"
          description="不同尺寸、重叠排列、在线状态指示"
        >
          <AvatarGroupDemo />
        </ComponentCard>

        <ComponentCard
          title="轮播"
          description="基础轮播、缩略图导航、自动播放"
        >
          <CarouselDemo />
        </ComponentCard>

        <ComponentCard
          title="树形结构"
          description="可展开/折叠的文件目录树"
        >
          <TreeView />
        </ComponentCard>

        <ComponentCard
          title="看板"
          description="待办/进行中/已完成三列看板布局"
        >
          <KanbanBoard />
        </ComponentCard>

        <ComponentCard
          title="时间线"
          description="垂直时间线、状态节点、里程碑展示"
        >
          <TimelineDemo />
        </ComponentCard>
      </div>
    </div>
  );
}
