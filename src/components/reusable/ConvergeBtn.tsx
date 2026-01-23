import { useState } from "react"

export const ConvergeBtn = () => {
    const [converged, setConverged] = useState(false);

    return (
        <section id="convergence-section" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 flex justify-center">
                    <div onClick={()=>{
                        setConverged(true);
                    }} className={`logo-container ${converged?'converged':''}`}>
                        <div className="circle c-navy"></div>
                        <div className="circle c-gold-tr"></div>
                        <div className="circle c-gold-bl"></div>
                        <div className="circle c-green"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
