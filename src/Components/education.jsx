
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import anuragLogo from "../assets/anurag-university.jpg";
import narayanaLogo from "../assets/narayana-junior-college.png";
import gurukulaLogo from "../assets/gurukula-vidyapeeth.png";
import freseniusLogo from "../assets/hochschule-fresenius.webp";


function Education() {
  const education = [
    {
      number: "01",
      period: "2026 — Present",
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Hochschule Fresenius",
      location: "Cologne, Germany",
      score: "",
      description:
      "An advanced program focused on computer science, Cyber Security, Artificial Intelligence, algorithms, and secure system design.",
      logo: freseniusLogo,
      url: "https://www.hs-fresenius.com/",
    },
    {
      number: "02",
      period: "2022 — 2026",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Anurag University",
      location: "Hyderabad, India",
      score: "CGPA: 7.85",
      description:
        "Built a strong foundation in computer science, programming, software development, databases, artificial intelligence, and machine learning.",
      logo: anuragLogo,
      url: "https://anurag.edu.in/",
    },
    {
      number: "03",
      period: "2020 — 2022",
      degree: "Intermediate",
      field: "MPC",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      score: "93%",
      description:
        "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.",
      logo: narayanaLogo,
      url: "https://www.narayanajuniorcolleges.com/",
    },
    {
      number: "04",
      period: "Before 2020",
      degree: "Secondary School",
      field: "School Education",
      institution: "Gurukula Vidyapeeth High School",
      location: "India",
      score: "10/10",
      description:
        "Completed secondary school education and developed the academic foundation for higher studies.",
      logo: gurukulaLogo,
      url: "https://www.gurukulavidyapeeth.com/",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          className="section-header education-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">EDUCATION</span>

          <h2>
            My Academic <span>Journey.</span>
          </h2>

          <p>
            The academic experiences that shaped my foundation in
            computer science and technology.
          </p>
        </motion.div>

        {/* EDUCATION CARDS */}
        <div className="education-list">

          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.institution}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
            >

              {/* CARD NUMBER */}
              <span className="education-number">
                {item.number}
              </span>

              {/* LOGO */}
              <div className="education-logo">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                  />
                )}
              </div>

              {/* MAIN CONTENT */}
              <div className="education-content">

                <div className="education-heading-row">

                  <div className="education-heading">

                    <div className="education-title-line">
                      <h3>{item.degree}</h3>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="education-link"
                        aria-label={`Visit ${item.institution}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>

                    <h4>{item.institution}</h4>

                  </div>

                  {/* PERIOD + SCORE */}
                  <div className="education-score">

                    <span>{item.period}</span>

                    <strong>{item.score}</strong>

                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="education-description">
                  {item.description}
                </p>

              </div>

              {/* BOTTOM ACCENT */}
              <div className="education-card-line"></div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;