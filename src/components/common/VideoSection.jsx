// ✅ VideoSection.jsx
import React from "react";

const VideoSection = ({ videoUrl, title, description, linkText, linkHref }) => {
  return (
    <section
      className="bg-[#2a2d45] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20 text-white"
      style={{ fontFamily: '"Source Sans Pro"' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
        {/* 🎬 Video Embed */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        </div>

        {/* 📝 Text */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            {description}{" "}
            {linkText && linkHref && (
              <a
                href={linkHref}
                className="text-[#3fb7fe] underline hover:text-blue-400 transition"
              >
                {linkText}
              </a>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
