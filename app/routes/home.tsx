import { Link } from "react-router";
import type { Route } from "./+types/home";
import { NodeField } from "../components/node-field";
import { SiteNav } from "../components/site-nav";
import {
  CALENDLY_URL,
  EXPERIENCE,
  HERO_STATS,
  PRINCIPLES,
  PRODUCTS,
} from "../data/content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "George Wiredu Ansong / Frontend, Backend & Mobile Engineer" },
    {
      name: "description",
      content:
        "Software engineer working across crypto, fintech, SaaS, AI and logistics, turning messy problems into models that ship on web and mobile. Writing code since 2019.",
    },
  ];
}

const NAME = "George Wiredu Ansong";

export default function Home() {
  return (
    <div className="min-h-screen font-mono">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10 lg:px-16">
        {/* hero */}
        <section className="relative flex flex-col pt-8 pb-16 lg:min-h-[92vh] lg:pt-10 lg:pb-10">
          <NodeField />
          <header className="rise relative z-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
            <div className="flex items-baseline gap-4">
              <span className="text-xs font-semibold tracking-[0.12em] text-accent">
                {NAME}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-heading">
                SOFTWARE ENGINEER
              </span>
            </div>
            <SiteNav active="/" className="" />
          </header>

          <div className="relative z-10 flex flex-1 flex-col justify-center py-12 lg:py-10">
            <div>
              <div className="max-w-[620px]">
                <div
                  className="rise mb-6 font-space-mono text-[10px] tracking-[0.24em] text-heading"
                  style={{ animationDelay: "60ms" }}
                >
                  [ 00 / identity ]
                </div>

                <h1
                  className="rise mb-3.5 text-[2.35rem] leading-[1.08] font-bold tracking-[-0.02em] text-heading sm:text-5xl lg:text-[3.4rem]"
                  style={{ animationDelay: "120ms" }}
                >
                  {NAME}
                  <span
                    aria-hidden="true"
                    className="cursor-blink ml-3 inline-block h-[0.62em] w-[0.38em] bg-accent align-baseline"
                  />
                </h1>

                <div
                  className="rise mb-6 text-[15px] tracking-[0.03em] text-heading"
                  style={{ animationDelay: "180ms" }}
                >
                  Frontend
                  <span className="mx-2 text-heading">/</span>
                  Backend
                  <span className="mx-2 text-heading">/</span>
                  Mobile{" "}
                  <span className="text-heading">(React Native)</span>
                </div>

                <p
                  className="rise mb-4 max-w-[540px] text-[13.5px] leading-[1.95] text-heading"
                  style={{ animationDelay: "240ms" }}
                >
                  I've built in crypto, fintech, SaaS, AI and logistics.
                  Different domains, same work: abstracting a messy problem into
                  a model clean enough to write down in code, then shipping it
                  on web and mobile.
                </p>

                <p
                  className="rise mb-9 max-w-[540px] text-[13px] leading-[1.95] text-heading"
                  style={{ animationDelay: "300ms" }}
                >
                  Writing code since 2019, driven by curiosity about how systems
                  work underneath, and how they interact with the social fabric
                  they run inside.
                </p>

                <div
                  className="rise mb-10 flex flex-wrap items-center gap-3"
                  style={{ animationDelay: "360ms" }}
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xs border border-accent bg-accent px-6 py-3.5 font-space-mono text-[12px] font-bold tracking-[0.08em] text-ink hover:bg-accent/85"
                  >
                    book a call
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <Link
                    to="/work"
                    className="group inline-flex items-center gap-2.5 rounded-xs border border-accent/30 bg-accent/5 px-6 py-3.5 font-space-mono text-[12px] tracking-[0.08em] text-accent hover:border-accent/60 hover:bg-accent/10"
                  >
                    view work
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-xs border border-white/10 px-6 py-3.5 font-space-mono text-[12px] tracking-[0.08em] text-heading hover:border-white/25 hover:text-accent"
                  >
                    contact
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div
                  className="rise flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-white/12 pt-6"
                  style={{ animationDelay: "420ms" }}
                >
                  {HERO_STATS.map((stat) => (
                    <div key={stat.label} className="flex items-baseline gap-2">
                      <span className="font-space-mono text-[12px] tracking-[0.04em] text-accent">
                        {stat.value}
                      </span>
                      <span className="text-[11px] leading-[1.6] text-heading">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="rise relative z-10 mt-12" style={{ animationDelay: "540ms" }}>
            <div className="mb-9 flex items-center gap-5">
              <h2 className="font-space-mono text-[28px] leading-none tracking-[0.04em] whitespace-nowrap text-heading sm:text-[34px] lg:text-[38px]">
                <span className="mr-2.5 text-accent">❯</span>
                how i work
              </h2>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
              {PRINCIPLES.map((principle) => (
                <div key={principle.index} className="flex gap-3.5">
                  <span className="pt-1 font-space-mono text-[10px] tracking-[0.1em] text-accent">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="mb-2.5 text-[17px] leading-[1.3] font-semibold tracking-[-0.01em] text-heading">
                      {principle.title}
                    </h3>
                    <p className="max-w-[310px] text-[12px] leading-[1.9] text-heading">
                      {principle.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden justify-end lg:flex">
              <span className="font-space-mono text-[10px] tracking-[0.1em] text-heading">
                scroll ↓
              </span>
            </div>
          </div>
        </section>

        {/* live products */}
        <section className="pt-16 pb-6 lg:pt-20">
          <div className="mb-8 font-space-mono text-[10px] tracking-[0.24em] text-heading">
            [ 01 / live ]
          </div>

          <p className="mb-10 max-w-[560px] text-[13px] leading-[1.9] text-heading">
            Products in production that I contributed to or own work inside. All
            of them are running right now, so go and press the buttons.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* experience */}
        <section className="pt-16 pb-24 lg:pt-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="font-space-mono text-[10px] tracking-[0.24em] text-heading">
              [ 02 / experience ]
            </div>
            <Link
              to="/work"
              className="group font-space-mono text-[12px] tracking-[0.06em] text-heading hover:text-accent"
            >
              ./work{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <p className="mb-10 max-w-[560px] text-[13px] leading-[1.9] text-heading">
            Where the work has actually gone: the teams I've built with, the
            products that shipped, and what changed because of them. Most recent
            first.
          </p>

          <div className="flex flex-col gap-1">
            {EXPERIENCE.map((role) => (
              <RoleCard key={`${role.company}-${role.start}`} role={role} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const domain = product.url
    ? new URL(product.url).hostname.replace(/^www\./, "")
    : product.name.toLowerCase().replace(/\s+/g, "");

  const inner = (
    <>
      <div className="flex h-7 items-center gap-1.5 bg-[#1b1b21] px-3">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="ml-2 font-space-mono text-[10px] tracking-[0.06em] text-heading">
          {domain}
        </span>
      </div>

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} screenshot`}
          loading="lazy"
          width={1400}
          height={755}
          className="h-44 w-full object-cover object-top opacity-85 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100 sm:h-52"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="text-base font-semibold text-heading">
            {product.name}
          </h3>
          {product.url && (
            <span className="font-space-mono text-[10px] tracking-[0.06em] whitespace-nowrap text-accent">
              visit site ↗
            </span>
          )}
        </div>
        <p className="text-[12px] leading-[1.85] text-heading">
          {product.blurb}
        </p>
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-xs bg-panel transition-colors duration-200";

  if (!product.url) {
    return <div className={className}>{inner}</div>;
  }

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer noopener"
      className={`${className} hover:bg-[#16161b]`}
    >
      {inner}
    </a>
  );
}

function RoleCard({ role }: { role: (typeof EXPERIENCE)[number] }) {
  return (
    <article className="rounded-xs bg-panel p-6 sm:p-8 lg:p-10">
      <div className="grid gap-5 lg:grid-cols-[170px_1fr] lg:gap-12">
        <div className="flex flex-col gap-2">
          <div className="font-space-mono text-[10px] tracking-[0.14em] text-accent">
            {role.start} <span className="text-heading">→</span> {role.end}
          </div>
          <div className="font-space-mono text-[11px] leading-[1.9] tracking-[0.06em] text-heading">
            {role.location}
            <br />
            {role.arrangement}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-heading">
            {role.role}
          </h3>
          <div className="mt-1.5 text-[12px] tracking-[0.02em] text-heading">
            {role.company}
            {role.parent && (
              <>
                <span className="mx-2 text-heading">/</span>
                {role.parent}
              </>
            )}
          </div>

          <ul className="mt-6 flex flex-col gap-5">
            {role.highlights.map((point) => (
              <li key={point.text} className="flex items-baseline gap-2.5">
                <span className="text-accent">▸</span>
                <div className="max-w-[640px]">
                  {point.client && (
                    <div className="mb-1.5 font-space-mono text-[11px] tracking-[0.1em] text-accent">
                      {point.client}
                      {point.clientLocation && (
                        <span className="ml-2.5 text-heading">
                          <span className="mr-2 opacity-40">/</span>
                          {point.clientLocation}
                        </span>
                      )}
                    </div>
                  )}
                  <span className="text-[12.5px] leading-[1.85] text-heading">
                    {point.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-white/12 pt-5 font-space-mono text-[11px] leading-[2.1] tracking-[0.04em] text-heading">
            {role.stack.join("  ·  ")}
          </div>
        </div>
      </div>
    </article>
  );
}
