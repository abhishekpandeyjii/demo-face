import PageBanner from '../components/common/PageBanner/PageBanner';
import Portfolio from '../components/sections/Portfolio/Portfolio';
import CTA from '../components/sections/CTA/CTA';

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        title="Our Portfolio"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />
      <Portfolio />
      <CTA />
    </>
  );
}
