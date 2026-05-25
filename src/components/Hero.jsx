const stats = [
  { num: '5+', label: 'Tech Stack Tools' },
  { num: '3+', label: 'Projects Shipped' },
  { num: 'AI', label: 'Powered Dev' },
]

export default function Hero() {

  const scrollTo = (e, id) => {
    e.preventDefault()

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 px-6 md:px-16 pb-16 relative overflow-hidden bg-[#0a0a0f]"
    >

      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-32 w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(124,110,245,0.18)_0%,transparent_65%)] pointer-events-none" />

      <div className="absolute -bottom-20 -left-24 w-95 h-95 rounded-full bg-[radial-gradient(circle,rgba(92,207,160,0.10)_0%,transparent_65%)] pointer-events-none" />

      {/* Content */}
      <div className="max-w-5xl relative z-10">

        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-1 rounded-full mb-6">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          Open to Opportunities

        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-2">

          Diksha{' '}

          <span className="text-yellow-400">
            Bharti
          </span>

        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl font-semibold text-gray-400 mb-6">
          Full Stack Developer & AI Enthusiast
        </p>

        {/* Bio */}
        <p className="text-lg text-gray-300 max-w-3xl mb-10 leading-8 font-light">
          BTech CSE student at GGV Bilaspur, building full-stack web apps,
          exploring AI-powered applications, and sharpening DSA for placements.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 max-sm:flex-col">

          <a
            href="#projects"
            onClick={(e) => scrollTo(e, 'projects')}
            className="inline-block text-center px-7 py-3 bg-yellow-400 text-black rounded-xl font-medium transition duration-300 hover:bg-yellow-300 hover:-translate-y-1"
          >
            View Projects ↓
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="inline-block text-center px-7 py-3 border border-gray-700 text-yellow-400 rounded-xl font-medium transition duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 hover:-translate-y-1"
          >
            Let's Connect
          </a>

        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-10">

          {stats.map(({ num, label }) => (
            <div key={label}>

              <span className="text-4xl font-extrabold text-yellow-400 block">
                {num}
              </span>

              <span className="text-sm text-gray-400 tracking-wide">
                {label}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}