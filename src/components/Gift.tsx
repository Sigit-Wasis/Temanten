import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { weddingData } from '../config/weddingData';
import { Copy, CheckCircle2, CreditCard, QrCode } from 'lucide-react';

export const Gift: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setShowToast(true);
    
    setTimeout(() => {
      setCopiedId(null);
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Wedding Gift" subtitle="Tanda Kasih" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-12 max-w-2xl mx-auto"
        >
          Jika Bapak/Ibu/Saudara/i ingin memberikan tanda kasih untuk kami, Anda dapat memberikannya melalui:
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {weddingData.bankAccounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 text-primary group-hover:scale-110 transition-transform">
                <CreditCard size={100} />
              </div>
              
              <h4 className="font-serif text-2xl text-primary mb-4">{account.bank}</h4>
              <p className="text-3xl font-light tracking-wider text-text mb-2">
                {account.number}
              </p>
              <p className="text-sm text-muted uppercase tracking-widest mb-8">
                a.n. {account.name}
              </p>
              
              <button
                onClick={() => copyToClipboard(account.number, `bank-${index}`)}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-surface hover:bg-primary hover:text-white text-primary rounded-full transition-all duration-300 group-hover:shadow-md"
              >
                {copiedId === `bank-${index}` ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>COPY ACCOUNT NUMBER</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-primary/10 text-center relative overflow-hidden flex flex-col items-center"
          >
            <h4 className="font-serif text-2xl text-primary mb-2">Digital Gift</h4>
            <p className="text-sm text-muted mb-6">Scan QR Code di bawah ini</p>
            
            <div className="w-48 h-48 bg-surface rounded-xl flex items-center justify-center border border-dashed border-primary/30 text-primary/30">
              <div className="flex flex-col items-center">
                <QrCode size={48} className="mb-2" />
                <span className="text-xs">QR Code Placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="bg-text text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <CheckCircle2 size={18} className="text-gold" />
          <span className="text-sm">Nomor rekening berhasil disalin</span>
        </div>
      </div>
    </section>
  );
};
