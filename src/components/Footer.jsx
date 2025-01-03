import React from 'react';
    import { useTranslation } from 'react-i18next';

    function Footer() {
      const { t } = useTranslation();
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm md:text-base">{t('footer', { year: currentYear })}</p>
        </footer>
      );
    }

    export default Footer;
