import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Common Components
import Preloader from './components/common/Preloader/Preloader';
import CustomCursor from './components/common/CustomCursor/CustomCursor';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import BackToTop from './components/common/BackToTop/BackToTop';
import Chatbot from './components/common/Chatbot/Chatbot';
import WhatsAppButton from './components/common/WhatsAppButton/WhatsAppButton';
import { useStickyHeader } from './hooks/useStickyHeader';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailsPage from './pages/PortfolioDetailsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import VaServicesPage from './pages/VaServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import ClientsPage from './pages/ClientsPage';
import NotFound from './pages/NotFound';

// New Pages
import WebDesignPage from './pages/WebDesignPage';
import MobileAppPage from './pages/MobileAppPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import ProductDevelopmentPage from './pages/ProductDevelopmentPage';
import EmailManagementPage from './pages/EmailManagementPage';
import DataEntryPage from './pages/DataEntryPage';
import CustomerSupportPage from './pages/CustomerSupportPage';
import DocumentManagementPage from './pages/DocumentManagementPage';
import ResearchWorkPage from './pages/ResearchWorkPage';
import SitemapPage from './pages/SitemapPage';
import PrivacyTermsPage from './pages/PrivacyTermsPage';
import PresentationPage from './pages/PresentationPage';

// Lenis smooth scroll setup
import Lenis from 'lenis';

// Scroll to top or to hash element on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the page and elements have rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 }); // -80px to account for sticky header
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}
// Layout wrapper with shared components
function Layout({ children }) {
  const { showBackToTop } = useStickyHeader();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Make lenis globally accessible for hash scrolling
    window.lenis = lenis;

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
      <BackToTop visible={showBackToTop} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Preloader />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/va-services" element={<VaServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio-details" element={<PortfolioDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          
          <Route path="/website-design" element={<WebDesignPage />} />
          <Route path="/mobile-app-development" element={<MobileAppPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/product-development" element={<ProductDevelopmentPage />} />
          
          <Route path="/email-management" element={<EmailManagementPage />} />
          <Route path="/data-entry" element={<DataEntryPage />} />
          <Route path="/customer-support" element={<CustomerSupportPage />} />
          <Route path="/document-management" element={<DocumentManagementPage />} />
          <Route path="/research-work" element={<ResearchWorkPage />} />

          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
          <Route path="/presentation" element={<PresentationPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
