
"use client";
import { useEffect } from 'react';

export function RomanticCursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '9999';
    glow.style.width = '80px';
    glow.style.height = '80px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'radial-gradient(circle, #ffb6d5 0%, #b39ddb 80%, transparent 100%)';
    glow.style.opacity = '0.5';
    glow.style.transition = 'transform 0.15s ease, opacity 0.3s';
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(glow);
    };
  }, []);
  return null;
}
