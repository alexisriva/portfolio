import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFastapi,
  SiAndroid,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiAmazonwebservices,
  SiBitrise,
  SiGithubactions,
  SiKotlin,
} from 'react-icons/si';
import {
  FiLayers,
  FiDatabase,
  FiUsers,
  FiCpu,
  FiAward,
  FiTrendingUp,
  FiActivity,
  FiCode,
  FiShield,
  FiGrid,
} from 'react-icons/fi';

const TechStack = () => {
  const categories = [
    {
      title: 'Architecture & Leadership',
      description: 'Guiding engineering teams and designing robust software foundations.',
      icon: FiUsers,
      skills: [
        { name: 'System Architecture', icon: FiLayers },
        { name: 'Technical Leadership', icon: FiAward },
        { name: 'Mentoring', icon: FiTrendingUp },
        { name: 'Agile / SCRUM', icon: FiActivity },
        { name: 'SOLID Principles', icon: FiCode },
        { name: 'Clean Architecture', icon: FiShield },
        { name: 'Design Patterns', icon: FiGrid },
      ],
    },
    {
      title: 'Backend Engineering',
      description: 'Building secure, scalable, and highly performant server-side systems.',
      icon: FiDatabase,
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Java', icon: FiCode },
        { name: 'Kotlin', icon: SiKotlin },
        { name: 'REST & GraphQL', icon: SiGraphql },
        { name: 'Database Modeling', icon: FiDatabase },
      ],
    },
    {
      title: 'Frontend & Mobile',
      description: 'Crafting responsive, high-performance web and native mobile experiences.',
      icon: SiReact,
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Android SDK', icon: SiAndroid },
      ],
    },
    {
      title: 'DevOps & Cloud',
      description: 'Automating build pipelines, deployments, and cloud infrastructure.',
      icon: FiCpu,
      skills: [
        { name: 'AWS', icon: SiAmazonwebservices },
        { name: 'Bitrise', icon: SiBitrise },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'Linux', icon: SiLinux },
      ],
    },
  ];

  return (
    <section className='space-y-12'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight text-neutral-200'>
          Tech Stack
        </h2>
        <p className='text-neutral-400 mt-2 max-w-xl'>
          A categorized overview of the technologies, architectures, and methodologies I specialize in.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {categories.map((category) => (
          <div
            key={category.title}
            className='p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300 flex flex-col justify-between'
          >
            <div>
              <div className='flex items-center gap-3 mb-2'>
                <category.icon className='text-2xl text-emerald-400 opacity-80' />
                <h3 className='text-lg font-bold text-neutral-200 uppercase tracking-wide'>
                  {category.title}
                </h3>
              </div>
              <p className='text-neutral-500 text-sm leading-relaxed mb-6'>
                {category.description}
              </p>
            </div>
            <div className='flex flex-wrap gap-2.5'>
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className='px-3 py-1.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80 text-neutral-300 text-xs font-medium hover:border-emerald-500/55 hover:text-white hover:bg-emerald-500/5 transition-all duration-300 cursor-default flex items-center gap-2 group'
                >
                  <skill.icon className='text-sm opacity-80 text-emerald-500/70 group-hover:text-emerald-400 group-hover:scale-110 transition-transform duration-250' />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
