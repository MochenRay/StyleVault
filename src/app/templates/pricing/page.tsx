"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Free",
    desc: "适合个人开发者和小型项目",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    cta: "免费开始",
    ctaVariant: "outline" as const,
    features: [
      { text: "最多 3 个项目", included: true },
      { text: "1GB 存储空间", included: true },
      { text: "社区支持", included: true },
      { text: "基础数据分析", included: true },
      { text: "自定义域名", included: false },
      { text: "团队协作", included: false },
      { text: "API 访问", included: false },
      { text: "优先技术支持", included: false },
    ],
  },
  {
    name: "Pro",
    desc: "适合成长中的团队和企业",
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: true,
    cta: "立即订阅",
    ctaVariant: "default" as const,
    features: [
      { text: "无限项目", included: true },
      { text: "50GB 存储空间", included: true },
      { text: "优先邮件支持", included: true },
      { text: "高级数据分析", included: true },
      { text: "自定义域名", included: true },
      { text: "团队协作（10人）", included: true },
      { text: "API 访问", included: true },
      { text: "优先技术支持", included: false },
    ],
  },
  {
    name: "Enterprise",
    desc: "适合大型组织和定制需求",
    monthlyPrice: -1,
    yearlyPrice: -1,
    popular: false,
    cta: "联系销售",
    ctaVariant: "outline" as const,
    features: [
      { text: "无限项目", included: true },
      { text: "无限存储空间", included: true },
      { text: "专属客户经理", included: true },
      { text: "高级数据分析", included: true },
      { text: "自定义域名", included: true },
      { text: "团队协作（无限）", included: true },
      { text: "API 访问", included: true },
      { text: "优先技术支持 + SLA", included: true },
    ],
  },
];

const faqs = [
  {
    q: "可以随时更换套餐吗？",
    a: "可以。升级会立即生效，差价按比例计算。降级会在当前计费周期结束后生效。",
  },
  {
    q: "免费版有使用期限吗？",
    a: "没有。免费版永久免费，无需绑定信用卡。功能有限制但不会过期。",
  },
  {
    q: "按年付费有什么优惠？",
    a: "按年付费可享受约 20% 的折扣，等于每年免费使用超过 2 个月。",
  },
  {
    q: "企业版支持私有化部署吗？",
    a: "支持。企业版提供完整的私有化部署方案，包括本地服务器和私有云环境。具体细节请联系销售团队。",
  },
  {
    q: "如何取消订阅？",
    a: "可以在设置页面随时取消订阅。取消后，服务会持续到当前计费周期结束。我们不会收取额外费用。",
  },
  {
    q: "支持哪些支付方式？",
    a: "支持信用卡（Visa、MasterCard）、支付宝、微信支付。企业版还支持对公转账和发票。",
  },
];

export default function PricingTemplatePage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-20 pb-12 text-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <Zap className="h-3 w-3" />
            简单透明的定价
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            选择适合你的方案
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            从免费版开始，随业务增长随时升级。无隐藏费用。
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              按月付费
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span
              className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              按年付费
            </span>
            {yearly && (
              <Badge
                variant="secondary"
                className="text-xs text-emerald-600 dark:text-emerald-400"
              >
                省 20%
              </Badge>
            )}
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card
                className={`relative flex h-full flex-col p-6 ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2.5 right-4">
                    最受欢迎
                  </Badge>
                )}

                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.desc}
                  </p>
                </div>

                <div className="mt-5">
                  {plan.monthlyPrice === -1 ? (
                    <span className="text-3xl font-bold">联系我们</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">
                        ¥{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/月</span>
                      {yearly && plan.monthlyPrice > 0 && (
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          ¥{plan.monthlyPrice}
                        </span>
                      )}
                    </>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                      )}
                      <span
                        className={
                          f.included ? "" : "text-muted-foreground/60"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={plan.ctaVariant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold">常见问题</h2>
            <p className="mt-2 text-muted-foreground">
              找不到答案？请联系我们的支持团队
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
