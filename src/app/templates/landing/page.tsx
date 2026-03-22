"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, BarChart3, Globe, ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { icon: Zap, title: "极速性能", desc: "基于 Edge Runtime 构建，全球 CDN 加速，首屏加载低于 100ms。" },
  { icon: Shield, title: "企业级安全", desc: "SOC 2 认证，端到端加密，细粒度角色权限控制。" },
  { icon: BarChart3, title: "实时分析", desc: "内置数据看板，支持自定义指标、报警规则和自动化报告。" },
  { icon: Globe, title: "全球覆盖", desc: "30+ 数据中心节点，自动就近接入，99.99% SLA 保障。" },
];

const plans = [
  { name: "免费版", price: "¥0", period: "/月", desc: "适合个人项目和学习", features: ["最多 3 个项目", "1GB 存储空间", "社区支持", "基础分析"], cta: "开始使用", popular: false },
  { name: "专业版", price: "¥99", period: "/月", desc: "适合中小团队", features: ["无限项目", "50GB 存储空间", "优先邮件支持", "高级分析", "自定义域名", "团队协作"], cta: "立即订阅", popular: true },
  { name: "企业版", price: "联系我们", period: "", desc: "适合大型组织", features: ["一切专业版功能", "无限存储", "专属客户经理", "SLA 保障", "SSO 集成", "私有部署"], cta: "联系销售", popular: false },
];

export default function LandingTemplatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
          <Badge variant="secondary" className="mb-4 gap-1.5"><Sparkles className="h-3 w-3" />全新发布 v2.0</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            构建下一代<br /><span className="text-primary">数字产品</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            从概念到上线，一站式开发平台。更快的迭代、更好的体验、更强的数据洞察。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg" className="gap-2">免费开始<ArrowRight className="h-4 w-4" /></Button>
            <Button size="lg" variant="outline">查看演示</Button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold">为什么选择我们</h2>
          <p className="mt-2 text-center text-muted-foreground">四大核心优势，助力团队高效交付</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-6 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-secondary/20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">选择合适的方案</h2>
          <p className="mt-2 text-center text-muted-foreground">灵活定价，按需选择</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative p-6 ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}>
                {plan.popular && <Badge className="absolute -top-2.5 right-4">最受欢迎</Badge>}
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{f}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">准备好开始了吗？</h2>
        <p className="mt-2 text-muted-foreground">免费注册，几分钟内即可上手</p>
        <Button size="lg" className="mt-6 gap-2">立即创建账号<ArrowRight className="h-4 w-4" /></Button>
      </section>
    </div>
  );
}
