import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

import { Heart } from 'lucide-react';

export const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl text-gold mb-4"
          >
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted font-light"
          >
            With the blessings of Allah SWT
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 relative">
          
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="w-48 h-64 md:w-56 md:h-72 mb-8 p-2 border border-primary/20 arch-top relative">
              <div className="w-full h-full overflow-hidden arch-top">
                <img 
                  src={weddingData.groom.image} 
                  alt={weddingData.groom.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl mb-2 text-primary">{weddingData.groom.fullName}</h3>
            <p className="text-sm text-muted mb-4">Putra dari<br/>Bapak {weddingData.groom.father} & Ibu {weddingData.groom.mother}</p>
            <a href={`https://instagram.com/${weddingData.groom.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gold hover:text-primary transition-colors">
              <Heart size={16} className="mr-2" />
              @{weddingData.groom.instagram}
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-serif text-6xl text-gold/40 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            &
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="w-48 h-64 md:w-56 md:h-72 mb-8 p-2 border border-primary/20 arch-top relative">
              <div className="w-full h-full overflow-hidden arch-top">
                <img 
                  src={weddingData.bride.image} 
                  alt={weddingData.bride.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl mb-2 text-primary">{weddingData.bride.fullName}</h3>
            <p className="text-sm text-muted mb-4">Putri dari<br/>Bapak {weddingData.bride.father} & Ibu {weddingData.bride.mother}</p>
            <a href={`https://instagram.com/${weddingData.bride.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gold hover:text-primary transition-colors">
              <Heart size={16} className="mr-2" />
              @{weddingData.bride.instagram}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
