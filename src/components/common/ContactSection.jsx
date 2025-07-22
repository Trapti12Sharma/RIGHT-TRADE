// src/components/common/ContactSection.jsx

import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = ({ heading, subheading, contacts }) => {
  return (
    <section className="bg-[#ff3e1d] text-white py-12 px-4 text-center font-[Source Sans Pro] relative z-10">
      <div className="max-w-4xl mx-auto">
        <h5 className="text-sm font-semibold uppercase mb-2">{heading}</h5>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{subheading}</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="border border-white p-4 rounded-full hover:bg-white hover:text-[#ff3e1d] transition duration-300"
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
