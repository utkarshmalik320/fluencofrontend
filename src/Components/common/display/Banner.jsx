import React from "react";
import { Carousel } from "antd";
import Banner1 from "/Images/banner1.jpeg";
import Banner2 from "/Images/Banner2.jpeg";
import Banner4 from "/Images/images.jpeg";
import Banner3 from "/Images/Banner4.png";
const Banner = () => {
  const contentStyle = {
    height: "350px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    width: "100%",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img style={contentStyle} src={Banner1} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={Banner2} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={Banner4} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={Banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
