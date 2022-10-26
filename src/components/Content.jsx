import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import './css/content.css'
import backgroundImage from "../images/bg.jpg";
import backgroundImageF from "../images/bgf.png";
import backgroundImageB from "../images/bgb.png";

function Content() {
  
  return (
    <div className="Content">
      <Parallax pages={2} style={{top: "0", left: "0"}}>
        <ParallaxLayer
          offset={0}
          speed={.2}
          factor={1}
          style={{
            backgroundImage: `url(${backgroundImageB})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={.5}
          factor={1}
          style={{
            backgroundImage: `url(${backgroundImageF})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}></ParallaxLayer>
        <ParallaxLayer factor={1} speed={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer factor={.1} offset={.99} speed={.5} style={{background: 'rgb(18, 22, 34)'}}>
          
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Content;
