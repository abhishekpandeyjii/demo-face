import Hero from '../components/sections/Hero/Hero';
import Clients from '../components/sections/Clients/Clients';
import Services from '../components/sections/Services/Services';
import About from '../components/sections/About/About';
import Counter from '../components/sections/Counter/Counter';
import Features from '../components/sections/Features/Features';
import Process from '../components/sections/Process/Process';
import Portfolio from '../components/sections/Portfolio/Portfolio';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import Team from '../components/sections/Team/Team';
import Blog from '../components/sections/Blog/Blog';
import FAQ from '../components/sections/FAQ/FAQ';
import CTA from '../components/sections/CTA/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <About />
      <Counter />
      <Features />
      <Process />
      <Portfolio />
      <Testimonials />
      <Team />
      <Blog />
      <FAQ />
      <CTA />
    </>
  );
}
