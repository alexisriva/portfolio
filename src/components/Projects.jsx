import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/alexisriva/repos?sort=updated&direction=desc&per_page=6',
        );
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const formattedProjects = data
          .filter((repo) => !repo.fork) // Filter out forks if you prefer original work
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
          }))
          // Take top 4 non-fork projects
          .slice(0, 4);

        setProjects(formattedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className='space-y-12'>
      <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
        Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {loading && (
          <div className='col-span-full text-center py-12 text-neutral-500 animate-pulse'>
            Loading projects...
          </div>
        )}

        {error && (
          <div className='col-span-full text-center py-12 text-red-400/80'>
            Failed to load projects. Please check GitHub directly.
          </div>
        )}

        {!loading &&
          !error &&
          projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300 flex flex-col h-full'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors'>
                  {project.name}
                </h3>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-neutral-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0'
                >
                  <path d='M7 17L17 7' />
                  <path d='M7 7h10v10' />
                </svg>
              </div>
              <p className='text-neutral-400 text-sm leading-relaxed mb-6 flex-grow'>
                {project.description || 'No description available.'}
              </p>
              <div className='flex items-center gap-4 text-xs text-neutral-500 font-medium uppercase tracking-wider'>
                <span className='flex items-center gap-1.5'>
                  <span className='w-2 h-2 rounded-full bg-emerald-500' />
                  {project.language || 'Code'}
                </span>
                {project.stars > 0 && (
                  <span className='flex items-center gap-1'>
                    ★ {project.stars}
                  </span>
                )}
              </div>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Projects;
