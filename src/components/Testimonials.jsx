import testimonials from '../assets/testimonials.json';

const Testimonials = () => {
  return (
    <section
      id='endorsements'
      className='mt-(--section-gap) bg-(--field-invert) text-(--field-invert-ink) py-20 sm:py-28'
    >
      <div className='page-frame space-y-12'>
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
          <h2 className='font-display text-head text-(--field-invert-ink) reveal-up'>
            Peer Endorsements
          </h2>
          <p className='text-body text-(--field-invert-muted) max-w-[44ch] reveal-up delay-1'>
            Direct references from engineering peers and startup co-founders who
            shipped production systems alongside Alexis.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch'>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className='bg-(--field-invert-surface) p-7 sm:p-8 rounded-sm flex flex-col justify-between gap-6 reveal-up'
            >
              <blockquote className='text-body leading-[1.6] text-(--field-invert-ink) font-normal'>
                “{item.text}”
              </blockquote>
              <div>
                <div className='text-body font-bold text-(--field-invert-ink)'>
                  {item.name}
                </div>
                <div className='text-small text-(--field-invert-muted)'>
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
