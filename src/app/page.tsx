import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import WhyUs from '@/components/why-us/WhyUs';
import Services from '@/components/services/Services';
import Process from '@/components/process/Process';
import Portfolio from '@/components/portfolio/Portfolio';
import FAQ from '@/components/faq/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
