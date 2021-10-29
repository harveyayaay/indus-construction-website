import React from "react";
import service1 from "../../resources/images/service-1.jpg";
import service2 from "../../resources/images/service-2.jpg";
import service3 from "../../resources/images/service-3.jpg";
import { locationIcon } from "../../resources/icons";

const Operations = () => {
  const column = [
    {
      image: service1,
      title: "NHAT TAN BRIDGE",
      location: "Asia Pacific",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: service2,
      title: "SHIPBUILDING PROJECT",
      location: "North America",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: service3,
      title: "NHAT TAN BRIDGE",
      location: "Asia Pacific",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: service2,
      title: "SHIPBUILDING PROJECT",
      location: "Australia",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
  ];
  return (
    <div className="w-full bg-secondary-light py-20 px-20">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl">
          HIGHLY-PROSPECTIVE PROJECTS
        </h2>
        <p className="text-light font-light mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 pt-12">
        {column.map((col, i) => (
          <div key={i} className="cursor-pointer group">
            <img
              className="h-40  w-full border-l-8 border-b-8 border-secondary-dark group-hover:border-primary transition duration-300"
              src={col.image}
            />
            <h4 className="text-light font-semibold text-2xl mt-5 group-hover:text-primary">
              {col.title}
            </h4>
            <span className="text-primary font-light mt-2 flex">
              <i className="pr-1">{locationIcon}</i> {col.location}
            </span>
            <p className="text-light font-light mt-5">{col.content}</p>
            <button className="text-light font-semibold px-6 py-3 mt-5 border border-light group-hover:text-secondary-light group-hover:bg-primary group-hover:border-primary transition duration-300">
              MORE DETAILS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operations;
