import { motion } from "framer-motion";
import { BrainCircuit, Database, GitBranch } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description:
      "Core programming languages used for software development and problem solving.",
    skills: [
      { name: "Java", mark: "JAVA" },
      { name: "C", mark: "C" },
      { name: "Python", mark: "PY" },
      { name: "JavaScript", mark: "JS" },
    ],
  },

  {
    number: "02",
    title: "Web Technologies",
    description:
      "Technologies used to build responsive and interactive web applications.",
    skills: [
      { name: "HTML", mark: "HTML" },
      { name: "CSS", mark: "CSS" },
      { name: "JavaScript", mark: "JS" },
      { name: "React", mark: "⚛" },
    ],
  },

  {
    number: "03",
    title: "Database Management",
    description:
      "Working with relational and NoSQL databases for application development.",
    skills: [
      { name: "SQL", icon: Database },
      { name: "MySQL", mark: "SQL" },
      { name: "MongoDB", mark: "MDB" },
    ],
  },

  {
    number: "04",
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, machine learning models and modern AI technologies.",
    skills: [
      { name: "Artificial Intelligence", icon: BrainCircuit },
      { name: "Machine Learning", icon: BrainCircuit },
      { name: "PyTorch", mark: "PT" },
      { name: "TensorFlow", mark: "TF" },
      { name: "LLMs", mark: "AI" },
    ],
  },

  {
    number: "05",
    title: "Tools & Frameworks",
    description:
      "Development tools and frameworks used throughout my projects and workflow.",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", mark: "GH" },
      { name: "Vite", mark: "V" },
      { name: "Streamlit", mark: "ST" },
      { name: "Plotly", mark: "PL" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <motion.div
          className="section-header skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">SKILLS</span>

          <h2>
            Tools I Use to <span>Build.</span>
          </h2>

          <p>
            A focused collection of programming languages, technologies,
            AI tools, databases, and development frameworks I use to
            build and experiment with software.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
            >

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-category">
                  TECHNICAL SKILLS
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-items">

                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="skill-item"
                      key={skill.name}
                    >
                      <div className="skill-icon">
                        {Icon ? (
                          <Icon size={19} />
                        ) : (
                          <span className="skill-logo-text">
                            {skill.mark}
                          </span>
                        )}
                      </div>

                      <span>{skill.name}</span>
                    </div>
                  );
                })}

              </div>

              <div className="skill-card-line"></div>

            </motion.article>
          ))}

        </div>

        <motion.div
          className="skills-statement"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span>01</span>

          <div className="skills-statement-line"></div>

          <p>
            Always learning. Always <span>building.</span>
          </p>

          <div className="skills-statement-line"></div>

          <span>05</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;