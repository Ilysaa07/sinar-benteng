'use client';

import { useState, useEffect, memo, useMemo } from 'react';
import Link from 'next/link';

const Hero = memo(function Hero() {
  // Optimization: Removed JS-based rotation to prevent scroll jank
  // Use CSS animation if needed instead

  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center lg:items-end overflow-hidden bg-slate-50"
    >
      {/* Background Image Container with Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Background Konstruksi"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Cleaner Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10" />
        {/* Subtle Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint opacity-10 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Construction Tag */}
              <div className="inline-flex items-center gap-2 bg-[#eab308] text-black font-bold px-3 py-1 text-xs uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-black rounded-sm" />
                PT. SINAR BENTENG PERKASA JAYA SAKTI
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-tighter">
                Membangun <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Konstruksi</span> <br/>
                <span className="text-[#e8bf56] pl-2 border-l-8 border-[#e8bf56]">Modern</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-300 text-lg sm:text-xl max-w-lg mb-10 font-light border-l border-slate-600 pl-6 leading-relaxed">
                Menggabungkan presisi teknik sipil dengan estetika arsitektur modern. 
                Solusi konstruksi terpercaya untuk masa depan yang kokoh.
              </p>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://wa.me/6285194940033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-10 py-4"
                >
                  Diskusi Proyek
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="#proyek"
                  className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#1a1a2e] transition-all"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </div>

            {/* Right Content - Site Signage Style */}
            <div className="hidden lg:flex justify-end items-end h-full">
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 max-w-sm w-full warning-tape-border">
                <div className="space-y-6">
                  <div>
                     <h3 className="text-white/50 text-xs uppercase tracking-widest mb-1">Lokasi Proyek</h3>
                     <p className="text-white font-bold text-xl font-oswald flex items-center gap-3">
                       <svg className="w-6 h-6 text-[#eab308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                       Jakarta, Indonesia
                     </p>
                  </div>
                  <div className="h-px bg-white/20" />
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <div className="text-xs text-white/50 uppercase">Tahun Berdiri</div>
                      <div className="text-2xl font-bold text-[#eab308]">2010</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50 uppercase">Proyek Selesai</div>
                      <div className="text-2xl font-bold text-[#eab308]">500+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8bf56]" />
      <div className="absolute bottom-2 left-0 right-0 h-4 warning-tape opacity-50" />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
