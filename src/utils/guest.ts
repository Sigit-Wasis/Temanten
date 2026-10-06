export const getGuestName = (): string => {
  if (typeof window === 'undefined') return 'Bapak/Ibu/Saudara/i';
  
  const searchParams = new URLSearchParams(window.location.search);
  const guestName = searchParams.get('to');
  
  if (guestName) {
    // Replace hyphens and underscores with spaces, decode URI component
    return decodeURIComponent(guestName).replace(/[-_]/g, ' ');
  }
  
  return 'Bapak/Ibu/Saudara/i';
};
