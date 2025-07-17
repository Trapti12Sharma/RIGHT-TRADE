import React from "react";

const PartnerSection = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-8 lg:px-20 text-center md:text-center">
      <h4
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          fontSize: "24px",
        }}
        className="text-[#212529] leading-snug max-w-4xl mx-auto md:text-center text-justify"
      >
        Partner with RightTRADE Capital, a leading online forex trading website, to leverage
        global market opportunities.
      </h4>
      <p
        style={{
          fontFamily: '"Source Sans Pro", sans-serif',
          fontSize: "16px",
        }}
        className="mt-6 text-base text-[#212529] max-w-4xl mx-auto md:text-center text-justify"
      >
        With friendly Customer Support, the latest technology and a range of
        account types, we've got everything you need to discover better trading.
      </p>
    </section>
  );
};

export default PartnerSection;
