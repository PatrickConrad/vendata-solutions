import { services } from "../../data/services"
import { ServiceModal } from "../services/ServiceModal"

export const Services = (props: Record<string, unknown>) => {
  
    return(
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        Object.values(services).map((service)=>(
                            <ServiceModal key={service.title} modal={service.modal} title={service.title} tagLine={service.shortDesc} icon={service.icon} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
