import { faBridge, faChartLine, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhyVendata = () => {
    const pillars = [
        {
            title: "Code Ownership",
            description: "You own the license to the solutions we build. No black box logic or monthly ransom. If you choose to move on, you take your tools with you.",
            icon: <FontAwesomeIcon icon={faKey}  className="text-v-gold text-3xl"></FontAwesomeIcon>
        },
        {
            title: "Bridge the Gap",
            description: "Most SaaS is siloed. We build the connections between tools like Spark, NetSuite, and Flxpoint to automate the manual work your current stack ignores.",
            icon: <FontAwesomeIcon icon={faBridge} className="text-v-gold text-3xl"></FontAwesomeIcon>
        },
        {
            title: "Measurable ROI",
            description: "We do not solve problems you do not have. Our audits identify the exact friction points costing you time and margins, providing a clear roadmap to execution.",
            icon: <FontAwesomeIcon icon={faChartLine} className="text-v-gold text-3xl"></FontAwesomeIcon>
        }
    ];

    return (
        <section className="py-24 bg-v-navy relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-v-green/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-v-gold font-bold tracking-widest uppercase text-sm mb-4">The Vendata Advantage</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Stop Fighting IT.
                    </h3>
                    <div className="w-24 h-1.5 bg-v-green mx-auto mb-8"></div>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        Your technology should be a multiplier, not a bottleneck. We focus on the high-impact logic that allows your business to scale without adding unnecessary overhead.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-6 group-hover:border-v-gold/50 transition-colors">
                                {pillar.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{pillar.title}</h4>
                            <p className="text-slate-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};