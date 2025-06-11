import React from "react";
import jsLogo from "../assets/lang/javascript.png";
import tsLogo from "../assets/lang/typescript.png";
import pyLogo from "../assets/lang/python.png";
import javaLogo from "../assets/lang/java.png";
import cppLogo from "../assets/lang/cpp.png";
import phpLogo from "../assets/lang/php.png";
import htmlcssLogo from "../assets/lang/htmlcss.png";

const languages = [
  { name: "JavaScript", level: 5, img: jsLogo },
  { name: "TypeScript", level: 4, img: tsLogo },
  { name: "Python", level: 4, img: pyLogo },
  { name: "Java", level: 4, img: javaLogo },
  { name: "C++", level: 3, img: cppLogo },
  { name: "PHP", level: 3, img: phpLogo },
  { name: "HTML/CSS", level: 5, img: htmlcssLogo },
];

const ProgrammingLanguages: React.FC = () => (
  <section id="languages" className="section">
    <h2>Programming Languages</h2>
    <div className="lang-grid">
      {languages.map(lang => (
        <div className="lang-panel" key={lang.name}>
          <img src={lang.img} alt={lang.name} className="lang-img" />
          <span className="lang-name">{lang.name}</span>
          <span className="lang-stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star${i < lang.level ? " filled" : ""}`}
              >★</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default ProgrammingLanguages;