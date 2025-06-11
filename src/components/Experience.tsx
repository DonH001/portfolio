import React, { useState } from "react";

const experiences = [
  {
    company: "My Creative Panda Inc. (2025)",
    details: [
      "Assisted in developing websites using CakePHP and WordPress.",
      "Applied technical and problem-solving skills to create responsive and functional web solutions.",
      "Collaborated with senior developers and project teams to complete client-based projects efficiently.",
    ],
  },
  {
    company: "iPhiTech IT and Digital Solutions Corporation (2023)",
    details: [
      "Utilized technical skills and problem solving skills on developing websites.",
      "Collaborated with fellow interns and mentors to create projects.",
    ],
  },
  {
    company: "Municipal Risk Reduction and Management Office (2020)",
    details: [
      "Completed an 80-hour WORK IMMERSION PROGRAM in Victoria, Tarlac.",
      "Worked and collaborated with other people.",
    ],
  },
];

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>
      <div className="accordion">
        {experiences.map((exp, idx) => (
          <div className="accordion-item" key={exp.company}>
            <button
              className={`accordion-title${openIndex === idx ? " open" : ""}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {exp.company}
              <span className="accordion-arrow">{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            <div
              className="accordion-content"
              style={{ display: openIndex === idx ? "block" : "none" }}
            >
              <ul>
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;