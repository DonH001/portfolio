import React, { useState } from "react";
import profilePic from "../assets/profile.png";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  GithubIcon,
  LinkedinIcon,
} from "../assets/Icons";

// Example SVG icons for menu (you can replace with your own or add more in Icons.tsx)
const AboutIcon = () => <span role="img" aria-label="about">👤</span>;
const EducationIcon = () => <span role="img" aria-label="education">🎓</span>;
const ExperienceIcon = () => <span role="img" aria-label="experience">💼</span>;
const CertificateIcon = () => <span role="img" aria-label="certificates">📜</span>;
const AchievementIcon = () => <span role="img" aria-label="achievements">🏆</span>;
const LanguageIcon = () => <span role="img" aria-label="languages">💻</span>;
const ProjectIcon = () => <span role="img" aria-label="projects">🛠️</span>;
const ContactIcon = () => <span role="img" aria-label="contact">✉️</span>;

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="profile">
        <img
          src={profilePic}
          alt="Hector Sanchez"
          className="profile-pic"
        />
        <h2>Hector Sanchez</h2>
        <p>
          <LocationIcon /> Cabuluan, Victoria, Tarlac
        </p>
        <p>
          <a href="mailto:donhsanchez001@gmail.com" className="sidebar-email">
            <EmailIcon /> donhsanchez001@gmail.com
          </a>
        </p>
        <p>
          <PhoneIcon /> +63970-936-7505
        </p>
        {/* Hamburger toggle for mobile */}
        <button
          className="sidebar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sidebar-toggle-icon">&#9776;</span>
        </button>
      </div>
      <nav>
        <ul className={`sidebar-menu${open ? " open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}><AboutIcon /> About Me</a>
          </li>
          <li>
            <a href="#education" onClick={() => setOpen(false)}><EducationIcon /> Education</a>
          </li>
          <li>
            <a href="#experience" onClick={() => setOpen(false)}><ExperienceIcon /> Experience</a>
          </li>
          <li>
            <a href="#certificates" onClick={() => setOpen(false)}><CertificateIcon /> Certificates</a>
          </li>
          <li>
            <a href="#achievements" onClick={() => setOpen(false)}><AchievementIcon /> Achievements</a>
          </li>
          <li>
            <a href="#languages" onClick={() => setOpen(false)}><LanguageIcon /> Programming Languages</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}><ProjectIcon /> Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}><ContactIcon /> Contact</a>
          </li>
        </ul>
      </nav>
      <div className="accounts">
        <a
          href="https://github.com/DonH001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/hector-sanchez-969b37286"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon /> LinkedIn
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
