import { FormEvent, useState } from "react"
import { verifyPin } from "../../../server/EmailPin"
import { Navigate } from "@tanstack/react-router"

type Step2Props = {
  email: string
}
export const Step2 = ({email}: Step2Props) => {
    const [pin, setPin] = useState("");
    const [error, setError] = useState<boolean>(false);
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      try{
        setError(false)
        await verifyPin({data: { email, pin }})
        Navigate({to: '/consultation/book'})
      }
      catch(err: any){
        console.log('Error submitting')
        console.log({err})
        setPin('');
        setError(true);
      }
    }
  return (

    <div>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit code"
              value={pin}
              onChange={e => setPin(e.target.value)}
          />
          <button className="btn-gold">Verify</button>
          {
            error && <p className="text-red">Error verifying pin. Please try again.</p>
          }
        </form>
    </div>

  )
}
