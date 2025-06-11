import React from "react";

const certificates = [
  "WESSA 2023: Work Ethics and Safe Spaces ACT Webinar (March 10, 2023)",
  'Personality Development Seminar "ME Version 2.0" (April 26, 2023)',
  "Excel Techniques for Data Analysis DICT (August 29, 2023)",
  "Data Visualization using Chart.Js on Web Applications (September 28, 2023)",
  "Certificate of Completion from Internship Program at iPhiTech IT and Digital Solutions Corporation (July 5, 2023 - August 4, 2023)",
  "Certificate of Completion from Internship Program at My Creative Panda Inc. (February 6, 2025 - March 14, 2025)",
];

const Certificates: React.FC = () => (
  <section id="certificates" className="section certificates-section">
    <h2>Relevant Certificates</h2>
    <ul className="cert-list">
      {certificates.map((cert, idx) => (
        <li className="cert-list-item" key={idx}>
          <span className="cert-list-icon" role="img" aria-label="certificate">🎓</span>
          <span className="cert-list-text">{cert}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Certificates;