import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';

// Below-the-fold components loaded dynamically to optimize initial bundle size & TBT
const About = dynamic(() => import('@/components/about/About'));
const WhyUs = dynamic(() => import('@/components/why-us/WhyUs'));
const Services = dynamic(() => import('@/components/services/Services'));
const Process = dynamic(() => import('@/components/process/Process'));
const Portfolio = dynamic(() => import('@/components/portfolio/Portfolio'));
const FAQ = dynamic(() => import('@/components/faq/FAQ'));
const Footer = dynamic(() => import('@/components/layout/Footer'));

export default function Home() {
  return (
    <>
      {/* Above-the-fold Critical Render Path */}
      <Navbar />
      <main>
        <Hero />
        
        {/* Below-the-fold Lazy Rendered Sections */}
        <section className="section-lazy-render">
          <About />
        </section>
        <section className="section-lazy-render">
          <WhyUs />
        </section>
        <section className="section-lazy-render">
          <Services />
        </section>
        <section className="section-lazy-render">
          <Process />
        </section>
        <section className="section-lazy-render">
          <Portfolio />
        </section>
        <section className="section-lazy-render">
          <FAQ />
        </section>
        <Footer />
      </main>
    </>
  );
}
