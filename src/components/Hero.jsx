const Hero = () => (
  <main className='space-y-12 text-center sm:text-left'>
    <header className='space-y-8'>
      <div className='flex flex-col sm:flex-row items-center gap-8'>
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
          <img
            src='/avatar.png'
            alt='Profile Avatar'
            className='relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <h1 className='text-5xl sm:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent pb-2 text-center sm:text-left'>
          Agentic AI Engineer
        </h1>
      </div>
      <p className='text-xl sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed mx-auto sm:mx-0'>
        Building the intersection of AI and modern development. With{' '}
        <span className='text-white font-medium'>8 years</span> of full-stack
        experience, I craft scalable, intelligent systems that solve real-world
        problems.
      </p>
    </header>

    <nav className='flex flex-col sm:flex-row gap-6 pt-8'>
      <a
        href='https://github.com/alexisriva'
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 w-fit mx-auto sm:mx-0'
      >
        <span className='p-2 rounded-full bg-neutral-900 group-hover:bg-neutral-800 border border-neutral-800 group-hover:border-neutral-700 transition-all duration-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
            <path d='M9 18c-4.51 2-5-2-7-2' />
          </svg>
        </span>
        <span className='text-sm font-medium tracking-wide uppercase'>
          GitHub
        </span>
      </a>
    </nav>
  </main>
);

export default Hero;
