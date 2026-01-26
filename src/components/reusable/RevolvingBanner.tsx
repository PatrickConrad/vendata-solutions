import React, { CSSProperties } from "react";

interface StripeBannerProps {
  title?: string;
  items: string[];
  speed?: number;
}

export const StripeBanner = ({ title, items, speed}: StripeBannerProps) => {
  const setSpeed = speed??items.length*6
  // Triple the items to ensure there is never a visible seam on ultra-wide monitors
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-slate-300 dark:bg-[#020617] border-y border-(--v-green) py-2 ticker-container">
      {/* 1. Title Bar */}
      {
        title && (
        <div className="max-w-7xl mx-auto px-9 mb-1">
          <div className="flex items-center gap-4">
            <span className="text-v-navy font-mono text-md uppercase tracking-[0.5em] font-bold">
              {title}
            </span>
          </div>
        </div>
      )}
      

      {/* 2. The Rotation Strip */}
      <div className="overflow-hidden relative flex">
        <div className="ticker-track" style={{'--speed':`${setSpeed}s`} as CSSProperties}>
          {tripleItems.map((item, idx) => (
            <div key={idx} className="flex items-center px-13 group">
              <span className="whitespace-nowrap text-lg md:text-lg font-black text-v-navy uppercase tracking-tighter transition-all duration-500 group-hover:text-v-green group-hover:scale-105 cursor-default">
                {item}
              </span>
              {/* Separator icon (Bentley Diamond style) */}
              <div className="ml-24 w-1.5 h-1.5 rotate-45  bg-v-navy transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};