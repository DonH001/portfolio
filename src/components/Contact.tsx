import React from "react";

const contactItems = [
  {
    label: "Email",
    value: "donhsanchez001@gmail.com",
    href: "mailto:donhsanchez001@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+63970-936-7505",
    href: "tel:+639709367505",
    icon: "📱",
  },
  {
    label: "Location",
    value: "Cabuluan, Victoria, Tarlac",
    icon: "📍",
  },
  {
    label: "GitHub",
    value: "DonH001",
    href: "https://github.com/DonH001",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "hector-sanchez-969b37286",
    href: "https://linkedin.com/in/hector-sanchez-969b37286",
    icon: "🔗",
  },
];

const Contact: React.FC = () => (
  <section id="contact" className="section contact-section">
    <h2>Contact</h2>
    <div className="contact-grid">
      {contactItems.map((item) => (
        <div className="contact-card" key={item.label}>
          <span className="contact-icon">{item.icon}</span>
          <div>
            <div className="contact-label">{item.label}</div>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Contact;