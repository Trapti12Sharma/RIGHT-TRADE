import React from 'react';
import { FaEnvelope, FaFileAlt, FaComments } from 'react-icons/fa';

const GetMoreMarketsSection = () => {
  return (
    <section
      className="bg-gray-50 py-10 px-4 sm:px-10 lg:px-24"
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading and text */}
        <h2 className="text-xl sm:text-2xl font-normal mb-3 text-left">
          Get more from the markets when you join RightTRADE Capital
        </h2>

        <p className="mb-3 text-sm text-left">
          It takes just minutes to create an account. Let’s get you started.
        </p>

        <p className="font-semibold mb-1 text-sm text-left">Need a hand?</p>
        <p className="mb-8 text-sm text-left">
          Our Customer Support team are more than happy to answer your questions.
        </p>

        {/* Icons row below text */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-2">
              <FaEnvelope className="text-orange-600 text-xl" />
            </div>
            <p className="text-sm">Raise Request</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-2">
              <FaFileAlt className="text-orange-600 text-xl" />
            </div>
            <p className="text-sm">Help Centre</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-2">
              <FaComments className="text-orange-600 text-xl" />
            </div>
            <p className="text-sm">Chat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMoreMarketsSection;
