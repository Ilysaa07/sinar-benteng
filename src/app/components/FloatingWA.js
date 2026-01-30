'use client';

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/6285177111115"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
      aria-label="Hubungi via WhatsApp"
    >
       <img 
         src="/whatsapp.png" 
         alt="WhatsApp Contact" 
         className="w-14 h-14 sm:w-16 sm:h-16"
       />
    </a>
  );
}
