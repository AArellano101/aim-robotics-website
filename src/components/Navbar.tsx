import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navigation } from "../content/loader";
import "./Navbar.css";

/** Fixed top navigation with smooth-scroll links and an accessible mobile menu. */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#top" aria-label={`${navigation.brand} home`}>
          <Logo />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navigation.links.map((link) => (
            <a key={link.id} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? navigation.menuCloseLabel : navigation.menuOpenLabel}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        {navigation.links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
