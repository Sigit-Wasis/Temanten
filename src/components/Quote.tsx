import React from 'react';
import { motion } from 'framer-motion';


export const Quote: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-surface bg-pattern relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <svg className="w-10 h-10 mx-auto text-gold/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-text mb-8 italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          
          <p className="font-sans text-sm tracking-widest text-primary font-medium uppercase">
            QS. Ar-Rum: 21
          </p>
        </motion.div>
      </div>
      
      {/* Decorative floral elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
          <path d="M0,0 C50,0 100,50 100,100 L0,100 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
          <path d="M100,100 C50,100 0,50 0,0 L100,0 Z" />
        </svg>
      </div>
    </section>
  );
};
