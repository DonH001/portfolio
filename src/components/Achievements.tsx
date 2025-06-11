import React from "react";

const achievements = [
  {
    icon: "🏅",
    title: "Dean’s Lister",
    desc: "Tarlac State University, 2021–2025",
    highlight: true,
  },
  {
    icon: "🥇",
    title: "With Honors",
    desc: "Victoria National High School, 2019–2021",
    highlight: false,
  },
  {
    icon: "🎖️",
    title: "Best in Research",
    desc: "Victoria National High School, 2021",
    highlight: false,
  },
  {
    icon: "🏆",
    title: "Academic Excellence",
    desc: "Cabuluan Elementary School, 2014",
    highlight: false,
  },
];

const Achievements: React.FC = () => (
  <section id="achievements" className="section achievements-section">
    <h2>Achievements</h2>
    <div className="achievements-grid">
      {achievements.map((ach, idx) => (
        <div className={`achievement-card${ach.highlight ? " highlight" : ""}`} key={idx}>
          <div className="achievement-icon">{ach.icon}</div>
          <div>
            <div className="achievement-title">{ach.title}</div>
            <div className="achievement-desc">{ach.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;