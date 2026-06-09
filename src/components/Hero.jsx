import { easeOut, motion } from "framer-motion";
import Card from "./Card";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div />

      <motion.div
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: easeOut,
            }}
            className="text-center lg:text-left"
          >
            <p className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Aspiring Software Developer
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6">
              Yuvan <span className="text-[var(--accent)]">Sundar</span>
            </h1>

            <p className="text-lg md:text-xl text-[#F7EDF0]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              I am a computer science student building modern web applications
              and exploring the systems beneath them. I focus on bridging clean
              front-end interfaces with robust backend logic.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              <button
                className="
                  group
                  flex items-center gap-2
                  px-8 py-3
                  rounded-lg
                  border border-[var(--accent)]
                  text-[var(--text)]
                  transition-all duration-300 ease-out
                  hover:bg-[var(--accent)]
                  hover:text-[var(--background)]
                  hover:-translate-y-1
                  hover:shadow-[0_8px_20px_rgba(163,112,62,0.25)]
                ">
                <span className="font-medium">View Projects</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  🡪
                </span>
              </button>

              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3
                  rounded-lg
                  border border-[var(--accent)]
                  text-[var(--text)]/70 
                  transition-all duration-300 ease-out
                  hover:text-[var(--accent)]
                  hover:bg-[var(--accent)]/10
                ">
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: easeOut,
              delay: 0.3,
            }}
          >
            <Card />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
