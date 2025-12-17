import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import background from "../assets/images/background.jfif";
import story2 from "../assets/images/story2.jpg";
import story1 from "../assets/images/story1.jpg";
import story3 from "../assets/images/story3.jpg";


export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const stories = [
    {
      img: story1,
      title: "Mohan’s Story",
      role: "Groom",
      desc: "A calm and thoughtful soul, Mohan is grounded yet adventurous at heart. He brings clarity when life feels chaotic and deeply cherishes Nayana’s quirks."
    },
    {
      img: story2,
      title: "Our Relationship",
      role: "Their Relationship",
      desc: "What began as a college friendship slowly transformed into a deep bond built on trust, laughter, and unwavering support. Together, they balance and uplift one another."
    },
    {
      img: story3,
      title: "Nayana's Story",
      role: "Bride",
      desc: "A spirited woman with a love for painting and life’s little joys. She’s empathetic, observant, and finds beauty in the simplest moments."
    }
  ];

  return (
    <section
      ref={ref}
      id="story"
      className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 font-emil"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#88708E] opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                     font-light tracking-[0.3em] mb-14
                     bg-gradient-to-r from-yellow-300 to-orange-400 
                     bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          OUR STORY
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 
                         rounded-2xl p-5 flex flex-col 
                         min-h-[520px] lg:min-h-[560px]
                         hover:bg-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="w-full h-[220px] overflow-hidden rounded-xl mb-5">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl lg:text-2xl font-semibold text-[#FFD700] mb-2 tracking-wide">
                {story.title}
              </h3>

              <p className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
                {story.role}
              </p>

              <p className="text-sm lg:text-base text-white/90 leading-relaxed line-clamp-5">
                {story.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


