import React, { useState, useEffect } from "react";
import { phoneIcon, chatIcon } from "../resources/icons";
import Navigation from "./Navigation";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="fixed w-full  filter drop-shadow-lg z-100">
      <div className="bg-primary">
        <div
          className={`grid grid-cols-2 gap-4 px-20 transition-spacing duration-500 ${
            offset === 0 ? "py-5" : "py-1"
          }`}
        >
          <div className="items-center">
            <p className="font-bold text-4xl">INDUS</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="flex">
                <span className="pl-3">{phoneIcon}</span>
                <span className="pl-3">+63 951 1085 3574</span>
              </div>
              <div className="flex">
                <span className="pl-3">{chatIcon}</span>
                <span className="pl-3">info@indusmining.com</span>
              </div>
            </div>
            <div className="">SOCIAL MEDIA</div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
