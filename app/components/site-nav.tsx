import { Link } from "react-router";

const LINKS = [
  { href: "/", label: "./home" },
  { href: "/work", label: "./work" },
  { href: "/blog", label: "./blog" },
  { href: "/contact", label: "./contact" },
] as const;

export function SiteBrand() {
  return (
    <div className="mb-18 flex items-baseline gap-4">
      <Link
        to="/"
        className="text-xs font-semibold tracking-[0.12em] text-accent"
      >
        George Wiredu Ansong
      </Link>
      <span className="text-[10px] tracking-[0.2em] text-heading">
        SOFTWARE ENGINEER
      </span>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 font-space-mono text-[10px] tracking-[0.24em] text-heading">
      {children}
    </div>
  );
}

export function SiteNav({
  active,
  className = "mb-20",
}: {
  active: string;
  className?: string;
}) {
  return (
    <nav className={`flex flex-wrap gap-x-8 gap-y-2 sm:gap-x-10 ${className}`}>
      {LINKS.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          aria-current={link.href === active ? "page" : undefined}
          className={`-mx-1 rounded-xs px-1 py-2 font-space-mono text-[15px] tracking-[0.06em] ${
            link.href === active
              ? "text-accent"
              : "text-heading hover:text-accent"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
