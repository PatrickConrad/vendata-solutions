import { createFileRoute, Link } from '@tanstack/react-router'
import { Divider } from '../components/reusable/Divider'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: "About Us | The Team Behind VenData Solutions" },
      {
        name: 'description',
        content: "Discover the expertise behind VenData Solutions. We specialize in building custom ERP/CRM systems and API integrations that empower businesses to operate with technical precision."
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      {/* Hero Section */}
      <section className="py-24 bg-(--v-navy) dark:bg-(--v-navy) text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-(--v-gold) text-5xl lg:text-6xl font-extrabold mb-6">
            About VenData Solutions
          </h1>
          <Divider className="w-24 h-1 bg-v-green mt-5 mb-10"/>
          <p className="text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
            We create intelligent software that automates, clarifies, and scales your business. 
            Our mission is to make your business work for you — not the other way around.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-(--v-navy) dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              To empower businesses with smart tools that remove friction, improve efficiency, 
              and provide clear insights into their operations.
            </p>

            <h2 className="text-(--v-gold)  text-4xl font-extrabold  dark:text-(--v-green) mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              To be the most trusted partner for businesses looking to modernize their workflow 
              and unlock data-driven growth.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="team-illustration.png" 
              alt="Team illustration" 
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-(--v-navy) dark:text-white mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-(--v-navy) dark:bg-(--v-navy) text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-base">
                We constantly explore smarter ways to solve problems and build systems that scale.
              </p>
            </div>
            <div className="bg-(--v-gold) text-(--v-navy) rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-base">
                Clear insights and honest communication are at the core of every project.
              </p>
            </div>
            <div className="bg-(--v-green) text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-base">
                We deliver results that genuinely improve our clients’ workflow and bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
          Ready to make your business work for you?
        </h2>
        <Divider className='w-24 h-1 bg-v-green mt-5 mb-15' />
        <Link to="/consultation" className="btn-gold px-10 py-4 rounded-xl font-bold text-lg mt-4">
          Consult Our Engineers
        </Link>
      </section>
    </main>
  </>
}
