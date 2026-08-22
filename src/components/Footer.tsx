import { footer } from "../content/loader";
import "./Footer.css";

/** Site footer with identity, affiliation, socials, and motto — all YAML-driven. */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <span className="footer__brand">{footer.brand}</span>
          <span className="footer__expansion">{footer.acronymExpansion}</span>
        </div>

        <div className="footer__location">
          <span>{footer.university}</span>
          <span>{footer.location}</span>
        </div>

        <nav className="footer__social" aria-label="Social links">
          {footer.socialLinks.map((link) => (
            <a key={link.id} href={link.href} className="footer__social-link">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__motto">{footer.motto}</p>

        <p className="footer__copyright">
          © {Math.max(footer.startYear, year)} {footer.copyrightHolder}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
