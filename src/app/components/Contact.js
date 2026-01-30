'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send Email via FormSubmit
      await fetch("https://formsubmit.co/ajax/sinarbentengperkasajayasakti@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Project Inquiry: ${formData.subject}`,
          _template: 'table'
        })
      });

      // 2. Open WhatsApp
      const waMessage = `Halo Sinar Benteng, saya ingin konsultasi proyek.\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo HP: ${formData.phone}\nJenis Proyek: ${formData.subject}\n\nPesan:\n${formData.message}`;
      const waUrl = `https://wa.me/6285177111115?text=${encodeURIComponent(waMessage)}`;
      
      window.open(waUrl, '_blank');

      alert('Terima kasih! Pesan Anda telah terkirim via Email & WhatsApp.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp langsung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Alamat Kantor',
      info: 'Jl. Masjid Baitul Rahman No.22, RT.005/RW.005, Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telepon',
      info: '+62 851-7711-1115',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      info: 'sinarbentengperkasajayasakti@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Jam Operasional',
      info: 'Senin - Sabtu: 08:00 - 17:00',
    },
  ];

  return (
    <section id="kontak" className="section-padding bg-[#172033] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="block font-bold text-[#e8bf56] text-sm uppercase tracking-widest font-oswald mb-2">
              Hubungi Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white uppercase leading-none">
              Mulai Proyek <br/>
              <span className="text-[#e8bf56] inline-block">Konstruksi Anda</span>
            </h2>
          </div>
          <div className="md:text-right max-w-md">
             <p className="text-slate-400 font-light border-l-4 border-[#e8bf56] pl-4">
              Isi formulir di bawah ini untuk mendapatkan estimasi awal dan konsultasi teknis gratis.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form - Styled as Field Report */}
          <div className="lg:col-span-3">
            <div className="bg-[#1e293b] border-2 border-slate-600 p-8 shadow-[8px_8px_0px_#000000] relative">
              {/* Paper Clip Visual */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#e8bf56] rounded-sm shadow-sm flex items-center justify-center">
                 <span className="text-[#1a1a2e] text-xs font-bold uppercase tracking-widest">Formulir Proyek</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 font-oswald uppercase tracking-wide pt-4 border-b border-dashed border-slate-700 pb-4">
                Data Kebutuhan Klien
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 focus:border-[#e8bf56] focus:ring-0 outline-none transition-all placeholder:text-slate-600 text-sm font-medium text-white"
                      placeholder="NAMA ANDA"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 focus:border-[#e8bf56] focus:ring-0 outline-none transition-all placeholder:text-slate-600 text-sm font-medium text-white"
                      placeholder="EMAIL@DOMAIN.COM"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 focus:border-[#e8bf56] focus:ring-0 outline-none transition-all placeholder:text-slate-600 text-sm font-medium text-white"
                      placeholder="+62"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Jenis Proyek
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 focus:border-[#e8bf56] focus:ring-0 outline-none transition-all text-sm font-medium text-white"
                    >
                      <option value="">PILIH JENIS PROYEK</option>
                      <option value="gedung">KONSTRUKSI GEDUNG</option>
                      <option value="renovasi">RENOVASI & PERBAIKAN</option>
                      <option value="infrastruktur">INFRASTRUKTUR</option>
                      <option value="desain">DESAIN ARSITEKTUR</option>
                      <option value="lainnya">LAINNYA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Detail Proyek *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 focus:border-[#e8bf56] focus:ring-0 outline-none transition-all resize-none placeholder:text-slate-600 text-sm font-medium text-white"
                    placeholder="Deskripsikan spesifikasi proyek, lokasi, dan estimasi waktu..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className={`btn-primary w-full justify-center py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {isSubmitting ? 'Mengirim...' : 'Kirim Permintaan'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map Card */}
            <div className="bg-[#1e293b] p-8 text-white relative overflow-hidden group shadow-lg border border-white/5">
               <div className="absolute top-0 right-0 w-16 h-16 bg-[#e8bf56] rounded-bl-full opacity-20 group-hover:opacity-100 transition-opacity" />
               <h4 className="font-oswald text-xl font-bold uppercase mb-4 tracking-wide relative z-10">Kantor Pusat</h4>
               <p className="text-slate-400 mb-6 font-light leading-relaxed relative z-10">
                 Kunjungi kantor kami untuk konsultasi tatap muka dengan tim arsitek dan insinyur kami.
               </p>
               <div className="h-48 bg-[#0f172a] w-full mb-4 border border-white/10 relative z-10">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.91789673299587!2d106.62960284978875!3d-6.172732485610014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d2a8ce883b%3A0xf78dd75f677bfb89!2sSinar%20Benteng%20Shop!5e0!3m2!1sen!2sid!4v1769759077722!5m2!1sen!2sid" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
               </div>
               <a 
                 href="https://www.google.com/maps/place/Sinar+Benteng+Shop/@-6.1726936,106.6286993,18.28z/data=!4m10!1m2!2m1!1ssinar+benteng+shop!3m6!1s0x2e69f8d2a8ce883b:0xf78dd75f677bfb89!8m2!3d-6.1727637!4d106.6297408"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#e8bf56] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors relative z-10"
               >
                 Buka di Google Maps
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
            </div>

            <div className="space-y-4">
               {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 border-b border-white/10 hover:bg-[#1e293b] hover:shadow-sm transition-all rounded-sm"
                >
                  <div className="text-[#e8bf56]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-slate-400 font-medium">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            {/* <div className="bg-[#1e293b] rounded-xl p-5 shadow-lg border border-white/5">
              <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center text-slate-400 hover:bg-[#2563eb] hover:text-white transition-all"
                  >
                    {social === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.88 0 1.79.16 1.79.16v1.97h-1a1.16 1.16 0 00-1.3 1.26v1.52h2.22l-.35 2.33h-1.87v5.67A8 8 0 0020 12.05z" />
                      </svg>
                    )}
                    {social === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                      </svg>
                    )}
                    {social === 'linkedin' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
