import React from "react";
import {ImYoutube2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {TfiTwitter} from 'react-icons/tfi'
import {CiFacebook} from 'react-icons/ci'
import SearchBar from "../searchbar/SearchBar";
import './Footer.css'

const Footer = () => {
  
  return (
    <div>
      <div className="footer ">
        <div className="foot-head m-5">
          <h2>SUBSCRIBE TO OUR NEWLETTER</h2>
          <p className="text-center " style={{ fontSize: "12px" }}>
            Be the fist to get the latest news about trends. promotions and much
            more!
          </p>
        </div>
        <SearchBar width={"100px"}  />
        <div className="footer-copywrite p-0  mt-5 ">
          <li>Returns policy</li>
          <li>Track Your Order</li>
          <li>Shipping & Devlivery</li>
          <li>Returns policy</li>
        </div>
        <div
          className="copyright mt-5  "
          style={{ display: "flex", gap: "3rem", alignItems: "center" }}
        >
          <li style={{ fontSize: "40px", listStyle: "none" }}>
            <ImYoutube2 />
          </li>
          <li style={{ fontSize: "26px", listStyle: "none" }}>
            <BsInstagram />
          </li>
          <li style={{ fontSize: "26px", listStyle: "none" }}>
            <TfiTwitter />
          </li>
          <li style={{ fontSize: "26px", listStyle: "none" }}>
            <CiFacebook />
          </li>
        </div>
        <hr style={{ width: "100%" }} />
        <p>CopyRight © PhotoLand 2023. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
