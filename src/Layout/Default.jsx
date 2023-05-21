import React from "react";
import Header from "../Componts/header/Header";
import SideBar from "../Componts/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./Default.css";
import CategoryCarousel from "../Componts/carousel/CategoryCarousel";
import { Col, Row } from "react-bootstrap";
import Footer from "../Componts/Footer/Footer";

const Default = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Row className="m-0 p-0" >
        <Col md={3} >
          <SideBar />
        </Col>
        <Col md={9} >
          <Outlet />
        </Col>
      </Row>
      {/* <div className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <main className="content" >
          <Outlet />
        </main>
      </div> */}
      <section>
        <h2 style={{color:'#FFF', paddingLeft:'4rem'}}>Latest Products</h2>
        <CategoryCarousel />
      </section>
      <footer>
        <Footer/>

      </footer>
    </>
  );
};

export default Default;
