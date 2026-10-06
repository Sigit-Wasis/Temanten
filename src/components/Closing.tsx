import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

export const Closing: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-surface bg-pattern relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-muted font-light leading-relaxed mb-12">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          
          <h2 className="font-serif text-4xl text-primary mb-2">
            See you on our special day.
          </h2>
          
          <p className="font-serif text-3xl text-gold italic mb-16">
            {weddingData.groom.name} & {weddingData.bride.name}
          </p>
          
          <p className="text-sm tracking-widest text-primary font-medium uppercase">
            Jazakumullahu Khairan
          </p>
        </motion.div>
      </div>
    </section>
  );
};
