import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";
import About from "./components/About/About";
import { Projects } from "./components/Projects/ProjectSection";
import { TechCarousel } from "./components/Technologies/TechCarousel";
import { Contact } from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <TechCarousel/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
