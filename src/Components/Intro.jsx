
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  {
    text: "HELLO",
    className: "intro-english",
  },
];

function Intro({ onComplete }) {
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFinal(true);

      setTimeout(() => {
        onComplete();
      }, 750);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  const greeting = greetings[0];

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isFinal ? 0 : 1,
      }}
      transition={{
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Soft background glow */}
      <motion.div
        className="intro-glow"
        animate={
          isFinal
            ? { scale: 2, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Main greeting */}
      <motion.div
        className="intro-content"
        animate={
          isFinal
            ? {
                scale: 2.8,
                opacity: 0,
                filter: "blur(10px)",
              }
            : {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              }
        }
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="hello"
            className={`intro-word ${greeting.className}`}
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.94,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 1.03,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {greeting.text}
          </motion.div>
        </AnimatePresence>

        {/* Small decorative line */}
        <motion.div
          className="intro-line"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 55,
            opacity: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Intro;
