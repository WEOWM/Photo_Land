import React from "react";
import "./Footer.css";
import Input from "../input/input";
import {ImYoutube2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {TfiTwitter} from 'react-icons/tfi'
import {CiFacebook} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="footer ">
     <div className="foot-head m-5">
     <h2 >SUBSCRIBE TO OUR NEWLETTER</h2>
      <p className="text-center "style={{fontSize:"12px"}}>
        Be the fist to get the latest news about trends. promotions and much
        more!
      </p>
     </div>
      <Input  borderRadius={"8px"} width={"100px"} mar={"1rem"} />
      <div className="footer-copywrite p-0  mt-5 ">
        <li>Returns policy</li>
        <li>Track Your Order</li>
        <li>Shipping & Devlivery</li>
        <li>Returns policy</li>
      </div>
      <div className="copyright mt-5  "style={{display:"flex",gap:"3rem",alignItems:'center'}} >
        
        
        <li style={{fontSize:"40px",listStyle:"none", }}><ImYoutube2/></li>
        <li style={{fontSize:"26px",listStyle:"none", }}><BsInstagram/></li>
        <li style={{fontSize:"26px",listStyle:"none", }}><TfiTwitter/></li>
        <li style={{fontSize:"26px",listStyle:"none", }}><CiFacebook/></li>
    
       
      </div>
      <hr style={{width:"100%"}} />
      <p>CopyRight © PhotoLand 2023. All right reserved.</p>
      
    </div>
  );
};

export default Footer;
