import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";

import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/education";
import Skills from "./Components/Skills";
import Projects from "./Components/projects";
import CodingProfiles from "./Components/CodingProfiles";
import Achievements from "./Components/Achievements";
import Contact from "./Components/contact";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="app">

      {/* Opening multilingual animation */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <Intro
            onComplete={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>

        <p>
          Designed & Built by{" "}
          <span>Danda Harshith Reddy</span>
        </p>

        <p className="footer-small">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;