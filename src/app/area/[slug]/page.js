import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Dummy data for area pages
const areaData = {
  'tangerang': {
    name: 'Kota Tangerang',
    title: 'Jasa Kontraktor Bangunan & Gedung di Kota Tangerang',
    desc: 'Kami melayani jasa bangun baru, renovasi rumah, hingga konstruksi gudang dan perkantoran di seluruh wilayah Kota Tangerang dengan standar mutu SNI.',
    services: ['Bangun Rumah & Ruko', 'Renovasi Perkantoran', 'Infrastruktur Jalan'],
    advantages: 'Keunggulan utama kami di Tangerang adalah kedekatan lokasi workshop yang mempercepat logistik dan tim tukang lokal yang ahli.',
  },
  'tangerang-selatan': {
    name: 'Tangerang Selatan',
    title: 'Kontraktor Perumahan & Komersial di Tangerang Selatan',
    desc: 'Dari BSD City hingga Bintaro, Sinar Benteng siap mewujudkan desain arsitektur impian Anda menjadi bangunan kokoh dan modern di area eksklusif Tangsel.',
    services: ['Arsitektur Perumahan Elite', 'Desain Interior Komersial', 'Pembangunan Kafe & Restoran'],
    advantages: 'Berpengalaman menangani perizinan (PBG/IMB) di kawasan perumahan elit Tangsel yang ketat aturan tata kota.',
  },
  'kabupaten-tangerang': {
    name: 'Kabupaten Tangerang',
    title: 'Jasa Konstruksi Pabrik & Gudang di Kabupaten Tangerang',
    desc: 'Sinar Benteng ahli dalam merancang dan membangun fasilitas industri, pabrik, dan gudang bervolume besar di Kabupaten Tangerang.',
    services: ['Konstruksi Baja Berat', 'Pabrik & Gudang', 'Pengecoran Jalan Beton'],
    advantages: 'Kapasitas alat berat milik sendiri yang memadai untuk proyek skala masif di kawasan industri Cikupa, Balaraja, dan sekitarnya.',
  },
  'banten': {
    name: 'Seluruh Banten',
    title: 'Kontraktor Umum Terpercaya di Provinsi Banten',
    desc: 'Melayani proyek strategis daerah dan swasta di seluruh Banten, dari Serang, Cilegon, hingga Lebak. Fokus pada ketahanan struktur dan efisiensi waktu.',
    services: ['Proyek Pemerintah', 'Infrastruktur Jembatan', 'Fasilitas Publik'],
    advantages: 'Pendekatan engineer-led yang menjamin setiap struktur aman dari risiko gempa bumi (zona seismik Banten).',
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

  // LocalBusiness Schema specialized for this specific area
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sinar Benteng Kontraktor - ${area.name}`,
    "description": area.title,
    "url": `https://sinarbenteng.com/area/${slug}`,
    "telephone": "+6285177111115",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": "Banten",
      "addressCountry": "ID"
    },
    // Adding areaServed again specifically reinforcing this local page
    "areaServed": {
      "@type": "City",
      "name": area.name
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
        
        {/* Area Hero */}
        <section className="relative bg-[#172033] py-24 border-b border-slate-800">
          <div className="absolute inset-0 bg-[#0f172a]/70 z-10"></div>
          {/* Subtle map/grid background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #e8bf56 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #e8bf56 50px)', backgroundSize: '50px 50px' }}></div>
          
          <div className="max-w-5xl mx-auto px-4 relative z-20 text-center">
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
            </div>

            <div className="space-y-8">
              <div className="bg-[#e8bf56] p-8 rounded-sm text-[#0f172a]">
                <h3 className="text-2xl font-black font-oswald uppercase mb-4">Mengapa Memilih Kami di {area.name}?</h3>
                <p className="font-medium text-lg leading-relaxed">
                  {area.advantages}
                </p>
              </div>

              <div className="bg-[#172033] p-8 border border-slate-700">
                <h4 className="text-xl font-bold font-oswald text-white uppercase mb-4">Siap Membangun?</h4>
                <p className="text-slate-400 mb-6 font-light">
                  Dapatkan estimasi biaya dan konsultasi gratis langsung dengan tim engineer kami.
                </p>
                <Link href="/#kontak">
                  <button className="w-full bg-[#1e293b] text-white border-2 border-[#e8bf56] hover:bg-[#e8bf56] hover:text-[#0f172a] px-6 py-4 font-bold uppercase tracking-widest transition-all">
                    Hubungi via WhatsApp
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
