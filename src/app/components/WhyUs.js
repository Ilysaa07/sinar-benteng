export default function WhyUs() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Tim Profesional Berpengalaman',
      desc: 'Didukung oleh tim insinyur, arsitek, dan teknisi bersertifikat dengan pengalaman puluhan tahun di industri konstruksi.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Material Berkualitas Tinggi',
      desc: 'Kami hanya menggunakan material konstruksi premium dari supplier terpercaya untuk menjamin ketahanan bangunan.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tepat Waktu & Anggaran',
      desc: 'Komitmen kami adalah menyelesaikan setiap proyek sesuai timeline dan budget yang telah disepakati bersama.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Garansi Kualitas',
      desc: 'Setiap proyek dilengkapi dengan garansi kualitas untuk memberikan rasa aman dan kepercayaan kepada klien.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Harga Kompetitif',
      desc: 'Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas, memberikan nilai terbaik untuk investasi Anda.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Layanan 24/7',
      desc: 'Tim support kami siap membantu Anda kapan saja untuk konsultasi dan penanganan kebutuhan proyek mendesak.',
    },
  ];

  return (
    <section className="section-padding bg-blueprint relative overflow-hidden border-t-8 border-[#e8bf56]">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#1a365d]/90" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 border-b border-white/20 pb-8">
          <div>
            <div className="inline-block bg-[#e8bf56] text-white px-3 py-1 font-bold text-xs uppercase tracking-widest mb-4">
              Komitmen Kualitas
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-none uppercase">
              Mengapa Memilih <br/>
              <span className="text-[#e8bf56]">Sinar Benteng</span>?
            </h2>
          </div>
          <div className="text-right lg:pb-2">
            <p className="text-slate-300 max-w-md ml-auto font-light leading-relaxed border-l-2 border-[#e8bf56] pl-6 text-left">
              Standar operasional ketat dan metodologi kerja yang terukur memastikan setiap proyek selesai dengan sempurna.
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Technical Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50" />

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#e8bf56] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-oswald tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Dashboard Style */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/20 border border-white/10 backdrop-blur-md">
            {[
              { label: 'Proyek Selesai', value: '500+', code: 'PRJ-OK' },
              { label: 'Klien Puas', value: '98%', code: 'SAT-IDX' },
              { label: 'Penghargaan', value: '15+', code: 'AWD-GET' },
              { label: 'Kota Jangkauan', value: '25+', code: 'CVR-CTY' },
            ].map((stat, index) => (
              <div key={index} className="p-8 text-center group">
                <div className="text-xs text-[#e8bf56] font-mono mb-2 opacity-70 group-hover:opacity-100">{stat.code}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1 font-oswald tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
