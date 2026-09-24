import type { Route } from "./+types/contact";
import { seo } from "../seo";
import { PageShell } from "../components/page-shell";
import { CONTACT_LINKS } from "../data/content";

export function meta({}: Route.MetaArgs) {
  return seo({
    title: "Contact / George Wiredu Ansong",
    description:
      "Get in touch with George Wiredu Ansong by email or LinkedIn, or book a 30 minute call to talk about work, ideas or collaboration.",
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <PageShell
      active="/contact"
      sectionLabel="[ 03 / contact ]"
      title="Contact"
      intro="I'm always open to interesting conversations about work, ideas, or collaboration. Reach out directly."
    >
      <div className="flex max-w-[680px] flex-col gap-1">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="grid items-center gap-3 rounded-xs bg-panel px-6 py-6 sm:grid-cols-[80px_1fr] sm:gap-8 sm:px-10 sm:py-8"
          >
            <div className="font-space-mono text-[10px] tracking-[0.15em] text-heading">
              {link.label}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="min-w-0 text-sm tracking-[0.02em] wrap-anywhere text-heading sm:text-base">
                {link.value}
              </span>
              <span className="shrink-0 font-space-mono text-[10px] tracking-[0.06em] whitespace-nowrap text-accent">
                {link.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
