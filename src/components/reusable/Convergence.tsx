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
        <div className="lg:w-1/2 flex justify-center">
            <div ref={observerRef} className={`logo-container ${converged?'converged':''}`}>
                <div className="circle c-navy dark:bg-slate-300"></div>
                <div className="circle c-gold-tr"></div>
                <div className="circle c-gold-bl"></div>
                <div className="circle c-green"></div>
            </div>
        </div>
    )
}
