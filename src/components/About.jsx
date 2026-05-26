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
      {/* Main Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

  {/* LEFT CONTENT */}
  <div>

    {/* Section Label */}
    <div className="text-lg font-bold tracking-[0.14em] text-yellow-400 uppercase mb-2">
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

    {/* Paragraphs */}
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
      </p>

      <p className="text-gray-300 text-[1.02rem] leading-8 font-light">
        I'm a{' '}
        <strong className="text-white font-medium">
          Full Stack Developer
        </strong>{' '}
        and{' '}
        <strong className="text-white font-medium">
          Python Enthusiast
        </strong>.
      </p>

      <p className="text-gray-300 text-[1.02rem] leading-8 font-light">
        Currently leveling up in App Development, DSA, and AI-powered applications.
      </p>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col gap-6">
    {/* Learning Card */} 
    <div className="bg-[#181820] border border-gray-800 rounded-2xl p-6 shadow-lg flex-1"> 
      <h4 className="text-lg font-bold text-yellow-400 mb-5"> 🚀 Currently Learning </h4> 
      <div className="flex flex-col gap-4"> 
      {learningItems.map((item) => ( 
        <div key={item} className="flex items-center gap-3 text-gray-300 text-sm font-light" > 
        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0">
          </span> 
          {item} 
          </div> 
        )
        )
        } 
        </div> 
        </div>

    {/* University Card */} 
    <div className="bg-[#181820] border border-gray-800 rounded-2xl p-6 shadow-lg flex-1">
      <div className="flex items-center justify-between mb-5"> 
        <h4 className="text-lg font-bold text-yellow-400"> 
          🎓 Education </h4> 
          <span className="text-sm font-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2 py-0.5"> 
          CGPA: 8.2 </span> 
          </div> 
          <p className="text-gray-300 text-sm leading-7 font-light"> 
            Pursuing B.Tech in Computer Science Engineering (2023–2027) from Guru Ghasidas Vishwavidyalaya, Bilaspur. </p> 
            <p className="text-gray-300 text-sm leading-7 font-light mt-2"> 
              Coursework includes Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering. </p> 
              </div>          
  </div>

</div>
    </section>
  )
}