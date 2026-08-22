import SectionLabel from "../components/SectionLabel";
import { about } from "../content/loader";
import "./About.css";

/** 02 / About — the strongest typographic moment: AIM's motto and objectives. */
function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionLabel>{about.sectionLabel}</SectionLabel>

        <div className="about__top">
          <h2 id="about-heading" className="about__heading">
            {about.heading}
          </h2>
          <p className="about__mission">{about.mission}</p>
        </div>

        <hr className="rule about__rule" />

        <ol className="about__goals">
          {about.goals.map((goal) => (
            <li key={goal.number} className="about__goal">
              <span className="about__goal-number">{goal.number}</span>
              <h3 className="about__goal-title">{goal.title}</h3>
              <p className="about__goal-description">{goal.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default About;
