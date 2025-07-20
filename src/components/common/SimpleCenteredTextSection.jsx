import React from "react";

const SimpleCenteredTextSection = ({ heading, subtext,style = {} }) => {
  return (
    // <section className="w-full bg-[#f9f9f9] py-10 px-4 text-center text-[#1d1d1d]">
    //   <h2 className="text-2xl sm:text-3xl font-semibold mb-3" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    //     {heading}
    //   </h2>
    //   <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    //     {subtext}
    //   </p>
    // </section>
       <section style={style.container}>
      <h2 style={style.heading}>{heading}</h2>
      <p style={style.subtext}>{subtext}</p>
    </section>
  );
};

export default SimpleCenteredTextSection;
