import { useState } from "react";
import { Tool, tools } from "../data/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ToolProps = {
    selectedTool: Tool;

};

export const ToolPanel = ({selectedTool}:ToolProps) => {

    {/* Right detail panel - "The Monitor" */}
    return (
        <div className="flex w-full lg:w-3/5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden flex-col justify-center min-h-[500px]">
            {/* Subtle tech background element */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black uppercase italic pointer-events-none text-v-green">
            DATA
            </div>

            <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-v-green/10 text-v-green text-xs font-bold uppercase tracking-widest mb-6">
                Ready for Deployment
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-v-navy dark:text-white mb-6 leading-tight uppercase">
                {selectedTool.name}
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
                {selectedTool.description}
            </p>

            <div>
                <h4 className="text-v-gold font-bold uppercase tracking-widest text-xs mb-4">Tech Stack Integration</h4>
                <div className="flex flex-wrap gap-2">
                {selectedTool.tech.map((tech) => (
                    <span
                    key={tech}
                    className="bg-v-navy dark:bg-v-green/10 text-v-gold dark:text-v-green px-4 py-1.5 rounded-lg text-xs font-bold border border-v-navy dark:border-v-green/20 shadow-sm"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </div>
    )
}


export const DesktopToolMap = ()  =>{
    const [selectedTool, setSelectedTool] = useState<Tool>(tools[0]);

    return (
        <div className="hidden min-[1024px]:flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left tool list - "The Selector" */}
            <div className="flex flex-col w-full lg:w-2/5 space-y-3">
              {tools.map((tool) => (
                <div 
                    key={tool.name}
                    className="flex flex-col md:flex-row gap-2"
                >
                    <button
                    onClick={() => setSelectedTool(tool)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
                        selectedTool.name === tool.name
                        ? "bg-v-navy border-v-green shadow-[0_0_20px_rgba(74,119,60,0.2)]"
                        : "bg-slate-50 dark:bg-slate-900/50 border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                    }`}
                    >
                    <h3 className={`font-bold text-lg leading-tight transition-colors ${
                        selectedTool.name === tool.name ? "text-white" : "text-v-navy dark:text-slate-400"
                    }`}>
                        {tool.name}
                    </h3>
                    </button>
                </div>
              ))}
            </div>
            <ToolPanel selectedTool={selectedTool}/>
           
          </div>
    )
}

export const MobileToolMap = () => {
  const [selectedTool, setSelectedTool] = useState<Tool|null>(null);

    return (

        <div className="flex min-[1024px]:hidden flex-col w-full lg:w-2/5 space-y-3">
              {tools.map((tool) => (
                <div 
                    key={tool.name}
                    className="flex flex-col min-[1024px]:flex-row gap-2"
                >
                    <button
                    onClick={() => setSelectedTool((prev) => prev&&prev.name === tool.name ? null : tool)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
                        selectedTool&&selectedTool.name === tool.name
                        ? "bg-v-navy border-v-green shadow-[0_0_20px_rgba(74,119,60,0.2)]"
                        : "bg-slate-50 dark:bg-slate-900/50 border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                    }`}
                    >
                    <h3 className={`font-bold text-lg leading-tight transition-colors ${
                        selectedTool&&selectedTool.name === tool.name ? "text-white" : "text-v-navy dark:text-slate-400"
                    }`}>
                        {tool.name}
                    </h3>
                    </button>
                    {
                        selectedTool&&selectedTool.name === tool.name &&
                        <div className={` w-full z-[60] bg-slate-900 border-t-2 border-v-green p-6 transition-transform duration-300 transform ${
                        selectedTool.name ? "translate-y-0" : "translate-y-full"
                        }`}>
                            <button onClick={() => setSelectedTool(null)} className="absolute top-2 right-4 text-v-green font-mono">
                                <FontAwesomeIcon icon={faXmark} size="sm"/>
                            </button>
                            {/* Tech stack loops here */}
                            <ToolPanel selectedTool={selectedTool}/>
                        </div>
                    }
                    
                </div>
              ))}
            </div>
      
    )
}

