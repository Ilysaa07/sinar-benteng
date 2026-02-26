import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = dynamic(() => import('./components/About'));
const Services = dynamic(() => import('./components/Services'));
const Projects = dynamic(() => import('./components/Projects'));
const WhyUs = dynamic(() => import('./components/WhyUs'));
const Contact = dynamic(() => import('./components/Contact'));
const Footer = dynamic(() => import('./components/Footer'));
const AreaLayanan = dynamic(() => import('./components/AreaLayanan'));

export default function Home() {
  const schemaList = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Berapa biaya jasa bangun rumah di Banten & Tangerang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biaya jasa bangun rumah di Banten & Tangerang bervariasi mulai dari Rp 3.500.000 per meter persegi, tergantung kerumitan desain dan kualitas material."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah Sinar Benteng memberikan garansi hasil konstruksi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, kami memberikan jaminan garansi retensi dan pemeliharaan untuk memastikan bangunan aman dan sesuai ekspektasi jangka panjang."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sinar Benteng Construction",
      "image": "https://sinarbenteng.com/logo.webp",
      "url": "https://sinarbenteng.com/",
      "telephone": "+6285177111115",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Serang Km. 10",
        "addressLocality": "Tangerang",
        "addressRegion": "Banten",
        "postalCode": "15111",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.1772, // Example coordinate
        "longitude": 106.6369
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Banten"
        },
        {
          "@type": "City",
          "name": "Tangerang"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/sinarbenteng",
        "https://www.facebook.com/sinarbenteng"
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <WhyUs /> */}
        <AreaLayanan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
