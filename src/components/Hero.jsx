const Hero = () => (
  <main className='space-y-12 text-center sm:text-left'>
    <header className='space-y-8'>
      <div className='flex flex-col sm:flex-row items-center gap-8'>
        <div className='relative group shrink-0'>
          <div className='absolute -inset-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
          <img
            src='/logo.png'
            alt='Profile Avatar'
            className='relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <h1 className='text-5xl sm:text-7xl font-bold tracking-tighter bg-linear-to-br from-white to-neutral-500 bg-clip-text text-transparent pb-2 text-center sm:text-left'>
          Lead Software Engineer
        </h1>
      </div>
      <p className='text-xl sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed mx-auto sm:mx-0'>
        Full-stack Technical Leader with{' '}
        <span className='text-white font-medium'>7+ years</span> of experience
        designing scalable architectures, guiding high-performing
        cross-functional teams, and modernizing enterprise software delivery
        workflows.
      </p>
    </header>
  </main>
);

export default Hero;
