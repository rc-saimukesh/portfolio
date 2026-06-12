"use client";

interface MeshBlobsProps {
  colors: string[];
  className?: string;
}

const POS = [
  { width: "60%", height: "80%", left: "-6%", top: "-10%" },
  { width: "55%", height: "75%", right: "-8%", top: "6%" },
  { width: "45%", height: "65%", left: "34%", top: "34%" },
];

export default function MeshBlobs({ colors, className = "" }: MeshBlobsProps) {
  return (
    <div
      className={`absolute inset-[-20%] pointer-events-none ${className}`}
      style={{ filter: "blur(34px) saturate(140%)" }}
    >
      {colors.map((color, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            ...POS[i] || POS[0],
            background: color,
            opacity: 0.85,
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
}
