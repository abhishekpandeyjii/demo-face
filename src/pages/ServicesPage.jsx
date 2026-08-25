import PageBanner from '../components/common/PageBanner/PageBanner';
import Services from '../components/sections/Services/Services';
import Features from '../components/sections/Features/Features';
import Process from '../components/sections/Process/Process';
import FAQ from '../components/sections/FAQ/FAQ';
import CTA from '../components/sections/CTA/CTA';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        breadcrumbs={[{ label: 'Services' }]}
      />
      <Services />
      <Features />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
