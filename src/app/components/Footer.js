import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang Kami' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#proyek', label: 'Proyek' },
    { href: '#kontak', label: 'Kontak' },
  ];

  const services = [
    'Konstruksi Gedung',
    'Renovasi & Perbaikan',
    'Infrastruktur',
    'Desain Arsitektur',
    'Manajemen Proyek',
    'Konsultasi Teknis',
  ];

  return (
    <footer className="bg-[#0f172a] text-white border-t-4 border-[#e8bf56] relative">
      {/* Warning Tape Visual */}
      <div className="h-4 warning-tape w-full opacity-80" />
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 relative overflow-hidden bg-white">
                 <img 
                   src="/logo.webp" 
                   alt="Sinar Benteng Logo" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl uppercase tracking-tighter leading-none font-oswald text-white">
                  Sinar<span className="text-[#e8bf56]">Benteng</span>
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] font-bold border-t border-[#e8bf56] mt-0.5 pt-0.5 w-full text-justify flex justify-between text-slate-400">
                  <span>K</span><span>o</span><span>n</span><span>s</span><span>t</span><span>r</span><span>u</span><span>k</span><span>s</span><span>i</span>
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm font-light">
              Mitra konstruksi terpercaya Anda untuk membangun masa depan dengan 
              kekuatan dan keandalan. 
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61587189843379"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#e8bf56] hover:text-[#0f172a] transition-all border border-white/10"
                aria-label="Facebook Sinar Benteng Perkasa"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.88 0 1.79.16 1.79.16v1.97h-1a1.16 1.16 0 00-1.3 1.26v1.52h2.22l-.35 2.33h-1.87v5.67A8 8 0 0020 12.05z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sinarbentengperkasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#e8bf56] hover:text-[#0f172a] transition-all border border-white/10"
                aria-label="Instagram Sinar Benteng Perkasa"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-oswald uppercase tracking-widest mb-6 text-[#e8bf56]">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm uppercase tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 bg-[#e8bf56] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-oswald uppercase tracking-widest mb-6 text-[#e8bf56]">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 flex items-center gap-2 text-sm uppercase tracking-wide group hover:text-white cursor-default">
                    <span className="w-1.5 h-1.5 bg-[#e8bf56] group-hover:w-3 transition-all" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-oswald uppercase tracking-widest mb-6 text-[#e8bf56]">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Masjid Baitul Rahman No.22, RT.005/RW.005, Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 flex-shrink-0 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 851-7711-1115</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 flex-shrink-0 text-[#e8bf56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>sinarbentengperkasajayasakti@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-mono">
              © {currentYear} PT SINAR BENTENG. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500 uppercase tracking-wider">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
