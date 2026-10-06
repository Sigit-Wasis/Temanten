import React, { useState, useEffect } from 'react';
import { Home, Heart, Calendar, Image as ImageIcon, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BottomNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero a bit
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section
      const sections = ['home', 'couple', 'events', 'gallery', 'rsvp'];
      let current = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - window.innerHeight / 2)) {
          current = section;
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'couple', icon: <Heart size={20} />, label: 'Couple' },
    { id: 'events', icon: <Calendar size={20} />, label: 'Events' },
    { id: 'gallery', icon: <ImageIcon size={20} />, label: 'Gallery' },
    { id: 'rsvp', icon: <Send size={20} />, label: 'RSVP' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-primary/10 px-6 py-3 flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex flex-col items-center justify-center w-12 h-12 relative transition-colors ${
                    isActive ? 'text-primary' : 'text-muted hover:text-primary/70'
                  }`}
                  aria-label={item.label}
                >
                  <div className="z-10">{item.icon}</div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="navBubble"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
