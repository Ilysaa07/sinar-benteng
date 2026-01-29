export default function About() {
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
    <section id="tentang" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            Kami Membangun Lebih dari Sekedar Bangunan
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Di Sinar Benteng, kami percaya setiap bangunan menceritakan sebuah kisah. 
            Kisah tentang impian, kerja keras, dan masa depan yang cerah.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-[#f8f9fa] aspect-[4/3]">
              {/* 
                GANTI dengan gambar tim/proyek dari Pexels
                Simpan di /public/about-image.jpg 
              */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/about.jpg)' }}
              >
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 sm:right-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#f59e0b] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1a1a2e]">100%</p>
                  <p className="text-slate-500 text-sm">Kepuasan Klien</p>
                </div>
              </div>
            </div>

            {/* Decorative dot */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#f59e0b] rounded-full opacity-20" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-6">
              Bersama Kami, Wujudkan Bangunan Impian Anda
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Sejak 2010, <strong className="text-[#1a1a2e]">Sinar Benteng</strong> telah 
              menjadi bagian dari perjalanan ratusan klien dalam mewujudkan ruang hidup 
              dan kerja mereka. Kami tidak hanya membangun struktur — kami membangun 
              kepercayaan, hubungan, dan masa depan bersama Anda.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Tim kami terdiri dari para profesional berpengalaman yang memahami bahwa 
              setiap proyek unik. Kami mendengarkan kebutuhan Anda, memberikan solusi 
              terbaik, dan memastikan setiap detail dikerjakan dengan sempurna.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#f59e0b]">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f8f9fa] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center text-[#f59e0b] flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">
                      {value.title}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
