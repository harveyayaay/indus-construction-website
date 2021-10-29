import React from "react";

const AboutUs = () => {
  const column = [
    {
      no: "01.",
      title: "OUR HISTORY",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      no: "02.",
      title: "COMPATIBILITY",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      no: "03.",
      title: "OUR MISSION",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      no: "04.",
      title: "OUR VALUES",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="w-full bg-secondary-light pt-12 pb-20 px-20">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl">
          WELCOME TO OUR COMPANY
        </h2>
        <p className="text-light font-light mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="grid grid-cols-3 pt-12">
        <div className="text-light">
          <h3 className="font-bold text-light text-4xl">
            WE ARE COMPETITIVE IN OUR SERVICES
          </h3>
          <p className="text-light mt-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
          <p className="text-light mt-5 font-light">
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="text-light font-semibold px-6 py-3 mt-5 border border-light hover:text-secondary-light hover:bg-primary hover:border-primary transition duration-300">
            MORE DETAILS
          </button>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            {column.map((col, i) => (
              <div key={i} className="pb-10">
                <h4 className="text-light font-semibold text-2xl">
                  <span className="text-primary">{col.no} </span>
                  {col.title}
                </h4>
                <p className="text-light mt-5 font-light">{col.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
