import { Link } from "@tanstack/react-router"

export const Hero = () => {

    return (
        <header className="hero-gradient pt-20 pb-20 md:pt-23 md:pb-32 relative overflow-hidden flex items-center justify-center text-center">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-v-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                    Stop working for your business. 
                    <br/>
                    <span className="text-v-gold underline decoration-v-green decoration-4 underline-offset-8">Start making IT work for you.</span>
                </h1>
                <p className="text-md md:text-xl text-slate-300 mb-10 leading-relaxed mx-auto max-w-2xl">
                    We build custom software that automates the mundane, clarifies your data, and scales your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/consultation" className="btn-gold px-10 py-4 rounded-xl font-bold text-lg">
                        Get A Free Consultation
                    </Link>
                    <a href="#services" className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                        View Solutions
                    </a>
                </div>
            </div>
        </header>
        )
}
