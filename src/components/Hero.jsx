import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import couple from "../assets/images/couple.jpg";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bubbleFloat = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatAnimation = {
    y: [-8, 8, -6, 6, -4, 4, 0],
    rotate: [0.5, -0.3, 0.2, -0.1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const textSequence = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.6 + i * 0.15
      }
    })
  };

  const shineAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    textShadow: [
      "0px 0px 0px rgba(255,215,0,0)",
      "0px 0px 22px rgba(255,215,0,0.9)",
      "0px 0px 0px rgba(255,215,0,0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const subtextFloat = {
    y: [-3, 3, -2, 2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home"
      ref={ref}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-start text-center overflow-hidden pt-24 sm:pt-32"
    >
      <motion.img
        src={couple}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
        alt="Nayana and Mohan"
        initial={{ scale: 1.05, brightness: 0.6 }}
        animate={isInView ? { scale: 1, brightness: 0.85 } : {}}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1]
        }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-20 text-white px-4 w-full max-w-[95vw] mx-auto">
        {/* NAMES AT TOP IN SINGLE LINE */}
        <motion.h1
          className="mb-12 md:mb-20"
          variants={bubbleFloat}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={isInView ? floatAnimation : {}}
        >
          <motion.span
            className="block text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 
                       font-light tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap
                       bg-gradient-to-r from-yellow-300 via-yellow-200 to-orange-400
                       bg-[length:300%_300%] bg-clip-text text-transparent uppercase"
            animate={shineAnimation}
          >
            NAYANA & MOHAN
          </motion.span>
        </motion.h1>

        {/* CONTENT MOVED DOWN */}
        <div className="mt-10 sm:mt-20">
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl 
                       font-semibold leading-relaxed px-4 
                       drop-shadow-lg text-yellow-400 font-vin"
            custom={0}
            variants={textSequence}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={isInView ? subtextFloat : {}}
          >
            With love and gratitude, we invite you to share in the joy of our wedding day.
          </motion.p>

          <motion.p
            className="mt-6 md:mt-10 text-sm sm:text-base md:text-xl tracking-wide drop-shadow-md font-vin"
            custom={1}
            variants={textSequence}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={isInView ? subtextFloat : {}}
          >
            <motion.span className="text-yellow-400 block sm:inline">
              Saturday, September 20, 2025
            </motion.span>
            <span className="hidden sm:inline mx-2 text-yellow-400">|</span>
            <span className="text-yellow-400 block sm:inline">
              The Golden Elm Manor
            </span>
            <br />
            <span className="text-yellow-400 mt-2 block">
              Taj Mahal Palace, Mumbai
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}