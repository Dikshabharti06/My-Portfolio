import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const stats = [
  { num: '5+', label: 'Tech Stack Tools' },
  { num: '3+', label: 'Projects Shipped' },
  { num: 'AI', label: 'Powered Dev' },
]

export default function Hero() {

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 px-6 md:px-16 pb-16 relative overflow-hidden bg-[#0a0a0f]"
    >

      {/* Glow Effects */}
      <div className="absolute -top-40 -right-32 w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(124,110,245,0.18)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-24 w-95 h-95 rounded-full bg-[radial-gradient(circle,rgba(92,207,160,0.10)_0%,transparent_65%)] pointer-events-none" />

      {/* Main Wrapper */}
      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">

          {/* Status */}
          <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open to Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-3">
            Diksha{' '}
            <span className="text-yellow-400">Bharti</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl font-semibold text-gray-400 mb-6">
            Full Stack Developer & AI Enthusiast
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-8 font-light mx-auto md:mx-0">
            BTech CSE student at GGV Bilaspur, building full-stack web apps,
            exploring AI-powered applications, and sharpening DSA for placements.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start max-sm:flex-col">
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
          <div className="mt-16 flex flex-wrap gap-10 justify-center md:justify-start">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <span className="text-4xl font-extrabold text-yellow-400 block">{num}</span>
                <span className="text-sm text-gray-400 tracking-wide">{label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT PHOTO */}
        <div className="flex flex-col items-center gap-5 shrink-0">

          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-3xl scale-110 opacity-70 group-hover:opacity-100 transition duration-500"></div>

            {/* Image — larger on desktop */}
            <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-400/40 shadow-2xl shadow-yellow-400/20">
              <img
                src="/IMG_427777.JPG"
                alt="Diksha Bharti"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"></div>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/dikshabharti06"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181820] border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:-translate-y-1 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/diksha-bharti-06sep05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181820] border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:-translate-y-1 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:dikshabharti0609@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181820] border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:-translate-y-1 transition duration-300"
              aria-label="Email"
            >
              <MdEmail size={20} />
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}