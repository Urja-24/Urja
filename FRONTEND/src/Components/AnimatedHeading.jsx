import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = () => {
  const cricketBallAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5, // Delay for the typewriter effect to finish
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    rotate: {
      rotate: [0, 360], // Rotates the "O"
      scale: [1, 1.5, 1], // Scaling for a ball-like effect
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <motion.h1
        className="text-6xl font-extrabold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <span className="typewriter">POINT-TABLE</span>
        <motion.span
          className="inline-block ml-1 text-[#F5DEB3] relative"
          variants={cricketBallAnimation}
          initial="hidden"
          animate="rotate"
        >
          O
        </motion.span>
      </motion.h1>

      {/* Custom CSS for the Typewriter effect */}
      <style jsx>{`
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid;
          animation: typing 2s steps(10) forwards,
            blink 0.75s step-end 2s.typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
            animation: typing 2s steps(10) forwards, blink 0.75s step-end 2s;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 10ch;
            }
          }

          @keyframes blink {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: black;
            }
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 10ch;
          }
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: black;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeading;
