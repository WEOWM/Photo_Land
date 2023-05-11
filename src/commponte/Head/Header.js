import React from "react";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import Input from "../input/input";

import {HiOutlineShoppingBag} from "react-icons/hi"

const head = () => {
  return (
    <div className="head-body">
      <Row>
        <Col md={3} style={{ height:"5rem", display:"flex",alignItems:"center",justifyContent:"center",padding:'0',margin:'0'}} >PHOTO <span style={{color:'#ffc107',fontSize:'1.8rem'}}>LAND</span></Col>
        <Col md={6} style={{ height:"5rem", display:"flex",alignItems:"center",justifyContent:"center",padding:'0',margin:'0'}} ><Input/></Col>
        <Col md={3} style={{ height:"5rem", display:"flex",alignItems:"center",justifyContent:"center",padding:'0',margin:'0'}} >NEED HELP? 123456789<HiOutlineShoppingBag className="ms-2 fs-3 "style={{color:"#ffc107"}} /></Col>
      </Row>
    </div>

  );
};

export default head;
