import React from 'react';
    import { useTranslation } from 'react-i18next';

    function ContactSection() {
      const { t } = useTranslation();

      return (
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide">{t('contactUs')}</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">{t('contactUsDescription')}</p>
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              {t('contactNow')}
            </button>
          </div>
        </section>
      );
    }

    export default ContactSection;
