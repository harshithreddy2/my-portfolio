
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Download,
  Sparkles,
} from "lucide-react";

import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="hero-background-grid"></div>

      <div className="hero-content">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-eyebrow">
            COMPUTER SCIENCE GRADUATE
          </p>

          <h1 className="hero-premium-name">
            Danda
            <span>Harshith</span>
            <span className="hero-name-accent">Reddy.</span>
          </h1>

          <div className="hero-title-line">
            <span></span>
            <p>Frontend Development · Software Engineering</p>
          </div>

          <p className="hero-description">
            I enjoy turning ideas into clean, responsive, and
            meaningful digital experiences. Passionate about
            software development, continuous learning, and
            exploring the possibilities of AI and cybersecurity.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button primary">
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-button secondary"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="hero-socials">
            <span>FIND ME ON</span>

            <a
              href="https://github.com/harshithreddy2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/dharshreddy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </motion.div>

        {/* RIGHT: MINIMAL SQUARE PROFILE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="hero-photo-frame"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={profileImage}
              alt="Danda Harshith Reddy"
            />
          </motion.div>

          <motion.div
            className="hero-floating-note"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-note-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <span>ALWAYS CURIOUS</span>
              <strong>Learning & Building</strong>
            </div>
          </motion.div>

          <div className="hero-photo-caption">
            <span>01</span>
            <div></div>
            <span>GET TO KNOW ME</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>BASED IN GERMANY</span>

        <a href="#about">
          SCROLL TO EXPLORE
          <span className="hero-scroll-arrow">↓</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
