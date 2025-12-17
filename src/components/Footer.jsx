export default function Footer() {
  return (
    <section className="bg-[#88708E] py-16 sm:py-24 text-center text-white px-4">
      
      {/* Monogram */}
      <h2 className="text-3xl sm:text-4xl tracking-widest font-semibold">
        J&J
      </h2>

      {/* Date */}
      <p className="mt-3 sm:mt-4 text-lg sm:text-xl tracking-wider font-medium">
        SATURDAY, SEPTEMBER 20, 2025
      </p>

      {/* Looking forward statement */}
      <p className="mt-6 sm:mt-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
        We look forward to celebrating this special day with love, laughter, and
        the presence of those who mean the most to us.
      </p>

      {/* Divider */}
      <div className="w-24 h-[1px] bg-[#FFD700] mx-auto my-8 opacity-80"></div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm tracking-wide text-white/80">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#FFD700]">
          StartX Innovations & Solutions
        </span>
      </p>

      {/* Credit */}
      <p className="mt-1 text-xs sm:text-sm tracking-wide text-white/70">
        Made with ❤️ by{" "}
        <span className="font-semibold text-[#FFD700]">
          Ashwita Karkera
        </span>
      </p>
    </section>
  );
}

