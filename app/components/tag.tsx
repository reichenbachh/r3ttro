export function Tag({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <span
      className="px-2.5 py-1 text-[10px] tracking-[0.08em]"
      style={{
        color: primary ? "#E8FF00" : "#E8E8E8",
        background: primary ? "rgba(232,255,0,.08)" : "rgba(255,255,255,.07)",
      }}
    >
      {children}
    </span>
  );
}
