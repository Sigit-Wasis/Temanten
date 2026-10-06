import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => setShowTooltip(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-primary/10 text-xs text-primary mb-2 whitespace-nowrap"
          >
            {isPlaying ? 'Music playing' : 'Click to play music'}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={onToggle}
        className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-primary/20 flex items-center justify-center text-primary pointer-events-auto hover:bg-white transition-colors relative overflow-hidden"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex items-end justify-center space-x-0.5 h-4">
            <motion.div animate={{ height: ["20%", "80%", "40%", "100%", "20%"] }} transition={{ duration: 1, repeat: Infinity }} className="w-0.5 bg-primary rounded-full"></motion.div>
            <motion.div animate={{ height: ["60%", "20%", "100%", "40%", "60%"] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-0.5 bg-primary rounded-full"></motion.div>
            <motion.div animate={{ height: ["100%", "40%", "80%", "20%", "100%"] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-0.5 bg-primary rounded-full"></motion.div>
            <motion.div animate={{ height: ["40%", "100%", "20%", "80%", "40%"] }} transition={{ duration: 1.1, repeat: Infinity }} className="w-0.5 bg-primary rounded-full"></motion.div>
          </div>
        ) : (
          <Music size={20} />
        )}
        
        {isPlaying && (
          <motion.div 
            className="absolute inset-0 rounded-full border border-primary"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </button>
    </div>
  );
};
