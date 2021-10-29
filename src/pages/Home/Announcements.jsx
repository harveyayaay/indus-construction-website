import React from "react";
import service1 from "../../resources/images/service-1.jpg";
import service2 from "../../resources/images/service-2.jpg";
import service3 from "../../resources/images/service-3.jpg";

const Announcements = () => {
  const column = [
    {
      image: service1,
      title: "NHAT TAN BRIDGE",
      tags: ["Construction", "Engineering", "Concrete"],
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: service2,
      title: "SHIPBUILDING PROJECT",
      tags: ["Construction", "Engineering", "ShipBuilding", "Concrete"],
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: service3,
      title: "NHAT TAN BRIDGE",
      tags: ["Architect", "Engineering", "Tools"],
      content:
        "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
  ];
  return (
    <div className="w-full bg-secondary-dark py-20 px-20">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl">
          WHAT'S NEW ANNOUNCEMENT
        </h2>
        <p className="text-light font-light mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-12">
        {column.map((col, i) => (
          <div className="group">
            <img
              className="h-60 w-full cursor-pointer border-l-8 border-b-8 border-secondary-dark group-hover:border-primary transition duration-300"
              src={col.image}
            />
            <h4 className="text-light font-semibold text-2xl mt-5 cursor-pointer group-hover:text-primary">
              {col.title}
            </h4>
            <div className="flex mt-3">
              <p className="text-light text-xs mr-1">Tags: </p>
              {col.tags.map((tag) => (
                <span className="bg-primary text-secondary-light text-xs rounded-xl px-1 mr-1 cursor-pointer hover:bg-light transition duration-300">
                  {tag}
                </span>
              ))}
            </div>
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

export default Announcements;
