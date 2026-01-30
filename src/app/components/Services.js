import { memo } from 'react';
import Link from 'next/link';

const Services = memo(function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Konstruksi Gedung',
      desc: 'Dari pondasi hingga atap, kami membangun gedung perkantoran, komersial, dan perumahan yang kokoh dan estetis.',
      highlight: 'Gedung Berkualitas'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Renovasi & Perbaikan',
      desc: 'Ubah ruang lama Anda menjadi baru kembali. Kami menangani renovasi dari skala kecil hingga besar dengan sentuhan modern.',
      highlight: 'Transformasi Total'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Infrastruktur',
      desc: 'Jalan, jembatan, dan fasilitas publik yang menghubungkan masyarakat. Kami membangun infrastruktur untuk generasi mendatang.',
      highlight: 'Untuk Masa Depan'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Desain Arsitektur',
      desc: 'Tim arsitek kami siap merancang bangunan impian Anda dengan desain yang fungsional, modern, dan sesuai budget.',
      highlight: 'Desain Impian'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Manajemen Proyek',
      desc: 'Biar kami yang urus semuanya. Dari perencanaan, koordinasi, hingga pengawasan — proyek Anda di tangan yang tepat.',
      highlight: 'Tenang & Terurus'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Konsultasi Gratis',
      desc: 'Punya pertanyaan atau ide? Ceritakan kepada kami. Tim ahli kami siap membantu Anda merencanakan proyek terbaik.',
      highlight: 'Mari Bicara'
    },
  ];

  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#172033] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border-b-2 border-[#e8bf56] pb-1 mb-4">
             <span className="text-[#e8bf56] font-bold text-sm uppercase tracking-widest font-oswald">
              Layanan Profesional
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase leading-none">
            Solusi <span className="text-[#e8bf56]">Konstruksi</span> <br/>
            Terintegrasi
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            Dari perencanaan hingga penyelesaian, kami menyediakan layanan menyeluruh 
            dengan standar keselamatan dan kualitas tertinggi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-[#1e293b]/50 backdrop-blur-sm p-8 border border-white/5 hover:border-[#e8bf56]/50 hover:bg-[#1e293b] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-[#e8bf56] group-hover:text-white transition-colors duration-300 rounded-sm">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8bf56] transition-colors uppercase font-oswald tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
              
              {/* Simple Bottom Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-[#e8bf56] w-0 group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        {/* Construction Themed CTA */}
        <div className="relative mt-24 max-w-4xl mx-auto">
          {/* Warning Tape Borders */}
          <div className="absolute -top-3 left-4 right-4 h-3 warning-tape" />
          <div className="absolute -bottom-3 left-4 right-4 h-3 warning-tape" />
          
          <div className="bg-[#0f172a] relative px-8 py-12 md:px-16 border-x-4 border-[#e8bf56] shadow-2xl overflow-hidden group mx-4 md:mx-0">
            {/* Background Pattern */}
             <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ 
                  backgroundImage: 'radial-gradient(#e8bf56 1px, transparent 1px)', 
                  backgroundSize: '16px 16px' 
                }}
              />
              
            {/* Blueprint Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-white/10 opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-white/10 opacity-50" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex-1">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="w-2 h-2 bg-[#e8bf56] rounded-full animate-pulse" />
                  <p className="text-[#e8bf56] font-mono text-xs uppercase tracking-widest">
                    // CUSTOM REQUEST
                  </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase font-oswald mb-2">
                  Butuh Layanan Spesifik?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                  Tantangan konstruksi unik memerlukan solusi teknis yang tepat. Diskusikan kebutuhan spesifik proyek Anda dengan tim engineering kami.
                </p>
              </div>

              <Link
                href="#kontak"
                className="group/btn relative inline-flex items-center gap-3 bg-[#e8bf56] text-[#1a1a2e] px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span className="relative z-10">Hubungi Tim Teknis</span>
                <svg 
                  className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
