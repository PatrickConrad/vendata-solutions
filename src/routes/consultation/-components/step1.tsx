import { FormEvent, useState } from "react"
import { requestConsultationPin } from "../../../server/EmailPin"

type Step1Props = {
    setEmail: (email: string) => void;
    email: string;
    sendEmail: (e: FormEvent) => void;
}

export const Step1 = ({email, setEmail, sendEmail}: Step1Props) => {
   
    
    return (
    <form onSubmit={sendEmail}>
        <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input"
        />
        <button className="btn-gold">Continue</button>
    </form>
    )

}


