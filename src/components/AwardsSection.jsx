import React from "react";
import award from "../assets/award.svg";
import award1 from "../assets/award1.svg";
import award2 from "../assets/award2.svg";
import award3 from "../assets/award3.svg";

const awards = [
  {
    // title: "The Best Educational Program",
    // year: "2022",
    // subtitle: "WORLD FINANCIAL AWARD",
    img: award, // place appropriate svgs in public/icons
  },
  {
    // title: "Best Online Trading Platform Nigeria",
    // year: "2021",
    // subtitle: "WORLD BUSINESS OUTLOOK",
    img: award1,
  },
  {
    // title: "Best Trading Experience",
    // year: "2021",
    // subtitle: "WORLD FINANCE",
    img: award2,
  },
  {
    // title: "The Most Trusted Forex Broker",
    // year: "2022",
    // subtitle: "WORLD FINANCIAL AWARD",
    img: award3,
  },
];

const AwardsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-2xl font-bold text-[#ff4c1b] mb-12">AWARDS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 items-center">
        {awards.map((a, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <img src={a.img} alt={a.title} className="h-24 w-auto" />
            <p className="text-gray-600 text-center text-sm">{a.title}</p>
            <p className="text-gray-600 text-base font-semibold">{a.year}</p>
            <p className="text-gray-600 text-center text-xs">{a.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
