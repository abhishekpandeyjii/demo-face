import PageBanner from '../components/common/PageBanner/PageBanner';
import About from '../components/sections/About/About';
import Counter from '../components/sections/Counter/Counter';
import Team from '../components/sections/Team/Team';
import Process from '../components/sections/Process/Process';
import CTA from '../components/sections/CTA/CTA';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <About />
      <Counter />
      <Process />
      <Team />
      <CTA />
    </>
  );
}
