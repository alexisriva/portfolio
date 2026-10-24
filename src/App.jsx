import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

const App = () => (
  <div className='min-h-svh bg-[var(--bg)] text-[var(--ink)] overflow-x-hidden selection:bg-[#7fa682] selection:text-[#0c0d0c]'>
    <Hero />
    <Experience />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
