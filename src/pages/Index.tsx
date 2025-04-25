
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    document.title = 'Nagaram Masala | Premium Indian Spices';
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
