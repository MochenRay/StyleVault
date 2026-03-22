"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export function AlertDemos() {
  return (
    <div className="space-y-4">
      {/* 信息 */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>系统通知</AlertTitle>
        <AlertDescription>
          新版本 v2.1.0 已发布，包含性能优化和新功能。建议尽快升级。
        </AlertDescription>
      </Alert>

      {/* 成功 */}
      <Alert className="border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 [&>svg]:text-emerald-500">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>部署成功</AlertTitle>
        <AlertDescription className="text-emerald-600/80 dark:text-emerald-400/80">
          应用已成功部署到生产环境，所有健康检查均已通过。
        </AlertDescription>
      </Alert>

      {/* 警告 */}
      <Alert className="border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-400 [&>svg]:text-amber-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>存储空间不足</AlertTitle>
        <AlertDescription className="text-amber-600/80 dark:text-amber-400/80">
          当前存储已使用 92%。请及时清理或扩容，以避免服务中断。
        </AlertDescription>
      </Alert>

      {/* 错误 */}
      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>连接失败</AlertTitle>
        <AlertDescription>
          无法连接到数据库服务器。请检查网络配置和凭据是否正确。
        </AlertDescription>
      </Alert>
    </div>
  );
}
