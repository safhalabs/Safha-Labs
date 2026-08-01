import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

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
        <Footer />
      </main>
    </>
  )
}
