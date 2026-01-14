import { FormEvent, useEffect, useRef, useState } from 'react';
const sitekey= import.meta.env.VITE_TURNSTILE_SITE_KEY

interface TurnstileProps {
  setToken: (token: string) => void;
}

export function Turnstile({ setToken }: TurnstileProps) {
    
    useEffect(() => {

        if (import.meta.env.DEV) {
            setToken("dev-bypass-token");
            return;
        }
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
        // @ts-ignore
        window.turnstile.render("#turnstile-container", {
            sitekey,
            callback: (token: string) => setToken(token),
        });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [setToken]);

    if (typeof window === "undefined"||import.meta.env.DEV) return null;

    return <div id='turnstile-container'></div>;
}