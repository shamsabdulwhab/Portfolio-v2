// Shows the project photo when image is set in projects.js.
// Until then it shows a labeled placeholder.
export default function ProjectImage({ project }) {
  if (project.image) {
    return <img className="project-photo" src={project.image} alt="" />;
  }

  return (
    <div className="image-placeholder" role="img" aria-label={`${project.title} image placeholder`}>
      <span>Image</span>
    </div>
  );
}
