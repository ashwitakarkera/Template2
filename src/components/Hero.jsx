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
    <section id ="home"
      ref={ref}
      className="relative h-screen min-h-[600px] sm:min-h-screen flex items-start sm:items-center justify-center text-center pt-12 sm:pt-20 md:pt-24 pb-10 sm:pb-0 overflow-hidden"
    >
      <motion.img
        src={couple}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
        alt="Jenny and Jason"
        initial={{ scale: 1.05, brightness: 0.6 }}
        animate={isInView ? { scale: 1, brightness: 0.85 } : {}}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1]
        }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-[#88708E]/20 to-black/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />

      <div className="relative z-20 text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full pt-32 sm:pt-40 md:pt-44 lg:pt-48">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-widest mb-6 sm:mb-8 md:mb-10 font-light"
          variants={bubbleFloat}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={isInView ? floatAnimation : {}}
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.span
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
             font-light tracking-[0.3em] mb-14
             bg-gradient-to-r from-yellow-300 via-yellow-200 to-orange-400
             bg-[length:300%_300%]
             bg-clip-text text-transparent"
  animate={shineAnimation}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
          >
            NAYANA & MOHAN
          </motion.span>
        </motion.h1>

        {/* Updated paragraph only */}
        <motion.p
          className="mt-16 sm:mt-18 md:mt-20 max-w-xl mx-auto 
           text-base sm:text-lg md:text-xl lg:text-2xl 
           font-semibold leading-relaxed px-2 
           drop-shadow-lg text-yellow-400"
          custom={0}
          variants={textSequence}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={isInView ? subtextFloat : {}}
        >
          With love and gratitude, we invite you to share in the joy of our wedding day.
        </motion.p>

        <motion.p
          className="mt-3 sm:mt-4 md:mt-6 text-xs font-bold sm:text-sm md:text-base lg:text-lg tracking-wide drop-shadow-md "
          custom={1}
          variants={textSequence}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={isInView ? subtextFloat : {}}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="drop-shadow-md text-yellow-400"
            style={isInView ? subtextFloat : {}}
          >
            Saturday, September 20, 2025
          </motion.span>
          <br className="sm:hidden" />
          <span className="block mt-1 sm:mt-0 sm:inline-block sm:ml-1  text-yellow-400">
            The Golden Elm Manor
          </span>
          <br />
          <span className="text-yellow-400">
          Taj mahal Palace,Mumbai
          </span>
        </motion.p>
      </div>
    </section>
  );
}
