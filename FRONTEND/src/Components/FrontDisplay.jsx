import React from "react";
import videoSrc from "../assets/videoss.mp4";
import { motion } from "framer-motion";

function FrontDisplay() {
  return (
    <div className="relative h-screen w-full">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 bg-transparent">
        <motion.p
          className="text-white font-semibold text-lg md:text-xl lg:text-2xl bg-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          NIT JAMSHEDPUR PRESENTS
        </motion.p>

        <motion.h1
          className="text-white font-bold text-4xl md:text-6xl lg:text-8xl mt-4 font-serif bg-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          URJA&apos;25
        </motion.h1>

        <motion.p
          className="text-white font-semibold text-lg md:text-xl lg:text-2xl mt-4 bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          DATE: To Be Announced
        </motion.p>
      </div>
    </div>
  );
}

export default FrontDisplay;
