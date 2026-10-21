import { motion } from "framer-motion";
import { Code2, ArrowUpRight } from "lucide-react";

const profiles = [
  {
    number: "01",
    platform: "LEETCODE",
    title: "Problem Solving & DSA",
    description:
      "Practicing data structures, algorithms, and problem solving through coding challenges.",
    url: "https://leetcode.com/u/Harshithreddy6/",
    icon: "LC",
  },
  {
    number: "02",
    platform: "HACKERRANK",
    title: "Programming & Skills",
    description:
      "Building programming skills through challenges, assessments, and technical certifications.",
    url: "https://www.hackerrank.com/profile/harshithreddy10",
    icon: "HR",
  },
];

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="coding-section">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">CODING PROFILES</span>

          <h2>
            Practice. Solve. <span>Improve.</span>
          </h2>

          <p>
            Platforms where I practice problem solving, strengthen my
            programming skills, and continuously improve my technical
            knowledge.
          </p>
        </motion.div>

        <div className="coding-profile-grid">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="coding-profile-card"
              key={profile.platform}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="coding-card-top">
                <span className="coding-number">
                  {profile.number}
                </span>

                <div className="coding-icon">
                  <span>{profile.icon}</span>
                </div>

                <ArrowUpRight
                  className="coding-arrow"
                  size={21}
                />
              </div>

              <div className="coding-card-content">
                <span className="coding-platform">
                  {profile.platform}
                </span>

                <h3>{profile.title}</h3>

                <p>{profile.description}</p>
              </div>

              <div className="coding-view">
                <Code2 size={16} />
                <span>VIEW PROFILE</span>
              </div>

              <div className="coding-card-line"></div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CodingProfiles;