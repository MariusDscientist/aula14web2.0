import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-4">{title}</h2>
    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;
