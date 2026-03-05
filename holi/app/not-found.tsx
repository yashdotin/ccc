"use client";
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center bg-gradient-soft">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="text-5xl md:text-7xl font-romantic font-bold text-pink drop-shadow-lg mb-4"
      >
        404 - Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        className="text-xl md:text-2xl text-purple font-light max-w-xl text-center backdrop-blur-md bg-white/30 rounded-xl px-6 py-3 shadow-glass"
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
    </main>
  );
}
