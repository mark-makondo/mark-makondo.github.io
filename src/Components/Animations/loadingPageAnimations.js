import React from 'react'
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const loadingPageAnimations = () => {

  class Animate{
    constructor(selector,yoyo,repeat,duration){
      this.element = selector;

      this.master = gsap.timeline({ yoyo:yoyo,repeat:repeat, paused:true, defaults: {
        duration: duration
      }})
    }

    
    percentAnimate(perTarget){
      let percentBase = {percent: 0};
      let percentTarget = perTarget;

      this.master
        .to(percentBase, { 
          percent:percentTarget, 
          duration:2,
          roundProps:"percent", 
          onUpdate: () =>{
            this.element.innerHTML=percentBase.percent+"%"
          }
        })

      return this.master;
    }

    setDisplay(disp, alpha){
      this.master
        .to(this.element, {
          display: disp, 
          autoAlpha: alpha,
        })

      return this.master;
    }

    rotateSymbol(el, rotate){
      this.master.fromTo(el, {rotate: 0}, {
        duration:.2,
        rotate:rotate,
        ease: "power1.out",
        overwrite: "auto"
      })
    
      return this.master;
    }

    moveDownFromUp(){
      this.master
        .to(this.element, {duration: 1, yPercent: 0, ease: "bounce.out"})

      return this.master;
    }

    attributeChangeValue(obj){
      this.master
        .to(this.element, { duration: 2, attr: obj })

      return this.master;
    }

    setGreetTextAnimate(){
      this.master
        .add( this.setDisplay(unset, alphaTrue), "+=.5")
        .add( this.setDisplay(none, alphaFalse), "+=.5")

      return this.master;
    }
    
    changeBackgroundColor(bgColor, label){
      this.master.fromTo(this.element, { background: "black"},{ background: bgColor }, label);

      return this.master;
    }

    changeFontColor(clr, label){
      this.master.to(this.element, { color: clr }, label)

      return this.master;
    }

    changeBorderColor(borderClr, label){
      this.master.to(this.element, { borderColor: borderClr }, label)

      return this.master;
    }

    backDropFilterBlur(type, label){
      this.master.to(this.element, { backdropFilter: type }, label)

      return this.master;
    }

    transparentGlassEffect(value, label){
      this.master
        .add( this.backDropFilterBlur( "blur("+value+"px)", label ) )
        .add( this.changeBackgroundColor( "rgba(0, 0, 0, 0.75)" , label ) )

      return this.master;
    }

    changeBackgroundFontBorderColor(bg, clr, borderClr){
      this.master
        .add( this.changeBackgroundColor(bg, "hover") )
        .add( this.changeFontColor(clr, "hover") )
        .add( this.changeBorderColor(borderClr, "hover") )

      return this.master;
    }

    blurLoadingPageBackground(contentToUnset, value){
      this.master
        .to(contentToUnset, { display: unset, position: fixed }, "blbp" )
        .add( this.transparentGlassEffect( value, "blbp" ) )

      return this.master;
    }

    alternateDisplay(elToShow, elToHide){
      this.master 
        .to(elToShow, { display:unset , autoAlpha: alphaTrue , position: unset}, "ad")
        .to(elToHide, { display:none , autoAlpha: alphaFalse }, "ad")

        return this.master;
    }
    
    // no master return section - - - >
    setElementByGsap(obj){
      gsap.set(this.element, obj);
    }
  }

  //#region variables
  let 
    // queries
    loadingPageContainer = document.querySelector("#loadingPageCont"),
    loading = document.querySelector(".loading"),
    loadingSvg = document.querySelector(".loadingSVG"),
    loadingSvgPercent = document.querySelector(".loading__percent"),
    baseRectangle = document.querySelector("#baseRect"),
    
    greetCont = document.querySelector("#greetContainer__text"),
    loadingButtons = document.querySelector(".loadingButtons"),
    loadingButtonsChild = document.querySelectorAll(".load-btn"),
    lbTakeAPeak = document.querySelector(".takeAPeak"),
    lbReveal = document.querySelector(".reveal"),

    contentPageContainer = document.querySelector("#contentPageCont"),
    fastForwardBtn = document.querySelector(".fastForward");

  let 
    tl, setElements,
    // loading animation variables
    loadingContainerAnimation, lca,
    loadingSvgAnimation, lsa,
    loadingSvgSetDsiplay, lssd,
    loadingSvgPercentAnimation, lspa,
    baseRectangleAnimation, bra,
    loadingSetDisplay, lsd,
    greet__1, greet__2, greet__3, 
    setGreetDisplay__1, setGreetDisplay__2, setGreetDisplay__3, 
    sgd__1, sgd__2, sgd__3,
    loadingButtonsSetDisplay, lbsd,
    hoverChangeBtnPeakClr, hcbpc,
    hoverChangeBtnRevealClr, hcbrc,
    contentPageBlured, cpb,
    loadingPageSetDisplay, lpsd;
    
  let
    // custom variables
    unset = "unset",
    fixed = "fixed",
    none = "none", flex = "flex",
    backgroundClr = "rgb(252, 72, 72)", fontClr = "black", borderClr = "rgb(252, 72, 72)",
    alphaTrue = "1", alphaFalse  = "0",
    yoyoTrue = true, yoyoFalse   = false,
    repeatTrue  = -1 ,repeatFalse = 0,
    hover = "hover", click ="click";

  //#endregion


  const pageAnimations = () => { 

    let elToReset = [loadingSvg, loadingSvgPercent, loadingButtons, greetCont];
    let elToSetY  = [loadingSvg, loadingPageContainer];
    let elToHover = [lbTakeAPeak, lbReveal];

    tl = gsap.timeline({ paused:true, reversed: true});
    
    //#region loading animation variables
      // set gsap animation
      setElements = new Animate(elToReset);
      setElements.setElementByGsap({autoAlpha: 0, display: none});
      setElements = new Animate(elToSetY);
      setElements.setElementByGsap({yPercent:-100});

      // loading page container
      loadingContainerAnimation = new Animate(loadingPageContainer);
      lca = loadingContainerAnimation.moveDownFromUp();
      lca.paused(false);

      // loading svg
      loadingSvgAnimation = new Animate(loadingSvg);
      lsa = loadingSvgAnimation.setDisplay(unset, alphaTrue);
      lsa = loadingSvgAnimation.moveDownFromUp();
      lsa.paused(false);

      // loading svg percent display
      loadingSvgSetDsiplay = new Animate(loadingSvgPercent);
      lssd = loadingSvgSetDsiplay.setDisplay(unset, alphaTrue);
      lssd.paused(false);

      // loading svg percent animate
      loadingSvgPercentAnimation = new Animate(loadingSvgPercent);
      lspa = loadingSvgPercentAnimation.percentAnimate(100);
      lspa.paused(false);

      // base rectangle behind loading svg
      baseRectangleAnimation = new Animate(baseRectangle);
      bra = baseRectangleAnimation.attributeChangeValue({x: 460});
      bra.paused(false);

      // loading container set display
      loadingSetDisplay = new Animate(loading, yoyoFalse, repeatFalse, 1);
      lsd = loadingSetDisplay.setDisplay(none, alphaFalse);
      lsd.paused(false);

      // greet display
      greet__1 = "Hello, Visitor.";
      greet__2 = "I Am Mark Albert D. Makondo.";
      greet__3 = "Welcome to my Portfolio!";

      setGreetDisplay__1 = new Animate(greetCont, yoyoFalse, repeatFalse, 1);
      sgd__1 = setGreetDisplay__1.setGreetTextAnimate();
      sgd__1.paused(false);

      setGreetDisplay__2 = new Animate(greetCont, yoyoFalse, repeatFalse, 1);
      sgd__2 = setGreetDisplay__2.setGreetTextAnimate();
      sgd__2.paused(false);

      setGreetDisplay__3 = new Animate(greetCont, yoyoFalse, repeatFalse, 1);
      sgd__3 = setGreetDisplay__3.setDisplay(unset, alphaTrue);
      sgd__3.paused(false);

      // set loading buttons display
      loadingButtonsSetDisplay = new Animate(loadingButtons, yoyoFalse, repeatFalse, 1);
      lbsd = loadingButtonsSetDisplay.setDisplay(flex, alphaTrue);
      lbsd.paused(false);

    //#endregion

    //#region animation not included in the timeline
      // change color // show on hover
      hoverChangeBtnPeakClr = new Animate(lbTakeAPeak, yoyoFalse, repeatFalse, .5);
      hcbpc = hoverChangeBtnPeakClr.changeBackgroundFontBorderColor(backgroundClr, fontClr, borderClr);
      hoverChangeBtnRevealClr = new Animate(lbReveal, yoyoFalse, repeatFalse, .5);
      hcbrc = hoverChangeBtnRevealClr.changeBackgroundFontBorderColor(backgroundClr, fontClr, borderClr);

      // show a blured content page // show on click
      contentPageBlured = new Animate(loadingPageContainer, yoyoFalse, repeatFalse, .5);
      cpb = contentPageBlured.blurLoadingPageBackground(contentPageContainer,7);
      
      loadingPageSetDisplay = new Animate(loadingPageContainer, yoyoFalse, repeatFalse, 1);
      lpsd = loadingPageSetDisplay.backDropFilterBlur(unset, "ad");
      lpsd = loadingPageSetDisplay.alternateDisplay(contentPageContainer, loadingPageContainer);


    //#endregion
    
    tl
      // loading  
      .add( lca  , "load0" )
      .add( lsa  , "load0" )
      .add( lssd , "load0" )
      .add( lspa , "load1" )
      .add( bra  , "load1" )
      .add( lsd  , ">" ) 
      // end of loading 
      // greetings
      .call(setGreetText, [greet__1], "greet1")
      .add( sgd__1  , "greet1") 
      .call(setGreetText, [greet__2], "greet2")
      .add( sgd__2  , "greet2") 
      .call(setGreetText, [greet__3], "greet3")
      .add( sgd__3  , "greet3") 
       // end of greetings 
      .add( lbsd , "showButtons")

    // event listeners
    onEventAnimationHandler(hover, lbTakeAPeak, hcbpc );
    onEventAnimationHandler(hover, lbReveal   , hcbrc );
    onEventAnimationHandler(click, lbTakeAPeak, cpb );
    onEventAnimationHandler(click, lbReveal   , lpsd );

    tl.play();
  }

  const onEventAnimationHandler = (event, target, tween) => {
    if(event == "hover") {
      target.addEventListener("mouseenter", (e) => {
        if(tween == null){
          return;
        }
        e.preventDefault();
        tween.play();
      })
      target.addEventListener("mouseleave", (e) => {
        if(tween == null){
          return;
        }
        e.preventDefault();
        tween.reverse();
      })
    }
    else if( event == "click") {
      target.addEventListener("click", (e) => {
        // return if null
        if(tween == null){
          return;
        }
        e.preventDefault();
        target.classList.toggle("active__onClick");
        tween.reversed(true);

        if(target.classList.contains("active__onClick")){
          // take a peak btn onclick
          if(target.classList.contains("takeAPeak")){
            tween.reversed() ? tween.play() : tween.reverse();
          }
          // reveal btn onclick
          if(target.classList.contains("reveal")){
            tween.play();
          }
        }else{}
      })
    }else{}
  }

  const setGreetText = (value) => {
    // greet animation
    let greet = value;
    greetCont.innerHTML = greet;
    
  }

    return(
        pageAnimations()
    );
  }

export default loadingPageAnimations;