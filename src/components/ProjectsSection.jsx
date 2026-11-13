import { Link } from "react-router-dom";
import FeaturedProjectCard from "./FeaturedProjectCard.jsx";
import SmallProjectCard from "./SmallProjectCard.jsx";
import ProjectImage from "./ProjectImage.jsx";
import {
  featuredProjects,
  editorialProject,
  smallProjects,
} from "../data/projects.js";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <>
      <section className="featured-section" aria-label="Selected work">
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="editorial-section" aria-label="More projects">
        <Link className="editorial-feature" to={`/work/${editorialProject.id}`}>
          <h2>{editorialProject.title}</h2>
          <p>{editorialProject.description}</p>
          <ProjectImage project={editorialProject} />
        </Link>

        <div className="small-grid">
          {smallProjects.map((project) => (
            <SmallProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
