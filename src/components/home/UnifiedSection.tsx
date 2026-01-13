import { Convergence } from "../reusable/Convergence"

export const UnifiedSection = () => {

    return (
        <section id="convergence-section" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            <Convergence />
            
            <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-v-navy mb-6">
                    Unified Business Intelligence
                </h2>
                <div className="w-20 h-1.5 bg-v-gold mb-8"></div>
                <p className="text-xl text-slate-600 leading-relaxed">
                    We transform complex and fragmented business data into a single, cohesive system that drives smarter decisions, improves operational efficiency, and unlocks new opportunities for growth.
                </p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-navy"></div>
                        <span className="font-semibold text-v-navy">
                            Seamless Data Integration
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-gold"></div>
                        <span className="font-semibold text-v-navy">
                            Real-time Insights & Analytics
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-green"></div>
                        <span className="font-semibold text-v-navy">
                            Automated Processes & Workflows
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
