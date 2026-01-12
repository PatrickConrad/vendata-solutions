import { createFileRoute } from '@tanstack/react-router'
import { FormEvent, useEffect, useState } from 'react'
import { Step1 } from './-components/step1'
import { Step2 } from './-components/step2'
import { requestConsultationPin } from '../../server/EmailPin'

export const Route = createFileRoute('/consultation/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<boolean>(false);
  const [sendAgain, setSendAgain] = useState<number|null>()
  
  const sendEmail = async (e: FormEvent|MouseEvent) => {
    e.preventDefault()
    await requestConsultationPin({data: email})
    setSent(true)
    setSendAgain(30);
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
    <div>
      {
        !sent
        ?
        <Step1 sendEmail={sendEmail} email={email} setEmail={setEmail} />
        :
        <>
          <Step2 email={email} />
          <br/>
          <p>Send again in: {sendAgain} seconds</p>
        </>
      }
      {
        sent && sendAgain && sendAgain===0 && <>
          <button onClick={(e)=>sendEmail}>Resend Pin</button>
        </>
      }
    </div>
  )
}
