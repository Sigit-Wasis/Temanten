import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { getGuestName } from '../utils/guest';
import { MailOpen } from 'lucide-react';

interface HeroProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInvitation, isOpen }) => {
  const guestName = getGuestName();

  return (
    <section 
      id="home" 
      className={`relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center transition-all duration-1000 ${isOpen ? 'opacity-100' : ''}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={weddingData.gallery[0]} 
          alt="Wedding Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light">The Wedding Of</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight">
            {weddingData.groom.name} <br className="md:hidden" /><span className="text-gold italic">&</span> <br className="md:hidden" />{weddingData.bride.name}
          </h1>
          <p className="font-sans text-lg md:text-xl font-light tracking-wide mb-12">
            {weddingData.akad.date}
          </p>
        </motion.div>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-16 left-0 right-0 flex flex-col items-center justify-center w-full"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl w-[90%] max-w-md text-center">
              <p className="text-sm font-light mb-1">Kepada Yth.</p>
              <p className="text-sm font-light mb-2">Bapak/Ibu/Saudara/i</p>
              <p className="font-serif text-2xl text-gold mb-6">{guestName}</p>
              
              <button
                onClick={onOpenInvitation}
                className="group flex items-center justify-center mx-auto space-x-2 bg-white text-text px-6 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300 w-full"
              >
                <MailOpen size={18} className="group-hover:animate-bounce" />
                <span className="font-medium tracking-wide text-sm">OPEN INVITATION</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Subtle Arch Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <div className="w-full h-full border-[20px] border-background/20 arch-top mx-auto max-w-5xl mt-10"></div>
      </div>
    </section>
  );
};
