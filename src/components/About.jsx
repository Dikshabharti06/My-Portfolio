const learningItems = [
  'App Development (React Native / Flutter)',
  'Data Structures & Algorithms for placements',
  'AI-powered applications & integrations',
  'Backend API design & architecture',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111118] px-6 md:px-16 py-16"
    >
      {/* Section Label */}
      <div className="text-sm font-medium tracking-[0.14em] text-yellow-400 uppercase mb-2">
        Who I Am
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
        A Dev with a Mission
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-base max-w-2xl mb-12 font-light">
        Turning ideas into real, working software — one commit at a time.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="space-y-5">

          <p className="text-gray-300 text-[1.02rem] leading-8 font-light">
            Hi! I'm{' '}
            <strong className="text-white font-medium">
              Diksha Bharti
            </strong>
            , a passionate Computer Science Engineering student at{' '}
            <strong className="text-white font-medium">
              Guru Ghasidas Vishwavidyalaya, Bilaspur
            </strong>.
            I love building things for the web and exploring the intersection of AI and software development.
          </p>

          <p className="text-gray-300 text-[1.02rem] leading-8 font-light">
            I'm a{' '}
            <strong className="text-white font-medium">
              Full Stack Developer
            </strong>{' '}
            and{' '}
            <strong className="text-white font-medium">
              Python Enthusiast
            </strong>{' '}
            who believes in building solutions that actually matter — from food ordering platforms to mental health awareness tools.
          </p>

          <p className="text-gray-300 text-[1.02rem] leading-8 font-light">
            Currently leveling up in{' '}
            <strong className="text-white font-medium">
              App Development
            </strong>
            , grinding{' '}
            <strong className="text-white font-medium">
              DSA for placements
            </strong>
            , and experimenting with{' '}
            <strong className="text-white font-medium">
              AI-powered applications
            </strong>.
          </p>

        </div>

        {/* Right Card */}
        <div>
          <div className="bg-[#181820] border border-gray-800 rounded-2xl p-6 shadow-lg">

            <h4 className="text-lg font-bold text-yellow-400 mb-5">
              🚀 Currently Learning
            </h4>

            <div className="flex flex-col gap-4">

              {learningItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300 text-sm font-light"
                >

                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>

                  {item}

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}