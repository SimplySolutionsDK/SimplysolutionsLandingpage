import React from 'react';
    import { useTranslation } from 'react-i18next';
    import logo from '../assets/simply-logo.png';
    import LanguageSelector from './LanguageSelector';

    function Navbar() {
      const { t } = useTranslation();

      return (
        <nav className="bg-gray-900 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Simply Solutions Logo" className="h-8 mr-2" />
              <span className="text-white font-bold text-xl">Simply Solutions</span>
            </a>
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="#home" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">{t('home')}</a>
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">{t('about')}</a>
              <a href="#products" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">{t('products')}</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition duration-300 hidden md:block">{t('contact')}</a>
              <LanguageSelector />
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
