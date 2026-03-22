import {
  TextCursorInput,
  BarChart3,
  Navigation,
  MessageSquare,
  Sparkles,
  LayoutDashboard,
  Globe,
  LogIn,
  FileText,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  count?: number;
  comingSoon?: boolean;
};

export const componentCategories: NavItem[] = [
  {
    title: "表单与交互",
    href: "/components/forms",
    icon: TextCursorInput,
    description: "输入框、选择器、开关、滑块、文件上传、表单校验",
    count: 7,
  },
  {
    title: "数据展示",
    href: "/components/data-display",
    icon: BarChart3,
    description: "统计卡片、图表、数据表格、列表",
    count: 5,
  },
  {
    title: "导航",
    href: "/components/navigation",
    icon: Navigation,
    description: "侧边栏、标签页、面包屑、命令面板",
    count: 5,
  },
  {
    title: "反馈",
    href: "/components/feedback",
    icon: MessageSquare,
    description: "弹窗、Toast、进度条、骨架屏",
    count: 5,
  },
  {
    title: "动效",
    href: "/components/effects",
    icon: Sparkles,
    description: "滚动动画、hover 效果、磁性按钮、过渡",
    count: 5,
  },
];

export const templateCategories: NavItem[] = [
  {
    title: "SaaS 仪表板",
    href: "/templates/dashboard",
    icon: LayoutDashboard,
    description: "数据看板、分析面板、管理后台",
  },
  {
    title: "营销落地页",
    href: "/templates/landing",
    icon: Globe,
    description: "产品介绍、定价页、特性展示",
  },
  {
    title: "登录 / 注册",
    href: "/templates/auth",
    icon: LogIn,
    description: "认证页面、社交登录、多步骤注册",
  },
  {
    title: "表单页",
    href: "/templates/form-page",
    icon: FileText,
    description: "设置页、个人资料、多步骤表单",
  },
];
