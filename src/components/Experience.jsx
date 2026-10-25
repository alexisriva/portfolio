import { useMemo, useState } from 'react';
import experiences from '../assets/experiences.json';

const DOMAINS = [
  'All Systems',
  'Architecture & Web',
  'Backend & APIs',
  'Mobile & CI/CD',
];

const Experience = () => {
  const [selectedDomain, setSelectedDomain] = useState('All Systems');

  const domainCounts = useMemo(() => {
    const counts = {
      'All Systems': 0,
      'Architecture & Web': 0,
      'Backend & APIs': 0,
      'Mobile & CI/CD': 0,
    };
    experiences.forEach((exp) => {
      exp.projects.forEach((project) => {
        counts['All Systems'] += 1;
        if (counts[project.domain] !== undefined) {
          counts[project.domain] += 1;
        }
      });
    });
    return counts;
  }, []);

  const filteredExperiences = useMemo(() => {
    return experiences
      .map((exp) => ({
        ...exp,
        projects:
          selectedDomain === 'All Systems'
            ? exp.projects
            : exp.projects.filter(
                (project) => project.domain === selectedDomain,
              ),
      }))
      .filter((exp) => exp.projects.length > 0);
  }, [selectedDomain]);

  return (
    <section id='experience' className='page-frame pt-(--section-gap)'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start'>
        {/* Left Rail: Sticky Section Header & Domain Filter */}
        <div className='lg:col-span-4 lg:sticky lg:top-10 space-y-6'>
          <h2 className='font-display text-head text-(--ink) reveal-up'>
            Selected Experience
          </h2>
          <p className='text-body text-(--ink-secondary) reveal-up delay-1'>
            Seven years of production leadership across enterprise consulting
            and high-growth startups. Filter systems by architectural domain.
          </p>

          {/* Interactive Live Domain Filter */}
          <div className='flex flex-wrap lg:flex-col gap-2 pt-2 reveal-up delay-2'>
            {DOMAINS.map((domain) => {
              const isActive = selectedDomain === domain;
              const count = domainCounts[domain];
              return (
                <button
                  key={domain}
                  type='button'
                  onClick={() => setSelectedDomain(domain)}
                  aria-pressed={isActive}
                  className={`px-4 py-3 rounded-sm text-small transition-colors flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682] ${
                    isActive
                      ? 'bg-(--accent-solid) text-(--accent-ink) font-bold'
                      : 'bg-(--surface) text-(--ink-secondary) hover:bg-(--surface-raised) hover:text-(--ink) font-medium'
                  }`}
                >
                  <span className='text-left'>{domain}</span>
                  <span className='tabular-nums shrink-0'>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Rail: Exposed Case Ledger */}
        <div className='lg:col-span-8 space-y-12'>
          {filteredExperiences.map((exp) => (
            <div key={exp.company} className='space-y-6'>
              <div>
                <div className='flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4'>
                  <h3 className='font-display text-lead font-bold text-(--ink)'>
                    {exp.company} — {exp.role}
                  </h3>
                  <span className='text-small tabular-nums text-(--ink-muted) shrink-0'>
                    {exp.period}
                  </span>
                </div>
                <p className='text-body text-(--ink-secondary) mb-6'>
                  {exp.description}
                </p>
              </div>

              <div className='space-y-6'>
                {exp.projects.map((project) => (
                  <article
                    key={project.name}
                    className='bg-(--surface) p-6 sm:p-8 rounded-sm space-y-5 reveal-up'
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        width='900'
                        height='560'
                        loading='lazy'
                        className='w-full h-48 sm:h-56 object-cover rounded-xs bg-(--surface-raised)'
                      />
                    )}
                    <div className='flex flex-wrap items-baseline justify-between gap-2'>
                      <h4 className='text-lead font-bold text-(--ink) leading-snug'>
                        {project.name}
                      </h4>
                      <span className='text-small font-medium text-(--accent)'>
                        {project.roleTag}
                      </span>
                    </div>
                    <p className='text-body text-(--ink-secondary) max-w-[65ch]'>
                      {project.details}
                    </p>
                    <div className='flex flex-wrap gap-2 pt-1'>
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 rounded-xs bg-(--surface-raised) text-(--ink) text-small font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
