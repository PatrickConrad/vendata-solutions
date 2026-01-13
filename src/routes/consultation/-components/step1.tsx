import { FormEvent, useState } from "react"
import { requestConsultationPin } from "../../../server/EmailPin"
import { Turnstile } from "../../../components/reusable/Turnstile";

type Step1Props = {
    setToken: (token: string) => void;
    sendEmail: (e: FormEvent) => void;
}

export const Step1 = ({sendEmail, setToken}: Step1Props) => {
    
    return (
    <form onSubmit={(e)=>sendEmail(e)} className="flex flex-col gap-4">
        <input
            type="email"
            required
            placeholder="Enter your email"
            className="input px-4 py-3 rounded-lg border border-gray-300 focus:border-v-gold focus:ring-2 focus:ring-v-gold focus:outline-none"
        />
        <Turnstile setToken={setToken}/>
        <button className="btn-gold w-full py-3 rounded-lg font-bold text-lg">
            Continue
        </button>
    </form>
    )

}


