import React from "react";
import Carousel from "../Componts/carousel/Carousel";
import OfferCard from "../Componts/cards/offer-card/OfferCard";
import { Col, Row } from "react-bootstrap";

const Home = () => {
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
    <>
      <Row className="m-0 p-0 mt-4">
        <Col md={8}>
          <Carousel />
        </Col>
        <Col className="p-0" md={4} style={{ paddingRight: "0" }}>
          {data.map((items, idx) => (
            <OfferCard item={items} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Home;
