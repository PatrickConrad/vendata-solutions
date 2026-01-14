import { FormEvent, useEffect, useRef, useState } from 'react';
const sitekey= import.meta.env.VITE_TURNSTILE_SITE_KEY

interface TurnstileProps {
  setToken: (token: string) => void;
}



export function Turnstile({ setToken }: TurnstileProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
   useEffect(() => {
    // 1. Dev Bypass
    if (import.meta.env.DEV) {
      setToken("dev-bypass-token");
      if (containerRef.current) {
        containerRef.current.innerHTML = '<div style="color: #10b981; font-size: 0.8rem; padding: 10px; border: 1px dashed #10b981; border-radius: 8px;">Cloudflare Turnstile (Dev Bypass Active)</div>';
      }
      return;
    }

    // 2. Load Script only if it doesn't exist
    if (!document.querySelector('script[src*="turnstile/v0/api.js"]')) {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    const renderWidget = () => {
        if (window.turnstile && containerRef.current && !widgetIdRef.current) {
            widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey,
            callback: (token: string) => setToken(token),
                theme: 'auto',
                // THIS FIXES THE WIDTH:
                size: 'flexible'
            });
        }
    };

    // 3. Wait for library to be ready
    if (window.turnstile) {
        renderWidget();
    } 
    else {
        const interval = setInterval(() => {
            if (window.turnstile) {
            renderWidget();
            clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }

    // 4. Cleanup: Only remove the widget instance, don't delete the whole script
    return () => {
        if (widgetIdRef.current) {
            window.turnstile?.remove(widgetIdRef.current);
            widgetIdRef.current = null;
        }
    };
}, [setToken]);

    return (
        <div 
            ref={containerRef} 
            id='turnstile-container' 
            className="w-full flex justify-center min-h-[65px]"
        ></div>
    );
}