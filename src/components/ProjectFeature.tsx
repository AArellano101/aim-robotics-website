import TechnicalLabel from "./TechnicalLabel";
import type { EngineeringProject } from "../content/types";
import "./ProjectFeature.css";

interface ProjectFeatureProps {
  project: EngineeringProject;
  reversed: boolean;
}

/** Alternating editorial layout for one Current Work engineering project. */
function ProjectFeature({ project, reversed }: ProjectFeatureProps) {
  return (
    <article className={`project-feature ${reversed ? "project-feature--reversed" : ""}`}>
      <div className="project-feature__media">
        {project.mediaImage ? (
          <img
            src={project.mediaImage}
            alt={project.title}
            className="project-feature__media-image"
          />
        ) : (
          <span className="project-feature__media-label">
            [ {project.mediaLabel} ]
          </span>
        )}
    </div>

      <div className="project-feature__body">
        <span className="project-feature__number">{project.number}</span>
        <TechnicalLabel accent>{project.tag}</TechnicalLabel>
        <h3 className="project-feature__title">{project.title}</h3>
        <p className="project-feature__description">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectFeature;
