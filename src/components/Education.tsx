import React from "react";

const educationData = [
  {
    school: "Tarlac State University",
    degree: "Bachelor of Science in Computer Science",
    year: "2021 – 2025",
    location: "Tarlac City, Philippines",
    icon: "🎓",
    highlight: true,
  },
  {
    school: "Victoria National High School",
    degree: "Senior High School (STEM)",
    year: "2019 – 2021",
    location: "Victoria, Tarlac",
    icon: "🏫",
    highlight: false,
  },
  {
    school: "Victoria National High School",
    degree: "Junior High School",
    year: "2015 – 2019",
    location: "Victoria, Tarlac",
    icon: "🏫",
    highlight: false,
  },
  {
    school: "Cabuluan Elementary School",
    degree: "Elementary",
    year: "2009 – 2015",
    location: "Victoria, Tarlac",
    icon: "📚",
    highlight: false,
  },
];

const Education: React.FC = () => (
  <section id="education" className="section">
    <h2>Education</h2>
    <div className="edu-grid">
      {educationData.map((edu, idx) => (
        <div
          className={`edu-card${edu.highlight ? " highlight" : ""}`}
          key={idx}
        >
          <div className="edu-icon">{edu.icon}</div>
          <div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-meta">
              <span>{edu.year}</span> &middot; <span>{edu.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;