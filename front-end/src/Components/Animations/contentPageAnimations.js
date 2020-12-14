import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const contentPageAnimations = () => {  
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  return(
    <></>
  );

}

export default contentPageAnimations;