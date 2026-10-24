const Contact = () => (
  <section id="contact" className="page-frame pt-[var(--section-gap)]">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-7 space-y-5 reveal-up">
        <h2 className="font-display text-head text-[var(--ink)]">
          Start a Conversation
        </h2>
        <p className="text-lead text-[var(--ink-secondary)] max-w-[52ch]">
          Available for Lead Software Engineer roles, staff-level architecture ownership, and technical advisory across web and mobile organizations.
        </p>
      </div>

      <div className="lg:col-span-5 bg-[var(--surface)] p-7 sm:p-9 rounded-[4px] space-y-6 reveal-up delay-1">
        <p className="text-body text-[var(--ink)] font-medium">
          Schedule a direct 30-minute architecture or hiring call, or download the full engineering dossier.
        </p>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href="https://calendar.app.google/6NbKHXwEwsbHZp8y7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-[4px] bg-[var(--accent-solid)] text-[var(--accent-ink)] text-body font-bold hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
          >
            <span>Book a 30-Min Call</span>
          </a>
          <a
            href="/RESUME-RIVADENEIRA.pdf"
            download="Alexis_Rivadeneira_Resume.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-[var(--surface-raised)] text-[var(--ink)] text-body font-medium hover:bg-[#272b27] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
          >
            <span>Download PDF Resume</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

