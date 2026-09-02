import { useState, useEffect, useRef, useCallback } from 'react';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink, FiStar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [failedImages, setFailedImages] = useState({});
  const [failedLogos, setFailedLogos] = useState({});

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/alexisriva/repos?sort=updated&direction=desc&per_page=30',
        );
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const formattedProjects = data
          .filter((repo) => !repo.fork) // Filter out forks for original work
          .map((repo) => ({
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
            logo: `https://raw.githubusercontent.com/alexisriva/${repo.name}/main/public/logo.png`,
          }));

        setProjects(formattedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const total = projects.length;

  const goToPrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    // Only swipe if horizontal move is greater than vertical move
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleLogoError = (id) => {
    setFailedLogos((prev) => ({ ...prev, [id]: true }));
  };

  // Helper to compute circular shortest distance
  const getRelativeDistance = (index) => {
    if (total <= 1) return 0;
    let diff = index - activeIndex;
    // Normalize to circular shortest distance
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Language color indicator mapping
  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-emerald-400',
      HTML: 'bg-orange-500',
      CSS: 'bg-indigo-400',
      Vue: 'bg-emerald-500',
      Dart: 'bg-cyan-400',
      Rust: 'bg-amber-600',
      Go: 'bg-sky-400',
      Java: 'bg-red-400',
      Kotlin: 'bg-purple-400',
      Swift: 'bg-orange-400',
    };
    return colors[lang] || 'bg-emerald-500';
  };

  return (
    <section className='space-y-8 select-none' aria-label='Projects Showcase'>
      <div className='flex items-baseline justify-between'>
        <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
          Projects
        </h2>
        {!loading && !error && total > 0 && (
          <span className='text-xs font-mono uppercase tracking-widest text-neutral-500'>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>
        )}
      </div>

      {loading && (
        <div className='relative w-full max-w-2xl h-[440px] sm:h-[480px] mx-auto flex items-center justify-center'>
          <div className='w-[85%] sm:w-[80%] h-full rounded-2xl bg-neutral-900/60 border border-neutral-800 animate-pulse flex flex-col justify-between p-6 shadow-2xl'>
            <div className='h-48 w-full rounded-xl bg-neutral-800/50 animate-pulse' />
            <div className='space-y-3'>
              <div className='h-6 w-1/3 bg-neutral-800/80 rounded' />
              <div className='h-4 w-3/4 bg-neutral-800/60 rounded' />
              <div className='h-4 w-1/2 bg-neutral-800/40 rounded' />
            </div>
            <div className='flex justify-between items-center pt-4 border-t border-neutral-800'>
              <div className='h-4 w-16 bg-neutral-800/60 rounded' />
              <div className='h-8 w-20 bg-neutral-800/60 rounded-full' />
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className='text-center py-16 px-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-neutral-400 space-y-4'>
          <p className='text-red-400 font-medium'>
            Unable to fetch projects right now.
          </p>
          <a
            href='https://github.com/alexisriva'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4'
          >
            <SiGithub className='w-4 h-4' /> View repositories directly on
            GitHub
          </a>
        </div>
      )}

      {!loading && !error && total > 0 && (
        <div
          ref={deckRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className='outline-none focus:outline-none py-4'
        >
          {/* 3D Stacked Deck Container */}
          <div className='relative w-full max-w-2xl h-[440px] sm:h-[480px] mx-auto perspective-distant flex items-center justify-center'>
            {projects.map((project, index) => {
              const diff = getRelativeDistance(index);
              const isVisible = Math.abs(diff) <= 2;
              const isCenter = diff === 0;

              // Responsive positioning math
              const xOffset = isMobile
                ? diff * 36
                : diff === 0
                  ? 0
                  : diff > 0
                    ? 80 + (diff - 1) * 70
                    : -80 + (diff + 1) * 70;

              const scale = isCenter
                ? 1
                : Math.max(0.86, 1 - Math.abs(diff) * 0.06);
              const zIndex = isCenter ? 50 : 40 - Math.abs(diff) * 10;
              const opacity = isCenter
                ? 1
                : Math.max(0, 0.85 - Math.abs(diff) * 0.35);

              const hasFailedImage = failedImages[project.id];

              return (
                <div
                  key={project.id || project.name}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: `translateX(${xOffset}px) scale(${scale})`,
                    zIndex,
                    opacity: isVisible ? opacity : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  className={`group absolute top-0 w-[84%] sm:w-[80%] h-full rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer ${
                    isCenter
                      ? 'border-neutral-700 bg-neutral-900 shadow-2xl shadow-black/80 ring-1 ring-white/10'
                      : 'border-neutral-800/80 bg-neutral-900/90 hover:opacity-95 hover:border-neutral-700'
                  }`}
                >
                  {/* Card Background: Screenshot / Fallback Placeholder */}
                  <div className='relative w-full h-full bg-neutral-950 overflow-hidden'>
                    {!hasFailedImage ? (
                      <img
                        src={project.screenshot}
                        alt={`${project.name} preview`}
                        onError={() => handleImageError(project.id)}
                        className='w-full h-full object-cover object-top opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out'
                      />
                    ) : (
                      <div className='w-full h-full bg-linear-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden'>
                        {/* Subtle background glow behind placeholder */}
                        <div className='absolute w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none' />
                        <div className='w-16 h-16 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 shadow-xl relative z-10'>
                          {!failedLogos[project.id] ? (
                            <img
                              src={project.logo}
                              alt={`${project.name} logo`}
                              onError={() => handleLogoError(project.id)}
                              className='w-10 h-10 object-contain p-1'
                            />
                          ) : (
                            <FiCode size={28} />
                          )}
                        </div>
                        <h4 className='text-lg font-bold text-neutral-200 relative z-10'>
                          {project.name}
                        </h4>
                        <span className='text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider relative z-10'>
                          {project.language || 'Project Showcase'}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for contrast */}
                    <div className='absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-transparent' />

                    {/* Top Badges (Repo Stars & Language) */}
                    <div className='absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none'>
                      <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-950/70 backdrop-blur-md border border-neutral-800 text-neutral-300 shadow-sm'>
                        <span
                          className={`w-2 h-2 rounded-full ${getLanguageColor(
                            project.language,
                          )}`}
                        />
                        {project.language || 'Code'}
                      </span>
                      {project.stars > 0 && (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-950/70 backdrop-blur-md border border-neutral-800 text-amber-400 shadow-sm'>
                          <FiStar className='w-3 h-3 fill-amber-400' />
                          {project.stars}
                        </span>
                      )}
                    </div>

                    {/* Glassmorphic Details Overlay (Bottom Half) */}
                    <div className='absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-neutral-950/80 backdrop-blur-md border-t border-neutral-800/90 flex flex-col justify-between gap-4 z-20'>
                      <div className='space-y-1.5'>
                        <div className='flex items-center gap-2.5 min-w-0'>
                          {!failedLogos[project.id] ? (
                            <img
                              src={project.logo}
                              alt={`${project.name} logo`}
                              onError={() => handleLogoError(project.id)}
                              className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-contain bg-neutral-900/90 p-1 border border-neutral-800 shrink-0'
                            />
                          ) : (
                            <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0'>
                              <FiCode size={16} />
                            </div>
                          )}
                          <h3 className='text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors truncate'>
                            {project.name}
                          </h3>
                        </div>
                        <p className='text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3'>
                          {project.description ||
                            'No repository description provided.'}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className='flex items-center justify-between pt-3 border-t border-neutral-800/60'>
                        <span className='text-[11px] font-mono uppercase tracking-wider text-neutral-500'>
                          {isCenter ? 'Active Project' : 'Click to view'}
                        </span>

                        <div className='flex items-center gap-2.5'>
                          <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={(e) => e.stopPropagation()}
                            className='p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95'
                            title='View GitHub Repository'
                            aria-label={`View ${project.name} GitHub Repository`}
                          >
                            <SiGithub size={16} />
                          </a>

                          {project.homepage && (
                            <a
                              href={project.homepage}
                              target='_blank'
                              rel='noopener noreferrer'
                              onClick={(e) => e.stopPropagation()}
                              className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 text-xs font-semibold transition-all hover:scale-105 active:scale-95'
                              title='Open'
                              aria-label={`Open ${project.name}`}
                            >
                              <span>Go</span>
                              <FiExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
