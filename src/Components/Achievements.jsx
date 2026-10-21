import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Database,
  Braces,
  Trophy,
  Users,
  ShieldCheck,
  Network,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "HTML5, CSS3 & JavaScript",
    organization: "Infosys Springboard",
    icon: <Code2 size={22} />,
    type: "Certification",
  },
  {
    number: "02",
    title: "React (Basic)",
    organization: "HackerRank",
    icon: <Braces size={22} />,
    type: "Certification",
  },
  {
    number: "03",
    title: "SQL",
    organization: "Intellipaat Certification Course",
    icon: <Database size={22} />,
    type: "Certification",
  },
  {
    number: "04",
    title: "Python for Beginners",
    organization: "Infosys Springboard",
    description: "Foundational Python skills",
    icon: <Code2 size={22} />,
    type: "Certification",
  },
  {
    number: "05",
    title: "Java",
    organization: "Intellipaat Certification Course",
    icon: <Code2 size={22} />,
    type: "Certification",
  },
  {
    number: "06",
    title: "Cyber Security",
    organization: "IBM SkillsBuild",
    description: "Certificate of Recognition • Grade A+",
    icon: <ShieldCheck size={22} />,
    type: "Certification",
  },
  {
    number: "07",
    title: "Natural Language Processing with Azure AI",
    organization: "Microsoft",
    description:
      "Develop natural language processing solutions with Azure AI Services",
    icon: <BrainCircuit size={22} />,
    type: "Certification",
  },
  {
    number: "08",
    title: "CCNA: Enterprise Networking, Security & Automation",
    organization: "Cisco Networking Academy",
    description: "Offered through Anurag University",
    icon: <Network size={22} />,
    type: "Certification",
  },
];

const hackathons = [
  {
    number: "01",
    title: "UNCEASE 2023",
    organization: "Anurag University",
    description: "Hackathon Participant",
    icon: <Trophy size={22} />,
  },
  {
    number: "02",
    title: "TechXcelerate",
    organization: "Anurag University",
    description: "Workshop & Hackathon Participant",
    icon: <Users size={22} />,
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">

        {/* SECTION HEADER */}
        <motion.div
          className="section-header achievements-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            ACHIEVEMENTS
          </span>

          <h2>
            Learning, Building & <span>Growing.</span>
          </h2>

          <p>
            A collection of certifications, workshops and hackathons
            that have contributed to my technical journey.
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}
        <div className="achievement-block">

          <motion.div
            className="achievement-block-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="achievement-block-icon">
              <Award size={20} />
            </div>

            <div>
              <span>CERTIFICATIONS</span>
              <h3>Technical Foundation</h3>
            </div>
          </motion.div>

          <div className="certification-grid">
            {certifications.map((item, index) => (
              <motion.div
                className="achievement-card"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="achievement-card-top">
                  <span className="achievement-number">
                    {item.number}
                  </span>

                  <div className="achievement-icon">
                    {item.icon}
                  </div>
                </div>

                <div className="achievement-card-content">
                  <span className="achievement-type">
                    {item.type}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.organization}</p>

                  {item.description && (
                    <small>{item.description}</small>
                  )}
                </div>

                <div className="achievement-card-line"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HACKATHONS */}
        <div className="achievement-block hackathon-block">

          <motion.div
            className="achievement-block-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="achievement-block-icon">
              <Trophy size={20} />
            </div>

            <div>
              <span>HACKATHONS & EVENTS</span>
              <h3>Learning Through Experience</h3>
            </div>
          </motion.div>

          <div className="hackathon-grid">
            {hackathons.map((item, index) => (
              <motion.div
                className="hackathon-card"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="hackathon-number">
                  {item.number}
                </div>

                <div className="hackathon-icon">
                  {item.icon}
                </div>

                <div className="hackathon-content">
                  <span>HACKATHON / EVENT</span>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <strong>{item.organization}</strong>
                </div>

                <ArrowUpRight
                  className="hackathon-arrow"
                  size={22}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="achievement-statement"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="achievement-line"></div>

          <p>
            <span>Learn.</span>{" "}
            <span>Experiment.</span>{" "}
            <span>Build.</span>{" "}
            <span>Grow.</span>
          </p>

          <div className="achievement-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;