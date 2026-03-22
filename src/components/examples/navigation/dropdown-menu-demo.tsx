"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  User,
  Settings,
  LogOut,
  CreditCard,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  Cloud,
  LifeBuoy,
  ChevronDown,
  Eye,
  EyeOff,
  Columns3,
  LayoutGrid,
  List,
} from "lucide-react";

export function DropdownMenuDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="space-y-8">
      {/* 基础下拉菜单 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">基础下拉菜单</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              我的账户
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>我的账户</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                个人资料
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                账单管理
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                偏好设置
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 带子菜单的嵌套菜单 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">嵌套子菜单</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              邀请用户
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                邮件邀请
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                消息邀请
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  邀请到团队
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    产品团队
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    研发团队
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    设计团队
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Cloud className="mr-2 h-4 w-4" />
                  分享到
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>飞书</DropdownMenuItem>
                  <DropdownMenuItem>企业微信</DropdownMenuItem>
                  <DropdownMenuItem>钉钉</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              帮助中心
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 带 Checkbox 和 Radio 的菜单 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">Checkbox / Radio 菜单项</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              视图选项
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>显示设置</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <Eye className="mr-2 h-4 w-4" />
              显示状态栏
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              <EyeOff className="mr-2 h-4 w-4" />
              显示侧边栏
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>视图模式</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
              <DropdownMenuRadioItem value="grid">
                <LayoutGrid className="mr-2 h-4 w-4" />
                网格视图
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list">
                <List className="mr-2 h-4 w-4" />
                列表视图
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="columns">
                <Columns3 className="mr-2 h-4 w-4" />
                分栏视图
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="mt-2 text-xs text-muted-foreground">
          状态栏: {showStatusBar ? "显示" : "隐藏"} · 侧边栏: {showPanel ? "显示" : "隐藏"} · 视图: {viewMode}
        </p>
      </div>
    </div>
  );
}
