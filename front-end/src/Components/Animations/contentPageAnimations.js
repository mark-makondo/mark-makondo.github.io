import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

// note: instead of querySelectorAll, gsap.utils.toArray is used for ie9 support for using foreach
const contentPageAnimations = () => { 
  // master timeline animation constructor
  class Animate{
    constructor(selector){
      this.element = selector;
      // used for returning inidividual animations
      this.master = gsap.timeline({paused:true, reversed:true, defaults:{
        duration:.3
      }});
    }

    fillAnimateByOffset(el, offset){
      this.master.fromTo(el,{ attr: { offset: offset } }, {
        attr: { offset: "100%" },
        duration: .5,
        ease: "none",
      })

      return this.master;
    }

    heightShrink(el) {
  
      this.master.fromTo(el, { height: 0 },{
        height: "auto", 
        ease: "power1.out",
        overwrite: "auto"
      });
  
      return this.master;
    }

    moveDown(el, yPercent){
      this.master.fromTo(el, { yPercent: yPercent, autoAlpha: 0}, {
          duration: 1,
          yPercent: 0,
          stagger: .5,
          autoAlpha: 1,
          ease: "power4.out",
          overwrite: "auto",
        })

      return this.master;
    }

    rotateSymbol(el, rotate){
      this.master.fromTo(el, {rotate: 0}, {
        rotate:rotate,
        ease: "power1.out",
        overwrite: "auto"
      })
    
      return this.master;
    }

    setDisplay(el, disp){
      this.master
        .fromTo(el, { display: "none", autoAlpha: 0 },{
          display: disp, 
          autoAlpha:1,
        })

      return this.master;
    }

    changeColor(el, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor){
      this.master.fromTo(el, {background:fromBgColor ,color: fromColor, borderColor: fromborderColor}, {
        background: toBgColor,
        color: toColor,
        borderColor: toborderColor,
        overwrite: "auto",
      })
    
      return this.master;
    }

    lineWidthChangeTo(el, widthFrom, widthTo, disp){
      this.master.fromTo(el, {width: widthFrom, display: "none", autoAlpha: 0}, {
        duration: 1,
        autoAlpha: 1,
        width: widthTo,
        stagger: .1,
        display: disp,
        overwrite: "auto",
        ease: "bounce.inOut"
      })

      return this.master;
    }

    moveDownLineExpand(btnPos, btnCont, page, body, yPercent,  widthFrom, widthTo, lineDisp, bodyDisp){
      this.master
        .add(this.heightShrink(page), 0)
        .add(this.lineWidthChangeTo(btnCont, widthFrom, widthTo, lineDisp), "same")
        // .add(this.setDisplay(body, bodyDisp), "same")
        .add(this.moveDown(btnPos, yPercent), "same")
     
      
      return this.master;
    }

    changeColorAndLineWidth(
      btn, line, body, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, widthFrom, widthTo, disp, lineDisp
    ){
      this.master
        .add(this.changeColor(btn, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor),0) 
        .add(this.lineWidthChangeTo(line, widthFrom, widthTo, lineDisp), 0)
        .add(this.setDisplay(body, disp),0)
      
      return this.master;
    }

    changeColorAndRotate = (btn, symb, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor, rotate) => {
      this.master
        .add(this.changeColor(btn, fromBgColor ,fromColor, fromborderColor,toColor, toBgColor, toborderColor), 0) 
        .add(this.rotateSymbol(symb, rotate), 0)

      return this.master;
    }

    fillAnimateTimeline(el1, el2, el3, el4, el5, offset1, offset2, offset3, offset4, offset5){
      this.master
        .add(this.fillAnimateByOffset(el1, offset1), "b1")
        .add(this.fillAnimateByOffset(el2, offset2), "b2")
        .add(this.fillAnimateByOffset(el3, offset3), "b3")
        .add(this.fillAnimateByOffset(el4, offset4), "b4")
        .add(this.fillAnimateByOffset(el5, offset5), "b5")

      return this.master;
    }
  }

  //#region Global Variables
    // variables queries
    let startButton = document.querySelector(".btn__getStarted"),
        startButton_a = document.querySelector(".btn__getStarted a"),
        startButton_Symbol = document.querySelector(".btn__arrow"),

        pageTrigger =  document.querySelector(".trigger-container"),
        pageCont = document.querySelector(".page__bgCont"),

        sectionLists = document.querySelectorAll(".sect-select"),
        buttonCont = document.querySelectorAll(".btn__container"),

        buttonPos = document.querySelectorAll(".btn__position"),
        sectionAboutBtn = document.querySelector("#aboutTwo"),
        sectionSkillBtn = document.querySelector("#skills"),
        sectionProjectBtn = document.querySelector("#projects"),

        customHr = document.querySelectorAll(".custom-hr"),
        sectionAboutHr = document.querySelector("#hr__aboutTwo"),
        sectionSkillHr = document.querySelector("#hr__skills"),
        sectionProjectHr = document.querySelector("#hr__projects"),

        bodyContents = document.querySelectorAll(".bodyC"),
        bodyContInside = document.querySelectorAll(".g-body-cont"),
        sectionAbout= document.querySelector(".body__aboutTwo"),
        sectionSkill = document.querySelector(".body__skills"),
        sectionProject = document.querySelector(".body__projects");


    // variables non queries
    let aboutTwo = "body__aboutTwo__container", 
        skills = "body__skills__container",
        projects = "body__projects__container";

    // contants used in animation
    let unset = "unset",

        white = "white",
        black = "black",
        lightRed = "rgb(252, 72, 72)",
        lightRed2 = "#a55555",
       
        rotate = "90",
        yPercent = -50,

        fromWidth = "11%",
        fromLineWidth = "0",
        toWidth = "100%",
        toLineWidth = "40vw",

        block = "block",
        flex = "flex";

  //#endregion

  // functions - event listeners
  const onClickHoverHandler = () => {

    // #region event listener for get started button
    // get started button
    let buttonAnimate = new Animate()
    let ba_animate = buttonAnimate.changeColorAndRotate( 
      startButton, startButton_Symbol, black, white, white, black, lightRed, lightRed, rotate
    );
    
    // page sections animations
    let pageAnimate = new Animate()
    let pa_pageContAnimate = pageAnimate.moveDownLineExpand(
      buttonPos, buttonCont, pageTrigger, bodyContInside, yPercent, fromWidth, toWidth, flex, block
    );

    pageAnimate.master.paused(true);
    pageAnimate.master.reversed(false);

    // hover enter
    startButton.addEventListener("mouseenter", (e) => {
      e.preventDefault();

      ba_animate.play();
    })
    // hover leave
    startButton.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      
      ba_animate.reverse();
    })
    // on click
    startButton.addEventListener("click", (e) => {
      e.preventDefault();
      
      // add active class
      startButton.classList.toggle("active__onClick");
      startButton_Symbol.classList.toggle("active__getStarted__symbol");

      if(startButton.classList.contains("active__onClick")){
        pageTrigger.id = 'page'
        startButton_a.setAttribute("href", "#page")

        pa_pageContAnimate.play()

      }else{
        pageTrigger.removeAttribute('id');
        startButton_a.setAttribute("href", "#getStarted")
        // reverse page
        pa_pageContAnimate.reverse()
        // reverse inside if some of them is clicked
        gsap.utils.toArray(".sect-select").forEach(item => {
      
          if(item.classList.contains(aboutTwo) && item.classList.contains("clicked")){
            item.click();
          }
          if(item.classList.contains(skills) && item.classList.contains("clicked")){
            item.click();
          }
          if(item.classList.contains(projects) && item.classList.contains("clicked")){
            item.click();
          }
        })
      }
      gsap.to(window, {duration: 1, scrollTo: startButton_a.getAttribute("href")});
    })

    // #endregion

    // #region event listener for button containers
    gsap.utils.toArray(".sect-select").forEach(item => {
      // declaration
      let targetBody = item.querySelectorAll(".bodyC"),
          targetHr = item.querySelectorAll(".custom-hr"),
          targetBtn = item.querySelectorAll(".btn__position");

      // animation
      let buttonAnimate = new Animate();
      let ba_animate = buttonAnimate.changeColorAndLineWidth(
        targetBtn, targetHr,targetBody, 
        lightRed2, white, unset, black, lightRed, lightRed, fromLineWidth, toLineWidth, unset, unset
      );
     
      let skillAnimate = skillsAnimateFunction();

      // on click
      item.addEventListener("click", (e) => {
        e.preventDefault();

        item.classList.toggle("clicked");

        if(item.classList.contains(aboutTwo)){
          sectionAbout.classList.toggle("clicked");
        }
        if(item.classList.contains(skills)){
          sectionSkill.classList.toggle("clicked");

          skillAnimate.reversed() ? skillAnimate.play() : skillAnimate.reverse();
        }

        if(item.classList.contains(projects)){
          sectionProject.classList.toggle("clicked");
        }
        
        ba_animate.reversed() ? ba_animate.play() : ba_animate.reverse();
      })

    })
    // #endregion

  }

  // section three skills animation
  const skillsAnimateFunction = () => {
    let boxOne    = document.querySelectorAll("#theGradientRect01 stop"),
        boxTwo    = document.querySelectorAll("#theGradientRect02 stop"),
        boxThree  = document.querySelectorAll("#theGradientRect03 stop"),
        boxFour   = document.querySelectorAll("#theGradientRect04 stop"),
        boxFive   = document.querySelectorAll("#theGradientRect05 stop");

    let boxOne__perc    = "40%",
        boxTwo__perc    = "20%",
        boxThree__perc  = "40%",
        boxFour__perc   = "10%",
        boxFive__perc   = "70%";

    let fillAnimate = new Animate();
    let fill = fillAnimate.fillAnimateTimeline(
      boxOne, boxTwo, boxThree, boxFour, boxFive, boxOne__perc, boxTwo__perc, boxThree__perc, boxFour__perc, boxFive__perc
    )

    fillAnimate.master.paused(false);
    fillAnimate.master.reversed(false);

   return fill;
  }

  const allContentPageAnimations = () =>{
    onClickHoverHandler();
  }

  return(
    allContentPageAnimations()
  );

}

export default contentPageAnimations;