import { Captcha } from './reusable/Captcha';
import { useCaptcha } from '../hooks/useCaptcha';
import { useState } from 'react';

export const ContactForm = () => {
  const { validate } = useCaptcha();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // submit form data
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-xl">
      <input type="text" placeholder="Name" className="input-field" required />
      <input type="email" placeholder="Email" className="input-field" required />
      <textarea placeholder="Message" className="input-field" required />
      
      <Captcha />

      <button type="submit" className="btn-gold px-6 py-3 rounded-xl w-full">
        Send Message
      </button>

      {submitted && <p className="text-green-500 font-semibold mt-2">Message sent!</p>}
    </form>
  );
};