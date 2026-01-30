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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <WhyUs /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
