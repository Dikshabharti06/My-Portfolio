import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="bg-[#0f0f15] px-6 md:px-16 py-16"
    >
      {/* Section Tag */}
      <div className="text-sm font-medium tracking-[0.14em] text-yellow-400 uppercase mb-2">
        Get In Touch
      </div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
        Let's Work Together
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-base max-w-2xl mb-12 font-light">
        Open to internships, collaborations, and interesting conversations.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left — Image Section */}
        <div className="flex flex-col gap-5">
          <div className="relative group w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-yellow-400/5">

            {/* Photo */}
            <img
              src="/contact.avif"
              alt="Get in touch"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

        </div>
        </div>

        {/* Right — Contact Form */}
        <div className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              className="bg-[#181820] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none transition focus:border-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              className="bg-[#181820] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none transition focus:border-yellow-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Hey Diksha, I'd love to collaborate on..."
              value={form.message}
              onChange={handleChange}
              className="bg-[#181820] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none transition focus:border-yellow-400 resize-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className={`w-full py-3 rounded-xl font-medium text-sm transition duration-300 ${
              submitted
                ? 'bg-green-400 text-black'
                : 'bg-yellow-400 text-black hover:bg-yellow-300'
            }`}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message →'}
          </button>

        </div>

      </div>
    </section>
  )
}