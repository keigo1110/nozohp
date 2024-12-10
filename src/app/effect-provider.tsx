'use client';

import { useEffect, useRef } from 'react';

export function EffectProvider({ children }: { children: React.ReactNode }) {
  const effectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRandomDelays = () => {
      if (effectRef.current) {
        effectRef.current.style.setProperty('--random-delay-1', Math.random() * 5 + '');
        effectRef.current.style.setProperty('--random-delay-2', Math.random() * 5 + '');
        effectRef.current.style.setProperty('--random-delay-3', Math.random() * 5 + '');
      }
    };

    updateRandomDelays();
    const interval = setInterval(updateRandomDelays, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div ref={effectRef} className="schlieren-effect">
        <div className="schlieren-layer schlieren-1" />
        <div className="schlieren-layer schlieren-2" />
        <div className="schlieren-layer schlieren-3" />
      </div>
      {children}
    </>
  );
}