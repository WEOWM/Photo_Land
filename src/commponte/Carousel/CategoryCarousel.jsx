import React from "react";
import ProductCard from "../card/ProductCard";
import data from "../../util/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryCarousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className=" me-5" style={{ padding: "4rem", overflow: "hidden" }}>
      <Slider {...settings}>
        {/* reuse card */}
        {data.map((item, idx) => {
          return (
            <div>
              <ProductCard productData={item} key={idx} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
