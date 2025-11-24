import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import experiences from '../assets/experiences.json';

const ExperienceItem = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='relative pl-8 md:pl-12'>
      {/* Timeline Dot */}
      <div className='absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-emerald-500 border-4 border-neutral-950 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]' />

      <div className='space-y-4'>
        <div
          className='cursor-pointer group'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <div>
              <div className='flex items-center gap-2'>
                <h3 className='text-xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors'>
                  {exp.role}
                </h3>
                <div className='text-neutral-500 group-hover:text-emerald-400 transition-colors'>
                  {isExpanded ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </div>
              </div>
              <p className='text-emerald-400 font-medium'>{exp.company}</p>
            </div>
            <span className='text-sm font-mono text-neutral-500 bg-neutral-900/50 px-3 py-1 rounded-full border border-neutral-800 w-fit'>
              {exp.period}
            </span>
          </div>

          <p className='text-neutral-400 max-w-2xl leading-relaxed mt-4'>
            {exp.description}
          </p>
        </div>

        {isExpanded && (
          <div className='space-y-3 pt-2 animate-in fade-in slide-in-from-top-2 duration-200'>
            {exp.projects.map((project, pIndex) => (
              <div
                key={pIndex}
                className='group p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700 transition-colors'
              >
                <h4 className='text-neutral-200 font-semibold text-sm mb-1'>
                  {project.name}
                </h4>
                <p className='text-neutral-500 text-sm leading-relaxed'>
                  {project.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className='space-y-12'>
      <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
        Experience
      </h2>
      <div className='relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12'>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
