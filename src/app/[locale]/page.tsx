"use client";

import { Button, Card, Divider, Tag } from "antd";
import { useTranslations } from "use-intl";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("Home");

  const pillars = [
    {
      title: t("pillars.next.title"),
      body: t("pillars.next.body"),
    },
    {
      title: t("pillars.workers.title"),
      body: t("pillars.workers.body"),
    },
    {
      title: t("pillars.opennext.title"),
      body: t("pillars.opennext.body"),
    },
  ];

  const commands = [
    t("commands.dev"),
    t("commands.preview"),
    t("commands.deploy"),
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#111111]">
      <LocaleSwitcher />
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-16 md:py-20">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.4em] text-[#666666]">
            <span>{t("eyebrow")}</span>
            <Tag className="!border-[#111111] !text-[#111111] !bg-transparent">
              {t("badge")}
            </Tag>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#444444]">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              type="primary"
              size="large"
              className="!bg-[#111111] !border-[#111111] hover:!bg-[#111111]/90"
            >
              {t("cta.primary")}
            </Button>
            <Button size="large" className="!border-[#111111] !text-[#111111]">
              {t("cta.secondary")}
            </Button>
          </div>
        </header>

        <Divider className="!my-12 !border-[#e5e5e5]" />

        <section className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="!border-[#e5e5e5] !bg-white"
              styles={{ body: { padding: 20 } }}
            >
              <h3 className="text-lg font-semibold text-[#111111]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                {pillar.body}
              </p>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[#111111]">
              {t("structureTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-[#555555]">
              {t("structureIntro")} {" "}
              <span className="font-mono">{t("paths.app")}</span>,
              {" "}
              {t("structureMiddle")} {" "}
              <span className="font-mono">{t("paths.output")}</span>
              {t("structureOutro")}
            </p>
            <div className="border border-[#e5e5e5] px-4 py-3 text-sm text-[#444444]">
              <ul className="space-y-2">
                <li>
                  <span className="font-mono">{t("paths.app")}</span> —
                  {" "}
                  {t("structureItems.app")}
                </li>
                <li>
                  <span className="font-mono">{t("paths.openNext")}</span> —
                  {" "}
                  {t("structureItems.openNext")}
                </li>
                <li>
                  <span className="font-mono">{t("paths.wrangler")}</span> —
                  {" "}
                  {t("structureItems.wrangler")}
                </li>
              </ul>
            </div>
          </div>

          <Card
            className="!border-[#e5e5e5] !bg-white"
            styles={{ body: { padding: 20 } }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#666666]">
              {t("commandsLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[#111111]">
              {commands.map((command) => (
                <div
                  key={command}
                  className="border border-[#e5e5e5] px-3 py-2 font-mono"
                >
                  {command}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#666666]">
              {t("previewNote")}
            </p>
          </Card>
        </section>

        <footer className="mt-16 text-xs uppercase tracking-[0.3em] text-[#666666]">
          {t("footer")}
        </footer>
      </div>
    </div>
  );
}
