// src/components/common/ContactOptions.jsx

import React from 'react';
import { Mail, FileText, MessageSquare } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={28} className="text-[#f34d2d]" />,
    title: 'Raise Request',
  },
  {
    icon: <FileText size={28} className="text-[#f34d2d]" />,
    title: 'Help Centre',
  },
  {
    icon: <MessageSquare size={28} className="text-[#f34d2d]" />,
    title: 'Chat',
  },
];

const ContactOptions = () => {
  return (
    <section className="bg-[#f8f8f8] text-center py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-medium text-[#101828] mb-4 max-w-2xl mx-auto">
        Ready to start trading with a broker that gives you flawless execution and great pricing?
      </h2>
      <p className="text-sm sm:text-base text-[#3b3b3b] mb-10">
        Join us today! Feel free to get in touch if you have any questions or need a helping hand.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        {contactItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactOptions;
