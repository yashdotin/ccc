"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MusicPlayer({ song = "/romantic-instrumental.mp3" }: { song?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true); // Start muted
  const [playing, setPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const toggleMute = () => {
    setMuted((m) => !m);
    if (audioRef.current) {
      audioRef.current.muted = muted; // Use new value
    }
  };

  // Set volume on mount
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, []);

  // Listen for first user interaction to unmute and play
  React.useEffect(() => {
    if (userInteracted && audioRef.current) {
      audioRef.current.muted = false;
      setMuted(false);
      audioRef.current.play();
    }
  }, [userInteracted]);

  React.useEffect(() => {
    const handleUserInteract = () => {
      setUserInteracted(true);
      window.removeEventListener('click', handleUserInteract);
      window.removeEventListener('touchstart', handleUserInteract);
    };
    window.addEventListener('click', handleUserInteract);
    window.addEventListener('touchstart', handleUserInteract);
    return () => {
      window.removeEventListener('click', handleUserInteract);
      window.removeEventListener('touchstart', handleUserInteract);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 shadow-glass">
      <audio
        ref={audioRef}
        src={song}
        autoPlay
        loop
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        onClick={toggleMute}
        className="focus:outline-none text-pink hover:text-purple transition-colors"
        aria-label={muted ? 'Unmute music' : 'Mute music'}
      >
        <AnimatePresence mode="wait">
          {muted ? (
            <motion.span
              key="muted"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="material-symbols-outlined"
            >
              volume_off
            </motion.span>
          ) : (
            <motion.span
              key="unmuted"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="material-symbols-outlined"
            >
              volume_up
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
