import { createFileRoute, Link } from '@tanstack/react-router'
import { faArrowTrendUp, faCogs, faCompass, faLightbulb, faMicroscope, faPuzzlePiece, faRocket, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: "About Us | The Team Behind Vendata Solutions" },
      {
        name: 'description',
        content: "Discover the expertise behind Vendata Solutions. We specialize in building custom ERP/CRM systems and API integrations that empower businesses to operate with technical precision."
      },
      { property: 'og:image', content: "https://www.vendata.solutions/vendata-venn-logo-full-text-social.png" },
      { property: 'og:image:secure_url', content: "https://www.vendata.solutions/vendata-venn-logo-full-text-social.png" },
      { property: 'og:image:type', content: 'image/png' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://www.vendata.solutions/vendata-venn-logo-full-text-social.png' },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return ( 
    <main className="bg-white dark:bg-slate-900 font-plus-jakarta">
      
      {/* 1. THE TALE: THE OWNER VS THE OVERHEAD */}
      <section className="py-24 px-6 bg-v-navy text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-v-gold uppercase tracking-[0.3em] font-bold text-sm">A Tale as Old as Commerce</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 leading-tight">
            The Owner <span className="text-v-green">vs.</span> <br />The Overhead
          </h1>
          <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
            <p>
              It is a struggle every visionary knows; the relentless weight of the mundane. In the fight for market share, your greatest enemy isn't the competition: it’s the friction within your own walls.
            </p>
            <p className="border-l-4 border-v-green pl-6 italic font-light">
              "Every employee is an investment. Every second is a currency. Yet, the modern emergence of SaaS promised a revolution that only delivered a maze."
            </p>
            <p>
              We see the same story time and again; logistics buried in manual entry, and owners fighting a daily vendetta against the very tools meant to save them.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY: BEYOND THE CODE */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-v-navy dark:text-white leading-tight">
            True Innovation is <br />
            <span className="text-v-green">Creative Problem Solving</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Vendata wasn't built to simply "write code." We were built to understand the heartbeat of your business. Our team doesn't look at a tech stack in isolation; we look at the goals, the target markets, and the untapped potential being held back by operational gaps.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We bridge the divide between high-level business development and technical execution. We don't just fix what is broken; we partner with you to find the innovative "unfair advantages" that allow you to scale without the bloat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border-b-4 border-v-navy">
            <FontAwesomeIcon icon={faShieldHalved} color="var(--v-navy)" />
            <h4 className="font-bold mt-4 text-v-navy dark:text-white">Defend Your Time</h4>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border-b-4 border-v-green">
            <FontAwesomeIcon icon={faRocket} color="var(--v-green)"  />
            <h4 className="font-bold mt-4 text-v-navy dark:text-white">Accelerate Growth</h4>
          </div>
        </div>
      </section>

      {/* 3. THE 4-PILLAR PROCESS */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-(--v-navy) dark:text-(--v-gold) mb-16">The Vendata Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { link: '/services/diagnostics', icon: faMicroscope, title: "The Deep Audit", text: "We dissect your operations to find where the friction hides and where the data stalls." },
              { link: '/services/optimization', icon: faCompass, title: "Process Optimization", text: "We align your technical architecture with your 3-year growth goals, not just today's fix." },
              { link: '/services/customization', icon: faCogs, title: "Seamless Bridging", text: "We build the high-impact logic that connects your tools into a single, unified organism." },
              { link: '/services/retainer', icon: faArrowTrendUp, title: "Continuous Value", text: "We partner for the long haul, evolving your systems as your market territory expands." }
            ].map((pillar, idx) => (
              <Link to={pillar.link} key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border-t-4 border-slate-200 dark:border-slate-700 hover:border-v-green transition-all group">
                <div className="text-v-navy dark:text-v-gold mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={pillar.icon} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-v-navy dark:text-white">{pillar.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{pillar.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP: THE PERSONAL VENDETTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-v-navy dark:text-white mb-16 underline decoration-v-gold decoration-4 underline-offset-8">Leadership</h2>
        
        <div className="space-y-24">
          {/* Founder Profile */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <img 
                src="/Founder-Patrick-Conrad-Profile-Image.jpeg" 
                alt="Patrick Conrad" 
                className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div> 
            <div className="flex-grow">
              <h3 className="text-3xl font-bold text-v-navy dark:text-white mb-2">Patrick Conrad</h3>
              <p className="text-v-gold font-bold uppercase tracking-widest text-sm mb-6">Founder & Principal Consultant</p>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  "I didn't start in a server room. I started in the trenches of marketing and business development, helping owners maximize goals and navigate complex target markets."
                </p>
                <p>
                  "I taught myself to code because I was tired of seeing brilliant strategies die on the vine due to inadequate tech. I built Vendata to be the partner I wish I had: someone who understands the P&L as deeply as the API."
                </p>
                <p>
                  "I'm most inspired by the intersection of high-level innovation and the gritty, creative problem-solving required to make a business actually work."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FINAL CALL */}
      <section className="py-32 px-6 text-center bg-v-navy text-white relative overflow-hidden">
        

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">
            Stop Fighting <span className="text-v-green">IT</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 uppercase tracking-[0.2em] font-bold">
            Start leading your industry.
          </p>

          <Link 
            to="/services/diagnostics" 
            className="btn-gold px-12 py-6 rounded-2xl font-black text-2xl tracking-tighter uppercase inline-block shadow-2xl hover:scale-105 transition-transform active:scale-95 bg-v-gold text-v-navy"
          >
            End the Vendetta
          </Link>

          <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Available for DMV Onsite or Global Remote Diagnostics
          </p>
        </div>
      </section>
    </main>
  )
}
