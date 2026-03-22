"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from "@/components/ui/menubar";
import { useState } from "react";

export function MenubarDemo() {
  const [autoSave, setAutoSave] = useState(true);
  const [wordWrap, setWordWrap] = useState(true);
  const [theme, setTheme] = useState("system");

  return (
    <div className="space-y-8">
      {/* 编辑器风格菜单栏 */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-muted-foreground">编辑器菜单栏</h4>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>文件</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                新建文件 <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                新建窗口 <MenubarShortcut>⇧⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                打开… <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>打开最近文件</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>project-config.json</MenubarItem>
                  <MenubarItem>page.tsx</MenubarItem>
                  <MenubarItem>globals.css</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>清除最近记录</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                保存 <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                另存为… <MenubarShortcut>⇧⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarCheckboxItem checked={autoSave} onCheckedChange={setAutoSave}>
                自动保存
              </MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>编辑</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                撤销 <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                剪切 <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                复制 <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                粘贴 <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                查找替换 <MenubarShortcut>⌘H</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                全选 <MenubarShortcut>⌘A</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>视图</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
                自动换行
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>外观</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                    <MenubarRadioItem value="light">浅色</MenubarRadioItem>
                    <MenubarRadioItem value="dark">深色</MenubarRadioItem>
                    <MenubarRadioItem value="system">跟随系统</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                放大 <MenubarShortcut>⌘+</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                缩小 <MenubarShortcut>⌘-</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                重置缩放 <MenubarShortcut>⌘0</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                切换全屏 <MenubarShortcut>⌃⌘F</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>帮助</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>使用文档</MenubarItem>
              <MenubarItem>快捷键速查</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>检查更新…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>关于编辑器</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <p className="mt-2 text-xs text-muted-foreground">
          自动保存: {autoSave ? "开" : "关"} · 自动换行: {wordWrap ? "开" : "关"} · 主题: {theme}
        </p>
      </div>
    </div>
  );
}
