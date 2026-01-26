import { useNavigate } from "@tanstack/react-router";
import { PropsWithChildren } from "react";
import { MatrixBackground, PhaseType } from "./reusable/matrixBackground";
type ToolsHeroProps = PropsWithChildren & {
  setPhase: (b:PhaseType)=>void
  phase: PhaseType
}

export const ToolsHero = ({setPhase, phase, children}:ToolsHeroProps) => {
  const navigate = useNavigate();

  const handleNav = () => {
    setPhase('flicker');
    // Flicker the grid for 600ms
    setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        navigate({ to: '/showcase' });
      }, 400);
    }, 600);
  };

  return (
    <MatrixBackground phase={phase} height='75vh'>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="text-v-green font-mono tracking-[0.4em] uppercase text-xs mb-4 block">
          {phase === 'stable' ? '> System_Stable' : '> GRID_TRANSFER_ACTIVE'}
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 italic">
          Free Your <span className="text-v-green drop-shadow-[0_0_2px_rgba(74,119,60,0.8)] dark:drop-shadow-[0_0_20px_rgba(74,119,60,0.8)]">Business</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
          Pre-built integrations and automation frameworks to connect your siloed APIs into one high-performance engine.
        </p>

        {/* CLEAN BUTTON: No weird overlays, just Bentley-style glow */}
        <button 
          onClick={handleNav}
          className="cursor-pointer relative px-12 py-5 bg-transparent border-2 border-v-green text-v-green font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:bg-v-green hover:text-[#020617] hover:shadow-[0_0_50px_rgba(74,119,60,0.6)] active:scale-95"
        >
          View Showcase
        </button>
      </div>
    </MatrixBackground>
  );
};

 