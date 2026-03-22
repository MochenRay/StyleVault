import { ComponentCard } from "@/components/showcase/component-card";
import { StatCards } from "@/components/examples/data-display/stat-cards";
import { BarChart } from "@/components/examples/data-display/bar-chart";
import { LineChart } from "@/components/examples/data-display/line-chart";
import { DataTable } from "@/components/examples/data-display/data-table";
import { ListDemos } from "@/components/examples/data-display/list-demos";

export default function DataDisplayPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">数据展示</h1>
        <p className="mt-2 text-muted-foreground">
          统计卡片、图表、数据表格、列表等数据展示组件
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
      </div>
    </div>
  );
}
