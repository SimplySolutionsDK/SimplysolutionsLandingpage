import React, { useState, useEffect, useRef } from 'react';
    import { useTranslation } from 'react-i18next';
    import enFlag from '../assets/en.png';
    import daFlag from '../assets/da.png';
    import deFlag from '../assets/de.png';
    import esFlag from '../assets/es.png';

    const languages = [
      { code: 'en', name: 'English', flag: enFlag },
      { code: 'da', name: 'Danish', flag: daFlag },
      { code: 'de', name: 'German', flag: deFlag },
      { code: 'es', name: 'Spanish', flag: esFlag }
    ];

    function LanguageSelector() {
      const { i18n } = useTranslation();
      const [isOpen, setIsOpen] = useState(false);
      const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'da');
      const dropdownRef = useRef(null);

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

      const handleLanguageChange = (languageCode) => {
        i18n.changeLanguage(languageCode);
        setCurrentLanguage(languageCode);
        setIsOpen(false);
      };

      const getCurrentFlag = () => {
        const language = languages.find(lang => lang.code === currentLanguage) || languages[0];
        return language.flag;
      };

      return (
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center focus:outline-none transition-transform duration-200 hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Select Language"
          >
            <img
              src={getCurrentFlag()}
              alt="Selected Language"
              className="h-6 w-6 rounded-full border border-gray-700 hover:border-white transition-colors duration-200"
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 transform origin-top-right transition-all duration-200 ease-in-out">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`
                    w-full px-4 py-2 flex items-center text-left hover:bg-gray-700 transition-colors duration-200
                    ${currentLanguage === language.code ? 'bg-gray-700' : ''}
                  `}
                >
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="h-5 w-5 rounded-full mr-3"
                  />
                  <span className="text-sm text-gray-200">{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    export default LanguageSelector;
