"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const message =
  'You are the light of my life, Shraddha. Thank you for being my everything.';

export function SpecialMessageSection() {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + message[i]);
      i++;
      if (i >= message.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 flex flex-col items-center bg-gradient-to-r from-pink to-purple/30">
      <motion.h2
        className="text-3xl md:text-4xl font-romantic text-pink mb-6 drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        Special Message
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl text-purple font-light max-w-2xl text-center bg-white/40 rounded-xl px-8 py-6 shadow-glass backdrop-blur-md border border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      >
        <span className="font-mono animate-pulse">{displayed}</span>
        <span className="blinking-cursor">|</span>
      </motion.p>
      <style>{`.blinking-cursor { animation: blink 1s steps(2, start) infinite; }
      @keyframes blink { to { opacity: 0; } }`}</style>
    </section>
  );
}
