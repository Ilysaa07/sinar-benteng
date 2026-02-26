import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsComponent from '../components/Projects';

export const metadata = {
  title: 'Studi Kasus Proyek Konstruksi & Renovasi',
  description: 'Proyek portofolio Sinar Benteng. Studi kasus nyata pengerjaan konstruksi komersial, rumah, pabrik, dan infrastruktur di Tangerang dan sekitarnya.',
};

export default function ProyekIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#0f172a] min-h-screen">
        <ProjectsComponent />
      </main>
      <Footer />
    </>
  );
}
