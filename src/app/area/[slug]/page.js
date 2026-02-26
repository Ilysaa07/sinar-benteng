import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Enhanced data for area pages with Local FAQ & Service detail
const areaData = {
  'tangerang': {
    name: 'Kota Tangerang',
    title: 'Jasa Kontraktor Bangunan & Gedung di Kota Tangerang',
    desc: 'Kami melayani jasa bangun baru, renovasi rumah, hingga konstruksi gudang dan perkantoran di seluruh wilayah Kota Tangerang dengan standar mutu SNI.',
    services: ['Bangun Rumah & Ruko', 'Renovasi Perkantoran', 'Infrastruktur Jalan'],
    advantages: 'Keunggulan utama kami di Tangerang adalah kedekatan lokasi workshop yang mempercepat logistik dan tim tukang lokal yang ahli.',
    faqs: [
      { q: "Apakah melayani pengurusan IMB/PBG di Kota Tangerang?", a: "Ya, tim legal kami akan membantu penuh proses perizinan PBG khusus regulasi Pemkot Tangerang." },
      { q: "Berapa lama estimasi bangun rumah di Tangerang?", a: "Tergantung luas dan desain. Rata-rata rumah standar (tipe 45-70) diselesaikan dalam 3-4 bulan kerja." }
    ]
  },
  'tangerang-selatan': {
    name: 'Tangerang Selatan',
    title: 'Kontraktor Perumahan & Komersial di Tangerang Selatan',
    desc: 'Dari BSD City hingga Bintaro, Sinar Benteng siap mewujudkan desain arsitektur impian Anda menjadi bangunan kokoh dan modern di area eksklusif Tangsel.',
    services: ['Arsitektur Perumahan Elite', 'Desain Interior Komersial', 'Pembangunan Kafe & Restoran'],
    advantages: 'Berpengalaman menangani perizinan (PBG/IMB) di kawasan perumahan elit Tangsel yang ketat aturan tata kota.',
    faqs: [
      { q: "Apakah bisa merenovasi di dalam cluster/perumahan elit Tangsel?", a: "Tentu, kami sangat memahami SOP kerja, jam operasional tukang, dan aturan kebersihan di cluster BSD, Bintaro, maupun Alam Sutera." },
      { q: "Apakah menyediakan jasa arsitek juga?", a: "Ya, kami melayani Design & Build. Anda dapat berkonsultasi desain secara gratis di awal." }
    ]
  },
  'kabupaten-tangerang': {
    name: 'Kabupaten Tangerang',
    title: 'Jasa Konstruksi Pabrik & Gudang di Kabupaten Tangerang',
    desc: 'Sinar Benteng ahli dalam merancang dan membangun fasilitas industri, pabrik, dan gudang bervolume besar di Kabupaten Tangerang.',
    services: ['Konstruksi Baja Berat', 'Pabrik & Gudang', 'Pengecoran Jalan Beton'],
    advantages: 'Kapasitas alat berat milik sendiri yang memadai untuk proyek skala masif di kawasan industri Cikupa, Balaraja, dan sekitarnya.',
    faqs: [
      { q: "Bagaimana standar K3 untuk proyek pergudangan/industri?", a: "Kami menerapkan standar K3 Konstruksi yang sangat ketat, wajib APD, dan asuransi proyek (CAR) untuk menjamin keamanan di kawasan industri." },
      { q: "Apakah melayani konstruksi baja profil?", a: "Sangat melayani. Fabrikasi baja struktural (WF, H-Beam) adalah salah satu keahlian utama kami untuk pabrik di Kabupaten Tangerang." }
    ]
  },
  'banten': {
    name: 'Seluruh Banten',
    title: 'Kontraktor Umum Terpercaya di Provinsi Banten',
    desc: 'Melayani proyek strategis daerah dan swasta di seluruh Banten, dari Serang, Cilegon, hingga Lebak. Fokus pada ketahanan struktur dan efisiensi waktu.',
    services: ['Proyek Pemerintah', 'Infrastruktur Jembatan', 'Fasilitas Publik'],
    advantages: 'Pendekatan engineer-led yang menjamin setiap struktur aman dari risiko gempa bumi (zona seismik Banten).',
    faqs: [
      { q: "Apakah Sinar Benteng melayani proyek di Serang dan Cilegon?", a: "Ya, jangkauan kami mencakup seluruh Provinsi Banten termasuk Serang, Cilegon, Pandeglang, dan Lebak." },
      { q: "Bagaimana cara konsultasi proyek di luar Tangerang?", a: "Tim surveyor dan engineer kami siap melakukan kunjungan ke lokasi (site visit) di seluruh Banten tanpa biaya transport (S&K Berlaku)." }
    ]
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = areaData[slug];
  
  if (!area) {
    return { title: 'Area Layanan Tidak Ditemukan' };
  }

  return {
    title: `${area.title} | Sinar Benteng Construction`,
    description: area.desc,
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areaData[slug] || areaData['tangerang']; // Fallback for demonstration

  // Comprehensive Schema for E-E-A-T and Local SEO
  const schemaList = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Sinar Benteng Kontraktor - ${area.name}`,
      "image": "https://sinarbenteng.com/placeholder-logo.png",
      "description": area.title,
      "url": `https://sinarbenteng.com/area/${slug}`,
      "telephone": "+6285177111115",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": area.name,
        "addressRegion": "Banten",
        "addressCountry": "ID"
      },
      "areaServed": {
        "@type": "City",
        "name": area.name
      }
    }
  ];

  // Inject FAQ Schema if FAQs exist
  if (area.faqs && area.faqs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": area.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
      />
      <Navbar />
      <main className="pt-24 bg-[#0f172a] min-h-screen text-slate-300">
        
        {/* Area Hero */}
        <section className="relative bg-[#172033] py-24 border-b border-slate-800">
          <div className="absolute inset-0 bg-[#0f172a]/70 z-10"></div>
          {/* Subtle map/grid background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #e8bf56 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #e8bf56 50px)', backgroundSize: '50px 50px' }}></div>
          
          <div className="max-w-5xl mx-auto px-4 relative z-20 text-center">
            <div className="inline-block px-4 py-1 mb-6 bg-[#e8bf56]/10 border border-[#e8bf56]/30 text-[#e8bf56] text-sm font-bold tracking-widest uppercase rounded-full">
              Layanan Utama di {area.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white font-oswald uppercase leading-tight mb-6">
              {area.title}
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              {area.desc}
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-oswald text-white uppercase border-l-4 border-[#e8bf56] pl-4">
                Fokus Layanan di {area.name}
              </h2>
              <ul className="space-y-4">
                {area.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 bg-[#1e293b] rounded-sm border border-white/5">
                    <div className="text-[#e8bf56] mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wide">{service}</h4>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust Signals (E-E-A-T) */}
              <div className="pt-8 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Telah Dipercaya Oleh Berbagai Klien di Banten</h3>
                <div className="flex gap-4 opacity-50 grayscale">
                  <div className="h-10 w-24 bg-slate-800 rounded flex items-center justify-center text-xs font-bold font-oswald text-slate-500">KLIEN 1</div>
                  <div className="h-10 w-24 bg-slate-800 rounded flex items-center justify-center text-xs font-bold font-oswald text-slate-500">KLIEN 2</div>
                  <div className="h-10 w-24 bg-slate-800 rounded flex items-center justify-center text-xs font-bold font-oswald text-slate-500">KLIEN 3</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#e8bf56] p-8 rounded-sm text-[#0f172a]">
                <h3 className="text-2xl font-black font-oswald uppercase mb-4">Mengapa Memilih Kami di {area.name}?</h3>
                <p className="font-medium text-lg leading-relaxed">
                  {area.advantages}
                </p>
              </div>

              {/* Dynamic Local FAQ Section */}
              {area.faqs && area.faqs.length > 0 && (
                <div className="bg-[#172033] p-8 border border-slate-700">
                  <h4 className="text-xl font-bold font-oswald text-white uppercase mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#e8bf56]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Pertanyaan Umum ({area.name})
                  </h4>
                  <div className="space-y-6">
                    {area.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                        <h5 className="font-bold text-white mb-2 text-sm uppercase translate-wider">{faq.q}</h5>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-[#1e293b] p-8 border-l-4 border-[#e8bf56]">
                <h4 className="text-xl font-bold font-oswald text-white uppercase mb-4">Siap Membangun?</h4>
                <p className="text-slate-400 mb-6 font-light">
                  Dapatkan estimasi biaya dan konsultasi gratis langsung dengan tim engineer kami.
                </p>
                <Link href="/#kontak">
                  <button className="w-full bg-[#0f172a] text-[#e8bf56] hover:bg-[#e8bf56] hover:text-[#0f172a] px-6 py-4 font-bold uppercase tracking-widest transition-all border border-[#e8bf56]/30 hover:border-[#e8bf56]">
                    Konsultasi & Survei Gratis
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
