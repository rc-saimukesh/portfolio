export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-[10px] py-[4px] rounded-full border border-white/10 bg-white/5 text-[#a7a399] text-[11px] tracking-[0.04em]"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {children}
    </span>
  );
}
