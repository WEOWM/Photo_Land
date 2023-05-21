import React from 'react'
import data from '../../../src/Utill/data.json'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from '../cards/Products-Card/Products';


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
    <div>
         <div className=" me-5" style={{ padding: "4rem", overflow: "hidden" }}>
      <Slider {...settings}>
        {/* reuse card */}
        {data.map((item, idx) => {
          return (
            <div>
              <Products productData={item} key={idx} />
            </div>
          );
        })}
      </Slider>
    </div>

    </div>
  )
}

export default CategoryCarousel