import AISummary from './components/AISummary';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';

const App = () => (
  <div className='min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden'>
    {/* Background Gradients */}
    <div className='fixed inset-0 z-0 pointer-events-none'>
      <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]' />
      <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-900/20 rounded-full blur-[120px]' />
    </div>

    <div className='relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-32 space-y-32'>
      <Hero />
      <TechStack />
      <AISummary />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
