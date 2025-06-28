import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Pricing from './components/Pricing';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PremiumBackground from './components/PremiumBackground';
import AdvancedCursorTrail from './components/AdvancedCursorTrail';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Cancellation from './pages/Cancellation';

const HomePage = () => (
  <>
    <PremiumBackground />
    <Header />
    <Hero />
    <ProjectShowcase />
    <Pricing />
    <ComingSoon />
    <Footer />
    <WhatsAppFloat />
    <AdvancedCursorTrail />
  </>
);

function App() {
  return (
    <Router>
      <div className="text-white font-['Poppins'] overflow-x-hidden relative min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<><PremiumBackground /><Header /><About /><Footer /><AdvancedCursorTrail /></>} />
          <Route path="/terms" element={<><PremiumBackground /><Header /><Terms /><Footer /><AdvancedCursorTrail /></>} />
          <Route path="/privacy" element={<><PremiumBackground /><Header /><Privacy /><Footer /><AdvancedCursorTrail /></>} />
          <Route path="/refund" element={<><PremiumBackground /><Header /><Refund /><Footer /><AdvancedCursorTrail /></>} />
          <Route path="/cancellation" element={<><PremiumBackground /><Header /><Cancellation /><Footer /><AdvancedCursorTrail /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;