import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            About Us
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Project Introduction
            </h2>
            <p className="text-gray-600">
              Snow Calculator is an innovative weather prediction tool dedicated to providing accurate snowfall forecasts 
              for students and educators. We utilize advanced meteorological data analysis technology, combining multiple 
              reliable weather data sources to deliver precise snow prediction services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We are committed to providing the most accurate and timely snowfall predictions. Through our simple and 
              intuitive interface design, we make professional-grade weather forecasting accessible to everyone. We believe 
              that accurate weather predictions not only help schools make better decisions but also enable teachers and 
              students to plan their time more effectively.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Technical Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time meteorological data analysis</li>
              <li>Multi-source data cross-validation</li>
              <li>Intuitive user interface</li>
              <li>Accurate snowfall prediction algorithms</li>
              <li>Continuous technical updates and optimization</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, suggestions, or partnership opportunities, please don't hesitate to reach out. 
              We look forward to hearing from you and working together to improve our services.
            </p>
            <p className="text-gray-600">
              Email: contact@snowcalculator.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
