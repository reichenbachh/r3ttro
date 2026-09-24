import type { Route } from "./+types/work";
import { seo } from "../seo";
import { PageShell } from "../components/page-shell";
import { Tag } from "../components/tag";
import { EXPERIENCE } from "../data/content";

export function meta({}: Route.MetaArgs) {
  return seo({
    title: "Work & Experience / George Wiredu Ansong",
    description:
      "Roles, teams and shipped products: web, mobile and backend work built since 2019.",
    path: "/work",
  });
}

export default function Work() {
  return (
    <PageShell
      active="/work"
      sectionLabel="[ 01 / work ]"
      title="Work"
      intro="The roles, the teams, and what actually shipped. Most recent first."
    >
      <div className="flex flex-col gap-1">
        {EXPERIENCE.map((role) => (
          <article
            key={`${role.company}-${role.start}`}
            className="rounded-xs bg-panel p-6 sm:p-8 lg:p-10"
          >
            <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-12">
              <div className="flex flex-col gap-2">
                <div className="font-space-mono text-[10px] tracking-[0.14em] text-accent">
                  {role.start}{" "}
                  <span className="text-heading">→</span> {role.end}
                </div>
                <div className="font-space-mono text-[11px] leading-[1.9] tracking-[0.06em] text-heading">
                  {role.location}
                  <br />
                  {role.arrangement}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-heading">
                  {role.role}
                </h2>
                <div className="mt-2 text-[13px] tracking-[0.02em] text-heading">
                  {role.company}
                  {role.parent && (
                    <>
                      <span className="mx-2 text-heading">/</span>
                      {role.parent}
                    </>
                  )}
                </div>

                <ul className="mt-7 flex flex-col gap-5">
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
                        <span className="text-[13px] leading-[1.9] text-heading">
                          {point.text}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/12 pt-6">
                  <div className="mb-3 font-space-mono text-[10px] tracking-[0.15em] text-heading">
                    STACK
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.stack.map((tech, i) => (
                      <Tag key={tech} primary={i < 3}>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
