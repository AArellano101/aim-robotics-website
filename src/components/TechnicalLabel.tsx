interface TechnicalLabelProps {
  children: string;
  accent?: boolean;
  className?: string;
}

/** Restrained condensed metadata label, e.g. "ROBOTICS / SYSTEMS" or "CALGARY, AB". */
function TechnicalLabel({ children, accent, className }: TechnicalLabelProps) {
  const classes = ["technical-label", accent ? "technical-label--accent" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}

export default TechnicalLabel;
