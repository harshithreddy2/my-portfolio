import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-modern-section">
      <div className="contact-modern-glow"></div>

      <div className="section-container">

        <motion.div
          className="contact-modern-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-modern-label">
            CONTACT
          </span>

          <span className="contact-modern-index">
            LET'S CONNECT
          </span>
        </motion.div>


        <div className="contact-modern-layout">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-modern-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="contact-modern-eyebrow">
              HAVE AN IDEA?
            </p>

            <h2>
              Let's build
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h2>

            <p className="contact-modern-description">
              Whether it's a software project, an AI idea,
              a cybersecurity challenge, or an opportunity
              to collaborate, I'm always open to connecting
              with people building interesting things.
            </p>


            <motion.a
              href="mailto:dandaharshithreddy4@gmail.com"
              className="contact-email"
              whileHover={{ x: 6 }}
            >
              <span>
                dandaharshithreddy4@gmail.com
              </span>

              <ArrowUpRight size={20} />
            </motion.a>


            <div className="contact-socials">

              <a
                href="https://github.com/harshithreddy2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharshreddy/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <motion.div
            className="contact-modern-right"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="contact-panel">

              <div className="contact-panel-number">
                01
              </div>

              <div className="contact-panel-icon">
                <Mail size={24} />
              </div>

              <div className="contact-panel-content">

                <span>EMAIL</span>

                <h3>
                  Start a conversation.
                </h3>

                <p>
                  Drop me a message and I'll get
                  back to you as soon as possible.
                </p>

              </div>


              <a
                href="mailto:dandaharshithreddy4@gmail.com"
                className="contact-panel-button"
              >
                <span>SEND MESSAGE</span>

                <ArrowUpRight size={18} />
              </a>


              <div className="contact-panel-footer">

                <span>
                  AVAILABLE FOR
                </span>

                <div>
                  <span>FULL-TIME</span>
                  <span>INTERNSHIPS</span>
                  <span>COLLABORATION</span>
                </div>

              </div>

            </div>


            {/* LOCATION CARD */}

            <motion.div
              className="contact-location"
              whileHover={{ y: -5 }}
            >

              <div>
                <span>BASED IN</span>
                <strong>Hyderabad, India</strong>
              </div>

              <span className="contact-location-number">
                02
              </span>

            </motion.div>

          </motion.div>

        </div>


        {/* BOTTOM STATEMENT */}

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >

          <span></span>

          <div className="contact-bottom-line"></div>

          <p>
            Good ideas start with a
            <span> conversation.</span>
          </p>

          <div className="contact-bottom-line"></div>

          <span>END</span>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;