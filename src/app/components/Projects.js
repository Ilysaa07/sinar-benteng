export default function Projects() {
  const projects = [
    {
      title: 'Gedung Perkantoran Megah',
      category: 'Komersial',
      location: 'Jakarta Selatan',
      year: '2024',
    },
    {
      title: 'Perumahan Elite Cluster',
      category: 'Perumahan',
      location: 'Bandung',
      year: '2023',
    },
    {
      title: 'Jembatan Penghubung',
      category: 'Infrastruktur',
      location: 'Surabaya',
      year: '2023',
    },
    {
      title: 'Renovasi Hotel Berbintang',
      category: 'Renovasi',
      location: 'Bali',
      year: '2024',
    },
    {
      title: 'Pabrik Manufaktur',
      category: 'Industri',
      location: 'Bekasi',
      year: '2022',
    },
    {
      title: 'Gedung Sekolah Modern',
      category: 'Pendidikan',
      location: 'Yogyakarta',
      year: '2023',
    },
  ];

  const categoryColors = {
    'Komersial': 'from-blue-500 to-blue-600',
    'Perumahan': 'from-emerald-500 to-emerald-600',
    'Infrastruktur': 'from-orange-500 to-orange-600',
    'Renovasi': 'from-purple-500 to-purple-600',
    'Industri': 'from-slate-500 to-slate-600',
    'Pendidikan': 'from-cyan-500 to-cyan-600',
  };

  return (
    <section id="proyek" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ea580c]/10 text-[#ea580c] rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#ea580c] rounded-full" />
            Portfolio Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Proyek yang Telah
            <span className="text-gradient"> Kami Kerjakan</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Lihat beberapa proyek konstruksi yang telah kami selesaikan dengan 
            standar kualitas tinggi dan kepuasan klien.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center`}>
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-block bg-gradient-to-r ${categoryColors[project.category]} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-[#1a365d] text-[#1a365d] px-8 py-4 rounded-full font-semibold hover:bg-[#1a365d] hover:text-white transition-all duration-300">
            Lihat Semua Proyek
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
