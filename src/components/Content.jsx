import React from "react";
import { Parallax } from "@react-spring/parallax";
import Entrance from "./Entrance";
import About from "./About";
import "./css/content.css";


function Content() {
  return (
    <div className="Content" style={{ overflow: "hidden" }}>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <Entrance pos={0}/>
        <About pos={1} factor={1.5}/>
      </Parallax>
    </div>
  );
}



export default Content;
