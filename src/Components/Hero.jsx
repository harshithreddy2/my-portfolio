import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Sparkles,
} from "lucide-react";

import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>
      <div className="hero-grid"></div>

      {/* Ambient particles */}
      <motion.div
        className="hero-particle hero-particle-one"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-particle hero-particle-two"
        animate={{
          y: [0, 12, 0],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="hero-content">

        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.div
            className="hero-status"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </motion.div>


          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            COMPUTER SCIENCE • AI • CYBERSECURITY
          </motion.p>


          {/* NAME */}

          <motion.h1
            className="hero-premium-name"
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.45,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>Danda Harshith</span>

            <motion.span
              className="hero-premium-accent"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
              Reddy.
            </motion.span>
          </motion.h1>


          {/* SMALL ACCENT */}

          <motion.div
            className="hero-premium-line"
            initial={{
              width: 0,
            }}
            animate={{
              width: 70,
            }}
            transition={{
              delay: 1.15,
              duration: 0.7,
              ease: "easeOut",
            }}
          />


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.7,
            }}
          >
            Computer Science graduate passionate about building
            intelligent software and exploring artificial intelligence,
            machine learning, and cybersecurity.
          </motion.p>


          {/* TAGS */}

          <motion.div
            className="hero-tags"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
          >
            <span>Software Development</span>
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
          </motion.div>


          {/* BUTTONS */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.35,
              duration: 0.7,
            }}
          >

            <a
              href="#projects"
              className="hero-button primary"
            >
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
              <Download size={17} />
            </a>

          </motion.div>

        </motion.div>


        {/* ================= RIGHT ================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 45,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.div
            className="hero-photo-glow"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* PHOTO + ORBIT */}

          <motion.div
            className="profile-circle"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="profile-circle-glow"></div>


            {/* ORBIT */}

            <motion.div
              className="profile-orbit"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="orbit-dot"></span>
            </motion.div>


            {/* SECOND ORBIT */}

            <motion.div
              className="profile-orbit-secondary"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span></span>
            </motion.div>


            {/* PHOTO */}

            <motion.div
              className="profile-circle-border"
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={profileImage}
                alt="Danda Harshith Reddy"
              />
            </motion.div>


            {/* ACCENT */}

            <motion.div
              className="profile-accent"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>


          {/* FOCUS CARD */}

          <motion.div
            className="hero-floating-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                delay: 1.1,
                duration: 0.7,
              },
              y: {
                delay: 1.1,
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >

            <div className="floating-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Building With AI</strong>
            </div>

          </motion.div>


          {/* NUMBER */}

          <motion.div
            className="hero-number"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 0.7,
            }}
          >
            <span></span>
            <div></div>
            <span></span>
          </motion.div>

        </motion.div>

      </div>


      {/* SCROLL */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.7,
          duration: 0.8,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.div>

    </section>
  );
}

export default Hero;