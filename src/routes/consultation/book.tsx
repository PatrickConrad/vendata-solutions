import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/consultation/book')({
  component: RouteComponent,
})

function RouteComponent() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: hook up booking server function
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 pb-20">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center">
          Schedule Your Free Consultation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed">
          Fill in the details below and choose a time that works for you. We’ll confirm your consultation via email.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-v-navy dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">
            
            {/* Name */}
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
            />

            {/* Company */}
            <input
              type="text"
              placeholder="Company (optional)"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
            />

            {/* Date */}
            <input
              type="date"
              required
              value={date}
              onChange={e => setDate(e.target.value)}
              className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
            />

            {/* Time */}
            <input
              type="time"
              required
              value={time}
              onChange={e => setTime(e.target.value)}
              className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
            />

            {/* Submit Button */}
            <button className="btn-gold w-full py-3 rounded-lg font-bold text-lg">
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="bg-v-navy dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h2>
            <p className="text-v-gold mb-2">
              Thanks, {name}! Your consultation has been scheduled.
            </p>
            <p className="text-white/80">
              You will receive a confirmation email shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
