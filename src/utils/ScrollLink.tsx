import { Link, useRouter } from '@tanstack/react-router';
import { MouseEvent, ReactNode, useEffect } from 'react';

interface ScrollLinkProps {
  to: '/' | string;       // target route path
  hash?: string;          // optional section id
  children: ReactNode;
  className?: string;
}

export function ScrollLink({ to, hash, children, className }: ScrollLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (router.state.location.pathname === to) {
      // already on page → scroll to element
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // navigate first, then scroll
      router.navigate({
        to,
        hash
        }).then(() => {
            if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50); // small delay to ensure element is rendered
            }
        });
    }
  };

  return (
    <button onClick={handleClick} className={`${className} cursor-pointer`}>
      {children}
    </button>
  );
}
