import { FormEvent, useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { verifyPin } from "../../../../server/routes/email"

type Step2Props = {
  email: string
}
export const Step2 = ({email}: Step2Props) => {
    const [pin, setPin] = useState("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      try{
        setError(false)
        await verifyPin({data: { email, pin }})
        navigate({to: '/consultation/book'})
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit code"
            value={pin}
            onChange={e => setPin(e.target.value)}
            className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none text-center text-lg tracking-widest"
          />
          <button className="btn-gold w-full py-3 rounded-lg font-bold text-lg">
            Verify
          </button>
          {error && <p className="text-red-500 text-center">Error verifying pin. Please try again.</p>}
      </form>
    </div>

  )
}
