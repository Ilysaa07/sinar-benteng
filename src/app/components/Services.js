import Link from 'next/link';

export default function Services() {
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
    <section id="layanan" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-6">
            Apa yang Bisa Kami Bantu?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Setiap proyek punya cerita unik. Apapun kebutuhan konstruksi Anda, 
            kami hadir dengan solusi yang tepat dan tim yang berdedikasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-[#f59e0b]/30 hover:shadow-xl hover:shadow-[#f59e0b]/5 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white transition-all duration-300 mb-6">
                {service.icon}
              </div>

              {/* Highlight Tag */}
              <span className="inline-block text-xs font-semibold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full mb-4">
                {service.highlight}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#f59e0b] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Tidak menemukan layanan yang Anda cari? Jangan khawatir, hubungi kami.
          </p>
          <Link
            href="#kontak"
            className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#f59e0b]/30 hover:-translate-y-1"
          >
            Konsultasi Sekarang
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
