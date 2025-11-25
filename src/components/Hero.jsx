const Hero = () => (
  <main className='space-y-12 text-center sm:text-left'>
    <header className='space-y-8'>
      <div className='flex flex-col sm:flex-row items-center gap-8'>
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
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
        <span className='text-white font-medium'>7 years</span> of full-stack
        experience, I craft scalable, intelligent systems that solve real-world
        problems.
      </p>
    </header>


  </main>
);

export default Hero;
