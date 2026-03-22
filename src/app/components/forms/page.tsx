import { ComponentCard } from "@/components/showcase/component-card";
import { TextInputs } from "@/components/examples/forms/text-inputs";
import { SelectDemos } from "@/components/examples/forms/select-demos";
import { DatePickerDemo } from "@/components/examples/forms/date-picker";
import { FileUploadDemo } from "@/components/examples/forms/file-upload";
import { ToggleSwitches } from "@/components/examples/forms/toggle-switches";
import { SliderDemos } from "@/components/examples/forms/slider-demos";
import { FormValidation } from "@/components/examples/forms/form-validation";

export default function FormsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">表单与交互</h1>
        <p className="mt-2 text-muted-foreground">
          输入框、选择器、开关、滑块、文件上传、表单校验等交互组件
        </p>
      </div>

      <div className="space-y-6">
        <ComponentCard
          title="文本输入框"
          description="基础、带图标、带前缀、密码、禁用、错误态"
        >
          <TextInputs />
        </ComponentCard>

        <ComponentCard
          title="选择器"
          description="基础下拉、分组下拉、禁用、默认值"
        >
          <SelectDemos />
        </ComponentCard>

        <ComponentCard title="日期选择器" description="弹窗式与内联日历">
          <DatePickerDemo />
        </ComponentCard>

        <ComponentCard
          title="文件上传"
          description="拖拽上传区域，支持文件列表管理"
        >
          <FileUploadDemo />
        </ComponentCard>

        <ComponentCard
          title="开关与复选框"
          description="通知开关组 + 功能复选框"
        >
          <ToggleSwitches />
        </ComponentCard>

        <ComponentCard
          title="滑块"
          description="基础滑块、音量控制、范围选择、步进"
        >
          <SliderDemos />
        </ComponentCard>

        <ComponentCard
          title="表单校验"
          description="完整表单示例：必填校验、格式验证、提交反馈"
        >
          <FormValidation />
        </ComponentCard>
      </div>
    </div>
  );
}
