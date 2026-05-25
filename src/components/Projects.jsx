const projects = [
  {
    icon: '🍔',
    badge: 'Live',
    badgeType: 'live',
    title: 'Food Fusion',
    desc:
      'A full-stack food ordering web app where users browse menus, place orders, and manage food delivery end-to-end.',
    tags: ['HTML/CSS', 'JavaScript', 'Backend', 'Database'],
  },

  {
    icon: '🧠',
    badge: 'Live',
    badgeType: 'live',
    title: 'MindEase',
    desc:
      'A full-stack mental wellness platform offering awareness resources, wellness support, and a clean user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },

  {
    icon: '🦥',
    badge: 'AI Powered',
    badgeType: 'ai',
    title: 'AI Sloth Generator',
    desc:
      'An AI-powered creative tool that generates unique sloth personas, images, and themed content using AI integrations.',
    tags: ['Python', 'AI/ML', 'FastAPI', 'API'],
  },

  {
    icon: '🔌',
    badge: 'In Progress',
    badgeType: 'wip',
    title: 'Backend API Projects',
    desc:
      'A collection of RESTful API projects exploring authentication, scalable backend architecture, and database management.',
    tags: ['Node.js', 'Python', 'REST API', 'MongoDB'],
  },

  {
    icon: '📊',
    badge: 'Ongoing',
    badgeType: 'wip',
    title: 'DSA Practice Repo',
    desc:
      'A structured repository of DSA solutions in C++, Java, and Python built for interview and placement preparation.',
    tags: ['C++', 'Java', 'Python', 'GitHub'],
  },
]

// Badge Styles
const badgeStyles = {
  live:
    'text-green-400 border-green-400/30 bg-green-400/10',

  wip:
    'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',

  ai:
    'text-purple-300 border-purple-300/30 bg-purple-300/10',
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111118] px-6 md:px-16 py-16"
    >

      {/* Label */}
      <div className="text-sm font-medium tracking-[0.14em] text-yellow-400 uppercase mb-2">
        My Work
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
        Featured Projects
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-base max-w-2xl mb-12 font-light">
        Real apps, real learning, real impact.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {projects.map(
          ({
            icon,
            badge,
            badgeType,
            title,
            desc,
            tags,
          }) => (
            <div
              key={title}
              className="bg-[#181820] border border-gray-800 rounded-2xl p-7 flex flex-col gap-5 transition duration-300 hover:border-yellow-400 hover:-translate-y-2 hover:bg-[#1d1d28]"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="text-4xl">
                  {icon}
                </div>

                <span
                  className={`text-xs font-medium tracking-wide px-3 py-1 rounded-full border ${badgeStyles[badgeType]}`}
                >
                  {badge}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-7 font-light">
                {desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">

                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md bg-yellow-400/10 text-yellow-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          )
        )}

      </div>

    </section>
  )
}