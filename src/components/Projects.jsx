import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink, FiStar } from 'react-icons/fi';

const FALLBACK_PLATES = [
  'https://picsum.photos/id/887/900/600?grayscale',
  'https://picsum.photos/id/954/900/600?grayscale',
  'https://picsum.photos/id/1081/900/600?grayscale',
  'https://picsum.photos/id/508/900/600?grayscale',
];

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'portfolio',
    description:
      'Personal technical leadership dossier and architectural case logs built with React, Vite, and strict anti-slop typography.',
    url: 'https://github.com/alexisriva/portfolio',
    homepage: 'https://alexisriva.github.io/portfolio',
    language: 'JavaScript',
    stars: 5,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/portfolio/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[0],
  },
  {
    id: 2,
    name: 'enterprise-microfrontends',
    description:
      'Enterprise micro-frontend orchestration scaffold utilizing Module Federation, TypeScript, and shared contracts.',
    url: 'https://github.com/alexisriva/enterprise-microfrontends',
    homepage: null,
    language: 'TypeScript',
    stars: 12,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/enterprise-microfrontends/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[1],
  },
  {
    id: 3,
    name: 'fastapi-async-worker',
    description:
      'Asynchronous task ingestion and event-driven data streaming pipeline built with FastAPI and Redis cache.',
    url: 'https://github.com/alexisriva/fastapi-async-worker',
    homepage: null,
    language: 'Python',
    stars: 8,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/fastapi-async-worker/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[2],
  },
  {
    id: 4,
    name: 'viper-flutter-starter',
    description:
      'Strict VIPER clean architecture template for enterprise Flutter mobile applications with automated CI/CD.',
    url: 'https://github.com/alexisriva/viper-flutter-starter',
    homepage: null,
    language: 'Dart',
    stars: 7,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/viper-flutter-starter/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[3],
  },
  {
    id: 5,
    name: 'nextjs-booking-engine',
    description:
      'Performance-tuned Next.js headless storefront template targeting sub-second Core Web Vitals and SSR caching.',
    url: 'https://github.com/alexisriva/nextjs-booking-engine',
    homepage: null,
    language: 'TypeScript',
    stars: 6,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/nextjs-booking-engine/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[0],
  },
  {
    id: 6,
    name: 'android-coroutines-pipeline',
    description:
      'Production Kotlin Coroutines and Jetpack WorkManager background synchronization architecture.',
    url: 'https://github.com/alexisriva/android-coroutines-pipeline',
    homepage: null,
    language: 'Kotlin',
    stars: 4,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/android-coroutines-pipeline/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[1],
  },
  {
    id: 7,
    name: 'django-multitenant-core',
    description:
      'Schema-isolated multi-tenant architectural base for Django REST Framework and PostgreSQL.',
    url: 'https://github.com/alexisriva/django-multitenant-core',
    homepage: null,
    language: 'Python',
    stars: 3,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/django-multitenant-core/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[2],
  },
  {
    id: 8,
    name: 'bitrise-mobile-automation',
    description:
      'Production Bitrise workflow steps for end-to-end mobile build artifact validation and deployment.',
    url: 'https://github.com/alexisriva/bitrise-mobile-automation',
    homepage: null,
    language: 'Shell',
    stars: 2,
    screenshot:
      'https://raw.githubusercontent.com/alexisriva/bitrise-mobile-automation/main/public/screenshot.png',
    fallbackImage: FALLBACK_PLATES[3],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(FALLBACK_REPOS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/alexisriva/repos?sort=updated&direction=desc&per_page=30',
        );
        if (!response.ok) return;
        const data = await response.json();
        if (!Array.isArray(data)) return;

        const formattedProjects = data
          .filter((repo) => !repo.fork)
          .map((repo, idx) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            homepage:
              repo.homepage === 'https://alexisrivadeneira.com'
                ? null
                : repo.homepage,
            language: repo.language,
            stars: repo.stargazers_count,
            screenshot: `https://raw.githubusercontent.com/alexisriva/${repo.name}/main/public/screenshot.png`,
            fallbackImage: FALLBACK_PLATES[idx % FALLBACK_PLATES.length],
          }));

        if (isMounted && formattedProjects.length > 0) {
          setProjects(formattedProjects);
        }
      } catch {
        // Retain deterministic fallback repositories on network failure
      }
    };

    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageError = (id) => {
    setFailedImages((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const aScore = (a.description ? 2 : 0) + (a.stars > 0 ? 1 : 0);
    const bScore = (b.description ? 2 : 0) + (b.stars > 0 ? 1 : 0);
    if (bScore !== aScore) return bScore - aScore;
    return (b.stars || 0) - (a.stars || 0);
  });

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 8);
  const safeActiveIndex =
    activeIndex < displayedProjects.length ? activeIndex : 0;
  const activeProject = displayedProjects[safeActiveIndex] || FALLBACK_REPOS[0];

  return (
    <section
      id='projects'
      className='page-frame pt-(--section-gap)'
      aria-label='Open-Source Ledger'
    >
      {/* Section Header */}
      <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10'>
        <div>
          <h2 className='font-display text-head text-(--ink) reveal-up'>
            Open-Source Ledger
          </h2>
          <p className='text-body text-(--ink-secondary) max-w-[46ch] mt-2 reveal-up delay-1'>
            Public repositories, architectural experiments, and production
            utilities maintained on GitHub.
          </p>
        </div>
      </div>

      {/* 12-Column Asymmetric 7/5 Split */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start'>
        {/* Columns 1–7 — The Quiet Ledger */}
        <div className='lg:col-span-7 space-y-2'>
          {displayedProjects.map((project, index) => {
            const isSelected = safeActiveIndex === index;
            const hasFailed = failedImages[project.id];
            const mobileImage = hasFailed
              ? project.fallbackImage
              : project.screenshot || project.fallbackImage;

            return (
              <div
                key={project.id || project.name}
                className={`p-4 sm:p-5 rounded-sm transition-colors ${
                  isSelected ? 'bg-(--surface-raised)' : 'bg-(--surface)'
                }`}
              >
                <button
                  type='button'
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className='w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
                >
                  <div className='min-w-0 pr-2'>
                    <div className='text-body font-bold text-(--ink)'>
                      {project.name}
                    </div>
                    {project.description && (
                      <div className='text-small text-(--ink-secondary) line-clamp-1 mt-0.5'>
                        {project.description}
                      </div>
                    )}
                  </div>
                  <div className='flex items-center gap-3 shrink-0'>
                    {project.language && (
                      <span className='text-small font-medium text-(--accent)'>
                        {project.language}
                      </span>
                    )}
                    {project.stars > 0 && (
                      <span className='tabular-nums text-small text-(--ink-muted) flex items-center gap-1'>
                        <FiStar size={13} className='text-(--accent)' />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </button>

                {/* Mobile/Tablet inline details */}
                <div className='lg:hidden'>
                  {index < 2 && (
                    <div className='mt-3 overflow-hidden rounded-xs'>
                      <img
                        src={mobileImage}
                        onError={() => handleImageError(project.id)}
                        alt={`${project.name} preview`}
                        width='900'
                        height='600'
                        className='w-full aspect-16/10 object-cover object-top bg-(--surface-raised)'
                      />
                    </div>
                  )}
                  <div className='flex items-center gap-4 pt-3 text-small'>
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 font-bold text-(--ink) hover:text-(--accent) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
                    >
                      <SiGithub size={14} />
                      <span>Source Code</span>
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 font-medium text-(--accent) hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {sortedProjects.length > 8 && (
            <button
              type='button'
              onClick={() => setShowAll((prev) => !prev)}
              className='w-full py-3 px-4 rounded-sm bg-(--surface) text-(--ink) text-small font-medium hover:bg-(--surface-raised) transition-colors cursor-pointer text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
            >
              {showAll
                ? 'Show featured repositories (8)'
                : `View all repositories (${sortedProjects.length})`}
            </button>
          )}
        </div>

        {/* Columns 8–12 — Sticky Preview Panel */}
        <div className='hidden lg:block lg:col-span-5 lg:sticky lg:top-10'>
          <div className='bg-(--surface) p-6 rounded-sm space-y-5'>
            <img
              src={
                failedImages[activeProject.id]
                  ? activeProject.fallbackImage
                  : activeProject.screenshot || activeProject.fallbackImage
              }
              onError={() => handleImageError(activeProject.id)}
              alt={`${activeProject.name} preview`}
              width='900'
              height='600'
              className='w-full aspect-16/10 object-cover object-top rounded-xs bg-(--surface-raised)'
            />

            <div className='space-y-2'>
              <h3 className='font-display text-lead font-bold text-(--ink) leading-tight line-clamp-2'>
                {activeProject.name}
              </h3>
              <p className='text-body text-(--ink-secondary)'>
                {activeProject.description ||
                  'Production repository and source implementation maintained by Alexis Rivadeneira.'}
              </p>
            </div>

            <div className='flex items-center gap-4 text-small text-(--ink-muted) tabular-nums'>
              {activeProject.language && (
                <span className='text-(--accent) font-medium'>
                  {activeProject.language}
                </span>
              )}
              {activeProject.stars > 0 && (
                <span className='flex items-center gap-1'>
                  <FiStar size={14} className='text-(--accent)' />
                  <span>{activeProject.stars} stars</span>
                </span>
              )}
            </div>

            <div className='flex flex-wrap items-center gap-3 pt-2'>
              <a
                href={activeProject.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-(--accent-solid) text-(--accent-ink) text-small font-bold hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
              >
                <SiGithub size={16} />
                <span>Inspect Source</span>
              </a>
              {activeProject.homepage && (
                <a
                  href={activeProject.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-(--surface-raised) text-(--ink) text-small font-medium hover:bg-[#272b27] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]'
                >
                  <span>Live Deployment</span>
                  <FiExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
