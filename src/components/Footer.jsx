import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => (
  <footer className='pt-20 border-t border-neutral-900'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-8'>
      <div className='flex gap-6'>
        <a
          href='https://github.com/alexisriva'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2'
        >
          <SiGithub size={18} />
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/alexis-rivadeneira/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2'
        >
          <SiLinkedin size={18} />
          LinkedIn
        </a>
      </div>

      <a
        href='/RESUME-RIVADENEIRA.pdf'
        download='Alexis_Rivadeneira_Resume.pdf'
        className='px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2'
      >
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
          <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
          <polyline points='7 10 12 15 17 10' />
          <line x1='12' y1='15' x2='12' y2='3' />
        </svg>
        Download Resume
      </a>
    </div>
    <div className='text-center text-neutral-600 text-xs tracking-widest uppercase'>
      Alexis Rivadeneira © {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
