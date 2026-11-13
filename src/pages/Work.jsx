import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { getProject } from "../data/projects.js";

// useParams reads the :id part of the address, for example /work/softness.
export default function Work() {
  const { id } = useParams();
  const project = getProject(id);

  return (
    <>
      <Navbar />
      <main className="page">
        {project ? (
          <>
            <p className="kicker">{project.kicker || project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </>
        ) : (
          <>
            <h1>Project not found</h1>
            <p>That project is not in the list yet.</p>
          </>
        )}
        <p className="back-link">
          <Link to="/">Back home</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
