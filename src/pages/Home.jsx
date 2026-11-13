import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="masthead">
        <Navbar overlay />
        <Hero />
      </div>
      <ProjectsSection />
      <Footer />
    </>
  );
}
