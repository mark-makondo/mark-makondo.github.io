import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const contentPageAnimations = () => {  
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // animations
  const hoverEnterAnimate = (targetBtn) => {
    let tml = gsap.timeline({
      defaults:{ }
    });
    
    tml.to(targetBtn, {background:"rgb(252, 72, 72)",color:"black"})

    return tml;
  }

  const clickAnimate = (targetHr, targetBtn, targetBody) => {
    let tml = gsap.timeline({
      defaults:{ }
    });
    
    tml
      .fromTo(targetBtn, {background:"#a55555", color:"white"}, {background:"rgb(252, 72, 72)",color:"black"}, "same")
      .to(targetHr,{ width:"40vw", ease:"power4.inOut"},"same")
      // begin display animation for contents
      .to(targetBody, {display:"unset", opacity:1},"+=.1")

    return tml;
  }

  // functions - event listeners
  const onClickHoverHandler = () => {
  

    gsap.utils.toArray(".sect-select").forEach(item => {
      // variable
      let targetBody = item.querySelectorAll(".bodyC"),
          targetHr = item.querySelectorAll(".custom-hr"),
          targetBtn = item.querySelectorAll(".btn__position");

      // timeline
      let tml__hover = gsap.timeline({paused:true,
        defaults:{ duration:.1}
      });
      let tml__click = gsap.timeline({paused:true, reversed:true,
        defaults:{ duration:.3, }
      });

      tml__click.add( clickAnimate(targetHr,targetBtn,targetBody) );
      tml__hover.add( hoverEnterAnimate(targetBtn) );

      // click animation
      item.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.toggle("clicked");

        tml__click.reversed() ? tml__click.play() : tml__click.reverse()
      })

      // hover enter animation
      item.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        if(item.classList.contains("clicked")){
          return;
        }
        tml__hover.play();
      })

      // hover leave animation
      item.addEventListener("mouseleave", (e)=>{
        e.preventDefault();
        
        if(item.classList.contains("clicked")){
          return;
        }
        tml__hover.reverse();
      })

    })
  }
  

  //  adding animation to master timeline


  const allContentPageAnimations = () =>{
    onClickHoverHandler();
  }

  return(
    allContentPageAnimations()
  );

}

export default contentPageAnimations;