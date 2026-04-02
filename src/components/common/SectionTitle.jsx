import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`space-y-4 ${centered ? 'text-center mx-auto' : 'text-left'} max-w-2xl`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-8 h-[2px] bg-brand-accent"></div>
        <span className="text-editorial-caption">Bitácora Fundación</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-midnight leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-brand-muted text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
