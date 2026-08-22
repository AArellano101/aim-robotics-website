interface ArrowLinkProps {
  href: string;
  children: string;
  variant?: "plain" | "primary";
  direction?: "right" | "up-right";
  className?: string;
}

/** Text link with a directional arrow, used for all restrained CTAs on the site. */
function ArrowLink({ href, children, variant = "plain", direction = "right", className }: ArrowLinkProps) {
  const classes = ["arrow-link", variant === "primary" ? "arrow-link--primary" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href}>
      {children}
      <span className="arrow-link__arrow" aria-hidden="true">
        {direction === "up-right" ? "↗" : "→"}
      </span>
    </a>
  );
}

export default ArrowLink;
