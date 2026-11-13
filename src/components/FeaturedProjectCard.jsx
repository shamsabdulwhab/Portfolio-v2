import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage.jsx";
import "./FeaturedProjectCard.css";

// project is a prop: one object from projects.js.
export default function FeaturedProjectCard({ project }) {
  return (
    <article className={`featured-card tone-${project.tone}`}>
      <ProjectImage project={project} />
      <p className="kicker">{project.kicker}</p>
      <h2>{project.title}</h2>
      <p className="card-copy">{project.description}</p>
      <Link className={`project-button is-${project.button}`} to={`/work/${project.id}`}>
        {project.buttonLabel}
      </Link>
    </article>
  );
}
