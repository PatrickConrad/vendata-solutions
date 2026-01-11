import { useEffect, useRef, useState } from "react"

export const Convergence = () => {
    const observerRef = useRef<HTMLDivElement|null>(null);
    const [converged, setConverged] = useState(false);

    useEffect(()=>{
        if(!observerRef.current) return;
        
        const observer = new IntersectionObserver(([entry]) => {
            setConverged(entry.isIntersecting)
        }, { threshold: 1 });

        observer.observe(observerRef.current);
    
    }, [])


    useEffect(() => {
        const handleScroll = () => {
            if (!observerRef.current) return;
            const scrolled = window.pageYOffset;
            const sectionTop = observerRef.current.offsetTop;
            const sectionHeight = observerRef.current.offsetHeight;

            if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                const move = (scrolled - sectionTop) * 0.05;
                observerRef.current.querySelectorAll('.circle').forEach((el, i) => {
                    (el as HTMLElement).style.marginTop = `${move * (i + 1)}px`;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section id="convergence-section" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 flex justify-center">
                <div ref={observerRef} className={`logo-container ${converged?'converged':''}`}>
                    <div className="circle c-navy dark:bg-slate-300"></div>
                    <div className="circle c-gold-tr"></div>
                    <div className="circle c-gold-bl"></div>
                    <div className="circle c-green"></div>
                </div>
            </div>
            
            <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-v-navy mb-6">Unified Business Intelligence</h2>
                <div className="w-20 h-1.5 bg-v-gold mb-8"></div>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Just as our logo represents the convergence of data, strategy, and execution, we bring your fragmented systems together into one high-performance engine.
                </p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-navy"></div>
                        <span className="font-semibold text-v-navy">Legacy Data Integration</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-gold"></div>
                        <span className="font-semibold text-v-navy">Real-time Analytics</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-v-green"></div>
                        <span className="font-semibold text-v-navy">Automated Workflows</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
