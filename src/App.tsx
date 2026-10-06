import { useState, useEffect, useRef } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { Couple } from './components/Couple';
import { Countdown } from './components/Countdown';
import { Events } from './components/Events';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { Gift } from './components/Gift';
import { RSVP } from './components/RSVP';
import { Wishes } from './components/Wishes';
import { Location } from './components/Location';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { BottomNavigation } from './components/BottomNavigation';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We'll use a placeholder audio URL since we don't have local mp3
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    
    // Scroll a little bit to show content is below
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.1,
        behavior: 'smooth'
      });
    }, 500);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative font-sans text-text antialiased">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Hero onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />
          
          <div className={`transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <Quote />
            <Couple />
            <Countdown />
            <Events />
            <Story />
            <Gallery />
            <Gift />
            <RSVP />
            <Wishes />
            <Location />
            <Closing />
            <Footer />
            <BottomNavigation />
          </div>
          
          {isOpen && <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />}
        </>
      )}
    </div>
  );
}

export default App;
