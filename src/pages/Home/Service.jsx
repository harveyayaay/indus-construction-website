import React from "react";
import service1 from "../../resources/images/service-1.jpg";
import service2 from "../../resources/images/service-2.jpg";
import service3 from "../../resources/images/service-3.jpg";

const Service = () => {
  const column = [
    {
      image: service1,
      title: "BLASTING SYSTEMS",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: service2,
      title: "MINE CONSTRUCTION",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: service3,
      title: "BLASTING SYSTEMS",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="w-full bg-secondary-dark pt-12 pb-20 px-20">
        <div className="text-center">
          <h2 className="font-bold text-primary text-4xl">
            WE ARE COMPETENT TO OUR SERVICE
          </h2>
          <p className="text-light font-light mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-12">
          {column.map((col, i) => (
            <div key={i} className="cursor-pointer group">
              <img
                className="h-60 w-full border-l-8 border-b-8 border-secondary-dark group-hover:border-primary transition duration-300"
                src={col.image}
              />
              <h4 className="text-light font-semibold text-2xl mt-5 group-hover:text-primary">
                {col.title}
              </h4>
              <p className="text-light mt-5 font-light">{col.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-primary py-28 px-20 text-center">
        <h2 className="font-bold text-secondary-light text-4xl">
          PROVIDING PERSONALIZED AND HIGH QUALITY SERVICES.
        </h2>
        <button className="text-light bg-secondary-light text-xl font-semibold px-10 py-4 mt-10 border border-secondary-light animate-bounce hover:text-secondary-light hover:bg-light hover:border-primary transition duration-300">
          REQUEST QUOTE
        </button>
      </div>
    </>
  );
};

export default Service;
