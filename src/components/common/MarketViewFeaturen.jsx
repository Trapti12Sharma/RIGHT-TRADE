import { FaChartLine, FaLayerGroup, FaSignal } from "react-icons/fa";

const MarketViewFeaturen = ({
  title,
  subtitle,
  features,
  bgColor,
  textcolor,
}) => {
  return (
    <section className={`w-full ${bgColor} py-12 px-4 md:px-10 ${textcolor}`}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold ">{title}</h2>
        <p className="text-[24px] text-[#FABF16] mt-4">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-left transition-all hover:shadow-lg"
          >
            <div className="text-yellow-400 text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#1a1f3c] mb-3">
              {item.heading}
            </h3>
            <ul className="list-disc list-inside text-base text-[#333] space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketViewFeaturen;
