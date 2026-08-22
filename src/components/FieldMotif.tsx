interface FieldMotifProps {
  className?: string;
  variant?: "field" | "crosshair";
}

/**
 * Restrained decorative SVG: simplified RoboCup SSL field geometry with a
 * crosshair overlay and trajectory lines. Used as placeholder engineering
 * media until real robot/field photography and CAD are available.
 */
function FieldMotif({ className, variant = "field" }: FieldMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      role="presentation"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="384" height="284" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="200" y1="8" x2="200" y2="292" stroke="var(--line)" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="46" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="2.5" fill="var(--charcoal)" />

      <rect x="8" y="90" width="56" height="120" fill="none" stroke="var(--line)" strokeWidth="1.5" />
      <rect x="336" y="90" width="56" height="120" fill="none" stroke="var(--line)" strokeWidth="1.5" />

      {variant === "field" ? (
        <>
          <path
            d="M40 240 C 120 210, 160 120, 240 100 S 340 70, 366 60"
            fill="none"
            stroke="var(--aim-red)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <circle cx="40" cy="240" r="5" fill="var(--charcoal)" />
          <circle cx="150" cy="150" r="5" fill="var(--charcoal)" />
          <circle cx="260" cy="95" r="5" fill="var(--aim-red)" />
          <circle cx="366" cy="60" r="3" fill="var(--aim-red)" />
        </>
      ) : (
        <g stroke="var(--charcoal)" strokeWidth="1.5" fill="none">
          <line x1="200" y1="60" x2="200" y2="90" />
          <line x1="200" y1="210" x2="200" y2="240" />
          <line x1="120" y1="150" x2="150" y2="150" />
          <line x1="250" y1="150" x2="280" y2="150" />
        </g>
      )}
    </svg>
  );
}

export default FieldMotif;
