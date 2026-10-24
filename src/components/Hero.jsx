const Hero = () => (
  <section
    id='top'
    className='page-frame min-h-[86svh] flex flex-col justify-between pb-12 sm:pb-16'
  >
    {/* Top Navigation Bar */}
    <header className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-7 pb-12 sm:pb-16'>
      <a
        href='#top'
        className='text-body font-bold tracking-tight text-(--ink) hover:text-(--accent) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
      >
        AR
      </a>
      <nav
        aria-label='Primary navigation'
        className='flex items-center justify-between sm:justify-end gap-4 sm:gap-8 w-full sm:w-auto'
      >
        <a
          href='#experience'
          className='text-small font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
        >
          Experience
        </a>
        <a
          href='#projects'
          className='text-small font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
        >
          Projects
        </a>
        <a
          href='#endorsements'
          className='text-small font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
        >
          Endorsements
        </a>
        <a
          href='#contact'
          className='text-small font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
        >
          Contact
        </a>
      </nav>
    </header>

    {/* Monumental Headline */}
    <div className='my-auto py-6'>
      <h1 className='font-display text-display font-extrabold tracking-[-0.035em] leading-[0.94] text-(--ink) reveal-up'>
        Alexis Rivadeneira
      </h1>
      <p className='mt-4 text-lead font-medium tracking-[-0.02em] text-(--accent) leading-[1.2] reveal-up delay-1'>
        Lead Software Engineer &amp; Systems Architect
      </p>
    </div>

    {/* 12-Column Asymmetric Baseline Split */}
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8 sm:pt-12 items-end'>
      {/* Columns 1–7: Lead Statement & Primary Actions */}
      <div className='lg:col-span-7 space-y-8 reveal-up delay-2'>
        <p className='text-lead text-(--ink-secondary) max-w-[58ch]'>
          Seven years leading full-stack architecture, micro-frontend
          migrations, and mobile delivery pipelines for{' '}
          <strong className='font-medium text-(--ink)'>SM Energy</strong>,{' '}
          <strong className='font-medium text-(--ink)'>Kushki</strong>,{' '}
          <strong className='font-medium text-(--ink)'>Brightline</strong>, and{' '}
          <strong className='font-medium text-(--ink)'>La Favorita</strong>.
        </p>
        <div className='flex flex-wrap items-center gap-4 pt-2'>
          <a
            href='https://calendar.app.google/6NbKHXwEwsbHZp8y7'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-(--accent-solid) text-(--accent-ink) text-body font-bold hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
          >
            <span>Book a 30-Min Call</span>
          </a>
          <a
            href='/RESUME-RIVADENEIRA.pdf'
            download='Alexis_Rivadeneira_Resume.pdf'
            className='inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-(--surface-raised) text-(--ink) text-body font-medium hover:bg-[#272b27] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
          >
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* Columns 8–12: Flat Tonal Dossier Card */}
      <div className='lg:col-span-5 reveal-up delay-3'>
        <div className='bg-(--surface) p-6 sm:p-7 rounded-sm flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-6'>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            width='112'
            height='112'
            alt='Alexis Rivadeneira portrait'
            className='w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover bg-(--surface-raised) shrink-0 reveal-up delay-3'
          />
          <dl className='space-y-3 text-small leading-snug'>
            <div>
              <dt className='text-(--ink-muted) font-medium'>Current Role</dt>
              <dd className='text-(--ink) font-medium mt-0.5'>
                Senior Software Engineer &amp; Tech Lead{' '}
                <span className='text-(--ink-secondary)'>@ Devsu</span>
              </dd>
            </div>
            <div>
              <dt className='text-(--ink-muted) font-medium'>Experience</dt>
              <dd className='text-(--ink) font-medium tabular-nums mt-0.5'>
                7+ years in production systems
              </dd>
            </div>
            <div>
              <dt className='text-(--ink-muted) font-medium'>Core Domains</dt>
              <dd className='text-(--ink-secondary) mt-0.5'>
                React Micro-UIs · Python/FastAPI · Flutter &amp; Android
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
