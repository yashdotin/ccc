"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer({ song = "/mere-naam-tu.mp3" }: { song?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.15;
      await audioRef.current.play();
      setMuted(false);
      setStarted(true);
    } catch (err) {
      console.log("Audio play blocked:", err);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  return (
    <>
      {!started && (
        <div
          onClick={startMusic}
          onTouchStart={startMusic}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 text-white text-2xl font-romantic animate-glow select-none cursor-pointer"
          style={{ backdropFilter: "blur(4px)" }}
        >
          Tap anywhere to start music 🎵
        </div>
      )}

      <audio ref={audioRef} src={song} loop playsInline />

      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 shadow-glass">
        <button
          onClick={toggleMute}
          className="focus:outline-none text-pink hover:text-purple transition-colors"
          aria-label={muted ? "Unmute music" : "Mute music"}
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
    </>
  );
}