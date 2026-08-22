import SectionLabel from "../components/SectionLabel";
import TechnicalLabel from "../components/TechnicalLabel";
import ArrowLink from "../components/ArrowLink";
import { whatWeDo } from "../content/loader";
import "./WhatWeDo.css";

/** 03 / What We Do + Join Us — engineering domains mapped to the people who run them. */
function WhatWeDo() {
  return (
    <section id="what-we-do" className="what-we-do" aria-labelledby="what-we-do-heading">
      <div className="container">
        <SectionLabel>{whatWeDo.sectionLabel}</SectionLabel>
        <h2 id="what-we-do-heading" className="what-we-do__heading">
          {whatWeDo.heading}
        </h2>

        <ol className="domains">
          {whatWeDo.domains.map((domain, index) => (
            <li key={domain.id} className="domains__item">
              <span className="domains__index">{String(index + 1).padStart(2, "0")}</span>
              <div className="domains__body">
                <TechnicalLabel accent>{domain.tag}</TechnicalLabel>
                <h3 className="domains__title">{domain.title}</h3>
                <p className="domains__description">{domain.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <hr className="rule what-we-do__rule" />

        <div className="mapping">
          <div className="mapping__columns">
            <span className="mapping__column-label">The work</span>
            <span className="mapping__column-label">The people</span>
          </div>

          {whatWeDo.domains.map((domain) => {
            const related = whatWeDo.traits.filter((trait) =>
              trait.relatedDomains.includes(domain.id),
            );

            return (
              <div key={domain.id} className="mapping__row">
                <span className="mapping__domain">{domain.title}</span>
                <span className="mapping__arrow" aria-hidden="true">
                  →
                </span>
                <ul className="mapping__traits">
                  {related.map((trait) => (
                    <li key={trait.id}>{trait.title}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="join" id="join">
          <SectionLabel>{whatWeDo.joinSectionLabel}</SectionLabel>
          <h3 className="join__heading">{whatWeDo.joinHeading}</h3>
          <p className="join__intro">{whatWeDo.joinIntro}</p>

          <ul className="join__traits">
            {whatWeDo.traits.map((trait) => (
              <li key={trait.id} className="join__trait">
                <h4 className="join__trait-title">{trait.title}</h4>
                <p className="join__trait-description">{trait.description}</p>
              </li>
            ))}
          </ul>

          <ArrowLink href={whatWeDo.joinCta.href} variant="primary">
            {whatWeDo.joinCta.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
