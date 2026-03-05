"use client";
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full overflow-hidden">
      {/* Animated floating hearts background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingHearts />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="text-5xl md:text-7xl font-romantic font-bold text-pink drop-shadow-lg mb-4"
      >
        For Shraddha <span className="animate-pulse">❤️</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        className="text-xl md:text-2xl text-purple font-light max-w-xl text-center backdrop-blur-md bg-white/30 rounded-xl px-6 py-3 shadow-glass"
      >
        "Every moment with you is a beautiful memory in the making."
      </motion.p>
    </section>
  );
}

function FloatingHearts() {
  // Simple floating hearts using absolute divs and animation
  const hearts = Array.from({ length: 12 });
  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          initial={{ opacity: 0, scale: 0.7, y: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.7, 1.1, 0.7],
            y: [0, -60 - Math.random() * 80, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        >
          <span className="text-pink text-3xl select-none" style={{ filter: 'drop-shadow(0 0 8px #ffb6d5)' }}>
            ♥
          </span>
        </motion.div>
      ))}
    </>
  );
}
