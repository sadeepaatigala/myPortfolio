'use client';

import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = Math.random() > 0.5 ? '#ff6b6b' : '#4ecdc4';
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.top = `${window.innerHeight}px`;
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      document.body.appendChild(particle);

      const duration = Math.random() * 3000 + 2000;
      particle.animate(
        [
          { transform: 'translateY(0px)', opacity: particle.style.opacity },
          { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 },
        ],
        { duration, easing: 'linear' }
      ).addEventListener('finish', () => particle.remove());
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
}