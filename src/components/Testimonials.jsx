import testimonials from '../assets/testimonials.json';

const Testimonials = () => (
  <section className='space-y-12'>
    <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
      Testimonials
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className='p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between'
        >
          <div className='mb-6'>
            <svg
              className='w-8 h-8 text-emerald-500/50 mb-4'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01664 21L5.01664 18C5.01664 16.8954 5.91207 16 7.01664 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.01664C5.46436 8 5.01664 8.44772 5.01664 9V11C5.01664 11.5523 4.56892 12 4.01664 12H3.01664V5H13.0166V15C13.0166 18.3137 10.3303 21 7.01664 21H5.01664Z' />
            </svg>
            <p className='text-neutral-300 leading-relaxed italic'>
              "{testimonial.text}"
            </p>
          </div>
          <div className='flex items-center gap-4 pt-6 border-t border-neutral-800'>
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm'>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className='text-white font-medium text-sm'>
                {testimonial.name}
              </h4>
              <p className='text-neutral-500 text-xs'>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
