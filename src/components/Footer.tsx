import React from 'react';
import { weddingData } from '../config/weddingData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background text-center border-t border-primary/5 pb-24 md:pb-8">
      <p className="text-muted text-sm font-light">
        Made with love <br className="md:hidden" />
        <span className="font-serif text-primary text-lg ml-1 mr-1">
          {weddingData.groom.name} & {weddingData.bride.name}
        </span>
      </p>
      <p className="text-muted/50 text-xs mt-2">
        &copy; {new Date(weddingData.weddingDate).getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};
