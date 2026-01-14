import { useEffect, useMemo, useRef, useState } from 'react'
import { Turnstile } from './reusable/Turnstile'

export function Book() {
  const [step, setStep] = useState(1)
  const [token, setToken] = useState('')

  const [clickedNext, setClickedNext] = useState(false)
  const [info, setInfo] = useState({
    email: '',
    name:  ''
  })

  const calendlyIframe = useMemo(() => (
    <iframe
      src={`https://calendly.com/patrickoconrad/new-meeting?embed_domain=vendata.solutions&embed_type=Inline&name=${info.name}&email=${info.email}`}
      className="w-full h-[700px] rounded-lg shadow-inner"
    />
  ), [info.name, info.email]);


  const next = () => {
    setClickedNext(true);
    if(step===1&&(info.email===''||info.name==='')){
      return
    }
    setStep(s => s + 1)
    setClickedNext(false);
    
  }
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

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && step === 1) {
        next();
      }
    };

    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [step, info]); // Re-run if step or info changes

  return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 w-full">

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
                step >= n ? "bg-v-green" : "bg-gray-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>

        {/* STEP 1 — CONTACT */}
        {step === 1 && (
          <>
            <div className="bookingForm w-[90%] md:w-lg bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">
            
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={info.name}
                  className={`bookingForm  ${clickedNext&&info.name===''?'error':''}`}
                  onChange={(e)=>setInfo((prev)=>({...prev, name: e.target.value}))}
                />
              </div>
            
              <div className="flex flex-col gap-2">
                <label className="bookingForm text-slate-700 dark:text-slate-300 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={info.email}
                  className={`bookingForm ${clickedNext&&info.email===''?'error':''}`}
                  onChange={(e)=>setInfo((prev)=>({...prev, email: e.target.value}))}              />
              </div>
              
              <button
                onClick={next}
                className="btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase"
              >
                Continue
              </button>
              {
                step===1&&(info.email===''||info.name==='')&&clickedNext
                ?
                <p className='w-full flex justify-center' style={{color: 'red'}}>Both name & email are required</p>
                :
                null
              }
            </div>
            <br/>
            <Turnstile setToken={setToken} />
          </>

        )}

        {/* STEP 2 — CALENDAR */}
        {step === 2 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6 w-full">
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
            <p className="text-slate-600 dark:text-slate-300 text-center">
              Select a time that works best for you.
            </p>

            {calendlyIframe}

           
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
  )
}
