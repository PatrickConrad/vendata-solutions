import { createFileRoute } from '@tanstack/react-router'
import { FormEvent, useEffect, useState } from 'react'
import { Step1 } from './-components/step1'
import { Step2 } from './-components/step2'
import { requestConsultationPin } from '../../server/EmailPin'

export const Route = createFileRoute('/consultation/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState<boolean>(false)
  const [sendAgain, setSendAgain] = useState<number|null>()

  const sendEmail = async (e: FormEvent|MouseEvent) => {
    e.preventDefault()
    await requestConsultationPin({data: email})
    setSent(true)
    setSendAgain(30)
  }

  useEffect(() => {
    if (sendAgain === null) return

    const timer = setInterval(() => {
      setSendAgain((prev) => {
        if (prev == null || prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [sendAgain])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 pb-20">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center">
          Free Consultation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed">
          Enter your email below to get started. We’ll send you a verification code to confirm your email before booking your consultation.
        </p>

        {!sent ? (
          <Step1 sendEmail={sendEmail} email={email} setEmail={setEmail} />
        ) : (
          <div className="bg-v-navy dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6">
            <p className="text-v-gold font-semibold text-center">
              Email: {email}
            </p>
            <Step2 email={email} />

            <div className="text-center mt-2">
              {sendAgain === 0 ? (
                <button onClick={sendEmail} className="btn-gold px-6 py-2 rounded-lg font-bold text-sm">
                  Send Again
                </button>
              ) : (
                <p className="text-white/80">
                  Send again: <span className="font-bold">{sendAgain}</span> seconds
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
