import React from "react";
import tractor from "../../resources/images/tractor.jpg";
import AboutUs from "./AboutUs";
import Announcements from "./Announcements";
import Investors from "./Investors";
import Operations from "./Operations";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-screen flex flex-grow bg-cover font-sans bg-bottom no-repeat bg-landscape"
        style={{ backgroundImage: `url(${tractor})` }}
      >
        <div className="flex items-center w-1/2  pl-60">
          <div>
            <h2 className="text-5xl text-light font-bold leading-tight">
              OUR MAIN GOAL IS CONTINUOUSLY SATISFY OUR CLIENTS
            </h2>
            <button className="text-secondary-light bg-primary font-semibold px-6 py-3 mt-5 hover:text-primary hover:bg-secondary-light transition duration-300">
              EXPLORE SERVICE
            </button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Service />
      <Operations />
      <Announcements />
      <Investors />
    </>
  );
};

export default Home;
