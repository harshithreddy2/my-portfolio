import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / CYBERSECURITY",
    title:
      "GPT-Based Open-Source Intelligence Using Historical Cyber Incident Reports",
    description:
      "An AI-powered cybersecurity platform that collects cyber incident reports, extracts structured threat intelligence, and provides interactive dashboards and APIs for analysis and decision support.",
    technologies: ["Python", "Flask", "NLP", "GPT", "LLaMA"],
    github: "https://github.com/harshithreddy2/Cyber-OSINT-GPT",
    featured: true,
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Morse Code Translator",
    description:
      "A responsive web application that converts text into Morse code and decodes Morse code back into readable text with real-time interaction.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    github:
      "https://github.com/harshithreddy2/Morse_code_translator.git",
    live: "https://morsecodetranslatorapp.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="section-header projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">SELECTED WORK</span>

          <h2>
            Projects That Build <span>Ideas.</span>
          </h2>

          <p>
            A selection of projects combining software engineering,
            artificial intelligence, cybersecurity, and real-world systems.
          </p>
        </motion.div>

        {/* SOFTWARE PROJECTS */}
        <div className="software-projects">
          {projects.map((project, index) => (
            <motion.article
              className={`software-project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
              }}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-category">
                  <span className="project-category-icon">
                    <Code2 size={14} />
                  </span>
                  <span>{project.category}</span>
                </div>

                <ArrowUpRight
                  className="project-top-arrow"
                  size={22}
                />
              </div>

              <div className="software-project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action primary"
                  >
                    <span>VIEW CODE</span>
                    <ArrowUpRight size={15} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action secondary"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-line"></div>
            </motion.article>
          ))}
        </div>

        {/* HYDROPONIC PROJECT — WITHOUT IMAGES */}
        <motion.article
          className="hydroponic-project"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hydro-header">
            <div className="hydro-badge">
              <span></span>
              PHYSICAL / ENGINEERING PROJECT
            </div>
          </div>

          <div className="hydro-details">
            <div className="hydro-title-row">
              <div className="hydro-project-icon">
                <Code2 size={20} />
              </div>

              <div>
                <span>REAL-WORLD SYSTEM</span>

                <h3>
                  Indoor Farming
                  <br />
                  <span>Hydroponic Plant Grow Chamber</span>
                </h3>
              </div>
            </div>

            <p className="hydro-description">
              A practical indoor farming project focused on creating a
              controlled environment for growing plants using a hydroponic
              setup. The project combines technology, controlled
              cultivation, and real-world problem solving into a physical
              working system.
            </p>

            <div className="hydro-features">
              <div className="hydro-feature">
                <div className="hydro-feature-icon">
                  <Code2 size={15} />
                </div>

                <div>
                  <strong>Hydroponic System</strong>
                  <span>
                    Designed a controlled environment for plant growth.
                  </span>
                </div>
              </div>

              <div className="hydro-feature">
                <div className="hydro-feature-icon">
                  <Code2 size={15} />
                </div>

                <div>
                  <strong>Controlled Environment</strong>
                  <span>
                    Integrated components to support indoor cultivation.
                  </span>
                </div>
              </div>

              <div className="hydro-feature">
                <div className="hydro-feature-icon">
                  <Code2 size={15} />
                </div>

                <div>
                  <strong>Hands-On Engineering</strong>
                  <span>
                    Applied practical engineering concepts to build the
                    physical system.
                  </span>
                </div>
              </div>
            </div>

            <div className="hydro-tags">
              <span>Hydroponics</span>
              <span>Indoor Farming</span>
              <span>Engineering</span>
              <span>Plant Growth</span>
            </div>
          </div>

          <div className="hydro-footer">
            <div></div>

            <p>
              Combining technology and practical engineering to create
              a controlled indoor growing environment.
            </p>

            <span>03</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Projects;
