// src/components/common/BreadcrumbAndDescription.jsx

import React from 'react';

const BreadcrumbAndDescription = ({ breadcrumbs, description }) => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-center text-[#1e1e1e]">
      {/* Breadcrumb */}
      <div className="text-sm sm:text-base text-gray-600 mb-6 text-left">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            <a href={crumb.href} className={`hover:underline ${index === breadcrumbs.length - 1 ? 'text-black' : 'text-blue-500'}`}>
              {crumb.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-1 text-red-600">{'>'}</span>
            )}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg max-w-5xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default BreadcrumbAndDescription;
