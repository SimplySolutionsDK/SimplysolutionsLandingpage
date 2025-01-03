import React from 'react';
    import { useTranslation } from 'react-i18next';
    import heroImage from '../assets/hero-image.jpg';

    function HeroSection() {
      const { t } = useTranslation();

      return (
        <section className="bg-gray-900 text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 animate-gradient-background"></div>
          <div className="container mx-auto text-center relative z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">{t('welcome')}</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">{t('partner')}</p>
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              {t('getStarted')}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </section>
      );
    }

    export default HeroSection;
