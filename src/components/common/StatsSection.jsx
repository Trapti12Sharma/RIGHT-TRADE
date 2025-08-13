"use client";

const StatsSection = ({ title, subtitle, buttonText, note, image }) => {
  return (
    <section className="relative w-full min-h-[480px] overflow-hidden font-['Source_Sans_Pro',sans-serif]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Polygon Overlay - Responsive */}
      <div className="absolute inset-0 transition-all duration-1000">
        {/* Mobile: Full overlay */}
        <div className="block md:hidden bg-[#121733] absolute inset-0" />
        {/* Desktop: Polygon overlay */}
        <div
          className="hidden md:block absolute inset-0 bg-[#121733]"
          style={{
            clipPath:
              "polygon(0 0, min(65%, 900px) 0, min(45%, 600px) 100%, 0 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center text-center md:text-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl md:max-w-1/2">
            {/* Content */}
            <div className="animate-in slide-in-from-left-8 duration-800 ease-out">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="group relative overflow-hidden border-2 border-white text-white hover:bg-white hover:text-[#f7421e] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50">
                  <span className="relative z-10">{buttonText}</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
