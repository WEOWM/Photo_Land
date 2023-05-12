import React from "react";
import "./App.css";
import Header from "./commponte/Head/Header";
import Sidebar from "./commponte/sidebar/Sidebar";
import { Col, Row } from "react-bootstrap";
import CustomCarousel from "./commponte/Carousel/Carousel";
import OfferCard from "./commponte/offer card/OfferCard";
import CategoryCarousel from "./commponte/Carousel/CategoryCarousel";

function App() {
  const data = [
    {
      title: "Save 35% all DSLR cameras",
      image: "/image/png1.png",
    },
    {
      title: "Save 25% MIRRORLESS cameras",
      image: "/image/png1.png",
    },
  ];

  return (
    <div>
      <Header />
      <Row style={{ marginRight: "0", paddingRight: "0", paddingTop: "2rem" }}>
        <Col md={3} style={{ paddingRight: "0" }}>
          <Sidebar />
        </Col>
        <Col md={6} style={{}}>
          <CustomCarousel />{" "}
        </Col>
        <Col className="p-0" md={3} style={{ paddingRight: "0" }}>
          {data.map((items, idx) => (
            <OfferCard title={items.title} image={items.image} />
          ))}
        </Col>
      </Row>

      <Row style={{ marginRight: "0", paddingRight: "0" }}>
        <h3 style={{ color: "#fff", paddingLeft: "2rem" }}>Latest Products</h3>
        
          <CategoryCarousel />
       
      </Row>
    </div>
  );
}

export default App;
