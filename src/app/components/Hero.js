'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [rotation, setRotation] = useState(0);

  // Rotate the badge
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center lg:items-end overflow-hidden bg-[#f8f9fa]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* 
          GANTI GAMBAR INI dengan gambar dari Pexels
          Letakkan gambar di folder /public dan ubah src menjadi path gambar Anda
          Contoh: src="/hero-construction.jpg"
        */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            // Fallback gradient jika gambar belum ada
            backgroundColor: '#e8eaed',
          }}
        >
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            {/* Left Content */}
            <div className="pt-20 sm:pt-24 lg:pt-32 pb-8 lg:pb-16">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-[1.1] mb-6">
                Membangun Konstruksi
                <span className="block">Modern</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-600 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
                Menggabungkan teknologi mutakhir dengan keahlian terbaik untuk 
                memberikan solusi konstruksi yang luar biasa.
              </p>

              {/* CTA Button */}
              <Link
                href="#kontak"
                className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#f59e0b]/30 hover:-translate-y-1 group"
              >
                Diskusi Proyek
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Content */}
            <div className="hidden lg:flex items-end justify-end pb-16">
              {/* Location Badge */}
              <div className="relative">
                <div className="flex items-start gap-2 text-[#1a1a2e]">
                  <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Jl. Konstruksi Utama</p>
                    <p className="text-sm text-slate-600">Jakarta, Indonesia 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5]" />
    </section>
  );
}
