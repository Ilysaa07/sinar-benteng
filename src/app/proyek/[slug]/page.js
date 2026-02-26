import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Enhanced dummy data for case studies with E-E-A-T elements
const caseStudies = {
  'gedung-perkantoran-megah': {
    title: 'Gedung Perkantoran Megah 5 Lantai',
    client: 'PT. Teknologi Masa Depan',
    location: 'CBD BSD City, Tangerang',
    year: '2024',
    category: 'Komersial',
    duration: '8 Bulan',
    author: 'Ir. Budi Santoso, ST, MT',
    authorRole: 'Chief Engineer Sinar Benteng',
    datePublished: '2024-11-15',
    background: 'Klien membutuhkan gedung headquarter baru yang mencerminkan masa depan teknologi dengan standar keamanan seismik tinggi (tahan gempa) dan sertifikasi green building.',
    challenge: 'Lahan yang terbatas di pusat komersial yang padat mengharuskan manajemen logistik material yang super ketat, serta penggalian basement yang tidak boleh mengganggu struktur gedung tetangga.',
    solution: 'Kami menerapkan metode Top-Down Construction untuk basement dan menggunakan struktur baja komposit untuk mempercepat erection kolom dan balok. Seluruh proses diawasi oleh tim BIM (Building Information Modeling) Sinar Benteng.',
    result: 'Gedung selesai 2 minggu lebih cepat dari jadwal, lulus inspeksi kelayakan struktur pemerintah Banten dengan nilai sempurna, dan saat ini menampung lebih dari 500 karyawan.',
    videoLink: 'https://youtube.com/embed/placeholder', // Example for Video Testimonial
  },
  'pabrik-baja-cikupa': {
    title: 'Konstruksi Pabrik Baja Konstruksi Berat',
    client: 'Klien Manufaktur (Confidential)',
    location: 'Kawasan Industri Cikupa, Kabupaten Tangerang',
    year: '2025',
    category: 'Industri / Pabrik',
    duration: '12 Bulan',
    author: 'Andi Pratama, ST',
    authorRole: 'Project Manager Struktur Baja',
    datePublished: '2025-02-10',
    background: 'Pembangunan pabrik fabrikasi berskala besar dengan kebutuhan area bentang lebar (wide span) tanpa kolom tengah untuk efisiensi manuver alat berat dan overhead crane di dalam pabrik.',
    challenge: 'Jenis tanah di lokasi Cikupa yang lunak membutuhkan perlakuan khusus pada pondasi. Selain itu, pemasangan rangka baja bentang 40 meter memerlukan presisi dan faktor keselamatan (K3) ekstrem.',
    solution: 'Tim Geoteknik kami menggunakan pondasi tiang pancang (spun pile) dengan kedalaman 24 meter. Untuk atap, kami memfabrikasi baja struktur Castella in-house untuk memastikan bentang lebar yang kokoh namun efisien secara berat.',
    result: 'Pabrik beroperasi dengan kapasitas penuh, sistem struktur atap mampu menahan beban overhead crane ganda berkapasitas 10 ton tanpa lendutan berlebih.',
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  
  if (!project) {
    return { title: 'Proyek Tidak Ditemukan' };
  }

  return {
    title: `Studi Kasus: ${project.title} | Kontraktor Tangerang`,
    description: `Pelajari detail studi kasus konstruksi ${project.title} di ${project.location}. Latar belakang, tantangan, dan solusi engineering oleh ${project.author}.`,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug] || caseStudies['gedung-perkantoran-megah']; // Fallback for DEMO purposes

  // Robust E-E-A-T SEO Schema for Case Studies (Article)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Studi Kasus Konstruksi: ${project.title}`,
    "datePublished": project.datePublished || "2024-01-01",
    "dateModified": project.datePublished || "2024-01-01",
    "about": {
      "@type": "Thing",
      "name": project.category
    },
    "author": {
      "@type": "Person",
      "name": project.author,
      "jobTitle": project.authorRole,
      "worksFor": {
        "@type": "Organization",
        "name": "PT Sinar Benteng Perkasa Jaya Sakti"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "PT Sinar Benteng Perkasa Jaya Sakti",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sinarbenteng.com/logo.webp"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="pt-24 bg-[#0f172a] min-h-screen text-slate-300">
        
        {/* Project Header */}
        <section className="relative bg-[#172033] py-20 border-b border-slate-800">
          <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm z-10"></div>
          {/* Abstract geometric background simulating scaffolding/structure */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} 
          />
          <div className="max-w-4xl mx-auto px-4 relative z-20 text-center">
            <span className="bg-[#e8bf56] text-[#0f172a] px-3 py-1 font-bold text-xs uppercase tracking-widest rounded-sm mb-6 inline-block">
              Studi Kasus • {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white font-oswald uppercase leading-tight mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider font-bold">
              <div className="flex items-center gap-2 text-slate-400">
                 <svg className="w-5 h-5 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="square" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 {project.location}
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                 <svg className="w-5 h-5 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 {project.year}
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Meta Data Sidebar */}
            <div className="md:col-span-1 border-l-2 border-[#e8bf56]/30 pl-6 h-fit sticky top-28">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8bf56] mb-2">Durasi Proyek</h4>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8bf56] mb-2">Layanan</h4>
                  <p className="text-white font-medium">Desain & Build (Turnkey)</p>
                </div>
                <div className="pt-6 border-t border-slate-700">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Penanggung Jawab Proyek</h4>
                  <p className="text-white font-medium">{project.author}</p>
                  <p className="text-xs text-slate-400 mt-1">{project.authorRole}</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3 space-y-12">
              
              {/* Latar Belakang */}
              <div>
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4 border-b border-slate-700 pb-2">1. Latar Belakang Klien</h2>
                <p className="leading-relaxed text-lg font-light">{project.background}</p>
              </div>

              {/* Tantangan */}
              <div className="bg-[#1e293b] p-6 border-l-4 border-red-500 rounded-sm shadow-xl">
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  2. Tantangan di Lapangan
                </h2>
                <p className="leading-relaxed font-light">{project.challenge}</p>
              </div>

              {/* Solusi Sinar Benteng */}
              <div className="bg-[#1e293b] p-6 border-l-4 border-[#e8bf56] rounded-sm shadow-xl">
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#e8bf56]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  3. Solusi Engineering Kami
                </h2>
                <p className="leading-relaxed font-light">{project.solution}</p>
              </div>

              {/* Hasil Akhir */}
              <div>
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4 border-b border-slate-700 pb-2">4. Hasil Akhir (Handover)</h2>
                <p className="leading-relaxed text-lg font-light text-emerald-400">{project.result}</p>
              </div>
              
              {/* E-E-A-T Author Profile Section */}
              <div className="mt-16 pt-8 border-t border-slate-800 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[#e8bf56] flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold font-oswald uppercase tracking-wide">Tentang Penulis: {project.author}</h4>
                  <p className="text-[#e8bf56] text-sm uppercase tracking-widest font-bold mb-3">{project.authorRole}</p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    Dokumen studi kasus ini ditulis langsung oleh tim ahli Sinar Benteng Construction untuk memberikan wawasan teknis transparan kepada calon klien. Kami bernaung pada standar tinggi (SNI dan keselamatan K3) di setiap pelaksanaan proyek di wilayah Banten dan sekitarnya.
                  </p>
                </div>
              </div>

              <div className="bg-[#172033] p-8 mt-12 text-center border border-white/10 rounded-sm">
                <h3 className="text-xl font-oswald uppercase text-white mb-4">Punya Proyek Serupa?</h3>
                <p className="mb-6 font-light">Konsultasikan pondasi dan arsitektur Anda bersama pakar dari Sinar Benteng.</p>
                <Link href="/#kontak">
                  <button className="bg-[#e8bf56] text-[#0f172a] px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Mulai Konsultasi Gratis
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
