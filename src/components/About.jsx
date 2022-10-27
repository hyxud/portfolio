import React from 'react'
import { ParallaxLayer } from "@react-spring/parallax";
import './css/about.css'

import github from '../images/github.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'

function About(props) {

  return (
    <>
      <ParallaxLayer
        
        offset={props.pos}
        speed={1}
        factor={1}
      >
        <div className='about left-box'>
          <h2>Hello, it's me</h2>
          <h1>Hyxud</h1>
          <h3>Web Developer / Web Designer</h3>
          <p>A <span>passionate</span> web developer / designer that likes to code and design all day</p>
          <p>If you need an <span>enthusiastic</span> web developer and designer to help make your website, <span>I'm your guy</span></p>
          <div className='socials left-box'>
            <SocialButton image={github}/>
            <SocialButton image={youtube}/>
            <SocialButton image={twitter}/>
          </div>
        </div>
        
      </ParallaxLayer>
    </>
  )
}

function SocialButton(props) {
  let styles = {
    borderRadius: '50%',
    backgroundImage: `url(${props.image})`,
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: '500ms',
    width: '40px',
    height: '40px'
  }
  return (
    <a href={props.url}>
      <div style={styles} className={'social-button'}>

      </div>
    </a>
  )
}

SocialButton.defaultProps = {
  url: ""
}

export default About