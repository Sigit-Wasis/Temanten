import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { SectionTitle } from './SectionTitle';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % weddingData.gallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? weddingData.gallery.length - 1 : selectedImageIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Our Gallery" subtitle="Momen Bahagia" />
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {weddingData.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl cursor-pointer group relative ${
                index % 3 === 0 ? 'row-span-2' : ''
              }`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover aspect-[3/4] md:aspect-auto hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={32} />
            </button>
            
            <div className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center">
              <button 
                className="absolute left-0 md:-left-12 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-all"
                onClick={handlePrev}
              >
                <ChevronLeft size={36} />
              </button>
              
              <motion.img 
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={weddingData.gallery[selectedImageIndex]} 
                alt={`Gallery image ${selectedImageIndex + 1}`} 
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
              
              <button 
                className="absolute right-0 md:-right-12 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-all"
                onClick={handleNext}
              >
                <ChevronRight size={36} />
              </button>
            </div>
            
            <div className="absolute bottom-6 text-white/50 text-sm tracking-widest">
              {selectedImageIndex + 1} / {weddingData.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
