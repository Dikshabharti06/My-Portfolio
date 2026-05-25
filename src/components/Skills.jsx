const techs = [
  { icon: '🐍', name: 'Python' },
  { icon: '⚡', name: 'C++' },
  { icon: '☕', name: 'Java' },
  { icon: '🌐', name: 'HTML/CSS' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🖥️', name: 'Node.js' },
  { icon: '🗄️', name: 'MongoDB' },
  { icon: '🛢️', name: 'SQL' },
  { icon: '🐙', name: 'Git & GitHub' },
  { icon: '🤖', name: 'AI/ML' },
  { icon: '🔌', name: 'REST APIs' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0f] px-6 md:px-16 py-16"
    >

      {/* Section Label */}
      <div className="text-sm font-medium tracking-[0.14em] text-yellow-400 uppercase mb-2">
        Tech Stack
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
        Tools I Work With
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-base max-w-2xl mb-12 font-light">
        A versatile stack spanning frontend, backend, databases, and AI technologies.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">

        {techs.map(({ icon, name }) => (
          <div
            key={name}
            className="bg-[#181820] border border-gray-800 rounded-2xl px-4 py-6 text-center transition duration-300 hover:border-yellow-400 hover:bg-[#1d1d28] hover:-translate-y-1"
          >

            {/* Icon */}
            <div className="text-3xl mb-3">
              {icon}
            </div>

            {/* Skill Name */}
            <div className="text-sm text-gray-300 font-medium">
              {name}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}