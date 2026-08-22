interface SectionLabelProps {
  children: string;
}

/** Small red engineering-style label placed above a section's primary heading. */
function SectionLabel({ children }: SectionLabelProps) {
  return <span className="section-label">{children}</span>;
}

export default SectionLabel;
