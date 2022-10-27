import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import "./css/content.css";
import backgroundImageF2 from "../images/bgf2.png";
import backgroundImageF1 from "../images/bgf1.png";
import backgroundImageB from "../images/bgb.png";

function Content() {
  return (
    <div className="Content" style={{ overflow: "hidden" }}>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <EntranceParallax />

        <ParallaxLayer factor={1} speed={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

function EntranceParallax() {
  return (
    <>
      <ParallaxLayer
        offset={0}
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
        offset={0}
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
        offset={0}
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
        offset={0.99}
        speed={1}
        style={{ background: "rgb(18, 22, 34)" }}
      />
    </>
  );
}

export default Content;
