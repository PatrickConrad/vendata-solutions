import { useState } from 'react';
import { Turnstile } from './reusable/Turnstile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faGlobe, faListCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { addEmailUser } from '../../server/routes/google';
import { FormData } from '../types/google';

// export const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [token, setToken] = useState('');
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // submit form data
//     setSubmitted(true);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-xl">
//       <div className='flex justify-between'>
//         <input type="text" placeholder="Name" className="border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-[48%] input-field" required />
//         <input type="email" placeholder="Email" className="border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-[48%] input-field" required />
//       </div>      
//       <textarea placeholder="Message" className="min-h-30 border-b border-(--v-navy) dark:border-(--v-gold) p-2 w-full input-field" required />
      
//       <Turnstile setToken={setToken} />

//       <button type="submit" className="btn-gold px-6 py-3 rounded-xl w-full">
//         Send Message
//       </button>

//       {submitted && <p className="text-green-500 font-semibold mt-2">Message sent!</p>}
//     </form>
//   );
// };




export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    services: "General Inquiry",
    message: "",
    businessName: "",
    website: "",
    subscribe: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState('');
  const [done, setDone] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your Turnstile logic and API call goes here
    console.log("Submitting logic-first request:", formData);
    if(formData.name===''||formData.email===''||formData.services===''||formData.message===""||formData.businessName===''||token===''){
      setIsSubmitting(false)
      return setError(true);
    }
    
    const response = await addEmailUser({data: {formData, turnstileToken: token}})
    console.log({response})
    if(response.status!==200){
      setIsSubmitting(false)
      return setError(true);
    }
    setDone(true)
  };

  const inputStyles = "w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:border-v-green focus:outline-none transition-all placeholder:text-slate-400 font-medium";
  const labelStyles = "block text-xs font-black uppercase tracking-widest text-v-navy dark:text-v-gold mb-2 ml-1";

  return (
    (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Logic */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter dark:text-white uppercase">
            Start the <span className="text-v-green">Bridge.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium text-lg">
            Email message are free. Please include as much information as possible.
          </p>
        </div>

          {
            done
            ?
            <p>Your message has been sent. We'll get back to you soon.</p>
            :
          <>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800">
              {/* Business Info */}
              <div className="space-y-6">
                <div>
                  <label className={labelStyles}><FontAwesomeIcon icon={faBuilding} className="mr-2"/> Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name Here" 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className={labelStyles}><FontAwesomeIcon icon={faBuilding} className="mr-2"/> Business Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="VenData Solutions" 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
            
                <div>
                  <label className={labelStyles}><FontAwesomeIcon icon={faEnvelope} className="mr-2"/> Work Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="admin@company.com" 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
            
                <div>
                  <label className={labelStyles}><FontAwesomeIcon icon={faGlobe} className="mr-2"/> Website (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="https://company.com" 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
                          <div>
                <label className={labelStyles}><FontAwesomeIcon icon={faGlobe} className="mr-2"/> Subscribe to recieve email offers and promotions?</label>
                <input
                  type="checkbox"
                  id="subscribe-tick"
                  checked={formData.subscribe}
                  onChange={() => setFormData({...formData, subscribe: !formData.subscribe})}
                  className="w-5 h-5 cursor-pointer accent-blue-600"
                />
              </div>
              </div>
            
            
            
              {/* Request Info */}
              <div className="space-y-6">
                <div>
                  <label className={labelStyles}><FontAwesomeIcon icon={faListCheck} className="mr-2"/> Primary Need</label>
                  <select 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, services: e.target.value})}
                  >
                    <option>Surgical Optimization</option>
                    <option>Custom Bridge / API Integration</option>
                    <option>Full System Design ($500 Phase 1)</option>
                    <option>Operational Process Audit ($600)</option>
                    <option>Sentry Retainer Discussion</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
            
                <div className="md:row-span-2">
                  <label className={labelStyles}>Question / Project Brief / Logic Challenge</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about the bottleneck..." 
                    className={`${inputStyles} resize-none`}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>
            
              {/* Turnstile Placeholder - You add widget here */}
              <div className="md:col-span-2 flex flex-col items-center justify-center py-4 space-y-4">
                <div className="text-slate-400 text-xs italic">Security Validation required for submission.</div>
                {/* <Turnstile sitekey="..." onVerify={...} /> */}
                <Turnstile setToken={setToken}/>
            
              </div>
            
              {/* Submit Button */}
              <div className="md:col-span-2">
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-v-navy dark:bg-v-gold text-white dark:text-v-navy font-black text-xl uppercase italic py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:grayscale"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Analyzing Logic...</span>
                  ) : (
                    <>
                      Initiate Request <FontAwesomeIcon icon={faPaperPlane} />
                    </>
                  )}
                </button>
              </div>
            
            </form>
            {
              error&&(
                <div className="mt-12 text-center">
                  <p className="text-red-400 text-sm">{token===''?'Captcha must be verified':'Please include required information'}</p>
                </div>
              )
            }
          </>
          }

        {/* <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            By submitting, you agree to our 48-hour triage window policy for non-emergencies. 
            <br />Returning inquiries without a retainer are subject to our $100 Strategy Policy.
          </p>
        </div> */}
      </div>
    </section>
    )
  );
}