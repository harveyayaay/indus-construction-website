import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const nav = [
    { title: "HOME", path: "/", active: true },
    { title: "ABOUT US", path: "/about-us", active: false },
    { title: "SERVICE", path: "/service", active: false },
    { title: "OPERATIONS", path: "/operations", active: false },
    { title: "INVESTOR", path: "/investor", active: false },
    { title: "BLOG", path: "/blog", active: false },
    { title: "PAGES", path: "/pages", active: false },
    { title: "SHOP", path: "/shop", active: false },
    { title: "CONTACT US", path: "/contact-us", active: false },
  ];

  return (
    <div className="fixed w-screen">
      <div className="bg-secondary-light px-20">
        <ul className="flex">
          {nav.map((item, i) => (
            // <li  className="cursor-pointer">
            <Link to={item.path} key={i}>
              <li
                className={`
                px-4 py-2 hover:text-secondary-light hover:bg-primary
                  ${
                    item.active
                      ? "text-secondary-light bg-primary"
                      : "text-light"
                  }
                  `}
              >
                {item.title}
              </li>
            </Link>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
