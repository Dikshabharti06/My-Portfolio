export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-4 px-2 md:px-16 bg-[#0a0a0f]">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          © 2026 Diksha Bharti · Built with React & Tailwind CSS
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-sm">

          <a
            href="https://github.com/dikshabharti06"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/diksha-bharti-06sep05"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:dikshabharti0609@gmail.com"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  )
}