import Contact from "./components/contact/contact";
import { Hero } from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import { Services } from "./components/services/services";
import Skills from "./components/skills/Skills";
import StarCanvas from "./components/starBackground/StarBackground";

const App = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="navbar">
          <section id="#navbar">
            <Navbar />
          </section>
        </div>
        <div className="page-container">
          <section id="#home">
            <Hero />
          </section>
          <section id="#skills">
            <Skills />
          </section>
          <section id="#services">
            <Services />
          </section>
          <section id="#portfolio">
            <Portfolio />
          </section>
          <section id="#contact">
            <Contact />
          </section>
          
        </div>
      </div>
      <StarCanvas/>
    </div>
  );
};

export default App;
