import { Link } from "@tanstack/react-router"

export const CallToAction = () => {
    return(
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 bg-v-navy rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-v-gold"></div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Your business is unique. 
                    <br/>
                    Your software should be too.
                </h2>
                <p className="text-v-gold font-bold text-xl mb-12 italic">"Stop working for your business. Start making IT work for you."</p>
                <Link to="/consultation" className="btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase">
                    Build Your Future
                </Link>
            </div>
        </section>
    )
}
