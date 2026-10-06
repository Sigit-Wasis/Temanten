import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { SectionTitle } from './SectionTitle';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Events: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const EventCard = ({ title, event }: { title: string; event: any }) => (
    <motion.div 
      variants={itemVariants}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-primary/10 relative overflow-hidden group hover:shadow-md transition-shadow"
    >
      {/* Decorative corner */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
      
      <h3 className="font-serif text-2xl text-primary text-center mb-8 relative z-10">{title}</h3>
      
      <div className="space-y-6 relative z-10">
        <div className="flex items-start space-x-4">
          <div className="mt-1 bg-surface p-2 rounded-full text-gold">
            <Calendar size={18} />
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Tanggal</p>
            <p className="font-medium text-text">{event.date}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 bg-surface p-2 rounded-full text-gold">
            <Clock size={18} />
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Waktu</p>
            <p className="font-medium text-text">{event.time}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 bg-surface p-2 rounded-full text-gold">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Lokasi</p>
            <p className="font-medium text-text mb-1">{event.venue}</p>
            <p className="text-sm text-muted">{event.address}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-primary/10 text-center relative z-10">
        <a 
          href={event.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white text-sm tracking-widest px-8 py-3 rounded-full hover:bg-text transition-colors"
        >
          OPEN MAP
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="events" className="py-24 px-6 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Wedding Events" subtitle="Rangkaian Acara" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12"
        >
          <EventCard title="Akad Nikah" event={weddingData.akad} />
          <EventCard title="Resepsi" event={weddingData.reception} />
        </motion.div>
      </div>
    </section>
  );
};
