import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import testimonials from '../assets/testimonials.json';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Configuration
  const itemWidthPct = isMobile ? 85 : 60;
  const marginPx = isMobile ? 8 : 16; // mx-2 (8px) or mx-4 (16px)
  
  // Calculate translateX to center the current item
  // Formula: 50% - (ItemWidth/2) - Margin - (Index * (ItemWidth + 2*Margin))
  // Simplified: (50 - ItemWidth/2)% - Margin px - Index * (ItemWidth% + 2*Margin px)
  
  const centerOffsetPct = 50 - (itemWidthPct / 2);
  const translateXPct = centerOffsetPct - (currentIndex * itemWidthPct);
  const translateXPx = -marginPx - (currentIndex * (marginPx * 2));

  return (
    <section className='space-y-12'>
      <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
        Testimonials
      </h2>

      <div className='relative overflow-hidden py-8'>
        <div 
          className='flex transition-transform duration-500 ease-out'
          style={{ 
            transform: `translateX(calc(${translateXPct}% + ${translateXPx}px))` 
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`shrink-0 transition-all duration-500 ${
                isMobile ? 'w-[85%] mx-2' : 'w-[60%] mx-4'
              } ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
            >
              <div className='p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between h-full shadow-xl'>
                <div className='mb-6'>
                  <svg
                    className='w-8 h-8 text-emerald-500/50 mb-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01664 21L5.01664 18C5.01664 16.8954 5.91207 16 7.01664 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.01664C5.46436 8 5.01664 8.44772 5.01664 9V11C5.01664 11.5523 4.56892 12 4.01664 12H3.01664V5H13.0166V15C13.0166 18.3137 10.3303 21 7.01664 21H5.01664Z' />
                  </svg>
                  <p className='text-neutral-300 leading-relaxed italic text-lg'>
                    "{testimonial.text}"
                  </p>
                </div>
                <div className='flex items-center gap-4 pt-6 border-t border-neutral-800'>
                  <div className='w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg'>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className='text-white font-medium text-base'>
                      {testimonial.name}
                    </h4>
                    <p className='text-neutral-500 text-sm'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex items-center justify-between px-4 sm:px-0 mt-8">
        <div className="flex gap-4">
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-emerald-500 w-8' : 'bg-neutral-800 w-2 hover:bg-neutral-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
