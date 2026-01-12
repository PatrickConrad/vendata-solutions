import { FormEvent, useState } from "react"
import { requestConsultationPin } from "../../../server/EmailPin"

type Step1Props = {
    setEmail: (email: string) => void;
    email: string;
    sendEmail: (e: FormEvent) => void;
}

export const Step1 = ({email, setEmail, sendEmail}: Step1Props) => {
   
    
    return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
        />
        <button className="btn-gold w-full py-3 rounded-lg font-bold text-lg">
            Continue
        </button>
    </form>
    )

}


