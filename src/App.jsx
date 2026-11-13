import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";

// Routes connect a URL to a page component.
// "/" is Home, "/projects" is Projects, and "/about" is About.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
