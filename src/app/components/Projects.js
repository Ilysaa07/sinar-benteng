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
    <section id="proyek" className="section-padding bg-[#172033] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#e8bf56] px-4 py-1 mb-6">
            <span className="text-[#e8bf56] font-bold text-sm uppercase tracking-[0.2em] font-oswald">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase leading-none">
            Rekam Jejak <br/>
            <span className="text-[#e8bf56]">Konstruksi</span>
          </h2>
          <p className="text-slate-300 text-lg font-light">
            Galeri proyek yang telah kami selesaikan dengan presisi tinggi dan standar keamanan industri.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#1e293b]/50 backdrop-blur-sm shadow-2xl transition-all duration-300 rounded-sm border border-white/5 hover:border-[#e8bf56]/50"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${categoryColors[project.category]} relative`}>
                <div className="absolute inset-0 bg-[#0f172a]/20 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0f172a]/95 border-t-2 border-[#e8bf56] p-6 transition-transform duration-300 translate-y-[20px] group-hover:translate-y-0">
                <div className="mb-2">
                  <span className="bg-[#e8bf56] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide rounded-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-oswald uppercase tracking-wide">
                  {project.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-slate-400 text-xs uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all duration-300">
            Lihat Semua Proyek
          </button>
        </div>
      </div>
    </section>
  );
}
