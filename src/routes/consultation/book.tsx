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
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">

            {/* Name */}
            <label className="text-slate-700 dark:text-slate-300 font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={name}
              onChange={e => setName(e.target.value)}
              className="
                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                placeholder-gray-400 dark:placeholder-slate-500
                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none
                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
              "
            />

            {/* Company */}
            <label className="text-slate-700 dark:text-slate-300 font-medium">
              Company (Optional)
            </label>
            <input
              type="text"
              placeholder="Acme Inc."
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="
                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                placeholder-gray-400 dark:placeholder-slate-500
                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none
                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
              "
            />

            {/* Date */}
            <label className="text-slate-700 dark:text-slate-300 font-medium">
              Select Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={e => setDate(e.target.value)}
              className="
                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                placeholder-gray-400 dark:placeholder-slate-500
                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none
                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
              "
            />

            {/* Time */}
            <label className="text-slate-700 dark:text-slate-300 font-medium">
              Select Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              required
              value={time}
              onChange={e => setTime(e.target.value)}
              className="
                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                placeholder-gray-400 dark:placeholder-slate-500
                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none
                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
              "
            />

            {/* Submit Button */}
            <button className="w-full py-3 rounded-lg font-bold text-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
              Confirm Booking
            </button>

            {/* Google Scheduler */}
            <div className="mt-6">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                Or schedule directly via Google Calendar:
              </p>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
                style={{ border: 0 }}
                className="w-full h-72 rounded-lg shadow-inner"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>

          </form>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Booking Confirmed!</h2>
            <p className="text-green-500 mb-2">
              Thanks, {name}! Your consultation has been scheduled.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              You will receive a confirmation email shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
