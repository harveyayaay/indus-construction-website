import React from "react";
import logo from "../../resources/images/upwork.jpg";
import check from "../../resources/images/check.jpg";
import check2 from "../../resources/images/check-2.jpg";
import logo2 from "../../resources/images/logo-2.jpg";

const AboutUs = () => {
  const column1 = [
    "CONTINUING EDUCATION",
    "ONLINE FORUM ACCESS",
    "2,000-QUESTION PRACTICE EXAM",
    "E-SIGNED INSPECTION AGREEMENTS",
    "CREDIT CARD PROCESSING TOOLS",
    "FEE CALCULATOR",
    "FREE LEGAL DOCUMENTS",
    "INTERNACHI® GRAPHICS LIBRARY",
    "SCHEDULING CALCULATOR",
    "ELECTRONIC REPORT HOSTING",
    "SEO ADVICE & TOOLS",
    "DISCOUNTED MEMBERSHIP WITH PARTNER ORGANIZATIONS",
    "CHECKLISTS & OTHER FORMS",
    "SOFTWARE DISCOUNTS",
    "AND MORE!",
  ];

  return (
    <div className="font-roboto">
      <div className="bg-upBlue px-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 py-5 text-center">
        <h3 className="text-light text-xl md:text-3xl lg:text-4xl font-extrabold">
          INTERNACHI® OFFERS OVER
        </h3>
        <h3 className="text-upGold text-xl md:text-3xl lg:text-4xl font-black">
          $75,000 WORTH OF MEMBER BENEFITS
        </h3>
      </div>
      <div className="px-20 sm:px-20 md:px-20 lg:px-30 xl:px-60 pt-5 pb-10">
        <div className="flex items-center sm:justify-center">
          <img src={logo} className="h-16 w-16 lg:h-20 lg:w-20" />
          <div className="">
            <h4 className="font-light text-sm md:text-lg lg:text-xl pl-3">
              ALL-ACCESS INTERNACHI®
            </h4>
            <h4 className="font-light text-sm md:text-lg lg:text-xl pl-3">
              MEMBER
              <span className="font-bold"> BENEFITS</span>
            </h4>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3">
          {column1.map((col, i) => (
            <div key={i} className="flex items-center mb-2">
              <img src={check} className="h-7 w-7 mr-3" />
              <p className="text-xs font leading-4">{col}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-800 font-light italic text-xs text-center mt-3">
          Once you’ve completed your InterNACHI® certification requirements,
          you’ll get access to additional CPI benefits!
        </p>
      </div>

      <div className="px-20 sm:px-20 md:px-20 lg:px-30 xl:px-60 pt-5 pb-10 bg-upGray">
        <div className="flex items-center sm:justify-center">
          <img src={logo2} className="h-16 w-16 lg:h-20 lg:w-20" />
          <div className="">
            <h4 className="font-light text-sm md:text-lg lg:text-xl pl-3">
              CERTIFIED PROFESSIONAL
            </h4>
            <h4 className="font-light text-sm md:text-lg lg:text-xl pl-3">
              INSPECTOR®
              <span className="font-bold"> BENEFITS</span>
            </h4>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3">
          {column1.map((col, i) => (
            <div key={i} className="flex items-center mb-2">
              <img src={check2} className="h-7 w-7 mr-3" />
              <p className="text-xs font leading-4">{col}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
