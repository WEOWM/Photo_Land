// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import React from "react";
import ProductCard from "../card/ProductCard";
import data from "../../util/data";
// import "./carousel.css"
// const CategoryCarousel = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <>
//       <Carousel
//         swipeable={false}
//         draggable={false}
//         showDots={true}
//         responsive={responsive}
//         infinite={true}
//         autoPlaySpeed={1000}
//         keyBoardControl={true}
//         customTransition="all 1.9"
//         transitionDuration={1000}
//         containerClass="carousel-container"
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {/* reuse card */}
//         {data.map((item, idx) => {
//           return <ProductCard productData={item} key={idx} />;
//         })}
//       </Carousel>
//     </>
//   );
// };

// export default CategoryCarousel;

import React, { Component } from "react";
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
    <div className=" me-5" style={{padding:"4rem",overflow:"hidden"}}  >
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
