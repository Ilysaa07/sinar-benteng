import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Dummy data for case studies
const caseStudies = {
  'gedung-perkantoran-megah': {
    title: 'Gedung Perkantoran Megah 5 Lantai',
    client: 'PT. Teknologi Masa Depan',
    location: 'CBD BSD City, Tangerang',
    year: '2024',
    category: 'Komersial',
    duration: '8 Bulan',
    background: 'Klien membutuhkan gedung headquarter baru yang mencerminkan masa depan teknologi dengan standar keamanan seismik tinggi (tahan gempa) dan sertifikasi green building.',
    challenge: 'Lahan yang terbatas di pusat komersial yang padat mengharuskan manajemen logistik material yang super ketat, serta penggalian basement yang tidak boleh mengganggu struktur gedung tetangga.',
    solution: 'Kami menerapkan metode Top-Down Construction untuk basement dan menggunakan struktur baja komposit untuk mempercepat erection kolom dan balok. Seluruh proses diawasi oleh tim BIM (Building Information Modeling) Sinar Benteng.',
    result: 'Gedung selesai 2 minggu lebih cepat dari jadwal, lulus inspeksi kelayakan struktur pemerintah Banten dengan nilai sempurna, dan saat ini menampung lebih dari 500 karyawan.',
    videoLink: 'https://youtube.com/embed/placeholder', // Example for Video Testimonial
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
    description: `Pelajari detail studi kasus konstruksi ${project.title} oleh Sinar Benteng di ${project.location}. Latar belakang, solusi arsitektur, dan hasil proyek.`,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug] || caseStudies['gedung-perkantoran-megah']; // Fallback for DEMO purposes

  // SEO Schema specifically for Case Studies (Article / Construction Project)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Studi Kasus Konstruksi: ${project.title}`,
    "about": {
      "@type": "Thing",
      "name": project.category
    },
    "author": {
      "@type": "Organization",
      "name": "PT Sinar Benteng Perkasa Jaya Sakti"
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
            <div className="md:col-span-1 space-y-8 border-l-2 border-[#e8bf56]/30 pl-6">
              {/* <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8bf56] mb-2">Klien</h4>
                <p className="text-white font-medium">{project.client}</p>
              </div> */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8bf56] mb-2">Durasi Proyek</h4>
                <p className="text-white font-medium">{project.duration}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8bf56] mb-2">Layanan</h4>
                <p className="text-white font-medium">Desain & Build (Turnkey)</p>
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
              <div className="bg-[#1e293b] p-6 border-l-4 border-red-500 rounded-sm">
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4">2. Tantangan di Lapangan</h2>
                <p className="leading-relaxed font-light">{project.challenge}</p>
              </div>

              {/* Solusi Sinar Benteng */}
              <div className="bg-[#1e293b] p-6 border-l-4 border-[#e8bf56] rounded-sm">
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4">3. Solusi Engineering Kami</h2>
                <p className="leading-relaxed font-light">{project.solution}</p>
              </div>

              {/* Hasil Akhir */}
              <div>
                <h2 className="text-2xl font-bold text-white uppercase font-oswald mb-4 border-b border-slate-700 pb-2">4. Hasil Akhir (Handover)</h2>
                <p className="leading-relaxed text-lg font-light text-emerald-400">{project.result}</p>
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
