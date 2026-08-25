import PageBanner from '../components/common/PageBanner/PageBanner';
import Contact from '../components/sections/Contact/Contact';
import FAQ from '../components/sections/FAQ/FAQ';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <Contact />
      <FAQ />
    </>
  );
}
