import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div
          className="
            border border-[var(--accent)]/20
            rounded-lg
            bg-[#121318]/80
            backdrop-blur-sm
            p-6 md:p-10 
            transition-colors duration-500
            hover:border-[var(--accent)]/40
          "
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />

            <span className="ml-auto text-xs font-mono text-white/40">
              workspace/contact
            </span>
          </div>

          <div className="text-center">
            <p className="uppercase tracking-[0.25em] text-[var(--accent)] text-xs font-semibold mb-3">
              Let's Connect
            </p>

            {/* 2. Reduced heading size so it doesn't dominate the card */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Interested in collaborating,
              <br className="hidden sm:block" />
              building products, or discussing software?
            </h2>

            {/* 3. Tighter max-width on the paragraph to keep reading lines comfortable */}
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8">
              Whether it's a project, internship opportunity,
              or just a conversation about technology,
              I'd love to hear from you.
            </p>

            {/* Contact Links */}
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="mailto:syuvansurya@gmail.com"
                className="
                  p-3 sm:p-4
                  rounded-lg
                  border border-white/10
                  hover:border-[var(--accent)]/50
                  hover:bg-[var(--accent)]/5
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FiMail className="text-xl sm:text-2xl text-[var(--accent)]" />
              </a>

              <a
                href="https://github.com/yuvan-174"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 sm:p-4
                  rounded-lg
                  border border-white/10
                  hover:border-[var(--accent)]/50
                  hover:bg-[var(--accent)]/5
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FiGithub className="text-xl sm:text-2xl text-[var(--accent)]" />
              </a>

              <a
                href="https://www.linkedin.com/in/yuvan-sundar-s-843033223/"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 sm:p-4
                  rounded-lg
                  border border-white/10
                  hover:border-[var(--accent)]/50
                  hover:bg-[var(--accent)]/5
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FiLinkedin className="text-xl sm:text-2xl text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;