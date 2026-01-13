import { useState } from 'react';
import { Turnstile } from './reusable/Turnstile';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // submit form data
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-xl">
      <div className='flex justify-between'>
        <input type="text" placeholder="Name" className="border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-[48%] input-field" required />
        <input type="email" placeholder="Email" className="border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-[48%] input-field" required />
      </div>      
      <textarea placeholder="Message" className="min-h-30 border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-full input-field" required />
      
      <Turnstile setToken={setToken} />

      <button type="submit" className="btn-gold px-6 py-3 rounded-xl w-full">
        Send Message
      </button>

      {submitted && <p className="text-green-500 font-semibold mt-2">Message sent!</p>}
    </form>
  );
};