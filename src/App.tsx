import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";
import About from "./components/About/About";
import { ProjectsSection } from "./components/Projects/ProjectSection";
import { TechCarousel } from "./components/Technologies/TechCarousel";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <TechCarousel/>
      <ProjectsSection/>
      
    </>
  );
}

export default App;
