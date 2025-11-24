import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiPython,
  SiDjango,
  SiFastapi,
  SiGit
} from 'react-icons/si'

const TechStack = () => {
  const techStack = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "Django Rest Framework", icon: SiDjango },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Git", icon: SiGit }
  ]

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-200">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-neutral-600 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2"
          >
            <tech.icon className="text-lg opacity-80" />
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
