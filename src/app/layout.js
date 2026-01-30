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
  title: "Sinar Benteng - Konstruksi & Bangunan Profesional",
  description: "PT Sinar Benteng adalah perusahaan konstruksi terpercaya yang melayani pembangunan gedung, renovasi, infrastruktur, dan desain arsitektur dengan kualitas terbaik di Indonesia.",
  keywords: "konstruksi, bangunan, renovasi, infrastruktur, arsitektur, kontraktor, Jakarta, Indonesia, Sinar Benteng",
  authors: [{ name: "PT Sinar Benteng" }],
  openGraph: {
    title: "Sinar Benteng - Konstruksi & Bangunan Profesional",
    description: "Mitra konstruksi terpercaya untuk membangun masa depan dengan kekuatan dan keandalan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
