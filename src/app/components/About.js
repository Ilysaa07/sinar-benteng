import { memo } from 'react';

const About = memo(function About() {
  const stats = [
    { value: '15+', label: 'Tahun Pengalaman' },
    { value: '500+', label: 'Proyek Selesai' },
    { value: '100+', label: 'Klien Bahagia' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Terpercaya',
      desc: 'Kami menepati janji dan menjaga kepercayaan Anda'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Cepat & Tepat',
      desc: 'Pengerjaan efisien tanpa kompromi kualitas'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Penuh Dedikasi',
      desc: 'Setiap proyek kami kerjakan dengan sepenuh hati'
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#172033] relative overflow-hidden">
      {/* Background Architectural Grid - White/Light for Dark Mode */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      {/* Dark Mode Gradient Spot */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="order-2 lg:order-1 relative">
            {/* Main Image Frame */}
            <div className="relative aspect-[5/3] overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/10">
               <img
                  src="/logo.webp"
                  alt="Tentang Sinar Benteng"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/80 to-transparent opacity-60" />
            </div>
            
            {/* Floating 'Stamp' Card - Premium Dark */}
            <div className="absolute -bottom-8 -right-8 bg-[#0f172a] p-6 shadow-xl border-l-4 border-[#e8bf56] hidden sm:block ring-1 ring-white/10">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold font-oswald leading-none text-white">
                  15<span className="text-[#e8bf56]">+</span>
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  Tahun<br/>Pengalaman
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 border-b border-[#e8bf56] pb-1 mb-6">
               <span className="text-[#e8bf56] font-bold text-sm uppercase tracking-widest font-oswald">
                Tentang Perusahaan
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 uppercase leading-tight">
              Membangun <span className="text-[#e8bf56]">Reputasi</span> <br/>
              & Kepercayaan
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
              Sinar Benteng adalah manifestasi dari visi untuk menciptakan infrastruktur yang tidak hanya fungsional, 
              tapi juga bertahan melintasi waktu.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 uppercase flex items-center gap-3">
              <span className="w-8 h-1 bg-[#e8bf56]" />
              Dedikasi Sejak 2010
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-6 font-medium">
              Kami mendekati setiap proyek dengan mentalitas "Safety First, Quality Always". 
              Setiap bata yang diletakkan dan setiap besi yang dipasang diawasi dengan standar ketat.
            </p>

            <p className="text-slate-400 leading-relaxed mb-10 text-sm border-l-2 border-[#e8bf56] pl-4 py-2">
              Tim insinyur kami tidak hanya bekerja di lapangan, tapi juga memastikan perencanaan 
              yang matang untuk efisiensi biaya dan ketepatan waktu.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-white/10 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="">
                  <p className="text-3xl sm:text-4xl font-bold text-white font-oswald">{stat.value}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-slate-700 text-[#e8bf56] group-hover:bg-[#e8bf56] group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm mb-1 group-hover:text-[#e8bf56] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e8bf56]" />
      <div className="absolute bottom-2 left-0 right-0 h-4 warning-tape opacity-50" />
    </section>
  );
});

About.displayName = 'About';

export default About;
