import React from 'react';

const ImportantInfoSection = ({ text }) => {
  return (
    <div className="bg-white text-center py-6 px-4">
      <p className="text-sm font-medium text-gray-800" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
        {text}
      </p>
    </div>
  );
};

export default ImportantInfoSection;
