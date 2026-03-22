"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, CreditCard, Truck, RotateCcw } from "lucide-react";

const faqItems = [
  {
    id: "shipping",
    icon: Truck,
    question: "配送范围和时效是怎样的？",
    answer:
      "我们支持全国范围配送。一线城市通常 1-2 个工作日送达，其他地区 3-5 个工作日。偏远地区可能需要额外 2-3 天。所有订单满 99 元包邮。",
  },
  {
    id: "return",
    icon: RotateCcw,
    question: "退换货政策是什么？",
    answer:
      "自签收之日起 7 天内，商品未拆封、未使用且不影响二次销售的情况下，可申请无理由退换。部分特殊商品（如定制商品、生鲜食品）不适用此政策。",
  },
  {
    id: "payment",
    icon: CreditCard,
    question: "支持哪些支付方式？",
    answer:
      "支持微信支付、支付宝、银联云闪付、信用卡/借记卡在线支付。企业用户还可使用对公转账，转账后请上传凭证以加速处理。",
  },
  {
    id: "privacy",
    icon: Shield,
    question: "我的个人信息安全吗？",
    answer:
      "我们严格遵守《个人信息保护法》，采用 AES-256 加密存储敏感数据，所有传输通过 TLS 1.3 加密。我们不会向任何第三方出售您的个人信息。",
  },
  {
    id: "account",
    icon: HelpCircle,
    question: "忘记密码怎么办？",
    answer:
      "点击登录页的「忘记密码」链接，输入注册手机号或邮箱，按照验证码提示重置密码即可。如果手机号已更换，请联系客服提供身份验证后协助处理。",
  },
];

export function AccordionDemo() {
  return (
    <div className="grid gap-8">
      {/* 基础手风琴（单项展开） */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          基础手风琴（单项展开）
        </h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.slice(0, 3).map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* 可多项展开 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          多项展开
        </h3>
        <Accordion type="multiple" className="w-full">
          {faqItems.slice(0, 3).map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* 带图标的手风琴 */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          带图标
        </h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => {
            const Icon = item.icon;
            return (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-6">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
