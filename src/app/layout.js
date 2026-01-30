import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://sinarbenteng.co.id'), // Replace with actual domain
  title: {
    default: "Sinar Benteng - Konstruksi & Bangunan Profesional",
    template: "%s | Sinar Benteng Construction"
  },
  description: "Kontraktor umum terpercaya di Jakarta (PT Sinar Benteng) melayani jasa konstruksi gedung, renovasi rumah, infrastruktur jalan, & desain arsitektur presisi.",
  keywords: ["kontraktor jakarta", "jasa konstruksi bangunan", "renovasi rumah", "kontraktor gedung", "arsitek jakarta", "infrastruktur jalan", "PT Sinar Benteng", "general contractor indonesia"],
  authors: [{ name: "PT Sinar Benteng Perkasa Jaya Sakti" }],
  creator: "Sinar Benteng Team",
  publisher: "PT Sinar Benteng Perkasa Jaya Sakti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'construction',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sinar Benteng - Konstruksi & Bangunan Profesional",
    description: "Mitra konstruksi terpercaya untuk membangun masa depan dengan kekuatan dan keandalan. Ahli dalam pembangunan gedung, jalan, dan renovasi.",
    url: 'https://sinarbenteng.co.id',
    siteName: 'Sinar Benteng',
    images: [
      {
        url: '/hero-bg.webp', // Ideally strictly absolute URL if metadataBase is not enough for some parsers, but nextjs handles relative if base is set
        width: 1200,
        height: 630,
        alt: 'Proyek Sinar Benteng Construction',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sinar Benteng - Konstruksi Terpercaya",
    description: "Jasa konstruksi dan renovasi profesional di Jakarta. Hubungi kami untuk konsultasi proyek.",
    images: ['/hero-bg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // User typically needs to provide this
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-32x32.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "PT Sinar Benteng Perkasa Jaya Sakti",
    "alternateName": "Sinar Benteng",
    "url": "https://sinarbenteng.co.id",
    "logo": "https://sinarbenteng.co.id/logo.webp",
    "image": "https://sinarbenteng.co.id/hero-bg.webp",
    "description": "Kontraktor umum terpercaya di Jakarta dengan spesialisasi konstruksi gedung, renovasi, infrastruktur jalan, dan desain arsitektur modern.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Konstruksi Utama No. 123",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.8456"
    },
    "telephone": "+6285194940033",
    "email": "info@sinarbenteng.co.id",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": "Indonesia"
  };

  return (
    <html lang="id">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
