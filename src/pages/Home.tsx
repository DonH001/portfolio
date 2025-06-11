import React from "react";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Achievements from "../components/Achievements";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: React.FC = () => (
  <div>
    <AboutMe />
    <Education />
    <Experience />
    <Certificates />
    <Achievements />
    <ProgrammingLanguages />
    <Projects />
    <Contact />
  </div>
);

export default Home;