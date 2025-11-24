const Contact = () => (
  <section className='space-y-12'>
    <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
      Contact
    </h2>
    <div className='p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 text-center space-y-6'>
      <p className='text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed'>
        Have a project in mind? Let's discuss how we can build something
        extraordinary together. Schedule a free 30-minute call.
      </p>
      <a
        href='https://calendar.app.google/6NbKHXwEwsbHZp8y7'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-colors duration-300'
      >
        <span>Book a Call</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
          <line x1='16' y1='2' x2='16' y2='6'></line>
          <line x1='8' y1='2' x2='8' y2='6'></line>
          <line x1='3' y1='10' x2='21' y2='10'></line>
        </svg>
      </a>
    </div>
  </section>
);

export default Contact;
