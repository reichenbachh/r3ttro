import { SectionLabel, SiteBrand, SiteNav } from "./site-nav";

export function PageShell({
  active,
  sectionLabel,
  title,
  intro,
  children,
}: {
  active: string;
  sectionLabel: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1180px] px-6 pt-10 pb-24 font-mono sm:px-10 lg:px-16 lg:pt-12">
      <SiteBrand />
      <SectionLabel>{sectionLabel}</SectionLabel>
      <SiteNav active={active} />

      <h1 className="mb-4 text-5xl leading-[1.1] font-bold tracking-[-0.02em] text-heading">
        {title}
      </h1>
      <p className="mb-18 max-w-[480px] text-[13px] leading-[1.9] text-heading">
        {intro}
      </p>

      {children}
    </div>
  );
}
