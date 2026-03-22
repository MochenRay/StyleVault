"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Info, Undo2 } from "lucide-react";

export function ToastDemos() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        className="gap-2"
        onClick={() =>
          toast.success("操作成功", {
            description: "数据已保存到服务器",
          })
        }
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        成功
      </Button>

      <Button
        variant="outline"
        className="gap-2"
        onClick={() =>
          toast.error("操作失败", {
            description: "网络连接异常，请稍后重试",
          })
        }
      >
        <XCircle className="h-4 w-4 text-red-500" />
        错误
      </Button>

      <Button
        variant="outline"
        className="gap-2"
        onClick={() =>
          toast.info("系统提示", {
            description: "您有 3 条未读消息",
          })
        }
      >
        <Info className="h-4 w-4 text-blue-500" />
        信息
      </Button>

      <Button
        variant="outline"
        className="gap-2"
        onClick={() =>
          toast("项目已删除", {
            description: "该项目已被移至回收站",
            action: {
              label: "撤销",
              onClick: () => toast.success("已撤销删除"),
            },
          })
        }
      >
        <Undo2 className="h-4 w-4" />
        带撤销
      </Button>
    </div>
  );
}
