import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => (
  <footer className="page-frame pt-20 pb-12 mt-16">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10">
      <div className="flex flex-wrap items-center gap-6 text-small font-medium text-[var(--ink-secondary)]">
        <a
          href="https://github.com/alexisriva"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-[var(--ink)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
        >
          <SiGithub size={17} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/alexis-rivadeneira/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-[var(--ink)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
        >
          <SiLinkedin size={17} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://calendar.app.google/6NbKHXwEwsbHZp8y7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--ink)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
        >
          Schedule Call
        </a>
        <a
          href="/RESUME-RIVADENEIRA.pdf"
          download="Alexis_Rivadeneira_Resume.pdf"
          className="hover:text-[var(--ink)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]"
        >
          Resume (PDF)
        </a>
      </div>

      <div className="flex items-center gap-6 text-small text-[var(--ink-muted)] tabular-nums">
        <span>Alexis Rivadeneira © {new Date().getFullYear()}</span>
        <a
          href="#top"
          className="text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </div>

    <div
      aria-hidden="true"
      className="font-display text-display font-extrabold tracking-[-0.04em] leading-[0.88] text-[var(--surface-raised)] select-none whitespace-nowrap overflow-hidden"
    >
      ALEXIS RIVADENEIRA
    </div>
  </footer>
);

export default Footer;

