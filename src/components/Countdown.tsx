import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { weddingData } from '../config/weddingData';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(weddingData.weddingDate);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-primary/20 rounded-xl p-4 w-20 h-24 md:w-24 md:h-28 shadow-sm">
      <span className="font-serif text-3xl md:text-4xl text-primary mb-1">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs tracking-widest text-muted uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-surface relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl text-primary mb-10">Save The Date</h2>
          
          {isExpired ? (
            <div className="font-serif text-4xl text-gold italic py-10">
              Today is the Day ❤️
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <TimeBox value={days} label="Days" />
              <TimeBox value={hours} label="Hours" />
              <TimeBox value={minutes} label="Minutes" />
              <TimeBox value={seconds} label="Seconds" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
