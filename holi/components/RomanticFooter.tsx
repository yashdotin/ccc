"use client";
import { motion } from 'framer-motion';

export function RomanticFooter() {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center bg-gradient-to-t from-pink/30 to-transparent mt-12">
      <motion.p
        className="text-lg md:text-xl font-romantic text-pink drop-shadow animate-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        Made with <span className="animate-pulse">❤️</span> for Shraddha
      </motion.p>
      <style>{`.animate-glow { text-shadow: 0 0 8px #ffb6d5, 0 0 16px #b39ddb; }`}</style>
    </footer>
  );
}
