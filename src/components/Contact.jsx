import { useState } from 'react'

const contactInfo = [
  { icon: '🎓', label: 'University', value: 'GGV Bilaspur, BTech CSE' },
  { icon: '📍', label: 'Location', value: 'Bilaspur, Chhattisgarh, India' },
  { icon: '💼', label: 'Status', value: 'Open to Internships & Collabs' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/dikshabharti06' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/diksha-bharti-06sep05' },
]

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

        {/* Contact Form */}
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

        {/* Contact Info */}
        <div className="flex flex-col gap-5">

          {contactInfo.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-[#181820] border border-gray-800 rounded-2xl px-5 py-4 hover:border-yellow-400 transition"
            >

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-lg shrink-0">
                {icon}
              </div>

              {/* Text */}
              <div>
                <div className="text-xs text-gray-400 mb-1">
                  {label}
                </div>

                <div className="text-sm text-white font-medium">
                  {value}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}