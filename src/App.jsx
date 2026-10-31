import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import HomeSection from './components/HomeSection';
import OwnerDetails from './components/OwnerDetails';
import ProjectsStats from './components/ProjectsStats';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientTestimonials from './components/ClientTestimonials';
import GetInTouch from './components/GetInTouch';
import ScrollReveal from './components/ScrollReveal';

function Home() {
  return (
    <>
      <HomeSection />
      <OwnerDetails />
    </>
  );
}

function Achievements() {
  return <ProjectsStats />;
}

function TestimonialsPage() {
  return <ClientTestimonials />;
}

function ContactPage() {
  return <GetInTouch />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="site-shell">
        <main className="site-main">
          <ScrollReveal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Achievements />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
