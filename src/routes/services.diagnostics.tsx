import { createFileRoute, Link } from '@tanstack/react-router'
import { StripeBanner } from '../components/reusable/RevolvingBanner';
import { getIntegrations } from '../data/integrations';
import { MatrixBackground } from '../components/reusable/matrixBackground';

export const Route = createFileRoute('/services/diagnostics')({
  component: RouteComponent,
})

function RouteComponent() {
  const allPartners = getIntegrations();

  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta text-v-navy dark:text-slate-200 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <MatrixBackground>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-v-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block">
            System Diagnostics & Strategy
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-50 dark:text-v-navy uppercase tracking-tighter italic mb-6">
            Stop Fighting <span className="text-v-green">IT</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Precision roadmapping for businesses tired of manual friction. 
            Choose your level of engagement below.
          </p>
        </div>
      </MatrixBackground>


      {/* --- THE TRIAD SELECTION --- */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6 items-stretch">
            
            {/* 1. Strategic Investigation - MOVED TO TOP ON MOBILE */}
            <div className="order-1 lg:order-1 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-v-gold/10 flex items-center justify-center text-v-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <h3 className="font-bold uppercase tracking-tight">Investigation</h3>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Specific problem? Tech vetting? Targeted technical research for one-offs.</p>
                <div className="text-3xl font-black text-v-navy dark:text-white">$150</div>
              </div>
              <a href="#investigation-detail" className="mt-8 block text-center py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 font-bold text-sm hover:border-v-gold transition-colors">Learn More</a>
            </div>
            {/* 2. THE CENTERPIECE: FULL AUDIT */}
            <div  className="order-2 lg:order-2 lg:col-span-2 p-10 bg-v-navy text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col border-t-4 border-b-8 border-v-green">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9" /></svg>
              </div>
              <div className="relative z-10">
                <span className="bg-v-green text-v-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Diagnostic</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mt-4 mb-4">The Process Audit</h2>
                <p className="text-slate-300 text-lg mb-8 max-w-md">The surgical deep-dive. We visit, we observe, we build the blueprint for your scale.</p>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black text-v-green">$800</span>
                  <span className="text-slate-400 uppercase text-xs tracking-widest font-bold">Flat Rate</span>
                </div>
              </div>
              <a href="#audit-detail" className="mt-auto block text-center py-5 bg-v-gold text-v-navy font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg">See Full Breakdown</a>
            </div>

            {/* 3. Not Sure? Contact */}
            <div className="order-3 lg:order-3 p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-600 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4">Unsure?</h3>
                <p className="text-sm text-slate-500 mb-6">Still not sure we are the right fit? Email us and we'll get back to you as soon as possible.</p>
              </div>
              <Link to="/contact" className="block text-center py-3 font-bold text-v-navy dark:text-v-gold hover:underline underline-offset-4">Email Inquiry →</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="audit-detail" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-12 text-v-navy dark:text-white">
          The Process <span className="text-v-green">Audit</span> Breakdown
        </h2>
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="group">
              <h4 className="text-xl font-bold text-v-navy dark:text-white mb-4 uppercase tracking-tight flex items-center gap-3">
                <span className="text-v-green text-2xl">01</span> Onsite Investigation
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-v-green/30 pl-6">
                "Onsite visits aren't just to shake hands, but to ask questions and learn processes."
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                We embed ourselves in your workflow to perform comprehensive process assessments. We observe the manual friction points that don't show up on a Zoom call.
              </p>
            </div>

            <div className="group">
              <h4 className="text-xl font-bold text-v-navy dark:text-white mb-4 uppercase tracking-tight flex items-center gap-3">
                <span className="text-v-green text-2xl">02</span> The High-Value Roadmap
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                You receive a real technical roadmap focused on enhancement and value savings. This includes:
              </p>
              <ul className="mt-4 space-y-3 text-sm font-bold uppercase tracking-tight text-v-navy dark:text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-v-green rotate-45" /> Estimates of Optimization hours for current tools</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-v-green rotate-45" /> Custom code hours for new logic</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-v-green rotate-45" /> Comprehensive breakdown of ROI per step</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-v-green rotate-45" /> These are <span className="text-(--v-green)">your</span> ideas. No lock in.</li>
              </ul>
            </div>

            <Link to="/consultation" search={{service:"audit"}} className="inline-block bg-v-navy text-white px-12 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-v-green transition-all shadow-xl">
              Book Audit Now
            </Link>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-v-green/5 rounded-full -mr-16 -mt-16" />
            <h3 className="text-v-gold uppercase font-black tracking-widest text-xs mb-8">Pricing & Financials</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                <span className="font-bold uppercase text-xs">Down Payment at Booking</span>
                <span className="font-mono text-v-green font-bold text-lg">$100.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                <span className="font-bold uppercase text-xs">Post-Call Balance</span>
                <span className="font-mono text-v-green font-bold text-lg">$700.00</span>
              </div>
              <div className="pt-4 text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed space-y-4">
                <p>• Includes 1 onsite visit (Washington-Baltimore area).</p>
                <p>• <strong>$600</strong> per additional onsite visit.</p>
                <p>• Travel and lodging fees apply for onsite visits outside the DMV area and are paid upfront.</p>
                <p className="pt-4">
                  <Link to="/services/pricing-policy" className="text-v-gold font-bold hover:underline">LEARN MORE HOW PRICING WORKS →</Link>
                  <br />
                  <span className="text-[10px] opacity-70 italic">Failure on my part will be spoken about on pricing policy.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="investigation-detail" className="py-24 px-6 bg-v-navy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">Strategic <span className="text-v-gold">Investigation</span></h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Targeted technical research for specific "How do I fix X?" or "Can we automate Y?" questions. 
                This covers the deep-dive investigation required to give you a definitive answer before you commit to development spend.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8 text-sm">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-v-gold text-v-navy flex items-center justify-center font-black">1</div>
                  <p><strong>Call 1 (15-minutes):</strong> Deep dive into the specific request.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-v-gold text-v-navy flex items-center justify-center font-black">2</div>
                  <p>Internal technical investigation & ROI analysis.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-v-gold text-v-navy flex items-center justify-center font-black">3</div>
                  <p><strong>Call 2 (15-minutes):</strong> Findings, logic, and implementation strategy.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-96 bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center shadow-2xl">
              <div className="text-5xl font-black text-v-gold mb-2">$150</div>
              <p className="uppercase tracking-widest text-xs font-bold mb-8 opacity-60 font-mono">Flat Per Request</p>
              
              <div className="text-left space-y-4 mb-8">
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  // This is the primary mechanism for any custom work, optimization or code requests by non-retainer clients.
                </p>
                <p className="text-[10px] text-v-gold uppercase font-bold tracking-widest">
                  * Waived for Retainer Clients
                </p>
              </div>

              <Link to="/consultation" search={{service:"investigation"}} className="block w-full py-4 bg-v-gold text-v-navy font-black rounded-xl uppercase tracking-widest hover:bg-white transition-all">
                Initiate Scoping
              </Link>
              <div className='pt-6'>
                <Link to="/services/pricing-policy" className="text-[10px] text-v-gold font-bold hover:underline">
                  LEARN MORE HOW PRICING WORKS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};