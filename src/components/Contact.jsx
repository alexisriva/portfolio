const Contact = () => (
  <section id='contact' className='page-frame pt-(--section-gap)'>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
      <div className='lg:col-span-7 space-y-5 reveal-up'>
        <h2 className='font-display text-head text-(--ink)'>
          Start a Conversation
        </h2>
        <p className='text-lead text-(--ink-secondary) max-w-[52ch]'>
          Available for Lead Software Engineer roles, staff-level architecture
          ownership, and technical advisory across web and mobile organizations.
        </p>
      </div>

      <div className='lg:col-span-5 bg-(--surface) p-7 sm:p-9 rounded-sm space-y-6 reveal-up delay-1'>
        <p className='text-body text-(--ink) font-medium'>
          Schedule a direct 30-minute architecture or hiring call, or download
          the full engineering dossier.
        </p>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-3'>
          <a
            href='https://calendar.app.google/6NbKHXwEwsbHZp8y7'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-sm bg-(--accent-solid) text-(--accent-ink) text-body font-bold hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
          >
            <span>Book a 30-Min Call</span>
          </a>
          <a
            href='/RESUME-RIVADENEIRA.pdf'
            download='Alexis_Rivadeneira_Resume.pdf'
            className='inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-(--surface-raised) text-(--ink) text-body font-medium hover:bg-[#272b27] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
          >
            <span>Download PDF Resume</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
