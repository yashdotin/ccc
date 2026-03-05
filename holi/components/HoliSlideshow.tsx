"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/holi1.jpeg',
  '/holi2.jpeg',
  '/holi3.jpeg',
  '/holi4.jpeg',
  '/holi5.jpeg',
];

const holiColors = [
  'rgba(255, 0, 102, 0.25)',
  'rgba(255, 255, 0, 0.18)',
  'rgba(0, 255, 128, 0.18)',
  'rgba(0, 204, 255, 0.18)',
  'rgba(255, 102, 0, 0.18)',
  'rgba(153, 51, 255, 0.18)',
];

export function HoliSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[400px] md:min-h-[520px] py-8">
      {/* Holi color splashes background */}
      <HoliColorBackground />
      <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white/40 backdrop-blur-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Holi memory ${index + 1}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            draggable={false}
          />
        </AnimatePresence>

        <div className="flex gap-2 mt-4 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-pink shadow-glow scale-110' : 'bg-white/60'}`}
            />
          ))}
        </div>

        {/* Happy Holi Animation */}
        <div className="z-10 mt-6 flex flex-col items-center">
          <AnimatedHoliText />
        </div>
      </div>
    </div>
  );
}

function AnimatedHoliText() {
  // Animated rainbow text with splash effect
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold font-romantic drop-shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <RainbowText text="Happy Holi!" />
    </motion.h2>
  );
}

function RainbowText({ text }: { text: string }) {
  // Animate each letter with a different color and bounce
  const colors = [
    '#ff1744', // red
    '#ff9100', // orange
    '#ffee00', // yellow
    '#00e676', // green
    '#2979ff', // blue
    '#d500f9', // purple
  ];
  return (
    <span style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ color: colors[i % colors.length], display: 'inline-block' }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function HoliColorBackground() {
  // Animated floating color splashes
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => {
        const color = holiColors[i % holiColors.length];
        const size = 80 + Math.random() * 120;
        const left = Math.random() * 90;
        const top = Math.random() * 80;
        const duration = 7 + Math.random() * 4;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: color,
            }}
            initial={{ opacity: 0.3, scale: 0.7 }}
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.7, 1.2, 0.7] }}
            transition={{ duration, repeat: Infinity, delay: Math.random() * 2, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}
