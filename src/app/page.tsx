"use client";

import { Button, Card, Divider, Tag } from "antd";

const pillars = [
  {
    title: "Next.js App Router",
    body: "Modern routing and layouts with streaming-friendly defaults.",
  },
  {
    title: "Cloudflare Workers",
    body: "Edge deployment with fast cold starts and global reach.",
  },
  {
    title: "OpenNext build",
    body: "Transforms your Next.js output into a Worker runtime package.",
  },
];

const commands = ["pnpm dev", "pnpm preview", "pnpm deploy"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-16 md:py-20">
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.4em] text-[#666666]">
            <span>Next × Cloudflare</span>
            <Tag className="!border-[#111111] !text-[#111111] !bg-transparent">
              Starter
            </Tag>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            A minimal Next.js + Cloudflare starter for serious product teams.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#444444]">
            Build with the App Router, package with OpenNext, and deploy to
            Workers without extra glue. Ant Design v6 provides dependable
            components while Tailwind v4 handles layout and polish.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              type="primary"
              size="large"
              className="!bg-[#111111] !border-[#111111] hover:!bg-[#111111]/90"
            >
              Run locally
            </Button>
            <Button size="large" className="!border-[#111111] !text-[#111111]">
              Deployment guide
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
              Project structure
            </h2>
            <p className="text-sm leading-relaxed text-[#555555]">
              Keep everything in one place. Source lives in{" "}
              <span className="font-mono">src/app</span>, configuration stays in
              the repo root, and OpenNext outputs to{" "}
              <span className="font-mono">.open-next</span>.
            </p>
            <div className="border border-[#e5e5e5] px-4 py-3 text-sm text-[#444444]">
              <ul className="space-y-2">
                <li>
                  <span className="font-mono">src/app/</span> — App Router pages
                  & layout
                </li>
                <li>
                  <span className="font-mono">open-next.config.ts</span> — build
                  pipeline
                </li>
                <li>
                  <span className="font-mono">wrangler.jsonc</span> — Workers
                  config
                </li>
              </ul>
            </div>
          </div>

          <Card
            className="!border-[#e5e5e5] !bg-white"
            styles={{ body: { padding: 20 } }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#666666]">
              Commands
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
              Preview runs your build on the Cloudflare runtime before you
              deploy.
            </p>
          </Card>
        </section>

        <footer className="mt-16 text-xs uppercase tracking-[0.3em] text-[#666666]">
          Edge-ready, minimal by design.
        </footer>
      </div>
    </div>
  );
}
