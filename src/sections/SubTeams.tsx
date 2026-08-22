import SectionLabel from "../components/SectionLabel";
import TechnicalLabel from "../components/TechnicalLabel";
import { teams } from "../content/loader";
import "./SubTeams.css";

/** 05 / Teams — communicates interdisciplinary integration around one system. */
function SubTeams() {
  return (
    <section id="teams" className="subteams" aria-labelledby="subteams-heading">
      <div className="container">
        <SectionLabel>{teams.sectionLabel}</SectionLabel>
        <h2 id="subteams-heading" className="subteams__heading">
          {teams.heading}
        </h2>
        <p className="subteams__intro">{teams.intro}</p>

        <div className="subteams__diagram">
          <div className="subteams__row">
            {teams.subteams.slice(0, 2).map((team) => (
              <div key={team.id} className="subteams__card">
                <TechnicalLabel accent>{team.tag}</TechnicalLabel>
                <h3 className="subteams__card-title">{team.title}</h3>
                <p className="subteams__card-description">{team.description}</p>
              </div>
            ))}
          </div>

          <div className="subteams__center">
            <span className="subteams__center-label">{teams.centerLabel}</span>
          </div>

          <div className="subteams__row">
            {teams.subteams.slice(2, 4).map((team) => (
              <div key={team.id} className="subteams__card">
                <TechnicalLabel accent>{team.tag}</TechnicalLabel>
                <h3 className="subteams__card-title">{team.title}</h3>
                <p className="subteams__card-description">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubTeams;
