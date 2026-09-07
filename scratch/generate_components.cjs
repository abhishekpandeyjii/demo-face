const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

const services = [
  { name: 'WebDesignPage', title: 'Website Design & Development', route: '/website-design' },
  { name: 'MobileAppPage', title: 'Mobile App Development', route: '/mobile-app-development' },
  { name: 'DigitalMarketingPage', title: 'Digital Marketing', route: '/digital-marketing' },
  { name: 'ProductDevelopmentPage', title: 'Product Development', route: '/product-development' },
  { name: 'EmailManagementPage', title: 'Email Management', route: '/email-management' },
  { name: 'DataEntryPage', title: 'Data Entry', route: '/data-entry' },
  { name: 'CustomerSupportPage', title: 'Customer Support', route: '/customer-support' },
  { name: 'DocumentManagementPage', title: 'Document Management', route: '/document-management' },
  { name: 'ResearchWorkPage', title: 'Research Work', route: '/research-work' },
];

const template = (name, title) => "import PageBanner from '../components/common/PageBanner/PageBanner';\n" +
"import CTA from '../components/sections/CTA/CTA';\n\n" +
"export default function " + name + "() {\n" +
"  return (\n" +
"    <>\n" +
"      <PageBanner\n" +
"        title=\"" + title + "\"\n" +
"        breadcrumbs={[\n" +
"          { label: 'Home', path: '/' },\n" +
"          { label: '" + title + "' }\n" +
"        ]}\n" +
"      />\n" +
"      \n" +
"      <section className=\"service-details-section section-padding\">\n" +
"        <div className=\"container\">\n" +
"          <div className=\"service-main-card\">\n" +
"            <h2 className=\"service-title\">" + title + "</h2>\n" +
"            <p className=\"service-text\">\n" +
"              Detailed information about " + title + " will be provided here. \n" +
"              We offer comprehensive solutions tailored to your business needs.\n" +
"            </p>\n" +
"          </div>\n" +
"        </div>\n" +
"      </section>\n\n" +
"      <CTA />\n" +
"    </>\n" +
"  );\n" +
"}\n";

services.forEach(service => {
  const filePath = path.join(pagesDir, service.name + '.jsx');
  fs.writeFileSync(filePath, template(service.name, service.title));
  console.log("Created " + service.name + ".jsx");
});
