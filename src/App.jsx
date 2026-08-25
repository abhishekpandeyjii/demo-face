import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Common Components
import Preloader from './components/common/Preloader/Preloader';
import CustomCursor from './components/common/CustomCursor/CustomCursor';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import BackToTop from './components/common/BackToTop/BackToTop';
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

// Lenis smooth scroll setup
import Lenis from 'lenis';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
