import TechnicalLabel from "./TechnicalLabel";
import type { EngineeringProject } from "../content/types";
import "./ProjectFeature.css";

interface ProjectFeatureProps {
  project: EngineeringProject;
  reversed: boolean;
}

/** Alternating editorial layout for one Current Work engineering project. */
function ProjectFeature({ project, reversed }: ProjectFeatureProps) {
  const mediaClasses = [
    "project-feature__media",
    project.mediaFit === "contain" ? "project-feature__media--contain" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const imageClasses = [
    "project-feature__media-image",
    project.mediaFit === "contain" ? "project-feature__media-image--contain" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={`project-feature ${reversed ? "project-feature--reversed" : ""}`}>
      <figure className="project-feature__media-figure">
        <div className={mediaClasses}>
          {project.mediaImage ? (
            <img src={project.mediaImage} alt={project.title} className={imageClasses} />
          ) : (
            <span className="project-feature__media-label">
              [ {project.mediaLabel} ]
            </span>
          )}
        </div>

        {project.mediaSource ? (
          <figcaption className="project-feature__media-source">
            <a href={project.mediaSource.href} target="_blank" rel="noreferrer">
              Source // {project.mediaSource.label} ↗
            </a>
          </figcaption>
        ) : null}
      </figure>

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
