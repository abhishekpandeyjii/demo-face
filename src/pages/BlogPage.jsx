import PageBanner from '../components/common/PageBanner/PageBanner';
import Blog from '../components/sections/Blog/Blog';
import CTA from '../components/sections/CTA/CTA';

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Our Blog"
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <Blog />
      <CTA />
    </>
  );
}
