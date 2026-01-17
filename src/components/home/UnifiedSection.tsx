import { Convergence } from "../reusable/Convergence"

export const UnifiedSection = () => {

    return (
        <section id="convergence-section" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
                <Convergence />
                <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-v-navy mb-6">
                    Our Process: Simple, Transparent, Effective
                </h2>
                <div className="w-20 h-1.5 bg-v-gold mb-8"></div>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Each step of our process is straightforward, but when combined, they create a cohesive system that drives measurable results. We focus on clarity, efficiency, and impactful solutions.
                    </p>
                    <div className="mt-8 space-y-6">
                        {/* Step 1 */}
                        <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-navy mt-1"></div>
                        <div>
                            <span className="font-semibold text-v-navy">Assess Current Processes & Goals</span>
                            <p className="text-slate-600 mt-1">
                            We review your workflows, integrations, and objectives to understand where you are and what matters most.
                            </p>
                        </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-gold mt-1"></div>
                        <div>
                            <span className="font-semibold text-v-navy">Enhance & Extend Existing Systems</span>
                            <p className="text-slate-600 mt-1">
                            We improve current integrations and leverage prebuilt Vendata tools, adding efficiency without reinventing the wheel.
                            </p>
                        </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-green mt-1"></div>
                        <div>
                            <span className="font-semibold text-v-navy">Build Custom Solutions Where Needed</span>
                            <p className="text-slate-600 mt-1">
                            If custom software is required, we focus only on the tools that deliver value and profitability.
                            </p>
                        </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-gold mt-1"></div>
                        <div>
                            <span className="font-semibold text-v-navy">Monitor & Adapt</span>
                            <p className="text-slate-600 mt-1">
                            We continuously observe performance and adjust systems as processes or goals evolve.
                            </p>
                        </div>
                        </div>
                    </div>
                    <p className="text-slate-600 mt-10">
                        Just like our logo’s convergence, each step is simple alone — but combined, the solution becomes clear, elegant, and powerful.
                    </p>
                </div>
            </div>
        </section>
    )
}
