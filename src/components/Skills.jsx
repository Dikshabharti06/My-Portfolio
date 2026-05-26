import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCss3Alt } from 'react-icons/fa'
import { SiCplusplus, SiHtml5, SiJavascript, SiMongodb, SiMysql } from 'react-icons/si'
import { TbApi, TbBrain } from 'react-icons/tb'

const techs = [
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaGitAlt />, name: 'Git & GitHub' },
  { icon: <TbBrain />, name: 'AI/ML' },
  { icon: <TbApi />, name: 'REST APIs' },
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
            <div className="text-3xl mb-3 text-yellow-400 flex justify-center">
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