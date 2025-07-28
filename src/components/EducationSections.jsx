import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reversal from "../assets/reversal.png";
import trailing from "../assets/trailing.png";
import swap from "../assets/swap.png";
import abc from "../assets/abc.png";
import mistake from "../assets/mistake.png";
import election from "../assets/election.png";
// import tradefuture from "../assets/tradefuture.png";

const cardData1 = [
  {
    title: "What is a Trend Reversal?",
    image: reversal,
    desc: "Trend reversal markets end one existing trend and begin a new one...",
    link: "#",
  },
  {
    title: "What is a Trailing Stop?",
    image: trailing,
    desc: "Trailing Stop is used to lock profits...",
    link: "#",
  },
  {
    title: "What is a Swap?",
    image: swap,
    desc: "Swaps refer to interest fees you either pay or receive...",
    link: "#",
  },
];

const cardData2 = [
  {
    title: "US election: How to navigate volatility and manage risk",
    image: election,
    desc: "As the 2024 US election enters the home stretch...",
    link: "#",
  },
  {
    title: "ABC Patterns in Trading: A Strategy Guide",
    image: abc,
    desc: "ABC patterns are computed using AB and BC waves...",
    link: "#",
  },
  {
    title: "8 Common Mistakes New Futures Traders Make",
    image: mistake,
    desc: "Entering futures trading without preparation can lead to losses...",
    link: "#",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const CardSlider = ({ title, subtitle, cards }) => (
  <div className="bg-[#f8f8f8] py-10">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-[10px] text-red-500 uppercase tracking-widest font-semibold mb-2">
        {subtitle}
      </h2>
      <h3 className="text-center text-xl font-medium mb-6">{title}</h3>

      <Slider {...sliderSettings}>
        {cards.map((card, i) => (
          <div key={i} className="px-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-1">
                <h4 className="font-semibold text-sm mb-1">{card.title}</h4>
                <p className="text-xs text-gray-600">{card.desc}</p>
              </div>
              <div className="px-4 pb-4">
                <a
                  href={card.link}
                  className="text-blue-500 text-xs hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default function EducationSections() {
  return (
    <>
      <CardSlider title="" subtitle="Advanced Guides" cards={cardData1} />
      <CardSlider
        title="Browse through our library for more insights"
        subtitle="Trading Basics"
        cards={cardData2}
      />
    </>
  );
}
