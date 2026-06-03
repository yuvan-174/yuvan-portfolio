import Card from "./Card";
import { easeOut, motion } from "framer-motion";
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
    <section className="min-h-screen flex items-center pt-24">
      <motion.div className="max-w-7xl mx-auto px-6 w-full "    initial={{opacity: 0,x: 50,}}animate={{opacity: 1,x: 0,}}transition={{duration: 0.8,delay: 0.3,ease: "easeOut",}}whileHover={{y: -4,}}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8, ease:easeOut }} className="text-center lg:text-left">
            <p className="text-lg md:text-xl tracking-widest uppercase text-[var(--accent)] mb-4">
              Aspiring Software Developer
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
              Yuvan <span className="text-[var(--accent)]">Sundar</span>
            </h1>

            <p className="text-lg md:text-xl text-[#F7EDF0]/80 leading-relaxed max-w-2xl mb-10">
              I build modern web applications, explore software engineering
              concepts, and continuously learn new technologies while growing into
              a software engineer.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  px-8 py-3
                  rounded-lg
                  border border-[var(--accent)]
                  transition-all duration-300
                  hover:bg-[var(--accent)]
                "
              >
                View Projects
              </button>

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  px-8 py-3
                  rounded-lg
                  border border-[var(--accent)]
                  transition-all duration-300
                  hover:bg-[var(--accent)]
                "
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          {/*Right side */}
          <motion.div className="hidden lg:flex justify-center" variants={fadeRight} initial="hidden" animate="visible" transition={{ duration: 0.8, ease:easeOut, delay:0.3 }}>
            <Card />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
