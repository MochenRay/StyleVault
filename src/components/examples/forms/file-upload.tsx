"use client";

import { useState, useCallback } from "react";
import { Upload, X, FileText, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadedFile = {
  name: string;
  size: string;
  type: "image" | "document";
};

export function FileUploadDemo() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([
    { name: "design-spec.pdf", size: "2.4 MB", type: "document" },
    { name: "screenshot.png", size: "1.1 MB", type: "image" },
  ]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Demo: 不实际处理文件，仅展示交互
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* 拖拽区域 */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border/50 hover:border-primary/30"
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Upload className="h-5 w-5 text-primary" />
        </div>
        <p className="mt-3 text-sm font-medium">
          拖拽文件到此处，或{" "}
          <span className="cursor-pointer text-primary hover:underline">
            点击浏览
          </span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          支持 PNG, JPG, PDF，最大 10MB
        </p>
      </div>

      {/* 已上传文件列表 */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/30 px-4 py-3"
            >
              {file.type === "image" ? (
                <ImageIcon className="h-4 w-4 text-teal" />
              ) : (
                <FileText className="h-4 w-4 text-primary" />
              )}
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm">{file.name}</p>
                <p className="text-xs text-muted-foreground">{file.size}</p>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
