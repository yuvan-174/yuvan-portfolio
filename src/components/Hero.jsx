import Card from "./Card";
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
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

              <button
                className="
                  px-8 py-3
                  rounded-lg
                  border border-[var(--accent)]
                  transition-all duration-300
                  hover:bg-[var(--accent)]
                "
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <Card />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
