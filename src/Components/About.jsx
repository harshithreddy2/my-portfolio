import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Shield,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            ABOUT ME
          </span>

          <h2>
            More Than Just <span>Code.</span>
          </h2>

          <p>
            A Computer Science graduate passionate about building
            software, creating meaningful digital experiences, and
            continuously learning new technologies.
          </p>
        </motion.div>

        <div className="about-new-grid">

          {/* MAIN INTRO */}
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-card-number">01</span>

            <h3>
              Building with
              <br />
              <span>purpose & curiosity.</span>
            </h3>

            <p>
              I'm a Computer Science graduate with a strong interest
              in frontend development and software engineering. I
              enjoy creating clean, responsive, and user-focused
              applications while continuously improving my programming
              and problem-solving skills.
            </p>

            <p>
              Alongside software development, I'm eager to explore
              artificial intelligence and cybersecurity. I'm interested
              in learning how these evolving fields can complement
              software engineering and help me build more capable
              and secure applications.
            </p>

            <a
              href="#projects"
              className="about-explore-link"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="about-side">

            {/* FRONTEND */}
            <motion.div
              className="about-side-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="about-side-icon">
                <Code2 size={24} />
              </div>

              <div>
                <span>01</span>
                <h4>Build</h4>
                <p>
                  Creating clean, responsive and engaging
                  experiences through frontend development.
                </p>
              </div>
            </motion.div>

            {/* SOFTWARE ENGINEERING */}
            <motion.div
              className="about-side-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="about-side-icon">
                <Code2 size={24} />
              </div>

              <div>
                <span>02</span>
                <h4>Engineer</h4>
                <p>
                  Developing practical software solutions while
                  strengthening programming and problem-solving skills.
                </p>
              </div>
            </motion.div>

            {/* AI + CYBERSECURITY */}
            <motion.div
              className="about-side-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="about-side-icon">
                <BrainCircuit size={24} />
              </div>

              <div>
                <span>03</span>
                <h4>Explore</h4>
                <p>
                  Exploring artificial intelligence and cybersecurity
                  with a mindset of continuous learning.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="about-statement"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="statement-line"></div>

          <p>
            <span>Build</span> with purpose.
            <span> Learn</span> with curiosity.
            <span> Grow</span> through technology.
          </p>

          <div className="statement-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;