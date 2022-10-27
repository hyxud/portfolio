import React from 'react'
import { ParallaxLayer } from "@react-spring/parallax";

import "./css/entrance.css"
import backgroundImageF2 from "../images/bgf2.png";
import backgroundImageF1 from "../images/bgf1.png";
import backgroundImageB from "../images/bgb.png";
function Entrance(props) {
  return (
    <>
      <ParallaxLayer
        offset={props.pos}
        speed={0.2}
        factor={1}
        style={{
          backgroundImage: `url(${backgroundImageB})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={props.pos}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgroundImageF1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={props.pos}
        speed={0.9}
        factor={1}
        style={{
          backgroundImage: `url(${backgroundImageF2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        factor={0.8}
        offset={0.99+props.pos}
        speed={1}
        style={{ background: "rgb(18, 22, 34)" }}
      />
      <ParallaxLayer factor={1} offset={props.pos} speed={1}>
        <div className='entrance'>
          <h1>Hyxud</h1>
          <h2>Web Developer / Web Designer</h2>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Entrance