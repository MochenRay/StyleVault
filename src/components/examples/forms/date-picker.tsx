"use client";

import { useState } from "react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [rangeStart, setRangeStart] = useState<Date | undefined>();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* 基础日期选择 */}
      <div className="space-y-2">
        <Label>选择日期</Label>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: zhCN }) : "选择日期"}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-auto p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => { setDate(d); }}
              initialFocus
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* 内联日历 */}
      <div className="space-y-2">
        <Label>内联日历</Label>
        <div className="rounded-lg border border-border/50 p-3 w-fit">
          <Calendar
            mode="single"
            selected={rangeStart}
            onSelect={setRangeStart}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
