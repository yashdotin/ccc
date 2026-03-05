"use client";
import { motion } from 'framer-motion';

const memories = [
  {
    title: 'First Meeting',
    text: 'The day our eyes met, my world changed forever.',
  },
  {
    title: 'Laughs Together',
    text: 'Every laugh we share is a melody in my heart.',
  },
  {
    title: 'Adventures',
    text: 'Every adventure with you is a story worth telling.',
  },
  {
    title: 'Dreams',
    text: 'Dreaming of a future with you is my favorite pastime.',
  },
];

export function MemorySection() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white/40 backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-romantic text-purple mb-10 drop-shadow">Memories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        {memories.map((memory, idx) => (
          <motion.div
            key={memory.title}
            className="rounded-2xl bg-white/60 shadow-glass p-8 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-glow group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeInOut' }}
            whileHover={{ scale: 1.07 }}
          >
            <h3 className="text-2xl font-bold text-pink mb-2 font-romantic group-hover:drop-shadow-lg transition-all">{memory.title}</h3>
            <motion.p
              className="text-lg text-purple font-light text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {memory.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
