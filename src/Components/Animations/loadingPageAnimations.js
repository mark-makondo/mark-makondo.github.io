import React from 'react'
import { gsap } from 'gsap';

const loadingPageAnimations = () => {

    const tlm__loading = gsap.timeline({
      defaults:{ duration:2, opacity:"1", display:"block", ease:"none"
    }});
    const tlm__greetings = gsap.timeline({
      defaults:{ duration:2, opacity:"1", display:"block", ease:"none"
    }});
    const tlm__circleArrowAnimate = gsap.timeline({
      paused:true
    });
    const tlm__quoteHintAnimate = gsap.timeline({
      defaults:{ duration:.5, yoyo:true, repeat:-1
    }});
    const tlm__skipAnimate = gsap.timeline({});
  
    
    const animatingContainer = () => {
      // bounce the container
      tlm__loading.from("#loadingPageCont", { y:"-100vh",ease:"bounce.out" },"load0")
    }

    const loadingTextAnimate = () => {
      let loadingPercent = document.getElementById("loading__percent");
  
      // load animation
      let Cont={percent:0} , newPercent = 100 ;
  
      tlm__loading
        .to(".loadingSVG",{},"load0")
        .from(".loadingSVG",{ y:"-100%", ease:"bounce.out"}, "load0")
        .to(".loading__percent",{ duration:1, ease:"bounce.out"}, "load0")
        .to("#baseRect",{ attr:{x:460}, },"load1")
        .to(Cont,{ percent:newPercent, roundProps:"percent", onUpdate:() => {
            loadingPercent.innerHTML=Cont.percent+"%"
          }}, "load1")
        .to(".loading",{ duration:1, opacity:0, display:"none" }, "load01")
        // show hint quoute for skipping animation
        .to(".hintQuote",{ duration:.5, opacity:1, display:"block" }, ">.5");
    }

    const showGreetingsAnimate = () => {
      // greet animation
      let getGreetContainerId = document.getElementById("greetContainer__text");
  
      const greet__1 = "Hello, Visitor.";
      const greet__2 = "I Am Mark Albert D. Makondo.";
      const greet__3 = "Welcome to my Portfolio!";
  
      tlm__greetings
        .call(getTextValue, [greet__1],"+=5")
        .to(getGreetContainerId, {})
        .to(getGreetContainerId, { opacity:0 })
        .call(getTextValue, [greet__2])
        .to(getGreetContainerId, {})
        .to(getGreetContainerId, { opacity:0 })
        .call(getTextValue, [greet__3])
        .to(getGreetContainerId, {}, "load2");
    }

    const getTextValue = (value) => {
      // greet animation
      let getGreetContainerId = document.getElementById("greetContainer__text");
      let greet = value;
      getGreetContainerId.innerHTML = greet;
    }

    const circleArrowAnimate = () => {
      // circle arrow animation
      let getCircleArrowId = document.getElementById("circleArrowSvg");
  
      tlm__greetings
        .to("#circleArrowSvg__parent",{x:"0" ,ease:"bounce.out"},"-=1")
        .to("#circleArrowSvg__parent",{
          onComplete:() =>{
            getCircleArrowId.classList.add("animateDoneTrue");
          }
        },"-=1")
  
      tlm__circleArrowAnimate
        .to("#circleArrowSvg",{ rotate:"270", ease:"expo.out"},)
        .to("#circleArrowSvg__child__arrow",{ x:"100rem", ease:"expo.out"}, "load3")
        .to("#circleArrowSvg__child__arrow",{ fill:"red"}, "load3")
        .to("#circleArrowSvg__child__circle__x",{ fill:"red"}, "load3")
        // dismiss loading page - put display none and opacity 0
        .to("#loadingPageCont",{ y:"-100vh", ease:"circ.in" ,opacity:0, display:"none" },">.6")
        // show content page - remove display none on content page
        .to("#contentPageCont", {duration:"2",display:"block",y:"0", opacity:1},">.5");
  
      //circle on click animation
      getCircleArrowId.addEventListener('click', () =>{
        if(getCircleArrowId.classList.contains("animateDoneTrue") == false){
          return;
        }
        tlm__circleArrowAnimate.play() 
        // tlm__circleArrowAnimate.reversed() ? tlm__circleArrowAnimate.play() : tlm__circleArrowAnimate.reverse();
      });
    }

    const quoteHintAnimate = () => {
      tlm__quoteHintAnimate
       .fromTo("#hintQuoteId", {opacity: .5, ease:"power2.out"}, {opacity: 0, ease: "power2.in"})
    }

    const skipAnimation = () =>{
      let hintQuote = document.getElementById("hintQuoteId");

      hintQuote.addEventListener("click", () => {
        tlm__greetings.pause();
        tlm__skipAnimate
           // dismiss loading page - put display none and opacity 0
           .to("#loadingPageCont",{ y:"-100vh", ease:"circ.in" ,opacity:0, display:"none" })
           // show content page - remove display none on content page
           .to("#contentPageCont", {duration:"2",display:"block",y:"0", opacity:1},">.5");
      })
    }

    return(
        animatingContainer(),
        loadingTextAnimate(),
        showGreetingsAnimate(),
        circleArrowAnimate(),
        quoteHintAnimate(),
        skipAnimation()
    );
  }

export default loadingPageAnimations;