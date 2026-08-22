import SectionLabel from "../components/SectionLabel";
import TechnicalLabel from "../components/TechnicalLabel";
import ProjectFeature from "../components/ProjectFeature";
import FieldMotif from "../components/FieldMotif";
import { engineering } from "../content/loader";
import "./Engineering.css";

/** 04 / Engineering — RoboCup context, then the Current Work project set. */
function Engineering() {
  return (
    <section id="engineering" className="engineering" aria-labelledby="engineering-heading">
      <div className="container">
        <SectionLabel>{engineering.sectionLabel}</SectionLabel>
        <h2 id="engineering-heading" className="engineering__heading">
          {engineering.heading}
        </h2>

        <div className="robocup">
          <div className="robocup__text">
            <TechnicalLabel accent>{engineering.roboCupLabel}</TechnicalLabel>
            <p className="robocup__intro">{engineering.roboCupIntro}</p>
            <p className="robocup__detail">{engineering.roboCupDetail}</p>
          </div>

          <div className="robocup__media" role="img" aria-label="Simplified RoboCup Small Size League field diagram">
            <FieldMotif className="robocup__motif" variant="field" />
          </div>
        </div>

        <ul className="pipeline">
          {engineering.pipeline.map((step, index) => (
            <li key={step} className="pipeline__step">
              <span className="pipeline__label">{step}</span>
              {index < engineering.pipeline.length - 1 ? (
                <span className="pipeline__arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="projects">
          {engineering.projects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Engineering;
