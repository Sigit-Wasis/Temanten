import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { weddingData } from '../config/weddingData';
import { MapPin } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Wedding Location" subtitle="Peta Lokasi" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white p-2 rounded-3xl shadow-sm border border-primary/10">
            <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden relative bg-surface flex flex-col items-center justify-center">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40 bg-surface">
                <MapPin size={48} className="mb-4" />
                <p className="font-serif text-xl mb-1">Maps Placeholder</p>
                <p className="text-sm font-sans">Google Maps Embed iframe here</p>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <h4 className="font-serif text-2xl text-primary mb-2">{weddingData.reception.venue}</h4>
              <p className="text-muted text-sm mb-6 max-w-md mx-auto">{weddingData.reception.address}</p>
              
              <a 
                href={weddingData.reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-text transition-colors text-sm tracking-widest uppercase"
              >
                <MapPin size={16} />
                <span>Buka di Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
