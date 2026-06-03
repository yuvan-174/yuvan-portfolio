function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-[var(--background)]/70
        backdrop-blur-md
        border-b border-[var(--accent)]/20
        transition-all duration-300 ease-out
      ">
      <div
        className="
          max-w-7xl mx-auto
          flex justify-between items-center
          px-4 sm:px-6 md:px-8 lg:px-10
          py-4
        ">
        <a
          href="#"
          className="
            text-xl sm:text-2xl
            font-bold tracking-wide
            transition-colors duration-300
          ">
            <span className="text-[var(--text)]">YS</span>
        </a>

        <nav
          className="
            flex items-center
            gap-4 sm:gap-6 md:gap-8 lg:gap-10
            text-sm sm:text-base
          ">        
          <a
            href="#about"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;