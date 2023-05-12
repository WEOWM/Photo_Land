import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
     className="side_bar"
      style={{
        color: "#fff",
        height:"31.3rem",
        gap: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#111",
        padding: "0px 0px 0px",
      }}
    >
      <h3
        style={{
          background: "#ffc107",
          width: "100%",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px 0px 0px",
        }}
      >
        BROWSE CATEG0RIES
      </h3>
      <li className="side_bar" style={{ listStyle: "none" }}>DSLR</li>
      <li className="side_bar" style={{ listStyle: "none" }}>MIRRORLESS</li>
      <li className="side_bar" style={{ listStyle: "none" }}>COMPACT</li>
      <li className="side_bar" style={{ listStyle: "none" }}>FILM</li>
      <li className="side_bar" style={{ listStyle: "none" }}>PROFESSS</li>
      
    </div>
  );
};

export default Sidebar;
