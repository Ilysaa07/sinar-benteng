import Image from 'next/image';
import Link from 'next/link';

export default function AreaLayanan() {
  const areas = [
    { city: 'Tangerang', slug: 'tangerang', desc: 'Layanan konstruksi utama untuk Kota Tangerang.' },
    { city: 'Tangerang Selatan', slug: 'tangerang-selatan', desc: 'Membangun kawasan mandiri elit di Tangsel.' },
    { city: 'Kabupaten Tangerang', slug: 'kabupaten-tangerang', desc: 'Solusi pabrik dan pergudangan terpadu.' },
    { city: 'Banten', slug: 'banten', desc: 'Melayani proyek infrastruktur skala provinsi.' }
  ];

  return (
    <section className="bg-[#172033] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWUyOTNiIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZThiZjU2IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white uppercase tracking-wide mb-4">
            Area Layanan <span className="text-[#e8bf56]">Prioritas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sinar Benteng adalah mitra konstruksi tepercaya yang berbasis di Banten, memberikan layanan menyeluruh di wilayah jabodetabek dengan fokus utama pada Tangerang Raya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Link key={area.slug} href={`/area/${area.slug}`} className="block group">
              <div className="bg-[#1e293b] border border-white/5 p-8 rounded-sm hover:-translate-y-2 hover:border-[#e8bf56]/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#0f172a] rounded-sm flex items-center justify-center mb-6 text-[#e8bf56] group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-oswald uppercase">{area.city}</h3>
                  <p className="text-slate-400 text-sm">{area.desc}</p>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-[#e8bf56] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Lihat Detail
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
