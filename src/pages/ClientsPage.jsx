import PageBanner from '../components/common/PageBanner/PageBanner';
import Clients from '../components/sections/Clients/Clients';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import ClientLogos from '../components/sections/Clients/ClientLogos';
import CTA from '../components/sections/CTA/CTA';

export default function ClientsPage() {
  return (
    <>
      <PageBanner
        title="Our Valued Clients"
        breadcrumbs={[
          { label: 'Clients' }
        ]}
      />

      <Clients />
      <Testimonials />
      <ClientLogos isGrid={true} />
      <CTA />
    </>
  );
}
