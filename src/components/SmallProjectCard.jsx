import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage.jsx";
import "./SmallProjectCard.css";

export default function SmallProjectCard({ project }) {
  const wideClass = project.wide ? " is-wide" : "";

  return (
    <article className={`small-card tone-${project.tone}${wideClass}`}>
      <ProjectImage project={project} />
      <div className="small-card-copy">
        <p className="kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <span className="card-year">{project.year}</span>
      <Link className={`project-button is-${project.button}`} to={`/work/${project.id}`}>
        {project.buttonLabel}
      </Link>
    </article>
  );
}
