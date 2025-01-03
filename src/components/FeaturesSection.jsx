import React from 'react';
    import { useTranslation } from 'react-i18next';

    function FeaturesSection() {
      const { t } = useTranslation();

      return (
        <section className="py-12 md:py-16 bg-gray-800 text-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide">{t('features')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-700 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{t('automation')}</h3>
                <p className="text-gray-300">{t('automationDescription')}</p>
              </div>
              <div className="bg-gray-700 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{t('processOptimization')}</h3>
                <p className="text-gray-300">{t('processOptimizationDescription')}</p>
              </div>
              <div className="bg-gray-700 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{t('integration')}</h3>
                <p className="text-gray-300">{t('integrationDescription')}</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default FeaturesSection;
