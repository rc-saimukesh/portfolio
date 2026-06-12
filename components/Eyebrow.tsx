interface EyebrowProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Eyebrow({ children, center = false }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-[0.7em] text-[12px] tracking-[0.22em] uppercase text-[#6f6c64] ${center ? "justify-center" : ""}`}
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      <span className="inline-block w-[22px] h-px bg-[#f3a886]" />
      {children}
    </p>
  );
}
