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
    <section id="about"><AboutMe /></section>
    <section id="education"><Education /></section>
    <section id="experience"><Experience /></section>
    <section id="certificates"><Certificates /></section>
    <section id="achievements"><Achievements /></section>
    <section id="languages"><ProgrammingLanguages /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
  </div>
);

export default Home;