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
            className="grid grid-cols-[80px_1fr] items-center gap-8 rounded-[2px] bg-panel px-10 py-8"
          >
            <div className="font-space-mono text-[10px] tracking-[0.15em] text-heading">
              {link.label}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base tracking-[0.02em] text-heading">
                {link.value}
              </span>
              <span className="font-space-mono text-[10px] tracking-[0.06em] text-accent">
                {link.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
