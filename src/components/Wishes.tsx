import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { weddingData } from '../config/weddingData';

export const Wishes: React.FC = () => {
  const [wishes] = useState(weddingData.wishes);
  
  return (
    <section className="py-24 px-6 bg-surface relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Wedding Wishes" subtitle="Doa & Harapan" />
        
        <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-sm border border-primary/10">
          <div className="h-[400px] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 relative"
              >
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-serif text-lg text-primary">{wish.name}</h5>
                  <span className="text-xs text-muted">{wish.time}</span>
                </div>
                <p className="text-text/80 text-sm leading-relaxed">{wish.text}</p>
                
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 opacity-5 text-primary pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          opacity: 0.2;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};
