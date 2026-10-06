import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { SectionTitle } from './SectionTitle';

export const Story: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-surface relative">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Our Story" subtitle="Perjalanan Cinta" />
        
        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {weddingData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Content Container */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-colors">
                      <span className="inline-block text-gold font-serif text-xl mb-2">{item.year}</span>
                      <h4 className="font-serif text-xl text-primary mb-2">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-[13px] md:left-1/2 top-6 md:top-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full md:-translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'order-last' : ''}`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
