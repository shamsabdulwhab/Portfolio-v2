import Navbar from "../components/Navbar.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Projects</h1>
      </main>
      <ProjectsSection />
      <Footer />
    </>
  );
}