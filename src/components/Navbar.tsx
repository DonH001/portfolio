import React, { useState } from "react";
import profilePic from "../assets/profile.png";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  GithubIcon,
  LinkedinIcon,
} from "../assets/Icons";

const AboutIcon = () => <span role="img" aria-label="about">👤</span>;
const EducationIcon = () => <span role="img" aria-label="education">🎓</span>;
const ExperienceIcon = () => <span role="img" aria-label="experience">💼</span>;
const CertificateIcon = () => <span role="img" aria-label="certificates">📜</span>;
const AchievementIcon = () => <span role="img" aria-label="achievements">🏆</span>;
const LanguageIcon = () => <span role="img" aria-label="languages">💻</span>;
const ProjectIcon = () => <span role="img" aria-label="projects">🛠️</span>;
const ContactIcon = () => <span role="img" aria-label="contact">✉️</span>;

const menu = [
  { href: "#about", icon: <AboutIcon />, label: "About Me" },
  { href: "#education", icon: <EducationIcon />, label: "Education" },
  { href: "#experience", icon: <ExperienceIcon />, label: "Experience" },
  { href: "#certificates", icon: <CertificateIcon />, label: "Certificates" },
  { href: "#achievements", icon: <AchievementIcon />, label: "Achievements" },
  { href: "#languages", icon: <LanguageIcon />, label: "Programming Languages" },
  { href: "#projects", icon: <ProjectIcon />, label: "Projects" },
  { href: "#contact", icon: <ContactIcon />, label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={profilePic} alt="Hector Sanchez" className="navbar-profile-pic" />
        <span className="navbar-title">Hector Sanchez</span>
        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      </div>
      <ul className={`navbar-menu${open ? " open" : ""}`}>
        {menu.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.icon} {item.label}
            </a>
          </li>
        ))}
        <li className="navbar-accounts">
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;