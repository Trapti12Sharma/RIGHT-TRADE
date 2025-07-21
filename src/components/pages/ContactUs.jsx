import React from "react";
import BannerSection from "../common/BannerSection";
import ContactFormSection from "../common/ContactFormSection";
import MapAddressSection from "../common/MapAddressSection";
import contactBanner from "../../assets/contactus.png";

const ContactUs = () => {
  return (
    <div className="pt-20">
      <BannerSection
        backgroundImage={contactBanner}
        title="Contact Us"
        subtitle="Got any questions? Let us know how we can help."
      />
      <MapAddressSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactUs;
