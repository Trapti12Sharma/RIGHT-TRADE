// src/components/common/BreadcrumbAndDescription.jsx

import React from "react";

const BreadcrumbAndDescription = ({ breadcrumbs, heading, description }) => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-center text-[#1e1e1e]">
      {/* Breadcrumb */}
      <div className="text-sm sm:text-base text-gray-600 mb-6 text-left">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            <a
              href={crumb.href}
              className={`hover:underline ${
                index === breadcrumbs.length - 1
                  ? "text-black"
                  : "text-blue-500"
              }`}
            >
              {crumb.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-1" style={{ color: "#FABF16" }}>
                {">"}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Heading */}
      {heading && (
        <h2 className="text-xl sm:text-2xl font-medium mb-4">{heading}</h2>
      )}

      {/* Description */}
      <p className="text-sm sm:text-base max-w-5xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default BreadcrumbAndDescription;
