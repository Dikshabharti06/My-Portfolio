import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact', cta: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }

    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-gray-800">

        {/* Logo */}
        <div className="w-12 h-12 rounded-full border-2 border-yellow-400 shadow-lg shadow-yellow-400/30 flex items-center justify-center text-yellow-500 font-bold text-xl tracking-tight">
          DB
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label, cta }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={
                  cta
                    ? "bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium transition hover:bg-yellow-400"
                    : "text-gray-300 text-sm font-medium tracking-wide transition hover:text-yellow-400"
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-white transition duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-white transition duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-gray-800 flex flex-col gap-6 p-6 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className="text-gray-300 text-base font-medium transition hover:text-yellow-400"
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}