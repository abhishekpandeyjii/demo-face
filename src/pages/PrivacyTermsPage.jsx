import PageBanner from '../components/common/PageBanner/PageBanner';

export default function PrivacyTermsPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy & Terms of Service"
        breadcrumbs={[{ label: 'Privacy & Terms' }]}
      />
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="policy-content" style={{ color: 'var(--text-color)', lineHeight: '1.8' }}>
            <h3 style={{ marginBottom: '15px' }}>1. Privacy Policy Overview</h3>
            <p style={{ marginBottom: '30px' }}>
              At ChoreDigital, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy outlines how we collect, use, and safeguard the data you provide when using our website and services.
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent,
              except as required by law.
            </p>

            <h3 style={{ marginBottom: '15px' }}>2. Data Collection</h3>
            <p style={{ marginBottom: '30px' }}>
              We collect information from you when you fill out a contact form, use our chatbot, or engage with our services. 
              The collected data may include your name, email address, phone number, and project details. This information is solely used to 
              communicate with you and provide the requested services.
            </p>

            <h3 style={{ marginBottom: '15px' }}>3. Terms of Service</h3>
            <p style={{ marginBottom: '30px' }}>
              By accessing and using our website, you agree to comply with our Terms of Service. All content, designs, graphics, and 
              intellectual property displayed on this site are owned by ChoreDigital Communication LLP. You may not reproduce, distribute, or 
              use our materials for commercial purposes without explicit written permission.
            </p>

            <h3 style={{ marginBottom: '15px' }}>4. Service Delivery and Revisions</h3>
            <p style={{ marginBottom: '30px' }}>
              For digital services (Web Design, Document Management, Data Entry, Virtual Assistance), the scope of work, timelines, and 
              revision policies will be defined in a formal agreement prior to project commencement. We strive for 100% client satisfaction and 
              will work diligently to meet your project requirements.
            </p>

            <div style={{ padding: '20px', background: 'rgba(24, 104, 232, 0.05)', borderRadius: '10px', marginTop: '40px' }}>
              <p style={{ margin: 0, fontWeight: 500 }}>
                If you have any questions regarding our Privacy Policy or Terms of Service, please contact us at <a href="mailto:support@chorevirtual.com" style={{ color: 'var(--primary)' }}>support@chorevirtual.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
