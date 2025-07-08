import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#10162f] text-white text-xs leading-relaxed">
      {/* Top full-width horizontal line */}
      <div className="w-full border-t border-gray-600"></div>

      {/* Content container with max-width centered */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
        <p>
          <strong>FXTM brand</strong> is authorized and regulated in various jurisdictions.
        </p>

        <p>
          <strong>Exinity Limited</strong> (www.fxtm.com) with registration number C119470 C1/GBL and registration address at 5th Floor, NEX Tower, Rue du Savoir, Cybercity, 72201 Ebene, Republic of Mauritius is regulated by the Financial Services Commission of the Republic of Mauritius with an Investment Dealer License with license number C113012295, licensed by the Financial Sector Conduct Authority (FSCA) of South Africa, with FSP No. 50320 and is a licensed Over the Counter Derivative Provider.
        </p>

        <p>
          <strong>Exinity Global Financial Services L.L.C</strong> is regulated by the Securities and Commodities Authority of the UAE, under license number 20200000270 for the activities of Introduction & Promotion.
        </p>

        <p>
          <strong>Exinity Capital East Africa Ltd</strong> (www.fxtm.com) with registration number PVT-ZQU6JE7 and registration address at West End Towers, Waiyaki Way, 6th Floor, P.O. Box 1896-00606, Nairobi, Republic of Kenya is regulated by the Capital Markets Authority of the Republic of Kenya with a Non-Dealing Online Foreign Exchange Broker with license number 135.
        </p>

        <p>
          <strong>Exinity UK Limited</strong> (www.forextime.com/uk) with registration number 10599136 and registration address at 8-10 Old Jewry, London, England, EC2R 8DN, UK is authorised and regulated by the Financial Conduct Authority with license number 777911.
        </p>

        <p>
          <strong>Risk Warning (Exinity Limited):</strong> Trading Leveraged Financial instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable for all investors. The value of shares can fall as well as rise, which could mean getting back less than you originally put in. Past performance does not guarantee future results. Before trading, take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the client to ascertain whether they are permitted to use the services of Exinity brand based on the legal requirements in their country of residence. Please read our full <span className="text-blue-400 underline cursor-pointer">Risk Disclosure</span>.
        </p>

        <p>
          <strong>Risk Warning (Exinity Capital East Africa Ltd):</strong> Online Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 83% of retail investor accounts lose money when trading Online Forex and CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. It is the responsibility of the Client to ascertain whether they are permitted to use the services of Exinity Capital East Africa Ltd based on the legal requirements in their country of residence. Please read FXTM's full <span className="text-blue-400 underline cursor-pointer">Risk Disclosure</span>.
        </p>

        <p>
          <strong>Regional restrictions</strong> Exinity Limited does not provide services to residents of the USA, Mauritius, Japan, Canada, Haiti, Iran, Suriname, the Democratic People's Republic of Korea, Puerto Rico, the Occupied Area of Cyprus, Quebec, Iraq, Syria, Cuba, Belarus, Myanmar, Russia and India. Find out more in the <span className="text-blue-400 underline cursor-pointer">Help Centre</span>.
        </p>

        <p className="mt-4">© 2011 - 2025 FXTM</p>

        <p className="text-sm">
          <span className="text-blue-400 font-semibold">Risk warning:</span> Trading is risky. Your capital is at risk.
        </p>
      </div>

      {/* Bottom full-width horizontal line */}
      <div className="w-full border-t border-gray-600"></div>
    </div>
  );
};

export default FooterBottom;
