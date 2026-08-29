import heroLogo from "../assets/AIM Alt Logo.png";
import { hero } from "../content/loader";
import "./Hero.css";

/** 01 / Hero — establishes AIM immediately with an editorial, asymmetric layout. */
function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="technical-label">{hero.eyebrow}</p>

          <h1 className="hero__heading">
            {hero.headingLines.map((line) => (
              <span key={line} className="hero__heading-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__subheading">{hero.subheading}</p>

          <ul className="hero__tags">
            {hero.tags.map((tag) => (
              <li key={tag} className="hero__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media" role="img" aria-label={hero.mediaAlt}>
          <img className="hero__logo" src={heroLogo} alt="" />
        </div>
      </div>

      <div className="hero__scroll container">
        <span className="technical-label">{hero.scrollLabel}</span>
        <span className="technical-label technical-label--accent">
          {hero.scrollText} ↓
        </span>
      </div>
    </section>
  );
}

export default Hero;
