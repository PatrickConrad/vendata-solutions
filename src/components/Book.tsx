import { useEffect, useRef, useState } from 'react'
import { Turnstile } from './reusable/Turnstile'

export function Book() {
  const [step, setStep] = useState(1)
  const [token, setToken] = useState('')

  const email = useRef('');
  const name = useRef('');


  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
        console.log({e})
        console.log({data: e.data})
        console.log({event: e.data?.event})

      if (e.data?.event === "calendly.event_scheduled") {
        setStep(3) // Move to success / inbox review step
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 p-20">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center">
          Book a Strategy Call
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed">
          Let’s get you scheduled in just a few quick steps.
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {[1,2,3].map(n => (
            <div
              key={n}
              className={`h-2 w-16 rounded-full transition ${
                step >= n ? "bg-green-500" : "bg-gray-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>

        {/* STEP 1 — CONTACT */}
        {step === 1 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="input"
                onChange={(e)=>name.current=e.target.value}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                className="input"
                onChange={(e)=>email.current=e.target.value}
              />
            </div>

            <Turnstile setToken={setToken} />

            <button
              onClick={next}
              className="btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 2 — CALENDAR */}
        {step === 2 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">

            <p className="text-slate-600 dark:text-slate-300 text-center">
              Select a time that works best for you.
            </p>

            <iframe
              src={`https://calendly.com/patrickoconrad/new-meeting?embed_domain=vendata.solutions&embed_type=Inline&name=${name.current}&email=${email.current}`}
              className="w-full h-[700px] rounded-lg shadow-inner"
            />

            <div className="flex justify-between">
              <button onClick={back} className="text-slate-500 hover:text-slate-800">
                ← Back
              </button>

              {/* <button
                onClick={next}
                className="btn-gold px-10 py-4 rounded-xl font-black uppercase"
              >
                Continue
              </button> */}
            </div>
          </div>
        )}

        {/* STEP 3 — OPTIONAL QUESTIONS */}
        {/* {step === 3 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">

            <p className="text-slate-600 dark:text-slate-300 text-center">
              Optional — help us prepare for your call.
            </p>

            <div className="flex flex-col gap-2">
              <label className="label">What does your business do?</label>
              <textarea rows={3} className="input" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Team size</label>
              <select className="input">
                <option>Solo</option>
                <option>2–5</option>
                <option>6–20</option>
                <option>20+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Tools you currently use</label>
              <textarea rows={3} className="input" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Main goal for this call</label>
              <textarea rows={3} className="input" />
            </div>

            <button className="btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase">
              Finish
            </button>
          </div>
        )} */}
        {step === 3 && (
        <div className="text-center p-10">
          <h2 className="text-3xl font-bold">You’re all set!</h2>
          <p>Check your inbox for the confirmation email.</p>
        </div>
      )}

      </div>
    </main>
  )
}
