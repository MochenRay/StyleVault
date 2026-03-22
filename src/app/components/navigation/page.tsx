import { ComponentCard } from "@/components/showcase/component-card";
import { SidebarDemos } from "@/components/examples/navigation/sidebar-demos";
import { TabsDemos } from "@/components/examples/navigation/tabs-demos";
import { BreadcrumbDemos } from "@/components/examples/navigation/breadcrumb-demos";
import { CommandPalette } from "@/components/examples/navigation/command-palette";
import { PaginationDemos } from "@/components/examples/navigation/pagination-demos";
import { DropdownMenuDemo } from "@/components/examples/navigation/dropdown-menu-demo";
import { MenubarDemo } from "@/components/examples/navigation/menubar-demo";

export default function NavigationPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">导航</h1>
        <p className="mt-2 text-muted-foreground">
          侧边栏、标签页、面包屑、命令面板、分页、下拉菜单等导航组件
        </p>
      </div>

      <div className="space-y-6">
        <ComponentCard
          title="侧边栏"
          description="基础导航与分组折叠两种模式"
        >
          <SidebarDemos />
        </ComponentCard>

        <ComponentCard
          title="标签页"
          description="基础、带图标、带计数徽章"
        >
          <TabsDemos />
        </ComponentCard>

        <ComponentCard
          title="面包屑"
          description="基础链式、带图标、带省略"
        >
          <BreadcrumbDemos />
        </ComponentCard>

        <ComponentCard
          title="命令面板"
          description="Cmd+K 风格搜索与快捷操作"
        >
          <CommandPalette />
        </ComponentCard>

        <ComponentCard
          title="分页"
          description="数字分页与简洁分页"
        >
          <PaginationDemos />
        </ComponentCard>

        <ComponentCard
          title="下拉菜单"
          description="基础菜单、嵌套子菜单、带 checkbox/radio"
        >
          <DropdownMenuDemo />
        </ComponentCard>

        <ComponentCard
          title="菜单栏"
          description="编辑器风格菜单栏，带快捷键标注"
        >
          <MenubarDemo />
        </ComponentCard>
      </div>
    </div>
  );
}
