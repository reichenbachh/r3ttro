import type { Route } from "./+types/blog";
import { seo } from "../seo";
import { PageShell } from "../components/page-shell";

export function meta({}: Route.MetaArgs) {
  return seo({
    title: "Blog / George Wiredu Ansong",
    description:
      "Thoughts on software, systems, and the ideas that don't fit anywhere else. First posts coming soon.",
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <PageShell
      active="/blog"
      sectionLabel="[ 02 / blog ]"
      title="Writing"
      intro="Thoughts on software, systems, and the ideas that don't fit anywhere else."
    >
      <section className="rise relative overflow-hidden rounded-xs bg-panel px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mb-8 font-space-mono text-[10px] tracking-[0.24em] text-accent">
          STATUS: DRAFTING
        </div>
        <h2 className="text-[clamp(3.5rem,14vw,11rem)] leading-[0.9] font-bold tracking-[-0.04em] text-heading">
          Coming
          <br />
          soon
          <span
            aria-hidden="true"
            className="cursor-blink ml-3 inline-block h-[0.62em] w-[0.38em] bg-accent align-baseline"
          />
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6 font-space-mono text-[10px] tracking-[0.15em] text-heading">
          <span>FIRST POSTS IN THE WORKS</span>
          <span className="text-accent">stay tuned →</span>
        </div>
      </section>
    </PageShell>
  );
}
