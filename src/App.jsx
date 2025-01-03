import React from 'react';
    import Navbar from './components/Navbar';
    import HeroSection from './components/HeroSection';
    import FeaturesSection from './components/FeaturesSection';
    import ContactSection from './components/ContactSection';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="font-sans">
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <ContactSection />
          <Footer />
        </div>
      );
    }

    export default App;
