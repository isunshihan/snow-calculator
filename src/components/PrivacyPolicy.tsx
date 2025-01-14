import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                When you use Snow Day Calculator, we collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Location information you provide (city, zip code)</li>
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (how you interact with our website)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate weather predictions for your location</li>
                <li>Improve our prediction algorithms and services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Maintain and improve our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share anonymous, 
                aggregated data for analytical purposes or to improve our services. We may also share information 
                if required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your experience on our website. These help us 
                remember your preferences, understand how you use our site, and improve our services. You can 
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your information from unauthorized access, 
                alteration, or disclosure. However, no internet transmission is completely secure, and we cannot 
                guarantee the absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our service is intended for general audiences. We do not knowingly collect personal information 
                from children under 13. If you believe we have inadvertently collected such information, 
                please contact us to have it removed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new policy on this page. Your continued use of our service after such modifications 
                constitutes your acknowledgment of the modified policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:privacy@snowcalculator.com" className="text-blue-600 hover:text-blue-800">
                  privacy@snowcalculator.com
                </a>
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
              Last updated: January 15, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
