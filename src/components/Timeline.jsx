import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mehendi from "../assets/images/mehendi.jfif";
import reception from "../assets/images/reception.jfif";
import sangeet from "../assets/images/sangeet.jfif";
import wedding from "../assets/images/wedding.jfif";
import bgImage2 from "../assets/images/background2.jfif";

export default function EventTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const events = [
    { name: "Mehendi", date: "12 Jan 2026", time: "11:00 AM", img: mehendi },
    { name: "Sangeet", date: "13 Jan 2026", time: "06:00 PM", img: sangeet },
    { name: "Wedding", date: "14 Jan 2026", time: "10:00 AM", img: wedding },
    { name: "Reception", date: "15 Jan 2026", time: "07:00 PM", img: reception },
  ];

  return (
    <section
      ref={ref}
      id="events"
      className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#88708E]/70"></div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                   text-center font-playfair tracking-[0.3em] mb-20
                   bg-gradient-to-r from-yellow-300 to-orange-400
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        WEDDING EVENTS
      </motion.h2>

      {/* Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* Vertical Line only for md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#FFD700]/70 -translate-x-1/2 rounded-full"></div>

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.name}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* IMAGE + CIRCLE */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52
                             rounded-full border-4 border-[#FFD700]
                             shadow-2xl overflow-hidden"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-full 
                                bg-gradient-to-r from-[#FFD700]/40 to-transparent 
                                blur-xl animate-pulse"></div>
              </motion.div>

              {/* TEXT */}
              <motion.div
                className={`max-w-md text-center md:text-left ${
                  isLeft ? "md:text-left" : "md:text-right"
                }`}
                initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-[#FFD700] mb-4 tracking-wide">
                  {event.name}
                </h3>

                <p className="text-base sm:text-lg text-white font-bold tracking-wider">
                  {event.date}
                </p>

                <p className="text-lg sm:text-xl text-white font-bold mt-2">
                  {event.time}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
