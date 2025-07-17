import React from "react";
import { Mail, FileText, MessageCircle } from "lucide-react"; // You can replace with any icon lib

const SupportSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 px-4 md:px-12 text-left">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Join FXTM today to trade with some of the best pricing in the business
        </h2>

        <p className="text-gray-700 mb-4 text-lg">
          It takes just minutes to create an account. Let’s get you started.
        </p>

        <p className="font-semibold text-md mb-2">Need a hand?</p>
        <p className="text-gray-700 mb-10">
          Our Customer Support team are more than happy to help you out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-md p-4">
              <Mail className="text-orange-600 w-8 h-8" />
            </div>
            <p className="mt-3 font-medium text-gray-800">Raise a request</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-md p-4">
              <FileText className="text-orange-600 w-8 h-8" />
            </div>
            <p className="mt-3 font-medium text-gray-800">Help Center</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow-md p-4">
              <MessageCircle className="text-orange-600 w-8 h-8" />
            </div>
            <p className="mt-3 font-medium text-gray-800">Chat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
