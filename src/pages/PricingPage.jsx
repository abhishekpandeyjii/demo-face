import PageBanner from '../components/common/PageBanner/PageBanner';
import Pricing from '../components/sections/Pricing/Pricing';
import FAQ from '../components/sections/FAQ/FAQ';
import CTA from '../components/sections/CTA/CTA';

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing Plans"
        breadcrumbs={[{ label: 'Pricing' }]}
      />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
