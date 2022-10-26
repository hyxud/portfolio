import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import './css/content.css'
import backgroundImage from "../images/bg.jpg";

function Content() {
  
  return (
    <div className="Content">
      <Parallax pages={2} style={{top: "0", left: "0"}}>
        <ParallaxLayer
          offset={0}
          speed={.2}
          factor={1}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}></ParallaxLayer>
          
        <ParallaxLayer factor={1} speed={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Content;
