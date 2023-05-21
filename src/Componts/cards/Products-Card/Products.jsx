import React from "react";
import "./Products.css";

const Products = (props) => {
    console.log("test",props);
    const {images,name,price,description} = props.productData
  return (
    <div className="product-card ">
      <div className="pro-badge-body">
        <div className="pro-badge" style={{ marginTop: "1rem" }}>
          New
        </div>
      </div>
      <div className="pro-img">
        <img className="w-50  " src={images} alt="" />
      </div>
      <div style={{ color: "#ffc107" }} className="pro-details p-3">
        <h4>{name}</h4>
        <p style={{ color: "#fff" }}>{description} </p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Products;
