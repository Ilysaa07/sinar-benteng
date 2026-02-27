'use client';

import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { href: '#beranda', label: 'Beranda', active: true },
    { href: '#tentang', label: 'Tentang' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#proyek', label: 'Proyek' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* Top Bar - Collapses on scroll */}
      <div 
        className={`bg-[#1a1a2e] text-white overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-[10px] sm:text-xs font-medium uppercase tracking-wider">
           <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 851-7711-1115</span>
             </div>
             <div className="hidden sm:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>sinarbentengperkasajayasakti@gmail.com</span>
             </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                 <svg className="w-3.5 h-3.5 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span>Senin - Sabtu: 08:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61587189843379" target="_blank" rel="noopener noreferrer" className="text-[#e8bf56] hover:text-white transition-colors" aria-label="Facebook">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.88 0 1.79.16 1.79.16v1.97h-1a1.16 1.16 0 00-1.3 1.26v1.52h2.22l-.35 2.33h-1.87v5.67A8 8 0 0020 12.05z" />
                   </svg>
                </a>
                <a href="https://www.instagram.com/sinarbentengperkasa/" target="_blank" rel="noopener noreferrer" className="text-[#e8bf56] hover:text-white transition-colors" aria-label="Instagram">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                   </svg>
                </a>
              </div>
           </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white shadow-md py-2 border-slate-100' 
            : 'bg-transparent py-4 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 relative overflow-hidden bg-white">
                 {/* Actual Logo Image */}
                 <img 
                   src="/logo.webp" 
                   alt="Sinar Benteng Logo" 
                   width="40"
                   height="40"
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="flex flex-col">
                <span 
                  className={`font-bold text-xl uppercase tracking-tighter leading-none font-oswald transition-colors ${
                    isScrolled ? 'text-[#1a1a2e]' : 'text-white'
                  }`}
                >
                  Sinar<span className="text-[#e8bf56]">Benteng</span>
                </span>
                <span className="text-[0.6rem] text-slate-500 uppercase tracking-[0.2em] font-bold border-t border-[#e8bf56] mt-0.5 pt-0.5 w-full text-justify flex justify-between">
                  <span className={isScrolled ? '' : 'text-white/70'}>K</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>o</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>n</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>s</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>t</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>r</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>u</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>k</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>s</span>
                  <span className={isScrolled ? '' : 'text-white/70'}>i</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold uppercase text-xs tracking-widest transition-all hover:text-[#e8bf56] ${
                    link.active
                      ? 'text-[#e8bf56]'
                      : isScrolled ? 'text-slate-600' : 'text-white/90 shadow-black drop-shadow-sm'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link
                href="#kontak"
                className="btn-primary text-xs px-6 py-2.5"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#1a1a2e]' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-slate-100 ${
          isOpen ? 'max-h-[30rem] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-4 py-3 font-bold uppercase tracking-wide border-l-2 transition-all text-sm ${
                link.active 
                  ? 'border-[#e8bf56] bg-slate-50 text-[#1a1a2e]'
                  : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-[#1a1a2e]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-4 bg-slate-50 rounded-md mt-4 p-4">
             <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold">Kontak Cepat</div>
             <div className="space-y-2 text-sm text-slate-700">
               <div className="flex items-center gap-2">
                  <span className="text-[#e8bf56]">📞</span> +62 851-7711-1115
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[#e8bf56]">✉️</span> sinarbentengperkasajayasakti@gmail.com
               </div>
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <span className="text-[#e8bf56]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.88 0 1.79.16 1.79.16v1.97h-1a1.16 1.16 0 00-1.3 1.26v1.52h2.22l-.35 2.33h-1.87v5.67A8 8 0 0020 12.05z" />
                      </svg>
                    </span>
                    <a href="https://www.facebook.com/profile.php?id=61587189843379" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8bf56] transition-colors">
                      Facebook
                    </a>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[#e8bf56]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                      </svg>
                    </span>
                    <a href="https://www.instagram.com/sinarbentengperkasa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8bf56] transition-colors">
                      Instagram
                    </a>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
