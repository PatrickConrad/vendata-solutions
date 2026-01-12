import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      {/* Hero Section */}
      <section className="py-24 bg-[var(--v-navy)] dark:bg-[var(--v-navy)] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            About Vendata Solutions
          </h1>
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
            <h2 className="text-4xl font-extrabold text-[var(--v-navy)] dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              To empower businesses with smart tools that remove friction, improve efficiency, 
              and provide clear insights into their operations.
            </p>

            <h2 className="text-4xl font-extrabold text-[var(--v-navy)] dark:text-white mb-6">
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
          <h2 className="text-4xl font-extrabold text-[var(--v-navy)] dark:text-white mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-[var(--v-navy)] dark:bg-[var(--v-navy)] text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-base">
                We constantly explore smarter ways to solve problems and build systems that scale.
              </p>
            </div>
            <div className="bg-[var(--v-gold)] text-[var(--v-navy)] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-base">
                Clear insights and honest communication are at the core of every project.
              </p>
            </div>
            <div className="bg-[var(--v-green)] text-white rounded-2xl p-8 shadow-lg">
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
        <Link to="/consultation" className="btn-gold px-10 py-4 rounded-xl font-bold text-lg mt-4">
          Consult Our Engineers
        </Link>
      </section>
    </main>
  </>
}
