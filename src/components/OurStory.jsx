import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import background from "../assets/images/background.jfif";
import story2 from "../assets/images/story2.jpg";
import story1 from "../assets/images/story1.jpg";
import story3 from "../assets/images/story3.jpg";

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1
      }
    })
  };

  const stories = [
    {
      img: story1,
      title: "Mohan’s Story",
      role: "Groom",
      desc: "A calm and thoughtful soul, Mohan is grounded yet adventurous at heart. He's a problem-solver, often the one to bring clarity when things get chaotic, and he secretly adores Nayana's quirks."
    },
    {
      img: story2,
      title: "Our Relationship",
      role: "Their Relationship",
      desc: "Nayana and Mohan met in college, initially clashing over small misunderstandings but gradually discovering a deep friendship beneath it all. Their bond grew from shared laughter and late-night conversations to unwavering support through life's ups and downs. Mohan admires Nayana's passion for life, while Nayana finds comfort in Mohan's steady presence. Together, they balance each other—she brings color to his calm, and he gives structure to her dreams."
    },
    {
      img: story3,
      title: "Nayana's Story",
      role: "Bride",
      desc: "A spirited young woman with a love for painting and the little joys of life. She's empathetic, always noticing the emotions others hide, and has a knack for finding beauty in the mundane."
    }
  ];

  return (
    <section
      ref={ref}
      id="story"
      className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center font-emil"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#88708E] opacity-60 lg:opacity-70"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 lg:mb-20 tracking-widest font-emil"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR STORY
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stories.map((story, index) => (
            <motion.div 
              key={story.title}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 font-emil"
              custom={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-xl mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={story.img}
                  className="w-full h-full object-cover rounded-xl group-hover:brightness-110 transition-all duration-700"
                  alt={story.title}
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl text-[#f1f509] font-semibold mb-3 font-emil group-hover:text-[#FFD700] tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {story.title}
              </motion.h3>

              <motion.p 
                className="text-xs sm:text-sm lg:text-base font-semibold text-white mb-4 uppercase tracking-widest font-emil"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {story.role}
              </motion.p>

              <motion.p 
                className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90 font-medium font-emil tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {story.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
