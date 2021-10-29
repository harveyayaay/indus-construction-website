import React from "react";
import jennie1 from "../../resources/images/jennie-1.jpg";
import jennie2 from "../../resources/images/jennie-2.jpg";
import jennie3 from "../../resources/images/jennie-3.jpg";
import jennie4 from "../../resources/images/jennie-4.jpg";
import jennie5 from "../../resources/images/jennie-5.jpg";
import jennie6 from "../../resources/images/jennie-6.jpg";
import { leftIcon, rightIcon } from "../../resources/icons";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, A11y]);

const Investors = () => {
  const column = [
    {
      image: jennie1,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
    {
      image: jennie2,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
    {
      image: jennie3,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
    {
      image: jennie4,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
    {
      image: jennie5,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
    {
      image: jennie6,
      name: "JENNIE KIM",
      company: "BLACKPINK, YG Entertainment",
    },
  ];
  return (
    <div className="w-full bg-secondary-light py-20 px-20">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl">TRUSTED INVESTORS</h2>
        <p className="text-light font-light mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <Swiper
        className="mt-10 cursor-move"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {column.map((col, i) => (
          <div key={i} className="">
            <SwiperSlide className="">
              <div className="flex justify-center ">
                <img
                  className="h-60 w-60 border-b-8 border-l-8 border-primary"
                  src={col.image}
                />
              </div>
              <p className="text-primary text-center text-2xl font-semibold mt-5">
                {col.name}
              </p>
              <p className="text-light text-center text-sm font-light">
                {col.company}
              </p>
            </SwiperSlide>
          </div>
        ))}
        <div className=" text-center">
          <div className="custom-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Investors;
