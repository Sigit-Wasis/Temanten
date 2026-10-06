import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import { getGuestName } from '../utils/guest';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: getGuestName() === 'Bapak/Ibu/Saudara/i' ? '' : getGuestName(),
    attendance: 'Akan Hadir',
    guests: '1',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData(prev => ({ ...prev, message: '' }));
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="rsvp" className="py-24 px-6 bg-background relative">
      <div className="max-w-2xl mx-auto">
        <SectionTitle title="RSVP" subtitle="Konfirmasi Kehadiran" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-primary/10 relative"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 size={64} className="mx-auto text-primary mb-6" />
              <h3 className="font-serif text-3xl text-text mb-4">Terima Kasih</h3>
              <p className="text-muted">Konfirmasi kehadiran Anda telah kami terima.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label htmlFor="attendance" className="block text-sm font-medium text-text mb-2">Kehadiran</label>
                <select
                  id="attendance"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-text appearance-none"
                >
                  <option value="Akan Hadir">Hadir</option>
                  <option value="Tidak Dapat Hadir">Tidak Hadir</option>
                </select>
              </div>
              
              {formData.attendance === 'Akan Hadir' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="guests" className="block text-sm font-medium text-text mb-2">Jumlah Tamu</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-text appearance-none"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                  </select>
                </motion.div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Ucapan & Doa</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Berikan ucapan atau doa untuk kami"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-xl font-medium tracking-wide hover:bg-text transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  "KIRIM RSVP"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
